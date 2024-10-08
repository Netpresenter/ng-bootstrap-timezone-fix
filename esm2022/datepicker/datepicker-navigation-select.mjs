import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import { NgbDate } from './ngb-date';
import { toInteger } from '../util/util';
import { NgbDatepickerI18n } from './datepicker-i18n';
import * as i0 from "@angular/core";
export class NgbDatepickerNavigationSelect {
    constructor() {
        this._month = -1;
        this._year = -1;
        this.i18n = inject(NgbDatepickerI18n);
        this.select = new EventEmitter();
    }
    changeMonth(month) {
        this.select.emit(new NgbDate(this.date.year, toInteger(month), 1));
    }
    changeYear(year) {
        this.select.emit(new NgbDate(toInteger(year), this.date.month, 1));
    }
    ngAfterViewChecked() {
        if (this.date) {
            if (this.date.month !== this._month) {
                this._month = this.date.month;
                this.monthSelect.nativeElement.value = `${this._month}`;
            }
            if (this.date.year !== this._year) {
                this._year = this.date.year;
                this.yearSelect.nativeElement.value = `${this._year}`;
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerNavigationSelect, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.2", type: NgbDatepickerNavigationSelect, isStandalone: true, selector: "ngb-datepicker-navigation-select", inputs: { date: "date", disabled: "disabled", months: "months", years: "years" }, outputs: { select: "select" }, viewQueries: [{ propertyName: "monthSelect", first: true, predicate: ["month"], descendants: true, read: ElementRef, static: true }, { propertyName: "yearSelect", first: true, predicate: ["year"], descendants: true, read: ElementRef, static: true }], ngImport: i0, template: `
		<select
			#month
			[disabled]="disabled"
			class="form-select"
			i18n-aria-label="@@ngb.datepicker.select-month"
			aria-label="Select month"
			i18n-title="@@ngb.datepicker.select-month"
			title="Select month"
			(change)="changeMonth($any($event).target.value)"
		>
			@for (m of months; track m) {
				<option [attr.aria-label]="i18n.getMonthFullName(m, date.year)" [value]="m">{{
					i18n.getMonthShortName(m, date.year)
				}}</option>
			}</select
		><select
			#year
			[disabled]="disabled"
			class="form-select"
			i18n-aria-label="@@ngb.datepicker.select-year"
			aria-label="Select year"
			i18n-title="@@ngb.datepicker.select-year"
			title="Select year"
			(change)="changeYear($any($event).target.value)"
		>
			@for (y of years; track y) {
				<option [value]="y">{{ i18n.getYearNumerals(y) }}</option>
			}
		</select>
	`, isInline: true, styles: ["ngb-datepicker-navigation-select>.form-select{flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.form-select:focus{z-index:1}ngb-datepicker-navigation-select>.form-select::-ms-value{background-color:transparent!important}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerNavigationSelect, decorators: [{
            type: Component,
            args: [{ selector: 'ngb-datepicker-navigation-select', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: `
		<select
			#month
			[disabled]="disabled"
			class="form-select"
			i18n-aria-label="@@ngb.datepicker.select-month"
			aria-label="Select month"
			i18n-title="@@ngb.datepicker.select-month"
			title="Select month"
			(change)="changeMonth($any($event).target.value)"
		>
			@for (m of months; track m) {
				<option [attr.aria-label]="i18n.getMonthFullName(m, date.year)" [value]="m">{{
					i18n.getMonthShortName(m, date.year)
				}}</option>
			}</select
		><select
			#year
			[disabled]="disabled"
			class="form-select"
			i18n-aria-label="@@ngb.datepicker.select-year"
			aria-label="Select year"
			i18n-title="@@ngb.datepicker.select-year"
			title="Select year"
			(change)="changeYear($any($event).target.value)"
		>
			@for (y of years; track y) {
				<option [value]="y">{{ i18n.getYearNumerals(y) }}</option>
			}
		</select>
	`, styles: ["ngb-datepicker-navigation-select>.form-select{flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.form-select:focus{z-index:1}ngb-datepicker-navigation-select>.form-select::-ms-value{background-color:transparent!important}\n"] }]
        }], propDecorators: { date: [{
                type: Input
            }], disabled: [{
                type: Input
            }], months: [{
                type: Input
            }], years: [{
                type: Input
            }], select: [{
                type: Output
            }], monthSelect: [{
                type: ViewChild,
                args: ['month', { static: true, read: ElementRef }]
            }], yearSelect: [{
                type: ViewChild,
                args: ['year', { static: true, read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXNlbGVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRlcGlja2VyL2RhdGVwaWNrZXItbmF2aWdhdGlvbi1zZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUF3Q3RELE1BQU0sT0FBTyw2QkFBNkI7SUF0QzFDO1FBdUNTLFdBQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNaLFVBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVuQixTQUFJLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFPdkIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7S0F5Qi9DO0lBcEJBLFdBQVcsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsa0JBQWtCO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2YsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6RCxDQUFDO1lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2RCxDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUM7OEdBbkNXLDZCQUE2QjtrR0FBN0IsNkJBQTZCLDhSQWFDLFVBQVUsMkdBQ1gsVUFBVSwyQ0E5Q3pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE4QlQ7OzJGQUVXLDZCQUE2QjtrQkF0Q3pDLFNBQVM7K0JBQ0Msa0NBQWtDLGNBQ2hDLElBQUksbUJBQ0MsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxZQUUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOEJUOzhCQVFRLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUksTUFBTTtzQkFBZixNQUFNO2dCQUVpRCxXQUFXO3NCQUFsRSxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFDQyxVQUFVO3NCQUFoRSxTQUFTO3VCQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0NoZWNrZWQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0aW5qZWN0LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkRhdGUgfSBmcm9tICcuL25nYi1kYXRlJztcbmltcG9ydCB7IHRvSW50ZWdlciB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBOZ2JEYXRlcGlja2VySTE4biB9IGZyb20gJy4vZGF0ZXBpY2tlci1pMThuJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmdiLWRhdGVwaWNrZXItbmF2aWdhdGlvbi1zZWxlY3QnLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0c3R5bGVVcmw6ICcuL2RhdGVwaWNrZXItbmF2aWdhdGlvbi1zZWxlY3Quc2NzcycsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHNlbGVjdFxuXHRcdFx0I21vbnRoXG5cdFx0XHRbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuXHRcdFx0Y2xhc3M9XCJmb3JtLXNlbGVjdFwiXG5cdFx0XHRpMThuLWFyaWEtbGFiZWw9XCJAQG5nYi5kYXRlcGlja2VyLnNlbGVjdC1tb250aFwiXG5cdFx0XHRhcmlhLWxhYmVsPVwiU2VsZWN0IG1vbnRoXCJcblx0XHRcdGkxOG4tdGl0bGU9XCJAQG5nYi5kYXRlcGlja2VyLnNlbGVjdC1tb250aFwiXG5cdFx0XHR0aXRsZT1cIlNlbGVjdCBtb250aFwiXG5cdFx0XHQoY2hhbmdlKT1cImNoYW5nZU1vbnRoKCRhbnkoJGV2ZW50KS50YXJnZXQudmFsdWUpXCJcblx0XHQ+XG5cdFx0XHRAZm9yIChtIG9mIG1vbnRoczsgdHJhY2sgbSkge1xuXHRcdFx0XHQ8b3B0aW9uIFthdHRyLmFyaWEtbGFiZWxdPVwiaTE4bi5nZXRNb250aEZ1bGxOYW1lKG0sIGRhdGUueWVhcilcIiBbdmFsdWVdPVwibVwiPnt7XG5cdFx0XHRcdFx0aTE4bi5nZXRNb250aFNob3J0TmFtZShtLCBkYXRlLnllYXIpXG5cdFx0XHRcdH19PC9vcHRpb24+XG5cdFx0XHR9PC9zZWxlY3Rcblx0XHQ+PHNlbGVjdFxuXHRcdFx0I3llYXJcblx0XHRcdFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0XHRjbGFzcz1cImZvcm0tc2VsZWN0XCJcblx0XHRcdGkxOG4tYXJpYS1sYWJlbD1cIkBAbmdiLmRhdGVwaWNrZXIuc2VsZWN0LXllYXJcIlxuXHRcdFx0YXJpYS1sYWJlbD1cIlNlbGVjdCB5ZWFyXCJcblx0XHRcdGkxOG4tdGl0bGU9XCJAQG5nYi5kYXRlcGlja2VyLnNlbGVjdC15ZWFyXCJcblx0XHRcdHRpdGxlPVwiU2VsZWN0IHllYXJcIlxuXHRcdFx0KGNoYW5nZSk9XCJjaGFuZ2VZZWFyKCRhbnkoJGV2ZW50KS50YXJnZXQudmFsdWUpXCJcblx0XHQ+XG5cdFx0XHRAZm9yICh5IG9mIHllYXJzOyB0cmFjayB5KSB7XG5cdFx0XHRcdDxvcHRpb24gW3ZhbHVlXT1cInlcIj57eyBpMThuLmdldFllYXJOdW1lcmFscyh5KSB9fTwvb3B0aW9uPlxuXHRcdFx0fVxuXHRcdDwvc2VsZWN0PlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2JEYXRlcGlja2VyTmF2aWdhdGlvblNlbGVjdCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xuXHRwcml2YXRlIF9tb250aCA9IC0xO1xuXHRwcml2YXRlIF95ZWFyID0gLTE7XG5cblx0aTE4biA9IGluamVjdChOZ2JEYXRlcGlja2VySTE4bik7XG5cblx0QElucHV0KCkgZGF0ZTogTmdiRGF0ZTtcblx0QElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIG1vbnRoczogbnVtYmVyW107XG5cdEBJbnB1dCgpIHllYXJzOiBudW1iZXJbXTtcblxuXHRAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxOZ2JEYXRlPigpO1xuXG5cdEBWaWV3Q2hpbGQoJ21vbnRoJywgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgbW9udGhTZWxlY3Q6IEVsZW1lbnRSZWY8SFRNTFNlbGVjdEVsZW1lbnQ+O1xuXHRAVmlld0NoaWxkKCd5ZWFyJywgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgeWVhclNlbGVjdDogRWxlbWVudFJlZjxIVE1MU2VsZWN0RWxlbWVudD47XG5cblx0Y2hhbmdlTW9udGgobW9udGg6IHN0cmluZykge1xuXHRcdHRoaXMuc2VsZWN0LmVtaXQobmV3IE5nYkRhdGUodGhpcy5kYXRlLnllYXIsIHRvSW50ZWdlcihtb250aCksIDEpKTtcblx0fVxuXG5cdGNoYW5nZVllYXIoeWVhcjogc3RyaW5nKSB7XG5cdFx0dGhpcy5zZWxlY3QuZW1pdChuZXcgTmdiRGF0ZSh0b0ludGVnZXIoeWVhciksIHRoaXMuZGF0ZS5tb250aCwgMSkpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdDaGVja2VkKCkge1xuXHRcdGlmICh0aGlzLmRhdGUpIHtcblx0XHRcdGlmICh0aGlzLmRhdGUubW9udGggIT09IHRoaXMuX21vbnRoKSB7XG5cdFx0XHRcdHRoaXMuX21vbnRoID0gdGhpcy5kYXRlLm1vbnRoO1xuXHRcdFx0XHR0aGlzLm1vbnRoU2VsZWN0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBgJHt0aGlzLl9tb250aH1gO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZGF0ZS55ZWFyICE9PSB0aGlzLl95ZWFyKSB7XG5cdFx0XHRcdHRoaXMuX3llYXIgPSB0aGlzLmRhdGUueWVhcjtcblx0XHRcdFx0dGhpcy55ZWFyU2VsZWN0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBgJHt0aGlzLl95ZWFyfWA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXX0=