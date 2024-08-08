import { fromEvent, merge } from 'rxjs';
import { filter } from 'rxjs/operators';
import { afterNextRender, AfterRenderPhase, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, DestroyRef, Directive, ElementRef, EventEmitter, forwardRef, inject, Injector, Input, NgZone, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgbCalendar } from './ngb-calendar';
import { NgbDate } from './ngb-date';
import { NgbDatepickerService } from './datepicker-service';
import { NavigationEvent } from './datepicker-view-model';
import { NgbDatepickerConfig } from './datepicker-config';
import { NgbDateAdapter } from './adapters/ngb-date-adapter';
import { NgbDatepickerI18n } from './datepicker-i18n';
import { NgbDatepickerKeyboardService } from './datepicker-keyboard-service';
import { isChangedDate, isChangedMonth } from './datepicker-tools';
import { NgbDatepickerDayView } from './datepicker-day-view';
import { NgbDatepickerNavigation } from './datepicker-navigation';
import * as i0 from "@angular/core";
/**
 * A directive that marks the content template that customizes the way datepicker months are displayed
 *
 * @since 5.3.0
 */
export class NgbDatepickerContent {
    constructor() {
        this.templateRef = inject(TemplateRef);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerContent, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.2", type: NgbDatepickerContent, isStandalone: true, selector: "ng-template[ngbDatepickerContent]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerContent, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[ngbDatepickerContent]', standalone: true }]
        }] });
/**
 * A component that renders one month including all the days, weekdays and week numbers. Can be used inside
 * the `<ng-template ngbDatepickerMonths></ng-template>` when you want to customize months layout.
 *
 * For a usage example, see [custom month layout demo](#/components/datepicker/examples#custommonth)
 *
 * @since 5.3.0
 */
