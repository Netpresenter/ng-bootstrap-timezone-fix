import { afterRender, AfterRenderPhase, ChangeDetectorRef, Directive, ElementRef, EventEmitter, forwardRef, inject, Injector, Input, NgZone, Output, ViewContainerRef, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, } from '@angular/forms';
import { ngbAutoClose } from '../util/autoclose';
import { ngbFocusTrap } from '../util/focus-trap';
import { ngbPositioning } from '../util/positioning';
import { NgbDateAdapter } from './adapters/ngb-date-adapter';
import { NgbDatepicker } from './datepicker';
import { NgbCalendar } from './ngb-calendar';
import { NgbDate } from './ngb-date';
import { NgbDateParserFormatter } from './ngb-date-parser-formatter';
import { NgbInputDatepickerConfig } from './datepicker-input-config';
import { NgbDatepickerConfig } from './datepicker-config';
import { isString } from '../util/util';
import { Subject } from 'rxjs';
import { addPopperOffset } from '../util/positioning-util';
import * as i0 from "@angular/core";
/**
 * A directive that allows to stick a datepicker popup to an input field.
 *
 * Manages interaction with the input field itself, does value formatting and provides forms integration.
 */
export class NgbInputDatepicker {
    constructor() {
        this._parserFormatter = inject(NgbDateParserFormatter);
        this._elRef = inject((ElementRef));
        this._vcRef = inject(ViewContainerRef);
        this._ngZone = inject(NgZone);
        this._calendar = inject(NgbCalendar);
        this._dateAdapter = inject((NgbDateAdapter));
        this._document = inject(DOCUMENT);
        this._changeDetector = inject(ChangeDetectorRef);
        this._injector = inject(Injector);
        this._config = inject(NgbInputDatepickerConfig);
        this._cRef = null;
        this._disabled = false;
        this._elWithFocus = null;
        this._model = null;
        this._positioning = ngbPositioning();
        this._destroyCloseHandlers$ = new Subject();
        /**
         * Indicates whether the datepicker popup should be closed automatically after date selection / outside click or not.
         *
         * * `true` - the popup will close on both date selection and outside click.
         * * `false` - the popup can only be closed manually via `close()` or `toggle()` methods.
         * * `"inside"` - the popup will close on date selection, but not outside clicks.
         * * `"outside"` - the popup will close only on the outside click and not on date selection/inside clicks.
         *
         * @since 3.0.0
         */
        this.autoClose = this._config.autoClose;
        /**
         * The preferred placement of the datepicker popup, among the [possible values](#/guides/positioning#api).
         *
         * The default order of preference is `"bottom-start bottom-end top-start top-end"`
         *
         * Please see the [positioning overview](#/positioning) for more details.
         */
        this.placement = this._config.placement;
        /**
         * Allows to change default Popper options when positioning the popup.
         * Receives current popper options and returns modified ones.
         *
         * @since 13.1.0
         */
        this.popperOptions = this._config.popperOptions;
        /**
         * A selector specifying the element the datepicker popup should be appended to.
         *
         * Currently only supports `"body"`.
         */
        this.container = this._config.container;
        /**
         * A css selector or html element specifying the element the datepicker popup should be positioned against.
         *
         * By default the input is used as a target.
         *
         * @since 4.2.0
         */
        this.positionTarget = this._config.positionTarget;
        /**
         * An event emitted when user selects a date using keyboard or mouse.
         *
         * The payload of the event is currently selected `NgbDate`.
         *
         * @since 1.1.1
         */
        this.dateSelect = new EventEmitter();
        /**
         * Event emitted right after the navigation happens and displayed month changes.
         *
         * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
         */
        this.navigate = new EventEmitter();
        /**
         * An event fired after closing datepicker window.
         *
         * @since 4.2.0
         */
        this.closed = new EventEmitter();
        this._onChange = (_) => { };
        this._onTouched = () => { };
        this._validatorChange = () => { };
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value === '' || (value && value !== 'false');
        if (this.isOpen()) {
            this._cRef.instance.setDisabledState(this._disabled);
        }
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    registerOnValidatorChange(fn) {
        this._validatorChange = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    validate(c) {
        const { value } = c;
        if (value != null) {
            const ngbDate = this._fromDateStruct(this._dateAdapter.fromModel(value));
            if (!ngbDate) {
                return { ngbDate: { invalid: value } };
            }
            if (this.minDate && ngbDate.before(NgbDate.from(this.minDate))) {
                return { ngbDate: { minDate: { minDate: this.minDate, actual: value } } };
            }
            if (this.maxDate && ngbDate.after(NgbDate.from(this.maxDate))) {
                return { ngbDate: { maxDate: { maxDate: this.maxDate, actual: value } } };
            }
        }
        return null;
    }
    writeValue(value) {
        this._model = this._fromDateStruct(this._dateAdapter.fromModel(value));
        this._writeModelValue(this._model);
    }
    manualDateChange(value, updateView = false) {
        const inputValueChanged = value !== this._inputValue;
        if (inputValueChanged) {
            this._inputValue = value;
            this._model = this._fromDateStruct(this._parserFormatter.parse(value));
        }
        if (inputValueChanged || !updateView) {
            this._onChange(this._model ? this._dateAdapter.toModel(this._model) : value === '' ? null : value);
        }
        if (updateView && this._model) {
            this._writeModelValue(this._model);
        }
    }
    isOpen() {
        return !!this._cRef;
    }
    /**
     * Opens the datepicker popup.
     *
     * If the related form control contains a valid date, the corresponding month will be opened.
     */
    open() {
        if (!this.isOpen()) {
            this._cRef = this._vcRef.createComponent(NgbDatepicker);
            this._applyPopupStyling(this._cRef.location.nativeElement);
            this._applyDatepickerInputs(this._cRef);
            this._subscribeForDatepickerOutputs(this._cRef.instance);
            this._cRef.instance.ngOnInit();
            this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model));
            // date selection event handling
            this._cRef.instance.registerOnChange((selectedDate) => {
                this.writeValue(selectedDate);
                this._onChange(selectedDate);
                this._onTouched();
            });
            this._cRef.changeDetectorRef.detectChanges();
            this._cRef.instance.setDisabledState(this.disabled);
            if (this.container === 'body') {
                this._document.querySelector(this.container)?.appendChild(this._cRef.location.nativeElement);
            }
            // focus handling
            this._elWithFocus = this._document.activeElement;
            ngbFocusTrap(this._ngZone, this._cRef.location.nativeElement, this.closed, true);
            setTimeout(() => this._cRef?.instance.focus());
            let hostElement;
            if (isString(this.positionTarget)) {
                hostElement = this._document.querySelector(this.positionTarget);
            }
            else if (this.positionTarget instanceof HTMLElement) {
                hostElement = this.positionTarget;
            }
            else {
                hostElement = this._elRef.nativeElement;
            }
            if (this.positionTarget && !hostElement) {
                throw new Error('ngbDatepicker could not find element declared in [positionTarget] to position against.');
            }
            // Setting up popper and scheduling updates when zone is stable
            this._ngZone.runOutsideAngular(() => {
                if (this._cRef && hostElement) {
                    this._positioning.createPopper({
                        hostElement,
                        targetElement: this._cRef.location.nativeElement,
                        placement: this.placement,
                        updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 2])(options)),
                    });
                    this._afterRenderRef = afterRender(() => {
                        this._positioning.update();
                    }, { phase: AfterRenderPhase.MixedReadWrite, injector: this._injector });
                }
            });
            this._setCloseHandlers();
        }
    }
    /**
     * Closes the datepicker popup.
     */
    close() {
        if (this.isOpen()) {
            this._cRef?.destroy();
            this._cRef = null;
            this._positioning.destroy();
            this._afterRenderRef?.destroy();
            this._destroyCloseHandlers$.next();
            this.closed.emit();
            this._changeDetector.markForCheck();
            // restore focus
            let elementToFocus = this._elWithFocus;
            if (isString(this.restoreFocus)) {
                elementToFocus = this._document.querySelector(this.restoreFocus);
            }
            else if (this.restoreFocus !== undefined) {
                elementToFocus = this.restoreFocus;
            }
            // in IE document.activeElement can contain an object without 'focus()' sometimes
            if (elementToFocus && elementToFocus['focus']) {
                elementToFocus.focus();
            }
            else {
                this._document.body.focus();
            }
        }
    }
    /**
     * Toggles the datepicker popup.
     */
    toggle() {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * Navigates to the provided date.
     *
     * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     *
     * Use the `[startDate]` input as an alternative.
     */
    navigateTo(date) {
        if (this.isOpen()) {
            this._cRef.instance.navigateTo(date);
        }
    }
    onBlur() {
        this._onTouched();
    }
    onFocus() {
        this._elWithFocus = this._elRef.nativeElement;
    }
    ngOnChanges(changes) {
        if (changes['minDate'] || changes['maxDate']) {
            this._validatorChange();
            if (this.isOpen()) {
                if (changes['minDate']) {
                    this._cRef.setInput('minDate', this.minDate);
                }
                if (changes['maxDate']) {
                    this._cRef.setInput('maxDate', this.maxDate);
                }
            }
        }
        if (changes['datepickerClass']) {
            const { currentValue, previousValue } = changes['datepickerClass'];
            this._applyPopupClass(currentValue, previousValue);
        }
        if (changes['autoClose'] && this.isOpen()) {
            this._setCloseHandlers();
        }
    }
    ngOnDestroy() {
        this.close();
    }
    _applyDatepickerInputs(datepickerComponentRef) {
        [
            'contentTemplate',
            'dayTemplate',
            'dayTemplateData',
            'displayMonths',
            'firstDayOfWeek',
            'footerTemplate',
            'markDisabled',
            'minDate',
            'maxDate',
            'navigation',
            'outsideDays',
            'showNavigation',
            'showWeekNumbers',
            'weekdays',
        ].forEach((inputName) => {
            if (this[inputName] !== undefined) {
                datepickerComponentRef.setInput(inputName, this[inputName]);
            }
        });
        datepickerComponentRef.setInput('startDate', this.startDate || this._model);
    }
    _applyPopupClass(newClass, oldClass) {
        const popupEl = this._cRef?.location.nativeElement;
        if (popupEl) {
            if (newClass) {
                popupEl.classList.add(newClass);
            }
            if (oldClass) {
                popupEl.classList.remove(oldClass);
            }
        }
    }
    _applyPopupStyling(nativeElement) {
        nativeElement.classList.add('dropdown-menu', 'show');
        if (this.container === 'body') {
            nativeElement.classList.add('ngb-dp-body');
        }
        this._applyPopupClass(this.datepickerClass);
    }
    _subscribeForDatepickerOutputs(datepickerInstance) {
        datepickerInstance.navigate.subscribe((navigateEvent) => this.navigate.emit(navigateEvent));
        datepickerInstance.dateSelect.subscribe((date) => {
            this.dateSelect.emit(date);
            if (this.autoClose === true || this.autoClose === 'inside') {
                this.close();
            }
        });
    }
    _writeModelValue(model) {
        const value = this._parserFormatter.format(model);
        this._inputValue = value;
        this._elRef.nativeElement.value = value;
        if (this.isOpen()) {
            this._cRef.instance.writeValue(this._dateAdapter.toModel(model));
            this._onTouched();
        }
    }
    _fromDateStruct(date) {
        const ngbDate = date ? new NgbDate(date.year, date.month, date.day) : null;
        return this._calendar.isValid(ngbDate) ? ngbDate : null;
    }
    _setCloseHandlers() {
        this._destroyCloseHandlers$.next();
        ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this._destroyCloseHandlers$, [], [this._elRef.nativeElement, this._cRef.location.nativeElement]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbInputDatepicker, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.2", type: NgbInputDatepicker, isStandalone: true, selector: "input[ngbDatepicker]", inputs: { autoClose: "autoClose", contentTemplate: "contentTemplate", datepickerClass: "datepickerClass", dayTemplate: "dayTemplate", dayTemplateData: "dayTemplateData", displayMonths: "displayMonths", firstDayOfWeek: "firstDayOfWeek", footerTemplate: "footerTemplate", markDisabled: "markDisabled", minDate: "minDate", maxDate: "maxDate", navigation: "navigation", outsideDays: "outsideDays", placement: "placement", popperOptions: "popperOptions", restoreFocus: "restoreFocus", showWeekNumbers: "showWeekNumbers", startDate: "startDate", container: "container", positionTarget: "positionTarget", weekdays: "weekdays", disabled: "disabled" }, outputs: { dateSelect: "dateSelect", navigate: "navigate", closed: "closed" }, host: { listeners: { "input": "manualDateChange($event.target.value)", "change": "manualDateChange($event.target.value, true)", "focus": "onFocus()", "blur": "onBlur()" }, properties: { "disabled": "disabled" } }, providers: [
            { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbInputDatepicker), multi: true },
            { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgbInputDatepicker), multi: true },
            { provide: NgbDatepickerConfig, useExisting: NgbInputDatepickerConfig },
        ], exportAs: ["ngbDatepicker"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbInputDatepicker, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[ngbDatepicker]',
                    exportAs: 'ngbDatepicker',
                    standalone: true,
                    host: {
                        '(input)': 'manualDateChange($event.target.value)',
                        '(change)': 'manualDateChange($event.target.value, true)',
                        '(focus)': 'onFocus()',
                        '(blur)': 'onBlur()',
                        '[disabled]': 'disabled',
                    },
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbInputDatepicker), multi: true },
                        { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgbInputDatepicker), multi: true },
                        { provide: NgbDatepickerConfig, useExisting: NgbInputDatepickerConfig },
                    ],
                }]
        }], propDecorators: { autoClose: [{
                type: Input
            }], contentTemplate: [{
                type: Input
            }], datepickerClass: [{
                type: Input
            }], dayTemplate: [{
                type: Input
            }], dayTemplateData: [{
                type: Input
            }], displayMonths: [{
                type: Input
            }], firstDayOfWeek: [{
                type: Input
            }], footerTemplate: [{
                type: Input
            }], markDisabled: [{
                type: Input
            }], minDate: [{
                type: Input
            }], maxDate: [{
                type: Input
            }], navigation: [{
                type: Input
            }], outsideDays: [{
                type: Input
            }], placement: [{
                type: Input
            }], popperOptions: [{
                type: Input
            }], restoreFocus: [{
                type: Input
            }], showWeekNumbers: [{
                type: Input
            }], startDate: [{
                type: Input
            }], container: [{
                type: Input
            }], positionTarget: [{
                type: Input
            }], weekdays: [{
                type: Input
            }], dateSelect: [{
                type: Output
            }], navigate: [{
                type: Output
            }], closed: [{
                type: Output
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRlcGlja2VyL2RhdGVwaWNrZXItaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLFdBQVcsRUFDWCxnQkFBZ0IsRUFFaEIsaUJBQWlCLEVBRWpCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUdOLGdCQUFnQixHQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUdOLGFBQWEsRUFDYixpQkFBaUIsR0FHakIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxjQUFjLENBQUM7QUFFekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUs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QU07c0JBQWYsTUFBTTtnQkFHSCxRQUFRO3NCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRhZnRlclJlbmRlcixcblx0QWZ0ZXJSZW5kZXJQaGFzZSxcblx0QWZ0ZXJSZW5kZXJSZWYsXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnRSZWYsXG5cdERpcmVjdGl2ZSxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRmb3J3YXJkUmVmLFxuXHRpbmplY3QsXG5cdEluamVjdG9yLFxuXHRJbnB1dCxcblx0Tmdab25lLFxuXHRPbkNoYW5nZXMsXG5cdE9uRGVzdHJveSxcblx0T3V0cHV0LFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuXHRBYnN0cmFjdENvbnRyb2wsXG5cdENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuXHROR19WQUxJREFUT1JTLFxuXHROR19WQUxVRV9BQ0NFU1NPUixcblx0VmFsaWRhdGlvbkVycm9ycyxcblx0VmFsaWRhdG9yLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IG5nYkF1dG9DbG9zZSB9IGZyb20gJy4uL3V0aWwvYXV0b2Nsb3NlJztcbmltcG9ydCB7IG5nYkZvY3VzVHJhcCB9IGZyb20gJy4uL3V0aWwvZm9jdXMtdHJhcCc7XG5pbXBvcnQgeyBuZ2JQb3NpdGlvbmluZyB9IGZyb20gJy4uL3V0aWwvcG9zaXRpb25pbmcnO1xuXG5pbXBvcnQgeyBOZ2JEYXRlQWRhcHRlciB9IGZyb20gJy4vYWRhcHRlcnMvbmdiLWRhdGUtYWRhcHRlcic7XG5pbXBvcnQgeyBOZ2JEYXRlcGlja2VyLCBOZ2JEYXRlcGlja2VyTmF2aWdhdGVFdmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBEYXlUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuL2RhdGVwaWNrZXItZGF5LXRlbXBsYXRlLWNvbnRleHQnO1xuaW1wb3J0IHsgTmdiQ2FsZW5kYXIgfSBmcm9tICcuL25nYi1jYWxlbmRhcic7XG5pbXBvcnQgeyBOZ2JEYXRlIH0gZnJvbSAnLi9uZ2ItZGF0ZSc7XG5pbXBvcnQgeyBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyIH0gZnJvbSAnLi9uZ2ItZGF0ZS1wYXJzZXItZm9ybWF0dGVyJztcbmltcG9ydCB7IE5nYkRhdGVTdHJ1Y3QgfSBmcm9tICcuL25nYi1kYXRlLXN0cnVjdCc7XG5pbXBvcnQgeyBOZ2JJbnB1dERhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5wdXQtY29uZmlnJztcbmltcG9ydCB7IE5nYkRhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGVwaWNrZXItY29uZmlnJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGFkZFBvcHBlck9mZnNldCB9IGZyb20gJy4uL3V0aWwvcG9zaXRpb25pbmctdXRpbCc7XG5pbXBvcnQgeyBDb250ZW50VGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi9kYXRlcGlja2VyLWNvbnRlbnQtdGVtcGxhdGUtY29udGV4dCc7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBhbGxvd3MgdG8gc3RpY2sgYSBkYXRlcGlja2VyIHBvcHVwIHRvIGFuIGlucHV0IGZpZWxkLlxuICpcbiAqIE1hbmFnZXMgaW50ZXJhY3Rpb24gd2l0aCB0aGUgaW5wdXQgZmllbGQgaXRzZWxmLCBkb2VzIHZhbHVlIGZvcm1hdHRpbmcgYW5kIHByb3ZpZGVzIGZvcm1zIGludGVncmF0aW9uLlxuICovXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdpbnB1dFtuZ2JEYXRlcGlja2VyXScsXG5cdGV4cG9ydEFzOiAnbmdiRGF0ZXBpY2tlcicsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGhvc3Q6IHtcblx0XHQnKGlucHV0KSc6ICdtYW51YWxEYXRlQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJyxcblx0XHQnKGNoYW5nZSknOiAnbWFudWFsRGF0ZUNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlLCB0cnVlKScsXG5cdFx0Jyhmb2N1cyknOiAnb25Gb2N1cygpJyxcblx0XHQnKGJsdXIpJzogJ29uQmx1cigpJyxcblx0XHQnW2Rpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG5cdH0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nYklucHV0RGF0ZXBpY2tlciksIG11bHRpOiB0cnVlIH0sXG5cdFx0eyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ2JJbnB1dERhdGVwaWNrZXIpLCBtdWx0aTogdHJ1ZSB9LFxuXHRcdHsgcHJvdmlkZTogTmdiRGF0ZXBpY2tlckNvbmZpZywgdXNlRXhpc3Rpbmc6IE5nYklucHV0RGF0ZXBpY2tlckNvbmZpZyB9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2JJbnB1dERhdGVwaWNrZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG5cdHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hdXRvQ2xvc2U6IGJvb2xlYW4gfCBzdHJpbmc7XG5cdHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogYm9vbGVhbiB8ICcnO1xuXHRzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbmF2aWdhdGlvbjogc3RyaW5nO1xuXHRzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfb3V0c2lkZURheXM6IHN0cmluZztcblx0c3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3dlZWtkYXlzOiBib29sZWFuIHwgc3RyaW5nO1xuXG5cdHByaXZhdGUgX3BhcnNlckZvcm1hdHRlciA9IGluamVjdChOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyKTtcblx0cHJpdmF0ZSBfZWxSZWYgPSBpbmplY3QoRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50Pik7XG5cdHByaXZhdGUgX3ZjUmVmID0gaW5qZWN0KFZpZXdDb250YWluZXJSZWYpO1xuXHRwcml2YXRlIF9uZ1pvbmUgPSBpbmplY3QoTmdab25lKTtcblx0cHJpdmF0ZSBfY2FsZW5kYXIgPSBpbmplY3QoTmdiQ2FsZW5kYXIpO1xuXHRwcml2YXRlIF9kYXRlQWRhcHRlciA9IGluamVjdChOZ2JEYXRlQWRhcHRlcjxhbnk+KTtcblx0cHJpdmF0ZSBfZG9jdW1lbnQgPSBpbmplY3QoRE9DVU1FTlQpO1xuXHRwcml2YXRlIF9jaGFuZ2VEZXRlY3RvciA9IGluamVjdChDaGFuZ2VEZXRlY3RvclJlZik7XG5cdHByaXZhdGUgX2luamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcblx0cHJpdmF0ZSBfY29uZmlnID0gaW5qZWN0KE5nYklucHV0RGF0ZXBpY2tlckNvbmZpZyk7XG5cblx0cHJpdmF0ZSBfY1JlZjogQ29tcG9uZW50UmVmPE5nYkRhdGVwaWNrZXI+IHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cdHByaXZhdGUgX2VsV2l0aEZvY3VzOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF9tb2RlbDogTmdiRGF0ZSB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIF9pbnB1dFZhbHVlOiBzdHJpbmc7XG5cdHByaXZhdGUgX2FmdGVyUmVuZGVyUmVmOiBBZnRlclJlbmRlclJlZiB8IHVuZGVmaW5lZDtcblx0cHJpdmF0ZSBfcG9zaXRpb25pbmcgPSBuZ2JQb3NpdGlvbmluZygpO1xuXHRwcml2YXRlIF9kZXN0cm95Q2xvc2VIYW5kbGVycyQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG5cdC8qKlxuXHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZGF0ZXBpY2tlciBwb3B1cCBzaG91bGQgYmUgY2xvc2VkIGF1dG9tYXRpY2FsbHkgYWZ0ZXIgZGF0ZSBzZWxlY3Rpb24gLyBvdXRzaWRlIGNsaWNrIG9yIG5vdC5cblx0ICpcblx0ICogKiBgdHJ1ZWAgLSB0aGUgcG9wdXAgd2lsbCBjbG9zZSBvbiBib3RoIGRhdGUgc2VsZWN0aW9uIGFuZCBvdXRzaWRlIGNsaWNrLlxuXHQgKiAqIGBmYWxzZWAgLSB0aGUgcG9wdXAgY2FuIG9ubHkgYmUgY2xvc2VkIG1hbnVhbGx5IHZpYSBgY2xvc2UoKWAgb3IgYHRvZ2dsZSgpYCBtZXRob2RzLlxuXHQgKiAqIGBcImluc2lkZVwiYCAtIHRoZSBwb3B1cCB3aWxsIGNsb3NlIG9uIGRhdGUgc2VsZWN0aW9uLCBidXQgbm90IG91dHNpZGUgY2xpY2tzLlxuXHQgKiAqIGBcIm91dHNpZGVcImAgLSB0aGUgcG9wdXAgd2lsbCBjbG9zZSBvbmx5IG9uIHRoZSBvdXRzaWRlIGNsaWNrIGFuZCBub3Qgb24gZGF0ZSBzZWxlY3Rpb24vaW5zaWRlIGNsaWNrcy5cblx0ICpcblx0ICogQHNpbmNlIDMuMC4wXG5cdCAqL1xuXHRASW5wdXQoKSBhdXRvQ2xvc2UgPSB0aGlzLl9jb25maWcuYXV0b0Nsb3NlO1xuXG5cdC8qKlxuXHQgKiBUaGUgcmVmZXJlbmNlIHRvIGEgY3VzdG9tIGNvbnRlbnQgdGVtcGxhdGUuXG5cdCAqXG5cdCAqIEFsbG93cyB0byBjb21wbGV0ZWx5IG92ZXJyaWRlIHRoZSB3YXkgZGF0ZXBpY2tlci5cblx0ICpcblx0ICogU2VlIFtgTmdiRGF0ZXBpY2tlckNvbnRlbnRgXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9hcGkjTmdiRGF0ZXBpY2tlckNvbnRlbnQpIGZvciBtb3JlIGRldGFpbHMuXG5cdCAqXG5cdCAqIEBzaW5jZSAxNC4yLjBcblx0ICovXG5cdEBJbnB1dCgpIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8Q29udGVudFRlbXBsYXRlQ29udGV4dD47XG5cblx0LyoqXG5cdCAqIEFuIG9wdGlvbmFsIGNsYXNzIGFwcGxpZWQgdG8gdGhlIGRhdGVwaWNrZXIgcG9wdXAgZWxlbWVudC5cblx0ICpcblx0ICogQHNpbmNlIDkuMS4wXG5cdCAqL1xuXHRASW5wdXQoKSBkYXRlcGlja2VyQ2xhc3M6IHN0cmluZztcblxuXHQvKipcblx0ICogVGhlIHJlZmVyZW5jZSB0byBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgdGhlIGRheS5cblx0ICpcblx0ICogQWxsb3dzIHRvIGNvbXBsZXRlbHkgb3ZlcnJpZGUgdGhlIHdheSBhIGRheSAnY2VsbCcgaW4gdGhlIGNhbGVuZGFyIGlzIGRpc3BsYXllZC5cblx0ICpcblx0ICogU2VlIFtgRGF5VGVtcGxhdGVDb250ZXh0YF0oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvYXBpI0RheVRlbXBsYXRlQ29udGV4dCkgZm9yIHRoZSBkYXRhIHlvdSBnZXQgaW5zaWRlLlxuXHQgKi9cblx0QElucHV0KCkgZGF5VGVtcGxhdGU6IFRlbXBsYXRlUmVmPERheVRlbXBsYXRlQ29udGV4dD47XG5cblx0LyoqXG5cdCAqIFRoZSBjYWxsYmFjayB0byBwYXNzIGFueSBhcmJpdHJhcnkgZGF0YSB0byB0aGUgdGVtcGxhdGUgY2VsbCB2aWEgdGhlXG5cdCAqIFtgRGF5VGVtcGxhdGVDb250ZXh0YF0oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvYXBpI0RheVRlbXBsYXRlQ29udGV4dCkncyBgZGF0YWAgcGFyYW1ldGVyLlxuXHQgKlxuXHQgKiBgY3VycmVudGAgaXMgdGhlIG1vbnRoIHRoYXQgaXMgY3VycmVudGx5IGRpc3BsYXllZCBieSB0aGUgZGF0ZXBpY2tlci5cblx0ICpcblx0ICogQHNpbmNlIDMuMy4wXG5cdCAqL1xuXHRASW5wdXQoKSBkYXlUZW1wbGF0ZURhdGE6IChkYXRlOiBOZ2JEYXRlLCBjdXJyZW50PzogeyB5ZWFyOiBudW1iZXI7IG1vbnRoOiBudW1iZXIgfSkgPT4gYW55O1xuXG5cdC8qKlxuXHQgKiBUaGUgbnVtYmVyIG9mIG1vbnRocyB0byBkaXNwbGF5LlxuXHQgKi9cblx0QElucHV0KCkgZGlzcGxheU1vbnRoczogbnVtYmVyO1xuXG5cdC8qKlxuXHQgKiBUaGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuXHQgKlxuXHQgKiBXaXRoIGRlZmF1bHQgY2FsZW5kYXIgd2UgdXNlIElTTyA4NjAxOiAnd2Vla2RheScgaXMgMT1Nb24gLi4uIDc9U3VuLlxuXHQgKi9cblx0QElucHV0KCkgZmlyc3REYXlPZldlZWs6IG51bWJlcjtcblxuXHQvKipcblx0ICogVGhlIHJlZmVyZW5jZSB0byB0aGUgY3VzdG9tIHRlbXBsYXRlIGZvciB0aGUgZGF0ZXBpY2tlciBmb290ZXIuXG5cdCAqXG5cdCAqIEBzaW5jZSAzLjMuMFxuXHQgKi9cblx0QElucHV0KCkgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0LyoqXG5cdCAqIFRoZSBjYWxsYmFjayB0byBtYXJrIHNvbWUgZGF0ZXMgYXMgZGlzYWJsZWQuXG5cdCAqXG5cdCAqIEl0IGlzIGNhbGxlZCBmb3IgZWFjaCBuZXcgZGF0ZSB3aGVuIG5hdmlnYXRpbmcgdG8gYSBkaWZmZXJlbnQgbW9udGguXG5cdCAqXG5cdCAqIGBjdXJyZW50YCBpcyB0aGUgbW9udGggdGhhdCBpcyBjdXJyZW50bHkgZGlzcGxheWVkIGJ5IHRoZSBkYXRlcGlja2VyLlxuXHQgKi9cblx0QElucHV0KCkgbWFya0Rpc2FibGVkOiAoZGF0ZTogTmdiRGF0ZSwgY3VycmVudD86IHsgeWVhcjogbnVtYmVyOyBtb250aDogbnVtYmVyIH0pID0+IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIFRoZSBlYXJsaWVzdCBkYXRlIHRoYXQgY2FuIGJlIGRpc3BsYXllZCBvciBzZWxlY3RlZC4gQWxzbyB1c2VkIGZvciBmb3JtIHZhbGlkYXRpb24uXG5cdCAqXG5cdCAqIElmIG5vdCBwcm92aWRlZCwgJ3llYXInIHNlbGVjdCBib3ggd2lsbCBkaXNwbGF5IDEwIHllYXJzIGJlZm9yZSB0aGUgY3VycmVudCBtb250aC5cblx0ICovXG5cdEBJbnB1dCgpIG1pbkRhdGU6IE5nYkRhdGVTdHJ1Y3Q7XG5cblx0LyoqXG5cdCAqIFRoZSBsYXRlc3QgZGF0ZSB0aGF0IGNhbiBiZSBkaXNwbGF5ZWQgb3Igc2VsZWN0ZWQuIEFsc28gdXNlZCBmb3IgZm9ybSB2YWxpZGF0aW9uLlxuXHQgKlxuXHQgKiBJZiBub3QgcHJvdmlkZWQsICd5ZWFyJyBzZWxlY3QgYm94IHdpbGwgZGlzcGxheSAxMCB5ZWFycyBhZnRlciB0aGUgY3VycmVudCBtb250aC5cblx0ICovXG5cdEBJbnB1dCgpIG1heERhdGU6IE5nYkRhdGVTdHJ1Y3Q7XG5cblx0LyoqXG5cdCAqIE5hdmlnYXRpb24gdHlwZS5cblx0ICpcblx0ICogKiBgXCJzZWxlY3RcImAgLSBzZWxlY3QgYm94ZXMgZm9yIG1vbnRoIGFuZCBuYXZpZ2F0aW9uIGFycm93c1xuXHQgKiAqIGBcImFycm93c1wiYCAtIG9ubHkgbmF2aWdhdGlvbiBhcnJvd3Ncblx0ICogKiBgXCJub25lXCJgIC0gbm8gbmF2aWdhdGlvbiB2aXNpYmxlIGF0IGFsbFxuXHQgKi9cblx0QElucHV0KCkgbmF2aWdhdGlvbjogJ3NlbGVjdCcgfCAnYXJyb3dzJyB8ICdub25lJztcblxuXHQvKipcblx0ICogVGhlIHdheSBvZiBkaXNwbGF5aW5nIGRheXMgdGhhdCBkb24ndCBiZWxvbmcgdG8gdGhlIGN1cnJlbnQgbW9udGguXG5cdCAqXG5cdCAqICogYFwidmlzaWJsZVwiYCAtIGRheXMgYXJlIHZpc2libGVcblx0ICogKiBgXCJoaWRkZW5cImAgLSBkYXlzIGFyZSBoaWRkZW4sIHdoaXRlIHNwYWNlIHByZXNlcnZlZFxuXHQgKiAqIGBcImNvbGxhcHNlZFwiYCAtIGRheXMgYXJlIGNvbGxhcHNlZCwgc28gdGhlIGRhdGVwaWNrZXIgaGVpZ2h0IG1pZ2h0IGNoYW5nZSBiZXR3ZWVuIG1vbnRoc1xuXHQgKlxuXHQgKiBGb3IgdGhlIDIrIG1vbnRocyB2aWV3LCBkYXlzIGluIGJldHdlZW4gbW9udGhzIGFyZSBuZXZlciBzaG93bi5cblx0ICovXG5cdEBJbnB1dCgpIG91dHNpZGVEYXlzOiAndmlzaWJsZScgfCAnY29sbGFwc2VkJyB8ICdoaWRkZW4nO1xuXG5cdC8qKlxuXHQgKiBUaGUgcHJlZmVycmVkIHBsYWNlbWVudCBvZiB0aGUgZGF0ZXBpY2tlciBwb3B1cCwgYW1vbmcgdGhlIFtwb3NzaWJsZSB2YWx1ZXNdKCMvZ3VpZGVzL3Bvc2l0aW9uaW5nI2FwaSkuXG5cdCAqXG5cdCAqIFRoZSBkZWZhdWx0IG9yZGVyIG9mIHByZWZlcmVuY2UgaXMgYFwiYm90dG9tLXN0YXJ0IGJvdHRvbS1lbmQgdG9wLXN0YXJ0IHRvcC1lbmRcImBcblx0ICpcblx0ICogUGxlYXNlIHNlZSB0aGUgW3Bvc2l0aW9uaW5nIG92ZXJ2aWV3XSgjL3Bvc2l0aW9uaW5nKSBmb3IgbW9yZSBkZXRhaWxzLlxuXHQgKi9cblx0QElucHV0KCkgcGxhY2VtZW50ID0gdGhpcy5fY29uZmlnLnBsYWNlbWVudDtcblxuXHQvKipcblx0ICogQWxsb3dzIHRvIGNoYW5nZSBkZWZhdWx0IFBvcHBlciBvcHRpb25zIHdoZW4gcG9zaXRpb25pbmcgdGhlIHBvcHVwLlxuXHQgKiBSZWNlaXZlcyBjdXJyZW50IHBvcHBlciBvcHRpb25zIGFuZCByZXR1cm5zIG1vZGlmaWVkIG9uZXMuXG5cdCAqXG5cdCAqIEBzaW5jZSAxMy4xLjBcblx0ICovXG5cdEBJbnB1dCgpIHBvcHBlck9wdGlvbnMgPSB0aGlzLl9jb25maWcucG9wcGVyT3B0aW9ucztcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB3aGVuIGNsb3NpbmcgZGF0ZXBpY2tlciB3aWxsIGZvY3VzIGVsZW1lbnQgdGhhdCB3YXMgZm9jdXNlZCBiZWZvcmUgZGF0ZXBpY2tlciB3YXMgb3BlbmVkLlxuXHQgKlxuXHQgKiBBbHRlcm5hdGl2ZWx5IHlvdSBjb3VsZCBwcm92aWRlIGEgc2VsZWN0b3Igb3IgYW4gYEhUTUxFbGVtZW50YCB0byBmb2N1cy4gSWYgdGhlIGVsZW1lbnQgZG9lc24ndCBleGlzdCBvciBpbnZhbGlkLFxuXHQgKiB3ZSdsbCBmYWxsYmFjayB0byBmb2N1cyBkb2N1bWVudCBib2R5LlxuXHQgKlxuXHQgKiBAc2luY2UgNS4yLjBcblx0ICovXG5cdEBJbnB1dCgpIHJlc3RvcmVGb2N1czogdHJ1ZSB8IHN0cmluZyB8IEhUTUxFbGVtZW50O1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHdlZWsgbnVtYmVycyB3aWxsIGJlIGRpc3BsYXllZC5cblx0ICovXG5cdEBJbnB1dCgpIHNob3dXZWVrTnVtYmVyczogYm9vbGVhbjtcblxuXHQvKipcblx0ICogVGhlIGRhdGUgdG8gb3BlbiBjYWxlbmRhciB3aXRoLlxuXHQgKlxuXHQgKiBXaXRoIHRoZSBkZWZhdWx0IGNhbGVuZGFyIHdlIHVzZSBJU08gODYwMTogJ21vbnRoJyBpcyAxPUphbiAuLi4gMTI9RGVjLlxuXHQgKiBJZiBub3RoaW5nIG9yIGludmFsaWQgZGF0ZSBpcyBwcm92aWRlZCwgY2FsZW5kYXIgd2lsbCBvcGVuIHdpdGggY3VycmVudCBtb250aC5cblx0ICpcblx0ICogWW91IGNvdWxkIHVzZSBgbmF2aWdhdGVUbyhkYXRlKWAgbWV0aG9kIGFzIGFuIGFsdGVybmF0aXZlLlxuXHQgKi9cblx0QElucHV0KCkgc3RhcnREYXRlOiB7IHllYXI6IG51bWJlcjsgbW9udGg6IG51bWJlcjsgZGF5PzogbnVtYmVyIH07XG5cblx0LyoqXG5cdCAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgZGF0ZXBpY2tlciBwb3B1cCBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG5cdCAqXG5cdCAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIGBcImJvZHlcImAuXG5cdCAqL1xuXHRASW5wdXQoKSBjb250YWluZXIgPSB0aGlzLl9jb25maWcuY29udGFpbmVyO1xuXG5cdC8qKlxuXHQgKiBBIGNzcyBzZWxlY3RvciBvciBodG1sIGVsZW1lbnQgc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgZGF0ZXBpY2tlciBwb3B1cCBzaG91bGQgYmUgcG9zaXRpb25lZCBhZ2FpbnN0LlxuXHQgKlxuXHQgKiBCeSBkZWZhdWx0IHRoZSBpbnB1dCBpcyB1c2VkIGFzIGEgdGFyZ2V0LlxuXHQgKlxuXHQgKiBAc2luY2UgNC4yLjBcblx0ICovXG5cdEBJbnB1dCgpIHBvc2l0aW9uVGFyZ2V0ID0gdGhpcy5fY29uZmlnLnBvc2l0aW9uVGFyZ2V0O1xuXG5cdC8qKlxuXHQgKiBUaGUgd2F5IHdlZWtkYXlzIHNob3VsZCBiZSBkaXNwbGF5ZWQuXG5cdCAqXG5cdCAqICogYHRydWVgIC0gd2Vla2RheXMgYXJlIGRpc3BsYXllZCB1c2luZyBkZWZhdWx0IHdpZHRoXG5cdCAqICogYGZhbHNlYCAtIHdlZWtkYXlzIGFyZSBub3QgZGlzcGxheWVkXG5cdCAqICogYFwic2hvcnRcIiB8IFwibG9uZ1wiIHwgXCJuYXJyb3dcImAgLSB3ZWVrZGF5cyBhcmUgZGlzcGxheWVkIHVzaW5nIHNwZWNpZmllZCB3aWR0aFxuXHQgKlxuXHQgKiBAc2luY2UgOS4xLjBcblx0ICovXG5cdEBJbnB1dCgpIHdlZWtkYXlzOiBFeGNsdWRlPEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zWyd3ZWVrZGF5J10sIHVuZGVmaW5lZD4gfCBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdXNlciBzZWxlY3RzIGEgZGF0ZSB1c2luZyBrZXlib2FyZCBvciBtb3VzZS5cblx0ICpcblx0ICogVGhlIHBheWxvYWQgb2YgdGhlIGV2ZW50IGlzIGN1cnJlbnRseSBzZWxlY3RlZCBgTmdiRGF0ZWAuXG5cdCAqXG5cdCAqIEBzaW5jZSAxLjEuMVxuXHQgKi9cblx0QE91dHB1dCgpIGRhdGVTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE5nYkRhdGU+KCk7XG5cblx0LyoqXG5cdCAqIEV2ZW50IGVtaXR0ZWQgcmlnaHQgYWZ0ZXIgdGhlIG5hdmlnYXRpb24gaGFwcGVucyBhbmQgZGlzcGxheWVkIG1vbnRoIGNoYW5nZXMuXG5cdCAqXG5cdCAqIFNlZSBbYE5nYkRhdGVwaWNrZXJOYXZpZ2F0ZUV2ZW50YF0oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvYXBpI05nYkRhdGVwaWNrZXJOYXZpZ2F0ZUV2ZW50KSBmb3IgdGhlIHBheWxvYWQgaW5mby5cblx0ICovXG5cdEBPdXRwdXQoKSBuYXZpZ2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TmdiRGF0ZXBpY2tlck5hdmlnYXRlRXZlbnQ+KCk7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGZpcmVkIGFmdGVyIGNsb3NpbmcgZGF0ZXBpY2tlciB3aW5kb3cuXG5cdCAqXG5cdCAqIEBzaW5jZSA0LjIuMFxuXHQgKi9cblx0QE91dHB1dCgpIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRASW5wdXQoKVxuXHRnZXQgZGlzYWJsZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuXHR9XG5cdHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5fZGlzYWJsZWQgPSB2YWx1ZSA9PT0gJycgfHwgKHZhbHVlICYmIHZhbHVlICE9PSAnZmFsc2UnKTtcblxuXHRcdGlmICh0aGlzLmlzT3BlbigpKSB7XG5cdFx0XHR0aGlzLl9jUmVmIS5pbnN0YW5jZS5zZXREaXNhYmxlZFN0YXRlKHRoaXMuX2Rpc2FibGVkKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIF9vbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXHRwcml2YXRlIF9vblRvdWNoZWQgPSAoKSA9PiB7fTtcblx0cHJpdmF0ZSBfdmFsaWRhdG9yQ2hhbmdlID0gKCkgPT4ge307XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMuX29uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5fb25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG5cdFx0dGhpcy5fdmFsaWRhdG9yQ2hhbmdlID0gZm47XG5cdH1cblxuXHRzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcblx0fVxuXG5cdHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcblx0XHRjb25zdCB7IHZhbHVlIH0gPSBjO1xuXG5cdFx0aWYgKHZhbHVlICE9IG51bGwpIHtcblx0XHRcdGNvbnN0IG5nYkRhdGUgPSB0aGlzLl9mcm9tRGF0ZVN0cnVjdCh0aGlzLl9kYXRlQWRhcHRlci5mcm9tTW9kZWwodmFsdWUpKTtcblxuXHRcdFx0aWYgKCFuZ2JEYXRlKSB7XG5cdFx0XHRcdHJldHVybiB7IG5nYkRhdGU6IHsgaW52YWxpZDogdmFsdWUgfSB9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5taW5EYXRlICYmIG5nYkRhdGUuYmVmb3JlKE5nYkRhdGUuZnJvbSh0aGlzLm1pbkRhdGUpKSkge1xuXHRcdFx0XHRyZXR1cm4geyBuZ2JEYXRlOiB7IG1pbkRhdGU6IHsgbWluRGF0ZTogdGhpcy5taW5EYXRlLCBhY3R1YWw6IHZhbHVlIH0gfSB9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5tYXhEYXRlICYmIG5nYkRhdGUuYWZ0ZXIoTmdiRGF0ZS5mcm9tKHRoaXMubWF4RGF0ZSkpKSB7XG5cdFx0XHRcdHJldHVybiB7IG5nYkRhdGU6IHsgbWF4RGF0ZTogeyBtYXhEYXRlOiB0aGlzLm1heERhdGUsIGFjdHVhbDogdmFsdWUgfSB9IH07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlKSB7XG5cdFx0dGhpcy5fbW9kZWwgPSB0aGlzLl9mcm9tRGF0ZVN0cnVjdCh0aGlzLl9kYXRlQWRhcHRlci5mcm9tTW9kZWwodmFsdWUpKTtcblx0XHR0aGlzLl93cml0ZU1vZGVsVmFsdWUodGhpcy5fbW9kZWwpO1xuXHR9XG5cblx0bWFudWFsRGF0ZUNoYW5nZSh2YWx1ZTogc3RyaW5nLCB1cGRhdGVWaWV3ID0gZmFsc2UpIHtcblx0XHRjb25zdCBpbnB1dFZhbHVlQ2hhbmdlZCA9IHZhbHVlICE9PSB0aGlzLl9pbnB1dFZhbHVlO1xuXHRcdGlmIChpbnB1dFZhbHVlQ2hhbmdlZCkge1xuXHRcdFx0dGhpcy5faW5wdXRWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0dGhpcy5fbW9kZWwgPSB0aGlzLl9mcm9tRGF0ZVN0cnVjdCh0aGlzLl9wYXJzZXJGb3JtYXR0ZXIucGFyc2UodmFsdWUpKTtcblx0XHR9XG5cdFx0aWYgKGlucHV0VmFsdWVDaGFuZ2VkIHx8ICF1cGRhdGVWaWV3KSB7XG5cdFx0XHR0aGlzLl9vbkNoYW5nZSh0aGlzLl9tb2RlbCA/IHRoaXMuX2RhdGVBZGFwdGVyLnRvTW9kZWwodGhpcy5fbW9kZWwpIDogdmFsdWUgPT09ICcnID8gbnVsbCA6IHZhbHVlKTtcblx0XHR9XG5cdFx0aWYgKHVwZGF0ZVZpZXcgJiYgdGhpcy5fbW9kZWwpIHtcblx0XHRcdHRoaXMuX3dyaXRlTW9kZWxWYWx1ZSh0aGlzLl9tb2RlbCk7XG5cdFx0fVxuXHR9XG5cblx0aXNPcGVuKCkge1xuXHRcdHJldHVybiAhIXRoaXMuX2NSZWY7XG5cdH1cblxuXHQvKipcblx0ICogT3BlbnMgdGhlIGRhdGVwaWNrZXIgcG9wdXAuXG5cdCAqXG5cdCAqIElmIHRoZSByZWxhdGVkIGZvcm0gY29udHJvbCBjb250YWlucyBhIHZhbGlkIGRhdGUsIHRoZSBjb3JyZXNwb25kaW5nIG1vbnRoIHdpbGwgYmUgb3BlbmVkLlxuXHQgKi9cblx0b3BlbigpIHtcblx0XHRpZiAoIXRoaXMuaXNPcGVuKCkpIHtcblx0XHRcdHRoaXMuX2NSZWYgPSB0aGlzLl92Y1JlZi5jcmVhdGVDb21wb25lbnQoTmdiRGF0ZXBpY2tlcik7XG5cblx0XHRcdHRoaXMuX2FwcGx5UG9wdXBTdHlsaW5nKHRoaXMuX2NSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG5cdFx0XHR0aGlzLl9hcHBseURhdGVwaWNrZXJJbnB1dHModGhpcy5fY1JlZik7XG5cdFx0XHR0aGlzLl9zdWJzY3JpYmVGb3JEYXRlcGlja2VyT3V0cHV0cyh0aGlzLl9jUmVmLmluc3RhbmNlKTtcblx0XHRcdHRoaXMuX2NSZWYuaW5zdGFuY2UubmdPbkluaXQoKTtcblx0XHRcdHRoaXMuX2NSZWYuaW5zdGFuY2Uud3JpdGVWYWx1ZSh0aGlzLl9kYXRlQWRhcHRlci50b01vZGVsKHRoaXMuX21vZGVsKSk7XG5cblx0XHRcdC8vIGRhdGUgc2VsZWN0aW9uIGV2ZW50IGhhbmRsaW5nXG5cdFx0XHR0aGlzLl9jUmVmLmluc3RhbmNlLnJlZ2lzdGVyT25DaGFuZ2UoKHNlbGVjdGVkRGF0ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLndyaXRlVmFsdWUoc2VsZWN0ZWREYXRlKTtcblx0XHRcdFx0dGhpcy5fb25DaGFuZ2Uoc2VsZWN0ZWREYXRlKTtcblx0XHRcdFx0dGhpcy5fb25Ub3VjaGVkKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5fY1JlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cblx0XHRcdHRoaXMuX2NSZWYuaW5zdGFuY2Uuc2V0RGlzYWJsZWRTdGF0ZSh0aGlzLmRpc2FibGVkKTtcblxuXHRcdFx0aWYgKHRoaXMuY29udGFpbmVyID09PSAnYm9keScpIHtcblx0XHRcdFx0dGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbnRhaW5lcik/LmFwcGVuZENoaWxkKHRoaXMuX2NSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGZvY3VzIGhhbmRsaW5nXG5cdFx0XHR0aGlzLl9lbFdpdGhGb2N1cyA9IHRoaXMuX2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuXHRcdFx0bmdiRm9jdXNUcmFwKHRoaXMuX25nWm9uZSwgdGhpcy5fY1JlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsb3NlZCwgdHJ1ZSk7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2NSZWY/Lmluc3RhbmNlLmZvY3VzKCkpO1xuXG5cdFx0XHRsZXQgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcblx0XHRcdGlmIChpc1N0cmluZyh0aGlzLnBvc2l0aW9uVGFyZ2V0KSkge1xuXHRcdFx0XHRob3N0RWxlbWVudCA9IHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5wb3NpdGlvblRhcmdldCk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMucG9zaXRpb25UYXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHRcdFx0XHRob3N0RWxlbWVudCA9IHRoaXMucG9zaXRpb25UYXJnZXQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRob3N0RWxlbWVudCA9IHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnBvc2l0aW9uVGFyZ2V0ICYmICFob3N0RWxlbWVudCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ25nYkRhdGVwaWNrZXIgY291bGQgbm90IGZpbmQgZWxlbWVudCBkZWNsYXJlZCBpbiBbcG9zaXRpb25UYXJnZXRdIHRvIHBvc2l0aW9uIGFnYWluc3QuJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldHRpbmcgdXAgcG9wcGVyIGFuZCBzY2hlZHVsaW5nIHVwZGF0ZXMgd2hlbiB6b25lIGlzIHN0YWJsZVxuXHRcdFx0dGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuX2NSZWYgJiYgaG9zdEVsZW1lbnQpIHtcblx0XHRcdFx0XHR0aGlzLl9wb3NpdGlvbmluZy5jcmVhdGVQb3BwZXIoe1xuXHRcdFx0XHRcdFx0aG9zdEVsZW1lbnQsXG5cdFx0XHRcdFx0XHR0YXJnZXRFbGVtZW50OiB0aGlzLl9jUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQsXG5cdFx0XHRcdFx0XHRwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50LFxuXHRcdFx0XHRcdFx0dXBkYXRlUG9wcGVyT3B0aW9uczogKG9wdGlvbnMpID0+IHRoaXMucG9wcGVyT3B0aW9ucyhhZGRQb3BwZXJPZmZzZXQoWzAsIDJdKShvcHRpb25zKSksXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHR0aGlzLl9hZnRlclJlbmRlclJlZiA9IGFmdGVyUmVuZGVyKFxuXHRcdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9wb3NpdGlvbmluZy51cGRhdGUoKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7IHBoYXNlOiBBZnRlclJlbmRlclBoYXNlLk1peGVkUmVhZFdyaXRlLCBpbmplY3RvcjogdGhpcy5faW5qZWN0b3IgfSxcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5fc2V0Q2xvc2VIYW5kbGVycygpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDbG9zZXMgdGhlIGRhdGVwaWNrZXIgcG9wdXAuXG5cdCAqL1xuXHRjbG9zZSgpIHtcblx0XHRpZiAodGhpcy5pc09wZW4oKSkge1xuXHRcdFx0dGhpcy5fY1JlZj8uZGVzdHJveSgpO1xuXHRcdFx0dGhpcy5fY1JlZiA9IG51bGw7XG5cdFx0XHR0aGlzLl9wb3NpdGlvbmluZy5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLl9hZnRlclJlbmRlclJlZj8uZGVzdHJveSgpO1xuXHRcdFx0dGhpcy5fZGVzdHJveUNsb3NlSGFuZGxlcnMkLm5leHQoKTtcblx0XHRcdHRoaXMuY2xvc2VkLmVtaXQoKTtcblx0XHRcdHRoaXMuX2NoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuXG5cdFx0XHQvLyByZXN0b3JlIGZvY3VzXG5cdFx0XHRsZXQgZWxlbWVudFRvRm9jdXM6IEhUTUxFbGVtZW50IHwgbnVsbCA9IHRoaXMuX2VsV2l0aEZvY3VzO1xuXHRcdFx0aWYgKGlzU3RyaW5nKHRoaXMucmVzdG9yZUZvY3VzKSkge1xuXHRcdFx0XHRlbGVtZW50VG9Gb2N1cyA9IHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5yZXN0b3JlRm9jdXMpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnJlc3RvcmVGb2N1cyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGVsZW1lbnRUb0ZvY3VzID0gdGhpcy5yZXN0b3JlRm9jdXMgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGluIElFIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgY2FuIGNvbnRhaW4gYW4gb2JqZWN0IHdpdGhvdXQgJ2ZvY3VzKCknIHNvbWV0aW1lc1xuXHRcdFx0aWYgKGVsZW1lbnRUb0ZvY3VzICYmIGVsZW1lbnRUb0ZvY3VzWydmb2N1cyddKSB7XG5cdFx0XHRcdGVsZW1lbnRUb0ZvY3VzLmZvY3VzKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9kb2N1bWVudC5ib2R5LmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZXMgdGhlIGRhdGVwaWNrZXIgcG9wdXAuXG5cdCAqL1xuXHR0b2dnbGUoKSB7XG5cdFx0aWYgKHRoaXMuaXNPcGVuKCkpIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcGVuKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIE5hdmlnYXRlcyB0byB0aGUgcHJvdmlkZWQgZGF0ZS5cblx0ICpcblx0ICogV2l0aCB0aGUgZGVmYXVsdCBjYWxlbmRhciB3ZSB1c2UgSVNPIDg2MDE6ICdtb250aCcgaXMgMT1KYW4gLi4uIDEyPURlYy5cblx0ICogSWYgbm90aGluZyBvciBpbnZhbGlkIGRhdGUgcHJvdmlkZWQgY2FsZW5kYXIgd2lsbCBvcGVuIGN1cnJlbnQgbW9udGguXG5cdCAqXG5cdCAqIFVzZSB0aGUgYFtzdGFydERhdGVdYCBpbnB1dCBhcyBhbiBhbHRlcm5hdGl2ZS5cblx0ICovXG5cdG5hdmlnYXRlVG8oZGF0ZT86IHsgeWVhcjogbnVtYmVyOyBtb250aDogbnVtYmVyOyBkYXk/OiBudW1iZXIgfSkge1xuXHRcdGlmICh0aGlzLmlzT3BlbigpKSB7XG5cdFx0XHR0aGlzLl9jUmVmIS5pbnN0YW5jZS5uYXZpZ2F0ZVRvKGRhdGUpO1xuXHRcdH1cblx0fVxuXG5cdG9uQmx1cigpIHtcblx0XHR0aGlzLl9vblRvdWNoZWQoKTtcblx0fVxuXG5cdG9uRm9jdXMoKSB7XG5cdFx0dGhpcy5fZWxXaXRoRm9jdXMgPSB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50O1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGlmIChjaGFuZ2VzWydtaW5EYXRlJ10gfHwgY2hhbmdlc1snbWF4RGF0ZSddKSB7XG5cdFx0XHR0aGlzLl92YWxpZGF0b3JDaGFuZ2UoKTtcblxuXHRcdFx0aWYgKHRoaXMuaXNPcGVuKCkpIHtcblx0XHRcdFx0aWYgKGNoYW5nZXNbJ21pbkRhdGUnXSkge1xuXHRcdFx0XHRcdHRoaXMuX2NSZWYhLnNldElucHV0KCdtaW5EYXRlJywgdGhpcy5taW5EYXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2hhbmdlc1snbWF4RGF0ZSddKSB7XG5cdFx0XHRcdFx0dGhpcy5fY1JlZiEuc2V0SW5wdXQoJ21heERhdGUnLCB0aGlzLm1heERhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXNbJ2RhdGVwaWNrZXJDbGFzcyddKSB7XG5cdFx0XHRjb25zdCB7IGN1cnJlbnRWYWx1ZSwgcHJldmlvdXNWYWx1ZSB9ID0gY2hhbmdlc1snZGF0ZXBpY2tlckNsYXNzJ107XG5cdFx0XHR0aGlzLl9hcHBseVBvcHVwQ2xhc3MoY3VycmVudFZhbHVlLCBwcmV2aW91c1ZhbHVlKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlc1snYXV0b0Nsb3NlJ10gJiYgdGhpcy5pc09wZW4oKSkge1xuXHRcdFx0dGhpcy5fc2V0Q2xvc2VIYW5kbGVycygpO1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuY2xvc2UoKTtcblx0fVxuXG5cdHByaXZhdGUgX2FwcGx5RGF0ZXBpY2tlcklucHV0cyhkYXRlcGlja2VyQ29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TmdiRGF0ZXBpY2tlcj4pOiB2b2lkIHtcblx0XHRbXG5cdFx0XHQnY29udGVudFRlbXBsYXRlJyxcblx0XHRcdCdkYXlUZW1wbGF0ZScsXG5cdFx0XHQnZGF5VGVtcGxhdGVEYXRhJyxcblx0XHRcdCdkaXNwbGF5TW9udGhzJyxcblx0XHRcdCdmaXJzdERheU9mV2VlaycsXG5cdFx0XHQnZm9vdGVyVGVtcGxhdGUnLFxuXHRcdFx0J21hcmtEaXNhYmxlZCcsXG5cdFx0XHQnbWluRGF0ZScsXG5cdFx0XHQnbWF4RGF0ZScsXG5cdFx0XHQnbmF2aWdhdGlvbicsXG5cdFx0XHQnb3V0c2lkZURheXMnLFxuXHRcdFx0J3Nob3dOYXZpZ2F0aW9uJyxcblx0XHRcdCdzaG93V2Vla051bWJlcnMnLFxuXHRcdFx0J3dlZWtkYXlzJyxcblx0XHRdLmZvckVhY2goKGlucHV0TmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRpZiAodGhpc1tpbnB1dE5hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZGF0ZXBpY2tlckNvbXBvbmVudFJlZi5zZXRJbnB1dChpbnB1dE5hbWUsIHRoaXNbaW5wdXROYW1lXSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0ZGF0ZXBpY2tlckNvbXBvbmVudFJlZi5zZXRJbnB1dCgnc3RhcnREYXRlJywgdGhpcy5zdGFydERhdGUgfHwgdGhpcy5fbW9kZWwpO1xuXHR9XG5cblx0cHJpdmF0ZSBfYXBwbHlQb3B1cENsYXNzKG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzPzogc3RyaW5nKSB7XG5cdFx0Y29uc3QgcG9wdXBFbCA9IHRoaXMuX2NSZWY/LmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0aWYgKHBvcHVwRWwpIHtcblx0XHRcdGlmIChuZXdDbGFzcykge1xuXHRcdFx0XHRwb3B1cEVsLmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG9sZENsYXNzKSB7XG5cdFx0XHRcdHBvcHVwRWwuY2xhc3NMaXN0LnJlbW92ZShvbGRDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBfYXBwbHlQb3B1cFN0eWxpbmcobmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcblx0XHRuYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLW1lbnUnLCAnc2hvdycpO1xuXG5cdFx0aWYgKHRoaXMuY29udGFpbmVyID09PSAnYm9keScpIHtcblx0XHRcdG5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmdiLWRwLWJvZHknKTtcblx0XHR9XG5cblx0XHR0aGlzLl9hcHBseVBvcHVwQ2xhc3ModGhpcy5kYXRlcGlja2VyQ2xhc3MpO1xuXHR9XG5cblx0cHJpdmF0ZSBfc3Vic2NyaWJlRm9yRGF0ZXBpY2tlck91dHB1dHMoZGF0ZXBpY2tlckluc3RhbmNlOiBOZ2JEYXRlcGlja2VyKSB7XG5cdFx0ZGF0ZXBpY2tlckluc3RhbmNlLm5hdmlnYXRlLnN1YnNjcmliZSgobmF2aWdhdGVFdmVudCkgPT4gdGhpcy5uYXZpZ2F0ZS5lbWl0KG5hdmlnYXRlRXZlbnQpKTtcblx0XHRkYXRlcGlja2VySW5zdGFuY2UuZGF0ZVNlbGVjdC5zdWJzY3JpYmUoKGRhdGUpID0+IHtcblx0XHRcdHRoaXMuZGF0ZVNlbGVjdC5lbWl0KGRhdGUpO1xuXHRcdFx0aWYgKHRoaXMuYXV0b0Nsb3NlID09PSB0cnVlIHx8IHRoaXMuYXV0b0Nsb3NlID09PSAnaW5zaWRlJykge1xuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIF93cml0ZU1vZGVsVmFsdWUobW9kZWw6IE5nYkRhdGUgfCBudWxsKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLl9wYXJzZXJGb3JtYXR0ZXIuZm9ybWF0KG1vZGVsKTtcblx0XHR0aGlzLl9pbnB1dFZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuXHRcdGlmICh0aGlzLmlzT3BlbigpKSB7XG5cdFx0XHR0aGlzLl9jUmVmIS5pbnN0YW5jZS53cml0ZVZhbHVlKHRoaXMuX2RhdGVBZGFwdGVyLnRvTW9kZWwobW9kZWwpKTtcblx0XHRcdHRoaXMuX29uVG91Y2hlZCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgX2Zyb21EYXRlU3RydWN0KGRhdGU6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsKTogTmdiRGF0ZSB8IG51bGwge1xuXHRcdGNvbnN0IG5nYkRhdGUgPSBkYXRlID8gbmV3IE5nYkRhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSkgOiBudWxsO1xuXHRcdHJldHVybiB0aGlzLl9jYWxlbmRhci5pc1ZhbGlkKG5nYkRhdGUpID8gbmdiRGF0ZSA6IG51bGw7XG5cdH1cblxuXHRwcml2YXRlIF9zZXRDbG9zZUhhbmRsZXJzKCkge1xuXHRcdHRoaXMuX2Rlc3Ryb3lDbG9zZUhhbmRsZXJzJC5uZXh0KCk7XG5cdFx0bmdiQXV0b0Nsb3NlKFxuXHRcdFx0dGhpcy5fbmdab25lLFxuXHRcdFx0dGhpcy5fZG9jdW1lbnQsXG5cdFx0XHR0aGlzLmF1dG9DbG9zZSxcblx0XHRcdCgpID0+IHRoaXMuY2xvc2UoKSxcblx0XHRcdHRoaXMuX2Rlc3Ryb3lDbG9zZUhhbmRsZXJzJCxcblx0XHRcdFtdLFxuXHRcdFx0W3RoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NSZWYhLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRdLFxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==