export class NgbDatepickerMonth {
    constructor() {
        this._keyboardService = inject(NgbDatepickerKeyboardService);
        this._service = inject(NgbDatepickerService);
        this.i18n = inject(NgbDatepickerI18n);
        this.datepicker = inject(NgbDatepicker);
    }
    /**
     * The first date of month to be rendered.
     *
     * This month must one of the months present in the
     * [datepicker state](#/components/datepicker/api#NgbDatepickerState).
     */
    set month(month) {
        this.viewModel = this._service.getMonth(month);
    }
    onKeyDown(event) {
        this._keyboardService.processKey(event, this.datepicker);
    }
    doSelect(day) {
        if (!day.context.disabled && !day.hidden) {
            this.datepicker.onDateSelect(day.date);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerMonth, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.2", type: NgbDatepickerMonth, isStandalone: true, selector: "ngb-datepicker-month", inputs: { month: "month" }, host: { attributes: { "role": "grid" }, listeners: { "keydown": "onKeyDown($event)" } }, ngImport: i0, template: `
		@if (viewModel.weekdays.length > 0) {
			<div class="ngb-dp-week ngb-dp-weekdays" role="row">
				@if (datepicker.showWeekNumbers) {
					<div class="ngb-dp-weekday ngb-dp-showweek small">{{ i18n.getWeekLabel() }}</div>
				}
				@for (weekday of viewModel.weekdays; track $index) {
					<div class="ngb-dp-weekday small" role="columnheader">{{ weekday }}</div>
				}
			</div>
		}
		@for (week of viewModel.weeks; track week) {
			@if (!week.collapsed) {
				<div class="ngb-dp-week" role="row">
					@if (datepicker.showWeekNumbers) {
						<div class="ngb-dp-week-number small text-muted">{{ i18n.getWeekNumerals(week.number) }}</div>
					}
					@for (day of week.days; track day) {
						<div
							(click)="doSelect(day); $event.preventDefault()"
							class="ngb-dp-day"
							role="gridcell"
							[class.disabled]="day.context.disabled"
							[tabindex]="day.tabindex"
							[class.hidden]="day.hidden"
							[class.ngb-dp-today]="day.context.today"
							[attr.aria-label]="day.ariaLabel"
						>
							@if (!day.hidden) {
								<ng-template [ngTemplateOutlet]="datepicker.dayTemplate" [ngTemplateOutletContext]="day.context" />
							}
						</div>
					}
				</div>
			}
		}
	`, isInline: true, styles: ["ngb-datepicker-month{display:block}.ngb-dp-weekday,.ngb-dp-week-number{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:var(--bs-info)}.ngb-dp-week{border-radius:.25rem;display:flex}.ngb-dp-weekdays{border-bottom:1px solid var(--bs-border-color);border-radius:0;background-color:var(--bs-tertiary-bg)}.ngb-dp-day,.ngb-dp-weekday,.ngb-dp-week-number{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex=\"0\"]{z-index:1}\n"], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerMonth, decorators: [{
            type: Component,
            args: [{ selector: 'ngb-datepicker-month', standalone: true, imports: [NgTemplateOutlet], host: {
                        role: 'grid',
                        '(keydown)': 'onKeyDown($event)',
                    }, encapsulation: ViewEncapsulation.None, template: `
		@if (viewModel.weekdays.length > 0) {
			<div class="ngb-dp-week ngb-dp-weekdays" role="row">
				@if (datepicker.showWeekNumbers) {
					<div class="ngb-dp-weekday ngb-dp-showweek small">{{ i18n.getWeekLabel() }}</div>
				}
				@for (weekday of viewModel.weekdays; track $index) {
					<div class="ngb-dp-weekday small" role="columnheader">{{ weekday }}</div>
				}
			</div>
		}
		@for (week of viewModel.weeks; track week) {
			@if (!week.collapsed) {
				<div class="ngb-dp-week" role="row">
					@if (datepicker.showWeekNumbers) {
						<div class="ngb-dp-week-number small text-muted">{{ i18n.getWeekNumerals(week.number) }}</div>
					}
					@for (day of week.days; track day) {
						<div
							(click)="doSelect(day); $event.preventDefault()"
							class="ngb-dp-day"
							role="gridcell"
							[class.disabled]="day.context.disabled"
							[tabindex]="day.tabindex"
							[class.hidden]="day.hidden"
							[class.ngb-dp-today]="day.context.today"
							[attr.aria-label]="day.ariaLabel"
						>
							@if (!day.hidden) {
								<ng-template [ngTemplateOutlet]="datepicker.dayTemplate" [ngTemplateOutletContext]="day.context" />
							}
						</div>
					}
				</div>
			}
		}
	`, styles: ["ngb-datepicker-month{display:block}.ngb-dp-weekday,.ngb-dp-week-number{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:var(--bs-info)}.ngb-dp-week{border-radius:.25rem;display:flex}.ngb-dp-weekdays{border-bottom:1px solid var(--bs-border-color);border-radius:0;background-color:var(--bs-tertiary-bg)}.ngb-dp-day,.ngb-dp-weekday,.ngb-dp-week-number{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex=\"0\"]{z-index:1}\n"] }]
        }], propDecorators: { month: [{
                type: Input
            }] } });
/**
 * A highly configurable component that helps you with selecting calendar dates.
 *
 * `NgbDatepicker` is meant to be displayed inline on a page or put inside a popup.
 */
export class NgbDatepicker {
    constructor() {
        this.injector = inject(Injector);
        this._service = inject(NgbDatepickerService);
        this._calendar = inject(NgbCalendar);
        this._i18n = inject(NgbDatepickerI18n);
        this._config = inject(NgbDatepickerConfig);
        this._nativeElement = inject(ElementRef).nativeElement;
        this._ngbDateAdapter = inject((NgbDateAdapter));
        this._ngZone = inject(NgZone);
        this._destroyRef = inject(DestroyRef);
        this._injector = inject(Injector);
        this._controlValue = null;
        this._publicState = {};
        /**
         * The reference to a custom template for the day.
         *
         * Allows to completely override the way a day 'cell' in the calendar is displayed.
         *
         * See [`DayTemplateContext`](#/components/datepicker/api#DayTemplateContext) for the data you get inside.
         */
        this.dayTemplate = this._config.dayTemplate;
        /**
         * The callback to pass any arbitrary data to the template cell via the
         * [`DayTemplateContext`](#/components/datepicker/api#DayTemplateContext)'s `data` parameter.
         *
         * `current` is the month that is currently displayed by the datepicker.
         *
         * @since 3.3.0
         */
        this.dayTemplateData = this._config.dayTemplateData;
        /**
         * The number of months to display.
         */
        this.displayMonths = this._config.displayMonths;
        /**
         * The first day of the week.
         *
         * With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun.
         */
        this.firstDayOfWeek = this._config.firstDayOfWeek;
        /**
         * The reference to the custom template for the datepicker footer.
         *
         * @since 3.3.0
         */
        this.footerTemplate = this._config.footerTemplate;
        /**
         * The callback to mark some dates as disabled.
         *
         * It is called for each new date when navigating to a different month.
         *
         * `current` is the month that is currently displayed by the datepicker.
         */
        this.markDisabled = this._config.markDisabled;
        /**
         * The latest date that can be displayed or selected.
         *
         * If not provided, 'year' select box will display 10 years after the current month.
         */
        this.maxDate = this._config.maxDate;
        /**
         * The earliest date that can be displayed or selected.
         *
         * If not provided, 'year' select box will display 10 years before the current month.
         */
        this.minDate = this._config.minDate;
        /**
         * Navigation type.
         *
         * * `"select"` - select boxes for month and navigation arrows
         * * `"arrows"` - only navigation arrows
         * * `"none"` - no navigation visible at all
         */
        this.navigation = this._config.navigation;
        /**
         * The way of displaying days that don't belong to the current month.
         *
         * * `"visible"` - days are visible
         * * `"hidden"` - days are hidden, white space preserved
         * * `"collapsed"` - days are collapsed, so the datepicker height might change between months
         *
         * For the 2+ months view, days in between months are never shown.
         */
        this.outsideDays = this._config.outsideDays;
        /**
         * If `true`, week numbers will be displayed.
         */
        this.showWeekNumbers = this._config.showWeekNumbers;
        /**
         * The date to open calendar with.
         *
         * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
         * If nothing or invalid date is provided, calendar will open with current month.
         *
         * You could use `navigateTo(date)` method as an alternative.
         */
        this.startDate = this._config.startDate;
        /**
         * The way weekdays should be displayed.
         *
         * * `true` - weekdays are displayed using default width
         * * `false` - weekdays are not displayed
         * * `"short" | "long" | "narrow"` - weekdays are displayed using specified width
         *
         * @since 9.1.0
         */
        this.weekdays = this._config.weekdays;
        /**
         * An event emitted right before the navigation happens and displayed month changes.
         *
         * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
         */
        this.navigate = new EventEmitter();
        /**
         * An event emitted when user selects a date using keyboard or mouse.
         *
         * The payload of the event is currently selected `NgbDate`.
         *
         * @since 5.2.0
         */
        this.dateSelect = new EventEmitter();
        this.onChange = (_) => { };
        this.onTouched = () => { };
        const cd = inject(ChangeDetectorRef);
        this._service.dateSelect$.pipe(takeUntilDestroyed()).subscribe((date) => {
            this.dateSelect.emit(date);
        });
        this._service.model$.pipe(takeUntilDestroyed()).subscribe((model) => {
            const newDate = model.firstDate;
            const oldDate = this.model ? this.model.firstDate : null;
            // update public state
            this._publicState = {
                maxDate: model.maxDate,
                minDate: model.minDate,
                firstDate: model.firstDate,
                lastDate: model.lastDate,
                focusedDate: model.focusDate,
                months: model.months.map((viewModel) => viewModel.firstDate),
            };
            let navigationPrevented = false;
            // emitting navigation event if the first month changes
            if (!newDate.equals(oldDate)) {
                this.navigate.emit({
                    current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
                    next: { year: newDate.year, month: newDate.month },
                    preventDefault: () => (navigationPrevented = true),
                });
                // can't prevent the very first navigation
                if (navigationPrevented && oldDate !== null) {
                    this._service.open(oldDate);
                    return;
                }
            }
            const newSelectedDate = model.selectedDate;
            const newFocusedDate = model.focusDate;
            const oldFocusedDate = this.model ? this.model.focusDate : null;
            this.model = model;
            // handling selection change
            if (isChangedDate(newSelectedDate, this._controlValue)) {
                this._controlValue = newSelectedDate;
                this.onTouched();
                this.onChange(this._ngbDateAdapter.toModel(newSelectedDate));
            }
            // handling focus change
            if (isChangedDate(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
                this.focus();
            }
            cd.markForCheck();
        });
    }
    /**
     *  Returns the readonly public state of the datepicker
     *
     * @since 5.2.0
     */
    get state() {
        return this._publicState;
    }
    /**
     *  Returns the calendar service used in the specific datepicker instance.
     *
     *  @since 5.3.0
     */
    get calendar() {
        return this._calendar;
    }
    /**
     * Returns the i18n service used in the specific datepicker instance.
     *
     * @since 14.2.0
     */
    get i18n() {
        return this._i18n;
    }
    /**
     *  Focuses on given date.
     */
    focusDate(date) {
        this._service.focus(NgbDate.from(date));
    }
    /**
     *  Selects focused date.
     */
    focusSelect() {
        this._service.focusSelect();
    }
    focus() {
        afterNextRender(() => {
            this._nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]')?.focus();
        }, { phase: AfterRenderPhase.Read, injector: this._injector });
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
        this._service.open(NgbDate.from(date ? (date.day ? date : { ...date, day: 1 }) : null));
    }
    ngAfterViewInit() {
        this._ngZone.runOutsideAngular(() => {
            const focusIns$ = fromEvent(this._contentEl.nativeElement, 'focusin');
            const focusOuts$ = fromEvent(this._contentEl.nativeElement, 'focusout');
            // we're changing 'focusVisible' only when entering or leaving months view
            // and ignoring all focus events where both 'target' and 'related' target are day cells
            merge(focusIns$, focusOuts$)
                .pipe(filter((focusEvent) => {
                const target = focusEvent.target;
                const relatedTarget = focusEvent.relatedTarget;
                return !(target?.classList.contains('ngb-dp-day') &&
                    relatedTarget?.classList.contains('ngb-dp-day') &&
                    this._nativeElement.contains(target) &&
                    this._nativeElement.contains(relatedTarget));
            }), takeUntilDestroyed(this._destroyRef))
                .subscribe(({ type }) => this._ngZone.run(() => this._service.set({ focusVisible: type === 'focusin' })));
        });
    }
    ngOnInit() {
        if (this.model === undefined) {
            const inputs = {};
            [
                'dayTemplateData',
                'displayMonths',
                'markDisabled',
                'firstDayOfWeek',
                'navigation',
                'minDate',
                'maxDate',
                'outsideDays',
                'weekdays',
            ].forEach((name) => (inputs[name] = this[name]));
            this._service.set(inputs);
            this.navigateTo(this.startDate);
        }
        if (!this.dayTemplate) {
            this.dayTemplate = this._defaultDayTemplate;
        }
    }
    ngOnChanges(changes) {
        const inputs = {};
        [
            'dayTemplateData',
            'displayMonths',
            'markDisabled',
            'firstDayOfWeek',
            'navigation',
            'minDate',
            'maxDate',
            'outsideDays',
            'weekdays',
        ]
            .filter((name) => name in changes)
            .forEach((name) => (inputs[name] = this[name]));
        this._service.set(inputs);
        if ('startDate' in changes) {
            const { currentValue, previousValue } = changes.startDate;
            if (isChangedMonth(previousValue, currentValue)) {
                this.navigateTo(this.startDate);
            }
        }
    }
    onDateSelect(date) {
        this._service.focus(date);
        this._service.select(date, { emitEvent: true });
    }
    onNavigateDateSelect(date) {
        this._service.open(date);
    }
    onNavigateEvent(event) {
        switch (event) {
            case NavigationEvent.PREV:
                this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
                break;
            case NavigationEvent.NEXT:
                this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
                break;
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this._service.set({ disabled });
    }
    writeValue(value) {
        this._controlValue = NgbDate.from(this._ngbDateAdapter.fromModel(value));
        this._service.select(this._controlValue);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepicker, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.2", type: NgbDatepicker, isStandalone: true, selector: "ngb-datepicker", inputs: { contentTemplate: "contentTemplate", dayTemplate: "dayTemplate", dayTemplateData: "dayTemplateData", displayMonths: "displayMonths", firstDayOfWeek: "firstDayOfWeek", footerTemplate: "footerTemplate", markDisabled: "markDisabled", maxDate: "maxDate", minDate: "minDate", navigation: "navigation", outsideDays: "outsideDays", showWeekNumbers: "showWeekNumbers", startDate: "startDate", weekdays: "weekdays" }, outputs: { navigate: "navigate", dateSelect: "dateSelect" }, host: { properties: { "class.disabled": "model.disabled" } }, providers: [
            { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbDatepicker), multi: true },
            NgbDatepickerService,
        ], queries: [{ propertyName: "contentTemplateFromContent", first: true, predicate: NgbDatepickerContent, descendants: true, static: true }], viewQueries: [{ propertyName: "_defaultDayTemplate", first: true, predicate: ["defaultDayTemplate"], descendants: true, static: true }, { propertyName: "_contentEl", first: true, predicate: ["content"], descendants: true, static: true }], exportAs: ["ngbDatepicker"], usesOnChanges: true, ngImport: i0, template: `
		<ng-template
			#defaultDayTemplate
			let-date="date"
			let-currentMonth="currentMonth"
			let-selected="selected"
			let-disabled="disabled"
			let-focused="focused"
		>
			<div
				ngbDatepickerDayView
				[date]="date"
				[currentMonth]="currentMonth"
				[selected]="selected"
				[disabled]="disabled"
				[focused]="focused"
			>
			</div>
		</ng-template>

		<ng-template #defaultContentTemplate>
			@for (month of model.months; track month) {
				<div class="ngb-dp-month">
					@if (navigation === 'none' || (displayMonths > 1 && navigation === 'select')) {
						<div class="ngb-dp-month-name">
							{{ i18n.getMonthLabel(month.firstDate) }}
						</div>
					}
					<ngb-datepicker-month [month]="month.firstDate" />
				</div>
			}
		</ng-template>

		<div class="ngb-dp-header">
			@if (navigation !== 'none') {
				<ngb-datepicker-navigation
					[date]="model.firstDate!"
					[months]="model.months"
					[disabled]="model.disabled"
					[showSelect]="model.navigation === 'select'"
					[prevDisabled]="model.prevDisabled"
					[nextDisabled]="model.nextDisabled"
					[selectBoxes]="model.selectBoxes"
					(navigate)="onNavigateEvent($event)"
					(select)="onNavigateDateSelect($event)"
				/>
			}
		</div>

		<div class="ngb-dp-content" [class.ngb-dp-months]="!contentTemplate" #content>
			<ng-template
				[ngTemplateOutlet]="contentTemplate || contentTemplateFromContent?.templateRef || defaultContentTemplate"
				[ngTemplateOutletContext]="{ $implicit: this }"
				[ngTemplateOutletInjector]="injector"
			/>
		</div>

		<ng-template [ngTemplateOutlet]="footerTemplate" />
	`, isInline: true, styles: ["ngb-datepicker{border:1px solid var(--bs-border-color);border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}ngb-datepicker.disabled .ngb-dp-weekday,ngb-datepicker.disabled .ngb-dp-week-number,ngb-datepicker.disabled .ngb-dp-month-name{color:var(--bs-text-muted)}.ngb-dp-body{z-index:1055}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:var(--bs-tertiary-bg)}.ngb-dp-months{display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:var(--bs-tertiary-bg)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}\n"], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NgbDatepickerDayView, selector: "[ngbDatepickerDayView]", inputs: ["currentMonth", "date", "disabled", "focused", "selected"] }, { kind: "component", type: NgbDatepickerMonth, selector: "ngb-datepicker-month", inputs: ["month"] }, { kind: "component", type: NgbDatepickerNavigation, selector: "ngb-datepicker-navigation", inputs: ["date", "disabled", "months", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes"], outputs: ["navigate", "select"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepicker, decorators: [{
            type: Component,
            args: [{ exportAs: 'ngbDatepicker', selector: 'ngb-datepicker', standalone: true, imports: [NgTemplateOutlet, NgbDatepickerDayView, NgbDatepickerMonth, NgbDatepickerNavigation], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.disabled]': 'model.disabled',
                    }, template: `
		<ng-template
			#defaultDayTemplate
			let-date="date"
			let-currentMonth="currentMonth"
			let-selected="selected"
			let-disabled="disabled"
			let-focused="focused"
		>
			<div
				ngbDatepickerDayView
				[date]="date"
				[currentMonth]="currentMonth"
				[selected]="selected"
				[disabled]="disabled"
				[focused]="focused"
			>
			</div>
		</ng-template>

		<ng-template #defaultContentTemplate>
			@for (month of model.months; track month) {
				<div class="ngb-dp-month">
					@if (navigation === 'none' || (displayMonths > 1 && navigation === 'select')) {
						<div class="ngb-dp-month-name">
							{{ i18n.getMonthLabel(month.firstDate) }}
						</div>
					}
					<ngb-datepicker-month [month]="month.firstDate" />
				</div>
			}
		</ng-template>

		<div class="ngb-dp-header">
			@if (navigation !== 'none') {
				<ngb-datepicker-navigation
					[date]="model.firstDate!"
					[months]="model.months"
					[disabled]="model.disabled"
					[showSelect]="model.navigation === 'select'"
					[prevDisabled]="model.prevDisabled"
					[nextDisabled]="model.nextDisabled"
					[selectBoxes]="model.selectBoxes"
					(navigate)="onNavigateEvent($event)"
					(select)="onNavigateDateSelect($event)"
				/>
			}
		</div>

		<div class="ngb-dp-content" [class.ngb-dp-months]="!contentTemplate" #content>
			<ng-template
				[ngTemplateOutlet]="contentTemplate || contentTemplateFromContent?.templateRef || defaultContentTemplate"
				[ngTemplateOutletContext]="{ $implicit: this }"
				[ngTemplateOutletInjector]="injector"
			/>
		</div>

		<ng-template [ngTemplateOutlet]="footerTemplate" />
	`, providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbDatepicker), multi: true },
                        NgbDatepickerService,
                    ], styles: ["ngb-datepicker{border:1px solid var(--bs-border-color);border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}ngb-datepicker.disabled .ngb-dp-weekday,ngb-datepicker.disabled .ngb-dp-week-number,ngb-datepicker.disabled .ngb-dp-month-name{color:var(--bs-text-muted)}.ngb-dp-body{z-index:1055}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:var(--bs-tertiary-bg)}.ngb-dp-months{display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:var(--bs-tertiary-bg)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}\n"] }]
        }], ctorParameters: () => [], propDecorators: { _defaultDayTemplate: [{
                type: ViewChild,
                args: ['defaultDayTemplate', { static: true }]
            }], _contentEl: [{
                type: ViewChild,
                args: ['content', { static: true }]
            }], contentTemplate: [{
                type: Input
            }], contentTemplateFromContent: [{
                type: ContentChild,
                args: [NgbDatepickerContent, { static: true }]
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
            }], maxDate: [{
                type: Input
            }], minDate: [{
                type: Input
            }], navigation: [{
                type: Input
            }], outsideDays: [{
                type: Input
            }], showWeekNumbers: [{
                type: Input
            }], startDate: [{
                type: Input
            }], weekdays: [{
                type: Input
            }], navigate: [{
                type: Output
            }], dateSelect: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRlcGlja2VyL2RhdGVwaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFDTixlQUFlLEVBQ2YsZ0JBQWdCLEVBRWhCLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBRU4sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFBMkIsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRixPQUFPLEVBQXFELGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTdHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztB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QUFLO2dCQVdHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBS0csZUFBZTtzQkFBdkIsS0FBSztnQkFVRyxTQUFTO3NCQUFqQixLQUFLO2dCQVdHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBT0ksUUFBUTtzQkFBakIsTUFBTTtnQkFTRyxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcblx0YWZ0ZXJOZXh0UmVuZGVyLFxuXHRBZnRlclJlbmRlclBoYXNlLFxuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREZXN0cm95UmVmLFxuXHREaXJlY3RpdmUsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0Zm9yd2FyZFJlZixcblx0aW5qZWN0LFxuXHRJbmplY3Rvcixcblx0SW5wdXQsXG5cdE5nWm9uZSxcblx0T25DaGFuZ2VzLFxuXHRPbkluaXQsXG5cdE91dHB1dCxcblx0U2ltcGxlQ2hhbmdlcyxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdUZW1wbGF0ZU91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5cbmltcG9ydCB7IE5nYkNhbGVuZGFyIH0gZnJvbSAnLi9uZ2ItY2FsZW5kYXInO1xuaW1wb3J0IHsgTmdiRGF0ZSB9IGZyb20gJy4vbmdiLWRhdGUnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlclNlcnZpY2VJbnB1dHMsIE5nYkRhdGVwaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi9kYXRlcGlja2VyLXNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlclZpZXdNb2RlbCwgRGF5Vmlld01vZGVsLCBNb250aFZpZXdNb2RlbCwgTmF2aWdhdGlvbkV2ZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgRGF5VGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi9kYXRlcGlja2VyLWRheS10ZW1wbGF0ZS1jb250ZXh0JztcbmltcG9ydCB7IE5nYkRhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGVwaWNrZXItY29uZmlnJztcbmltcG9ydCB7IE5nYkRhdGVBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVycy9uZ2ItZGF0ZS1hZGFwdGVyJztcbmltcG9ydCB7IE5nYkRhdGVTdHJ1Y3QgfSBmcm9tICcuL25nYi1kYXRlLXN0cnVjdCc7XG5pbXBvcnQgeyBOZ2JEYXRlcGlja2VySTE4biB9IGZyb20gJy4vZGF0ZXBpY2tlci1pMThuJztcbmltcG9ydCB7IE5nYkRhdGVwaWNrZXJLZXlib2FyZFNlcnZpY2UgfSBmcm9tICcuL2RhdGVwaWNrZXIta2V5Ym9hcmQtc2VydmljZSc7XG5pbXBvcnQgeyBpc0NoYW5nZWREYXRlLCBpc0NoYW5nZWRNb250aCB9IGZyb20gJy4vZGF0ZXBpY2tlci10b29scyc7XG5pbXBvcnQgeyBOZ2JEYXRlcGlja2VyRGF5VmlldyB9IGZyb20gJy4vZGF0ZXBpY2tlci1kYXktdmlldyc7XG5pbXBvcnQgeyBOZ2JEYXRlcGlja2VyTmF2aWdhdGlvbiB9IGZyb20gJy4vZGF0ZXBpY2tlci1uYXZpZ2F0aW9uJztcbmltcG9ydCB7IENvbnRlbnRUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuL2RhdGVwaWNrZXItY29udGVudC10ZW1wbGF0ZS1jb250ZXh0JztcblxuLyoqXG4gKiBBbiBldmVudCBlbWl0dGVkIHJpZ2h0IGJlZm9yZSB0aGUgbmF2aWdhdGlvbiBoYXBwZW5zIGFuZCB0aGUgbW9udGggZGlzcGxheWVkIGJ5IHRoZSBkYXRlcGlja2VyIGNoYW5nZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiRGF0ZXBpY2tlck5hdmlnYXRlRXZlbnQge1xuXHQvKipcblx0ICogVGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgbW9udGguXG5cdCAqL1xuXHRjdXJyZW50OiB7IHllYXI6IG51bWJlcjsgbW9udGg6IG51bWJlciB9IHwgbnVsbDtcblxuXHQvKipcblx0ICogVGhlIG1vbnRoIHdlJ3JlIG5hdmlnYXRpbmcgdG8uXG5cdCAqL1xuXHRuZXh0OiB7IHllYXI6IG51bWJlcjsgbW9udGg6IG51bWJlciB9O1xuXG5cdC8qKlxuXHQgKiBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBwcmV2ZW50IG5hdmlnYXRpb24gZnJvbSBoYXBwZW5pbmcuXG5cdCAqXG5cdCAqIEBzaW5jZSA0LjEuMFxuXHQgKi9cblx0cHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogQW4gaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVhZG9ubHkgcHVibGljIHN0YXRlIG9mIHRoZSBkYXRlcGlja2VyLlxuICpcbiAqIEFjY2Vzc2libGUgdmlhIHRoZSBgZGF0ZXBpY2tlci5zdGF0ZWAgZ2V0dGVyXG4gKlxuICogQHNpbmNlIDUuMi4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiRGF0ZXBpY2tlclN0YXRlIHtcblx0LyoqXG5cdCAqIFRoZSBlYXJsaWVzdCBkYXRlIHRoYXQgY2FuIGJlIGRpc3BsYXllZCBvciBzZWxlY3RlZFxuXHQgKi9cblx0cmVhZG9ubHkgbWluRGF0ZTogTmdiRGF0ZSB8IG51bGw7XG5cblx0LyoqXG5cdCAqIFRoZSBsYXRlc3QgZGF0ZSB0aGF0IGNhbiBiZSBkaXNwbGF5ZWQgb3Igc2VsZWN0ZWRcblx0ICovXG5cdHJlYWRvbmx5IG1heERhdGU6IE5nYkRhdGUgfCBudWxsO1xuXG5cdC8qKlxuXHQgKiBUaGUgZmlyc3QgdmlzaWJsZSBkYXRlIG9mIGN1cnJlbnRseSBkaXNwbGF5ZWQgbW9udGhzXG5cdCAqL1xuXHRyZWFkb25seSBmaXJzdERhdGU6IE5nYkRhdGU7XG5cblx0LyoqXG5cdCAqIFRoZSBsYXN0IHZpc2libGUgZGF0ZSBvZiBjdXJyZW50bHkgZGlzcGxheWVkIG1vbnRoc1xuXHQgKi9cblx0cmVhZG9ubHkgbGFzdERhdGU6IE5nYkRhdGU7XG5cblx0LyoqXG5cdCAqIFRoZSBkYXRlIGN1cnJlbnRseSBmb2N1c2VkIGJ5IHRoZSBkYXRlcGlja2VyXG5cdCAqL1xuXHRyZWFkb25seSBmb2N1c2VkRGF0ZTogTmdiRGF0ZTtcblxuXHQvKipcblx0ICogRmlyc3QgZGF0ZXMgb2YgbW9udGhzIGN1cnJlbnRseSBkaXNwbGF5ZWQgYnkgdGhlIGRhdGVwaWNrZXJcblx0ICpcblx0ICogQHNpbmNlIDUuMy4wXG5cdCAqL1xuXHRyZWFkb25seSBtb250aHM6IE5nYkRhdGVbXTtcbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IG1hcmtzIHRoZSBjb250ZW50IHRlbXBsYXRlIHRoYXQgY3VzdG9taXplcyB0aGUgd2F5IGRhdGVwaWNrZXIgbW9udGhzIGFyZSBkaXNwbGF5ZWRcbiAqXG4gKiBAc2luY2UgNS4zLjBcbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbmdiRGF0ZXBpY2tlckNvbnRlbnRdJywgc3RhbmRhbG9uZTogdHJ1ZSB9KVxuZXhwb3J0IGNsYXNzIE5nYkRhdGVwaWNrZXJDb250ZW50IHtcblx0dGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWYpO1xufVxuXG4vKipcbiAqIEEgY29tcG9uZW50IHRoYXQgcmVuZGVycyBvbmUgbW9udGggaW5jbHVkaW5nIGFsbCB0aGUgZGF5cywgd2Vla2RheXMgYW5kIHdlZWsgbnVtYmVycy4gQ2FuIGJlIHVzZWQgaW5zaWRlXG4gKiB0aGUgYDxuZy10ZW1wbGF0ZSBuZ2JEYXRlcGlja2VyTW9udGhzPjwvbmctdGVtcGxhdGU+YCB3aGVuIHlvdSB3YW50IHRvIGN1c3RvbWl6ZSBtb250aHMgbGF5b3V0LlxuICpcbiAqIEZvciBhIHVzYWdlIGV4YW1wbGUsIHNlZSBbY3VzdG9tIG1vbnRoIGxheW91dCBkZW1vXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9leGFtcGxlcyNjdXN0b21tb250aClcbiAqXG4gKiBAc2luY2UgNS4zLjBcbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmdiLWRhdGVwaWNrZXItbW9udGgnLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbTmdUZW1wbGF0ZU91dGxldF0sXG5cdGhvc3Q6IHtcblx0XHRyb2xlOiAnZ3JpZCcsXG5cdFx0JyhrZXlkb3duKSc6ICdvbktleURvd24oJGV2ZW50KScsXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHN0eWxlVXJsOiAnLi9kYXRlcGlja2VyLW1vbnRoLnNjc3MnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdEBpZiAodmlld01vZGVsLndlZWtkYXlzLmxlbmd0aCA+IDApIHtcblx0XHRcdDxkaXYgY2xhc3M9XCJuZ2ItZHAtd2VlayBuZ2ItZHAtd2Vla2RheXNcIiByb2xlPVwicm93XCI+XG5cdFx0XHRcdEBpZiAoZGF0ZXBpY2tlci5zaG93V2Vla051bWJlcnMpIHtcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmdiLWRwLXdlZWtkYXkgbmdiLWRwLXNob3d3ZWVrIHNtYWxsXCI+e3sgaTE4bi5nZXRXZWVrTGFiZWwoKSB9fTwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdEBmb3IgKHdlZWtkYXkgb2Ygdmlld01vZGVsLndlZWtkYXlzOyB0cmFjayAkaW5kZXgpIHtcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmdiLWRwLXdlZWtkYXkgc21hbGxcIiByb2xlPVwiY29sdW1uaGVhZGVyXCI+e3sgd2Vla2RheSB9fTwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHR9XG5cdFx0QGZvciAod2VlayBvZiB2aWV3TW9kZWwud2Vla3M7IHRyYWNrIHdlZWspIHtcblx0XHRcdEBpZiAoIXdlZWsuY29sbGFwc2VkKSB7XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuZ2ItZHAtd2Vla1wiIHJvbGU9XCJyb3dcIj5cblx0XHRcdFx0XHRAaWYgKGRhdGVwaWNrZXIuc2hvd1dlZWtOdW1iZXJzKSB7XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmdiLWRwLXdlZWstbnVtYmVyIHNtYWxsIHRleHQtbXV0ZWRcIj57eyBpMThuLmdldFdlZWtOdW1lcmFscyh3ZWVrLm51bWJlcikgfX08L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0QGZvciAoZGF5IG9mIHdlZWsuZGF5czsgdHJhY2sgZGF5KSB7XG5cdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdChjbGljayk9XCJkb1NlbGVjdChkYXkpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwibmdiLWRwLWRheVwiXG5cdFx0XHRcdFx0XHRcdHJvbGU9XCJncmlkY2VsbFwiXG5cdFx0XHRcdFx0XHRcdFtjbGFzcy5kaXNhYmxlZF09XCJkYXkuY29udGV4dC5kaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHRcdFt0YWJpbmRleF09XCJkYXkudGFiaW5kZXhcIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3MuaGlkZGVuXT1cImRheS5oaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3MubmdiLWRwLXRvZGF5XT1cImRheS5jb250ZXh0LnRvZGF5XCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJkYXkuYXJpYUxhYmVsXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0QGlmICghZGF5LmhpZGRlbikge1xuXHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJkYXRlcGlja2VyLmRheVRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImRheS5jb250ZXh0XCIgLz5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHR9XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIE5nYkRhdGVwaWNrZXJNb250aCB7XG5cdHByaXZhdGUgX2tleWJvYXJkU2VydmljZSA9IGluamVjdChOZ2JEYXRlcGlja2VyS2V5Ym9hcmRTZXJ2aWNlKTtcblx0cHJpdmF0ZSBfc2VydmljZSA9IGluamVjdChOZ2JEYXRlcGlja2VyU2VydmljZSk7XG5cblx0aTE4biA9IGluamVjdChOZ2JEYXRlcGlja2VySTE4bik7XG5cdGRhdGVwaWNrZXIgPSBpbmplY3QoTmdiRGF0ZXBpY2tlcik7XG5cblx0dmlld01vZGVsOiBNb250aFZpZXdNb2RlbDtcblxuXHQvKipcblx0ICogVGhlIGZpcnN0IGRhdGUgb2YgbW9udGggdG8gYmUgcmVuZGVyZWQuXG5cdCAqXG5cdCAqIFRoaXMgbW9udGggbXVzdCBvbmUgb2YgdGhlIG1vbnRocyBwcmVzZW50IGluIHRoZVxuXHQgKiBbZGF0ZXBpY2tlciBzdGF0ZV0oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvYXBpI05nYkRhdGVwaWNrZXJTdGF0ZSkuXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRzZXQgbW9udGgobW9udGg6IE5nYkRhdGVTdHJ1Y3QpIHtcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHRoaXMuX3NlcnZpY2UuZ2V0TW9udGgobW9udGgpO1xuXHR9XG5cblx0b25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG5cdFx0dGhpcy5fa2V5Ym9hcmRTZXJ2aWNlLnByb2Nlc3NLZXkoZXZlbnQsIHRoaXMuZGF0ZXBpY2tlcik7XG5cdH1cblxuXHRkb1NlbGVjdChkYXk6IERheVZpZXdNb2RlbCkge1xuXHRcdGlmICghZGF5LmNvbnRleHQuZGlzYWJsZWQgJiYgIWRheS5oaWRkZW4pIHtcblx0XHRcdHRoaXMuZGF0ZXBpY2tlci5vbkRhdGVTZWxlY3QoZGF5LmRhdGUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEEgaGlnaGx5IGNvbmZpZ3VyYWJsZSBjb21wb25lbnQgdGhhdCBoZWxwcyB5b3Ugd2l0aCBzZWxlY3RpbmcgY2FsZW5kYXIgZGF0ZXMuXG4gKlxuICogYE5nYkRhdGVwaWNrZXJgIGlzIG1lYW50IHRvIGJlIGRpc3BsYXllZCBpbmxpbmUgb24gYSBwYWdlIG9yIHB1dCBpbnNpZGUgYSBwb3B1cC5cbiAqL1xuQENvbXBvbmVudCh7XG5cdGV4cG9ydEFzOiAnbmdiRGF0ZXBpY2tlcicsXG5cdHNlbGVjdG9yOiAnbmdiLWRhdGVwaWNrZXInLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbTmdUZW1wbGF0ZU91dGxldCwgTmdiRGF0ZXBpY2tlckRheVZpZXcsIE5nYkRhdGVwaWNrZXJNb250aCwgTmdiRGF0ZXBpY2tlck5hdmlnYXRpb25dLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0c3R5bGVVcmw6ICcuL2RhdGVwaWNrZXIuc2NzcycsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmRpc2FibGVkXSc6ICdtb2RlbC5kaXNhYmxlZCcsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlXG5cdFx0XHQjZGVmYXVsdERheVRlbXBsYXRlXG5cdFx0XHRsZXQtZGF0ZT1cImRhdGVcIlxuXHRcdFx0bGV0LWN1cnJlbnRNb250aD1cImN1cnJlbnRNb250aFwiXG5cdFx0XHRsZXQtc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiXG5cdFx0XHRsZXQtZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRsZXQtZm9jdXNlZD1cImZvY3VzZWRcIlxuXHRcdD5cblx0XHRcdDxkaXZcblx0XHRcdFx0bmdiRGF0ZXBpY2tlckRheVZpZXdcblx0XHRcdFx0W2RhdGVdPVwiZGF0ZVwiXG5cdFx0XHRcdFtjdXJyZW50TW9udGhdPVwiY3VycmVudE1vbnRoXCJcblx0XHRcdFx0W3NlbGVjdGVkXT1cInNlbGVjdGVkXCJcblx0XHRcdFx0W2Rpc2FibGVkXT1cImRpc2FibGVkXCJcblx0XHRcdFx0W2ZvY3VzZWRdPVwiZm9jdXNlZFwiXG5cdFx0XHQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNkZWZhdWx0Q29udGVudFRlbXBsYXRlPlxuXHRcdFx0QGZvciAobW9udGggb2YgbW9kZWwubW9udGhzOyB0cmFjayBtb250aCkge1xuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmdiLWRwLW1vbnRoXCI+XG5cdFx0XHRcdFx0QGlmIChuYXZpZ2F0aW9uID09PSAnbm9uZScgfHwgKGRpc3BsYXlNb250aHMgPiAxICYmIG5hdmlnYXRpb24gPT09ICdzZWxlY3QnKSkge1xuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm5nYi1kcC1tb250aC1uYW1lXCI+XG5cdFx0XHRcdFx0XHRcdHt7IGkxOG4uZ2V0TW9udGhMYWJlbChtb250aC5maXJzdERhdGUpIH19XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PG5nYi1kYXRlcGlja2VyLW1vbnRoIFttb250aF09XCJtb250aC5maXJzdERhdGVcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXG5cdFx0PGRpdiBjbGFzcz1cIm5nYi1kcC1oZWFkZXJcIj5cblx0XHRcdEBpZiAobmF2aWdhdGlvbiAhPT0gJ25vbmUnKSB7XG5cdFx0XHRcdDxuZ2ItZGF0ZXBpY2tlci1uYXZpZ2F0aW9uXG5cdFx0XHRcdFx0W2RhdGVdPVwibW9kZWwuZmlyc3REYXRlIVwiXG5cdFx0XHRcdFx0W21vbnRoc109XCJtb2RlbC5tb250aHNcIlxuXHRcdFx0XHRcdFtkaXNhYmxlZF09XCJtb2RlbC5kaXNhYmxlZFwiXG5cdFx0XHRcdFx0W3Nob3dTZWxlY3RdPVwibW9kZWwubmF2aWdhdGlvbiA9PT0gJ3NlbGVjdCdcIlxuXHRcdFx0XHRcdFtwcmV2RGlzYWJsZWRdPVwibW9kZWwucHJldkRpc2FibGVkXCJcblx0XHRcdFx0XHRbbmV4dERpc2FibGVkXT1cIm1vZGVsLm5leHREaXNhYmxlZFwiXG5cdFx0XHRcdFx0W3NlbGVjdEJveGVzXT1cIm1vZGVsLnNlbGVjdEJveGVzXCJcblx0XHRcdFx0XHQobmF2aWdhdGUpPVwib25OYXZpZ2F0ZUV2ZW50KCRldmVudClcIlxuXHRcdFx0XHRcdChzZWxlY3QpPVwib25OYXZpZ2F0ZURhdGVTZWxlY3QoJGV2ZW50KVwiXG5cdFx0XHRcdC8+XG5cdFx0XHR9XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwibmdiLWRwLWNvbnRlbnRcIiBbY2xhc3MubmdiLWRwLW1vbnRoc109XCIhY29udGVudFRlbXBsYXRlXCIgI2NvbnRlbnQ+XG5cdFx0XHQ8bmctdGVtcGxhdGVcblx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRlbXBsYXRlIHx8IGNvbnRlbnRUZW1wbGF0ZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZiB8fCBkZWZhdWx0Q29udGVudFRlbXBsYXRlXCJcblx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiB0aGlzIH1cIlxuXHRcdFx0XHRbbmdUZW1wbGF0ZU91dGxldEluamVjdG9yXT1cImluamVjdG9yXCJcblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cblx0XHQ8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiZm9vdGVyVGVtcGxhdGVcIiAvPlxuXHRgLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ2JEYXRlcGlja2VyKSwgbXVsdGk6IHRydWUgfSxcblx0XHROZ2JEYXRlcGlja2VyU2VydmljZSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgTmdiRGF0ZXBpY2tlciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cdHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hdXRvQ2xvc2U6IGJvb2xlYW4gfCBzdHJpbmc7XG5cdHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uYXZpZ2F0aW9uOiBzdHJpbmc7XG5cdHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9vdXRzaWRlRGF5czogc3RyaW5nO1xuXHRzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfd2Vla2RheXM6IGJvb2xlYW4gfCBzdHJpbmc7XG5cblx0bW9kZWw6IERhdGVwaWNrZXJWaWV3TW9kZWw7XG5cblx0QFZpZXdDaGlsZCgnZGVmYXVsdERheVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBfZGVmYXVsdERheVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxEYXlUZW1wbGF0ZUNvbnRleHQ+O1xuXHRAVmlld0NoaWxkKCdjb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBfY29udGVudEVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuXHRwcm90ZWN0ZWQgaW5qZWN0b3IgPSBpbmplY3QoSW5qZWN0b3IpO1xuXG5cdHByaXZhdGUgX3NlcnZpY2UgPSBpbmplY3QoTmdiRGF0ZXBpY2tlclNlcnZpY2UpO1xuXHRwcml2YXRlIF9jYWxlbmRhciA9IGluamVjdChOZ2JDYWxlbmRhcik7XG5cdHByaXZhdGUgX2kxOG4gPSBpbmplY3QoTmdiRGF0ZXBpY2tlckkxOG4pO1xuXHRwcml2YXRlIF9jb25maWcgPSBpbmplY3QoTmdiRGF0ZXBpY2tlckNvbmZpZyk7XG5cdHByaXZhdGUgX25hdGl2ZUVsZW1lbnQgPSBpbmplY3QoRWxlbWVudFJlZikubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcblx0cHJpdmF0ZSBfbmdiRGF0ZUFkYXB0ZXIgPSBpbmplY3QoTmdiRGF0ZUFkYXB0ZXI8YW55Pik7XG5cdHByaXZhdGUgX25nWm9uZSA9IGluamVjdChOZ1pvbmUpO1xuXHRwcml2YXRlIF9kZXN0cm95UmVmID0gaW5qZWN0KERlc3Ryb3lSZWYpO1xuXHRwcml2YXRlIF9pbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cblx0cHJpdmF0ZSBfY29udHJvbFZhbHVlOiBOZ2JEYXRlIHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgX3B1YmxpY1N0YXRlOiBOZ2JEYXRlcGlja2VyU3RhdGUgPSA8YW55Pnt9O1xuXG5cdC8qKlxuXHQgKiBUaGUgcmVmZXJlbmNlIHRvIGEgY3VzdG9tIGNvbnRlbnQgdGVtcGxhdGUuXG5cdCAqXG5cdCAqIEFsbG93cyB0byBjb21wbGV0ZWx5IG92ZXJyaWRlIHRoZSB3YXkgZGF0ZXBpY2tlciBkaXNwbGF5cyBtb250aHMuXG5cdCAqXG5cdCAqIFNlZSBbYE5nYkRhdGVwaWNrZXJDb250ZW50YF0oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvYXBpI05nYkRhdGVwaWNrZXJDb250ZW50KSBhbmRcblx0ICogW2BDb250ZW50VGVtcGxhdGVDb250ZXh0YF0oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvYXBpI0NvbnRlbnRUZW1wbGF0ZUNvbnRleHQpIGZvciBtb3JlIGRldGFpbHMuXG5cdCAqXG5cdCAqIEBzaW5jZSAxNC4yLjBcblx0ICovXG5cdEBJbnB1dCgpIGNvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8Q29udGVudFRlbXBsYXRlQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoTmdiRGF0ZXBpY2tlckNvbnRlbnQsIHsgc3RhdGljOiB0cnVlIH0pIGNvbnRlbnRUZW1wbGF0ZUZyb21Db250ZW50PzogTmdiRGF0ZXBpY2tlckNvbnRlbnQ7XG5cblx0LyoqXG5cdCAqIFRoZSByZWZlcmVuY2UgdG8gYSBjdXN0b20gdGVtcGxhdGUgZm9yIHRoZSBkYXkuXG5cdCAqXG5cdCAqIEFsbG93cyB0byBjb21wbGV0ZWx5IG92ZXJyaWRlIHRoZSB3YXkgYSBkYXkgJ2NlbGwnIGluIHRoZSBjYWxlbmRhciBpcyBkaXNwbGF5ZWQuXG5cdCAqXG5cdCAqIFNlZSBbYERheVRlbXBsYXRlQ29udGV4dGBdKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL2FwaSNEYXlUZW1wbGF0ZUNvbnRleHQpIGZvciB0aGUgZGF0YSB5b3UgZ2V0IGluc2lkZS5cblx0ICovXG5cdEBJbnB1dCgpIGRheVRlbXBsYXRlID0gdGhpcy5fY29uZmlnLmRheVRlbXBsYXRlO1xuXG5cdC8qKlxuXHQgKiBUaGUgY2FsbGJhY2sgdG8gcGFzcyBhbnkgYXJiaXRyYXJ5IGRhdGEgdG8gdGhlIHRlbXBsYXRlIGNlbGwgdmlhIHRoZVxuXHQgKiBbYERheVRlbXBsYXRlQ29udGV4dGBdKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL2FwaSNEYXlUZW1wbGF0ZUNvbnRleHQpJ3MgYGRhdGFgIHBhcmFtZXRlci5cblx0ICpcblx0ICogYGN1cnJlbnRgIGlzIHRoZSBtb250aCB0aGF0IGlzIGN1cnJlbnRseSBkaXNwbGF5ZWQgYnkgdGhlIGRhdGVwaWNrZXIuXG5cdCAqXG5cdCAqIEBzaW5jZSAzLjMuMFxuXHQgKi9cblx0QElucHV0KCkgZGF5VGVtcGxhdGVEYXRhID0gdGhpcy5fY29uZmlnLmRheVRlbXBsYXRlRGF0YTtcblxuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBtb250aHMgdG8gZGlzcGxheS5cblx0ICovXG5cdEBJbnB1dCgpIGRpc3BsYXlNb250aHMgPSB0aGlzLl9jb25maWcuZGlzcGxheU1vbnRocztcblxuXHQvKipcblx0ICogVGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cblx0ICpcblx0ICogV2l0aCBkZWZhdWx0IGNhbGVuZGFyIHdlIHVzZSBJU08gODYwMTogJ3dlZWtkYXknIGlzIDE9TW9uIC4uLiA3PVN1bi5cblx0ICovXG5cdEBJbnB1dCgpIGZpcnN0RGF5T2ZXZWVrID0gdGhpcy5fY29uZmlnLmZpcnN0RGF5T2ZXZWVrO1xuXG5cdC8qKlxuXHQgKiBUaGUgcmVmZXJlbmNlIHRvIHRoZSBjdXN0b20gdGVtcGxhdGUgZm9yIHRoZSBkYXRlcGlja2VyIGZvb3Rlci5cblx0ICpcblx0ICogQHNpbmNlIDMuMy4wXG5cdCAqL1xuXHRASW5wdXQoKSBmb290ZXJUZW1wbGF0ZSA9IHRoaXMuX2NvbmZpZy5mb290ZXJUZW1wbGF0ZTtcblxuXHQvKipcblx0ICogVGhlIGNhbGxiYWNrIHRvIG1hcmsgc29tZSBkYXRlcyBhcyBkaXNhYmxlZC5cblx0ICpcblx0ICogSXQgaXMgY2FsbGVkIGZvciBlYWNoIG5ldyBkYXRlIHdoZW4gbmF2aWdhdGluZyB0byBhIGRpZmZlcmVudCBtb250aC5cblx0ICpcblx0ICogYGN1cnJlbnRgIGlzIHRoZSBtb250aCB0aGF0IGlzIGN1cnJlbnRseSBkaXNwbGF5ZWQgYnkgdGhlIGRhdGVwaWNrZXIuXG5cdCAqL1xuXHRASW5wdXQoKSBtYXJrRGlzYWJsZWQgPSB0aGlzLl9jb25maWcubWFya0Rpc2FibGVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbGF0ZXN0IGRhdGUgdGhhdCBjYW4gYmUgZGlzcGxheWVkIG9yIHNlbGVjdGVkLlxuXHQgKlxuXHQgKiBJZiBub3QgcHJvdmlkZWQsICd5ZWFyJyBzZWxlY3QgYm94IHdpbGwgZGlzcGxheSAxMCB5ZWFycyBhZnRlciB0aGUgY3VycmVudCBtb250aC5cblx0ICovXG5cdEBJbnB1dCgpIG1heERhdGUgPSB0aGlzLl9jb25maWcubWF4RGF0ZTtcblxuXHQvKipcblx0ICogVGhlIGVhcmxpZXN0IGRhdGUgdGhhdCBjYW4gYmUgZGlzcGxheWVkIG9yIHNlbGVjdGVkLlxuXHQgKlxuXHQgKiBJZiBub3QgcHJvdmlkZWQsICd5ZWFyJyBzZWxlY3QgYm94IHdpbGwgZGlzcGxheSAxMCB5ZWFycyBiZWZvcmUgdGhlIGN1cnJlbnQgbW9udGguXG5cdCAqL1xuXHRASW5wdXQoKSBtaW5EYXRlID0gdGhpcy5fY29uZmlnLm1pbkRhdGU7XG5cblx0LyoqXG5cdCAqIE5hdmlnYXRpb24gdHlwZS5cblx0ICpcblx0ICogKiBgXCJzZWxlY3RcImAgLSBzZWxlY3QgYm94ZXMgZm9yIG1vbnRoIGFuZCBuYXZpZ2F0aW9uIGFycm93c1xuXHQgKiAqIGBcImFycm93c1wiYCAtIG9ubHkgbmF2aWdhdGlvbiBhcnJvd3Ncblx0ICogKiBgXCJub25lXCJgIC0gbm8gbmF2aWdhdGlvbiB2aXNpYmxlIGF0IGFsbFxuXHQgKi9cblx0QElucHV0KCkgbmF2aWdhdGlvbiA9IHRoaXMuX2NvbmZpZy5uYXZpZ2F0aW9uO1xuXG5cdC8qKlxuXHQgKiBUaGUgd2F5IG9mIGRpc3BsYXlpbmcgZGF5cyB0aGF0IGRvbid0IGJlbG9uZyB0byB0aGUgY3VycmVudCBtb250aC5cblx0ICpcblx0ICogKiBgXCJ2aXNpYmxlXCJgIC0gZGF5cyBhcmUgdmlzaWJsZVxuXHQgKiAqIGBcImhpZGRlblwiYCAtIGRheXMgYXJlIGhpZGRlbiwgd2hpdGUgc3BhY2UgcHJlc2VydmVkXG5cdCAqICogYFwiY29sbGFwc2VkXCJgIC0gZGF5cyBhcmUgY29sbGFwc2VkLCBzbyB0aGUgZGF0ZXBpY2tlciBoZWlnaHQgbWlnaHQgY2hhbmdlIGJldHdlZW4gbW9udGhzXG5cdCAqXG5cdCAqIEZvciB0aGUgMisgbW9udGhzIHZpZXcsIGRheXMgaW4gYmV0d2VlbiBtb250aHMgYXJlIG5ldmVyIHNob3duLlxuXHQgKi9cblx0QElucHV0KCkgb3V0c2lkZURheXMgPSB0aGlzLl9jb25maWcub3V0c2lkZURheXM7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgd2VlayBudW1iZXJzIHdpbGwgYmUgZGlzcGxheWVkLlxuXHQgKi9cblx0QElucHV0KCkgc2hvd1dlZWtOdW1iZXJzID0gdGhpcy5fY29uZmlnLnNob3dXZWVrTnVtYmVycztcblxuXHQvKipcblx0ICogVGhlIGRhdGUgdG8gb3BlbiBjYWxlbmRhciB3aXRoLlxuXHQgKlxuXHQgKiBXaXRoIHRoZSBkZWZhdWx0IGNhbGVuZGFyIHdlIHVzZSBJU08gODYwMTogJ21vbnRoJyBpcyAxPUphbiAuLi4gMTI9RGVjLlxuXHQgKiBJZiBub3RoaW5nIG9yIGludmFsaWQgZGF0ZSBpcyBwcm92aWRlZCwgY2FsZW5kYXIgd2lsbCBvcGVuIHdpdGggY3VycmVudCBtb250aC5cblx0ICpcblx0ICogWW91IGNvdWxkIHVzZSBgbmF2aWdhdGVUbyhkYXRlKWAgbWV0aG9kIGFzIGFuIGFsdGVybmF0aXZlLlxuXHQgKi9cblx0QElucHV0KCkgc3RhcnREYXRlID0gdGhpcy5fY29uZmlnLnN0YXJ0RGF0ZTtcblxuXHQvKipcblx0ICogVGhlIHdheSB3ZWVrZGF5cyBzaG91bGQgYmUgZGlzcGxheWVkLlxuXHQgKlxuXHQgKiAqIGB0cnVlYCAtIHdlZWtkYXlzIGFyZSBkaXNwbGF5ZWQgdXNpbmcgZGVmYXVsdCB3aWR0aFxuXHQgKiAqIGBmYWxzZWAgLSB3ZWVrZGF5cyBhcmUgbm90IGRpc3BsYXllZFxuXHQgKiAqIGBcInNob3J0XCIgfCBcImxvbmdcIiB8IFwibmFycm93XCJgIC0gd2Vla2RheXMgYXJlIGRpc3BsYXllZCB1c2luZyBzcGVjaWZpZWQgd2lkdGhcblx0ICpcblx0ICogQHNpbmNlIDkuMS4wXG5cdCAqL1xuXHRASW5wdXQoKSB3ZWVrZGF5cyA9IHRoaXMuX2NvbmZpZy53ZWVrZGF5cztcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCByaWdodCBiZWZvcmUgdGhlIG5hdmlnYXRpb24gaGFwcGVucyBhbmQgZGlzcGxheWVkIG1vbnRoIGNoYW5nZXMuXG5cdCAqXG5cdCAqIFNlZSBbYE5nYkRhdGVwaWNrZXJOYXZpZ2F0ZUV2ZW50YF0oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvYXBpI05nYkRhdGVwaWNrZXJOYXZpZ2F0ZUV2ZW50KSBmb3IgdGhlIHBheWxvYWQgaW5mby5cblx0ICovXG5cdEBPdXRwdXQoKSBuYXZpZ2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TmdiRGF0ZXBpY2tlck5hdmlnYXRlRXZlbnQ+KCk7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB1c2VyIHNlbGVjdHMgYSBkYXRlIHVzaW5nIGtleWJvYXJkIG9yIG1vdXNlLlxuXHQgKlxuXHQgKiBUaGUgcGF5bG9hZCBvZiB0aGUgZXZlbnQgaXMgY3VycmVudGx5IHNlbGVjdGVkIGBOZ2JEYXRlYC5cblx0ICpcblx0ICogQHNpbmNlIDUuMi4wXG5cdCAqL1xuXHRAT3V0cHV0KCkgZGF0ZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8TmdiRGF0ZT4oKTtcblxuXHRvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXHRvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRjb25zdCBjZCA9IGluamVjdChDaGFuZ2VEZXRlY3RvclJlZik7XG5cblx0XHR0aGlzLl9zZXJ2aWNlLmRhdGVTZWxlY3QkLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKCkpLnN1YnNjcmliZSgoZGF0ZSkgPT4ge1xuXHRcdFx0dGhpcy5kYXRlU2VsZWN0LmVtaXQoZGF0ZSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLl9zZXJ2aWNlLm1vZGVsJC5waXBlKHRha2VVbnRpbERlc3Ryb3llZCgpKS5zdWJzY3JpYmUoKG1vZGVsKSA9PiB7XG5cdFx0XHRjb25zdCBuZXdEYXRlID0gbW9kZWwuZmlyc3REYXRlITtcblx0XHRcdGNvbnN0IG9sZERhdGUgPSB0aGlzLm1vZGVsID8gdGhpcy5tb2RlbC5maXJzdERhdGUgOiBudWxsO1xuXG5cdFx0XHQvLyB1cGRhdGUgcHVibGljIHN0YXRlXG5cdFx0XHR0aGlzLl9wdWJsaWNTdGF0ZSA9IHtcblx0XHRcdFx0bWF4RGF0ZTogbW9kZWwubWF4RGF0ZSxcblx0XHRcdFx0bWluRGF0ZTogbW9kZWwubWluRGF0ZSxcblx0XHRcdFx0Zmlyc3REYXRlOiBtb2RlbC5maXJzdERhdGUhLFxuXHRcdFx0XHRsYXN0RGF0ZTogbW9kZWwubGFzdERhdGUhLFxuXHRcdFx0XHRmb2N1c2VkRGF0ZTogbW9kZWwuZm9jdXNEYXRlISxcblx0XHRcdFx0bW9udGhzOiBtb2RlbC5tb250aHMubWFwKCh2aWV3TW9kZWwpID0+IHZpZXdNb2RlbC5maXJzdERhdGUpLFxuXHRcdFx0fTtcblxuXHRcdFx0bGV0IG5hdmlnYXRpb25QcmV2ZW50ZWQgPSBmYWxzZTtcblx0XHRcdC8vIGVtaXR0aW5nIG5hdmlnYXRpb24gZXZlbnQgaWYgdGhlIGZpcnN0IG1vbnRoIGNoYW5nZXNcblx0XHRcdGlmICghbmV3RGF0ZS5lcXVhbHMob2xkRGF0ZSkpIHtcblx0XHRcdFx0dGhpcy5uYXZpZ2F0ZS5lbWl0KHtcblx0XHRcdFx0XHRjdXJyZW50OiBvbGREYXRlID8geyB5ZWFyOiBvbGREYXRlLnllYXIsIG1vbnRoOiBvbGREYXRlLm1vbnRoIH0gOiBudWxsLFxuXHRcdFx0XHRcdG5leHQ6IHsgeWVhcjogbmV3RGF0ZS55ZWFyLCBtb250aDogbmV3RGF0ZS5tb250aCB9LFxuXHRcdFx0XHRcdHByZXZlbnREZWZhdWx0OiAoKSA9PiAobmF2aWdhdGlvblByZXZlbnRlZCA9IHRydWUpLFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBjYW4ndCBwcmV2ZW50IHRoZSB2ZXJ5IGZpcnN0IG5hdmlnYXRpb25cblx0XHRcdFx0aWYgKG5hdmlnYXRpb25QcmV2ZW50ZWQgJiYgb2xkRGF0ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMuX3NlcnZpY2Uub3BlbihvbGREYXRlKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbmV3U2VsZWN0ZWREYXRlID0gbW9kZWwuc2VsZWN0ZWREYXRlO1xuXHRcdFx0Y29uc3QgbmV3Rm9jdXNlZERhdGUgPSBtb2RlbC5mb2N1c0RhdGU7XG5cdFx0XHRjb25zdCBvbGRGb2N1c2VkRGF0ZSA9IHRoaXMubW9kZWwgPyB0aGlzLm1vZGVsLmZvY3VzRGF0ZSA6IG51bGw7XG5cblx0XHRcdHRoaXMubW9kZWwgPSBtb2RlbDtcblxuXHRcdFx0Ly8gaGFuZGxpbmcgc2VsZWN0aW9uIGNoYW5nZVxuXHRcdFx0aWYgKGlzQ2hhbmdlZERhdGUobmV3U2VsZWN0ZWREYXRlLCB0aGlzLl9jb250cm9sVmFsdWUpKSB7XG5cdFx0XHRcdHRoaXMuX2NvbnRyb2xWYWx1ZSA9IG5ld1NlbGVjdGVkRGF0ZTtcblx0XHRcdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZSh0aGlzLl9uZ2JEYXRlQWRhcHRlci50b01vZGVsKG5ld1NlbGVjdGVkRGF0ZSkpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBoYW5kbGluZyBmb2N1cyBjaGFuZ2Vcblx0XHRcdGlmIChpc0NoYW5nZWREYXRlKG5ld0ZvY3VzZWREYXRlLCBvbGRGb2N1c2VkRGF0ZSkgJiYgb2xkRm9jdXNlZERhdGUgJiYgbW9kZWwuZm9jdXNWaXNpYmxlKSB7XG5cdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdH1cblxuXHRcdFx0Y2QubWFya0ZvckNoZWNrKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogIFJldHVybnMgdGhlIHJlYWRvbmx5IHB1YmxpYyBzdGF0ZSBvZiB0aGUgZGF0ZXBpY2tlclxuXHQgKlxuXHQgKiBAc2luY2UgNS4yLjBcblx0ICovXG5cdGdldCBzdGF0ZSgpOiBOZ2JEYXRlcGlja2VyU3RhdGUge1xuXHRcdHJldHVybiB0aGlzLl9wdWJsaWNTdGF0ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiAgUmV0dXJucyB0aGUgY2FsZW5kYXIgc2VydmljZSB1c2VkIGluIHRoZSBzcGVjaWZpYyBkYXRlcGlja2VyIGluc3RhbmNlLlxuXHQgKlxuXHQgKiAgQHNpbmNlIDUuMy4wXG5cdCAqL1xuXHRnZXQgY2FsZW5kYXIoKTogTmdiQ2FsZW5kYXIge1xuXHRcdHJldHVybiB0aGlzLl9jYWxlbmRhcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBpMThuIHNlcnZpY2UgdXNlZCBpbiB0aGUgc3BlY2lmaWMgZGF0ZXBpY2tlciBpbnN0YW5jZS5cblx0ICpcblx0ICogQHNpbmNlIDE0LjIuMFxuXHQgKi9cblx0Z2V0IGkxOG4oKTogTmdiRGF0ZXBpY2tlckkxOG4ge1xuXHRcdHJldHVybiB0aGlzLl9pMThuO1xuXHR9XG5cblx0LyoqXG5cdCAqICBGb2N1c2VzIG9uIGdpdmVuIGRhdGUuXG5cdCAqL1xuXHRmb2N1c0RhdGUoZGF0ZT86IE5nYkRhdGVTdHJ1Y3QgfCBudWxsKTogdm9pZCB7XG5cdFx0dGhpcy5fc2VydmljZS5mb2N1cyhOZ2JEYXRlLmZyb20oZGF0ZSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqICBTZWxlY3RzIGZvY3VzZWQgZGF0ZS5cblx0ICovXG5cdGZvY3VzU2VsZWN0KCk6IHZvaWQge1xuXHRcdHRoaXMuX3NlcnZpY2UuZm9jdXNTZWxlY3QoKTtcblx0fVxuXG5cdGZvY3VzKCkge1xuXHRcdGFmdGVyTmV4dFJlbmRlcihcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0dGhpcy5fbmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignZGl2Lm5nYi1kcC1kYXlbdGFiaW5kZXg9XCIwXCJdJyk/LmZvY3VzKCk7XG5cdFx0XHR9LFxuXHRcdFx0eyBwaGFzZTogQWZ0ZXJSZW5kZXJQaGFzZS5SZWFkLCBpbmplY3RvcjogdGhpcy5faW5qZWN0b3IgfSxcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE5hdmlnYXRlcyB0byB0aGUgcHJvdmlkZWQgZGF0ZS5cblx0ICpcblx0ICogV2l0aCB0aGUgZGVmYXVsdCBjYWxlbmRhciB3ZSB1c2UgSVNPIDg2MDE6ICdtb250aCcgaXMgMT1KYW4gLi4uIDEyPURlYy5cblx0ICogSWYgbm90aGluZyBvciBpbnZhbGlkIGRhdGUgcHJvdmlkZWQgY2FsZW5kYXIgd2lsbCBvcGVuIGN1cnJlbnQgbW9udGguXG5cdCAqXG5cdCAqIFVzZSB0aGUgYFtzdGFydERhdGVdYCBpbnB1dCBhcyBhbiBhbHRlcm5hdGl2ZS5cblx0ICovXG5cdG5hdmlnYXRlVG8oZGF0ZT86IHsgeWVhcjogbnVtYmVyOyBtb250aDogbnVtYmVyOyBkYXk/OiBudW1iZXIgfSkge1xuXHRcdHRoaXMuX3NlcnZpY2Uub3BlbihOZ2JEYXRlLmZyb20oZGF0ZSA/IChkYXRlLmRheSA/IChkYXRlIGFzIE5nYkRhdGVTdHJ1Y3QpIDogeyAuLi5kYXRlLCBkYXk6IDEgfSkgOiBudWxsKSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdGNvbnN0IGZvY3VzSW5zJCA9IGZyb21FdmVudDxGb2N1c0V2ZW50Pih0aGlzLl9jb250ZW50RWwubmF0aXZlRWxlbWVudCwgJ2ZvY3VzaW4nKTtcblx0XHRcdGNvbnN0IGZvY3VzT3V0cyQgPSBmcm9tRXZlbnQ8Rm9jdXNFdmVudD4odGhpcy5fY29udGVudEVsLm5hdGl2ZUVsZW1lbnQsICdmb2N1c291dCcpO1xuXG5cdFx0XHQvLyB3ZSdyZSBjaGFuZ2luZyAnZm9jdXNWaXNpYmxlJyBvbmx5IHdoZW4gZW50ZXJpbmcgb3IgbGVhdmluZyBtb250aHMgdmlld1xuXHRcdFx0Ly8gYW5kIGlnbm9yaW5nIGFsbCBmb2N1cyBldmVudHMgd2hlcmUgYm90aCAndGFyZ2V0JyBhbmQgJ3JlbGF0ZWQnIHRhcmdldCBhcmUgZGF5IGNlbGxzXG5cdFx0XHRtZXJnZShmb2N1c0lucyQsIGZvY3VzT3V0cyQpXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGZpbHRlcigoZm9jdXNFdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gZm9jdXNFdmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVsYXRlZFRhcmdldCA9IGZvY3VzRXZlbnQucmVsYXRlZFRhcmdldCBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG5cblx0XHRcdFx0XHRcdHJldHVybiAhKFxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ/LmNsYXNzTGlzdC5jb250YWlucygnbmdiLWRwLWRheScpICYmXG5cdFx0XHRcdFx0XHRcdHJlbGF0ZWRUYXJnZXQ/LmNsYXNzTGlzdC5jb250YWlucygnbmdiLWRwLWRheScpICYmXG5cdFx0XHRcdFx0XHRcdHRoaXMuX25hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0KSAmJlxuXHRcdFx0XHRcdFx0XHR0aGlzLl9uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHJlbGF0ZWRUYXJnZXQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLl9kZXN0cm95UmVmKSxcblx0XHRcdFx0KVxuXHRcdFx0XHQuc3Vic2NyaWJlKCh7IHR5cGUgfSkgPT4gdGhpcy5fbmdab25lLnJ1bigoKSA9PiB0aGlzLl9zZXJ2aWNlLnNldCh7IGZvY3VzVmlzaWJsZTogdHlwZSA9PT0gJ2ZvY3VzaW4nIH0pKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAodGhpcy5tb2RlbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zdCBpbnB1dHM6IERhdGVwaWNrZXJTZXJ2aWNlSW5wdXRzID0ge307XG5cdFx0XHRbXG5cdFx0XHRcdCdkYXlUZW1wbGF0ZURhdGEnLFxuXHRcdFx0XHQnZGlzcGxheU1vbnRocycsXG5cdFx0XHRcdCdtYXJrRGlzYWJsZWQnLFxuXHRcdFx0XHQnZmlyc3REYXlPZldlZWsnLFxuXHRcdFx0XHQnbmF2aWdhdGlvbicsXG5cdFx0XHRcdCdtaW5EYXRlJyxcblx0XHRcdFx0J21heERhdGUnLFxuXHRcdFx0XHQnb3V0c2lkZURheXMnLFxuXHRcdFx0XHQnd2Vla2RheXMnLFxuXHRcdFx0XS5mb3JFYWNoKChuYW1lKSA9PiAoaW5wdXRzW25hbWVdID0gdGhpc1tuYW1lXSkpO1xuXHRcdFx0dGhpcy5fc2VydmljZS5zZXQoaW5wdXRzKTtcblxuXHRcdFx0dGhpcy5uYXZpZ2F0ZVRvKHRoaXMuc3RhcnREYXRlKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLmRheVRlbXBsYXRlKSB7XG5cdFx0XHR0aGlzLmRheVRlbXBsYXRlID0gdGhpcy5fZGVmYXVsdERheVRlbXBsYXRlO1xuXHRcdH1cblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRjb25zdCBpbnB1dHM6IERhdGVwaWNrZXJTZXJ2aWNlSW5wdXRzID0ge307XG5cdFx0W1xuXHRcdFx0J2RheVRlbXBsYXRlRGF0YScsXG5cdFx0XHQnZGlzcGxheU1vbnRocycsXG5cdFx0XHQnbWFya0Rpc2FibGVkJyxcblx0XHRcdCdmaXJzdERheU9mV2VlaycsXG5cdFx0XHQnbmF2aWdhdGlvbicsXG5cdFx0XHQnbWluRGF0ZScsXG5cdFx0XHQnbWF4RGF0ZScsXG5cdFx0XHQnb3V0c2lkZURheXMnLFxuXHRcdFx0J3dlZWtkYXlzJyxcblx0XHRdXG5cdFx0XHQuZmlsdGVyKChuYW1lKSA9PiBuYW1lIGluIGNoYW5nZXMpXG5cdFx0XHQuZm9yRWFjaCgobmFtZSkgPT4gKGlucHV0c1tuYW1lXSA9IHRoaXNbbmFtZV0pKTtcblx0XHR0aGlzLl9zZXJ2aWNlLnNldChpbnB1dHMpO1xuXG5cdFx0aWYgKCdzdGFydERhdGUnIGluIGNoYW5nZXMpIHtcblx0XHRcdGNvbnN0IHsgY3VycmVudFZhbHVlLCBwcmV2aW91c1ZhbHVlIH0gPSBjaGFuZ2VzLnN0YXJ0RGF0ZTtcblx0XHRcdGlmIChpc0NoYW5nZWRNb250aChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpKSB7XG5cdFx0XHRcdHRoaXMubmF2aWdhdGVUbyh0aGlzLnN0YXJ0RGF0ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b25EYXRlU2VsZWN0KGRhdGU6IE5nYkRhdGUpIHtcblx0XHR0aGlzLl9zZXJ2aWNlLmZvY3VzKGRhdGUpO1xuXHRcdHRoaXMuX3NlcnZpY2Uuc2VsZWN0KGRhdGUsIHsgZW1pdEV2ZW50OiB0cnVlIH0pO1xuXHR9XG5cblx0b25OYXZpZ2F0ZURhdGVTZWxlY3QoZGF0ZTogTmdiRGF0ZSkge1xuXHRcdHRoaXMuX3NlcnZpY2Uub3BlbihkYXRlKTtcblx0fVxuXG5cdG9uTmF2aWdhdGVFdmVudChldmVudDogTmF2aWdhdGlvbkV2ZW50KSB7XG5cdFx0c3dpdGNoIChldmVudCkge1xuXHRcdFx0Y2FzZSBOYXZpZ2F0aW9uRXZlbnQuUFJFVjpcblx0XHRcdFx0dGhpcy5fc2VydmljZS5vcGVuKHRoaXMuX2NhbGVuZGFyLmdldFByZXYodGhpcy5tb2RlbC5maXJzdERhdGUhLCAnbScsIDEpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIE5hdmlnYXRpb25FdmVudC5ORVhUOlxuXHRcdFx0XHR0aGlzLl9zZXJ2aWNlLm9wZW4odGhpcy5fY2FsZW5kYXIuZ2V0TmV4dCh0aGlzLm1vZGVsLmZpcnN0RGF0ZSEsICdtJywgMSkpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IGZuO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHRzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKSB7XG5cdFx0dGhpcy5fc2VydmljZS5zZXQoeyBkaXNhYmxlZCB9KTtcblx0fVxuXG5cdHdyaXRlVmFsdWUodmFsdWUpIHtcblx0XHR0aGlzLl9jb250cm9sVmFsdWUgPSBOZ2JEYXRlLmZyb20odGhpcy5fbmdiRGF0ZUFkYXB0ZXIuZnJvbU1vZGVsKHZhbHVlKSk7XG5cdFx0dGhpcy5fc2VydmljZS5zZWxlY3QodGhpcy5fY29udHJvbFZhbHVlKTtcblx0fVxufVxuIl19