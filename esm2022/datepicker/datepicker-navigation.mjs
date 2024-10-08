import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, ViewEncapsulation, } from '@angular/core';
import { NavigationEvent } from './datepicker-view-model';
import { NgbDatepickerI18n } from './datepicker-i18n';
import { NgbDatepickerNavigationSelect } from './datepicker-navigation-select';
import * as i0 from "@angular/core";
export class NgbDatepickerNavigation {
    constructor() {
        this.navigation = NavigationEvent;
        this.i18n = inject(NgbDatepickerI18n);
        this.months = [];
        this.navigate = new EventEmitter();
        this.select = new EventEmitter();
    }
    onClickPrev(event) {
        event.currentTarget.focus();
        this.navigate.emit(this.navigation.PREV);
    }
    onClickNext(event) {
        event.currentTarget.focus();
        this.navigate.emit(this.navigation.NEXT);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerNavigation, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.2", type: NgbDatepickerNavigation, isStandalone: true, selector: "ngb-datepicker-navigation", inputs: { date: "date", disabled: "disabled", months: "months", showSelect: "showSelect", prevDisabled: "prevDisabled", nextDisabled: "nextDisabled", selectBoxes: "selectBoxes" }, outputs: { navigate: "navigate", select: "select" }, ngImport: i0, template: `
		<div class="ngb-dp-arrow ngb-dp-arrow-prev">
			<button
				type="button"
				class="btn btn-link ngb-dp-arrow-btn"
				(click)="onClickPrev($event)"
				[disabled]="prevDisabled"
				i18n-aria-label="@@ngb.datepicker.previous-month"
				aria-label="Previous month"
				i18n-title="@@ngb.datepicker.previous-month"
				title="Previous month"
			>
				<span class="ngb-dp-navigation-chevron"></span>
			</button>
		</div>
		@if (showSelect) {
			<ngb-datepicker-navigation-select
				class="ngb-dp-navigation-select"
				[date]="date"
				[disabled]="disabled"
				[months]="selectBoxes.months"
				[years]="selectBoxes.years"
				(select)="select.emit($event)"
			/>
		}

		@if (!showSelect) {
			@for (month of months; track month; let i = $index) {
				@if (i > 0) {
					<div class="ngb-dp-arrow"></div>
				}
				<div class="ngb-dp-month-name">
					{{ i18n.getMonthLabel(month.firstDate) }}
				</div>
				@if (i !== months.length - 1) {
					<div class="ngb-dp-arrow"></div>
				}
			}
		}
		<div class="ngb-dp-arrow ngb-dp-arrow-next">
			<button
				type="button"
				class="btn btn-link ngb-dp-arrow-btn"
				(click)="onClickNext($event)"
				[disabled]="nextDisabled"
				i18n-aria-label="@@ngb.datepicker.next-month"
				aria-label="Next month"
				i18n-title="@@ngb.datepicker.next-month"
				title="Next month"
			>
				<span class="ngb-dp-navigation-chevron"></span>
			</button>
		</div>
	`, isInline: true, styles: ["ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow-next{justify-content:flex-end}.ngb-dp-arrow-next .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}\n"], dependencies: [{ kind: "component", type: NgbDatepickerNavigationSelect, selector: "ngb-datepicker-navigation-select", inputs: ["date", "disabled", "months", "years"], outputs: ["select"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerNavigation, decorators: [{
            type: Component,
            args: [{ selector: 'ngb-datepicker-navigation', standalone: true, imports: [NgbDatepickerNavigationSelect], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: `
		<div class="ngb-dp-arrow ngb-dp-arrow-prev">
			<button
				type="button"
				class="btn btn-link ngb-dp-arrow-btn"
				(click)="onClickPrev($event)"
				[disabled]="prevDisabled"
				i18n-aria-label="@@ngb.datepicker.previous-month"
				aria-label="Previous month"
				i18n-title="@@ngb.datepicker.previous-month"
				title="Previous month"
			>
				<span class="ngb-dp-navigation-chevron"></span>
			</button>
		</div>
		@if (showSelect) {
			<ngb-datepicker-navigation-select
				class="ngb-dp-navigation-select"
				[date]="date"
				[disabled]="disabled"
				[months]="selectBoxes.months"
				[years]="selectBoxes.years"
				(select)="select.emit($event)"
			/>
		}

		@if (!showSelect) {
			@for (month of months; track month; let i = $index) {
				@if (i > 0) {
					<div class="ngb-dp-arrow"></div>
				}
				<div class="ngb-dp-month-name">
					{{ i18n.getMonthLabel(month.firstDate) }}
				</div>
				@if (i !== months.length - 1) {
					<div class="ngb-dp-arrow"></div>
				}
			}
		}
		<div class="ngb-dp-arrow ngb-dp-arrow-next">
			<button
				type="button"
				class="btn btn-link ngb-dp-arrow-btn"
				(click)="onClickNext($event)"
				[disabled]="nextDisabled"
				i18n-aria-label="@@ngb.datepicker.next-month"
				aria-label="Next month"
				i18n-title="@@ngb.datepicker.next-month"
				title="Next month"
			>
				<span class="ngb-dp-navigation-chevron"></span>
			</button>
		</div>
	`, styles: ["ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow-next{justify-content:flex-end}.ngb-dp-arrow-next .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}\n"] }]
        }], propDecorators: { date: [{
                type: Input
            }], disabled: [{
                type: Input
            }], months: [{
                type: Input
            }], showSelect: [{
                type: Input
            }], prevDisabled: [{
                type: Input
            }], nextDisabled: [{
                type: Input
            }], selectBoxes: [{
                type: Input
            }], navigate: [{
                type: Output
            }], select: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFrQixlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFnRS9FLE1BQU0sT0FBTyx1QkFBdUI7SUE5RHBDO1FBK0RDLGVBQVUsR0FBRyxlQUFlLENBQUM7UUFFN0IsU0FBSSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBSXhCLFdBQU0sR0FBcUIsRUFBRSxDQUFDO1FBTTdCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUMvQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztLQVcvQztJQVRBLFdBQVcsQ0FBQyxLQUFpQjtRQUMzQixLQUFLLENBQUMsYUFBNkIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBaUI7UUFDM0IsS0FBSyxDQUFDLGFBQTZCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDOzhHQXhCVyx1QkFBdUI7a0dBQXZCLHVCQUF1Qiw4VEF2RHpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFEVCx1OUJBekRTLDZCQUE2Qjs7MkZBMkQzQix1QkFBdUI7a0JBOURuQyxTQUFTOytCQUNDLDJCQUEyQixjQUN6QixJQUFJLFdBQ1AsQ0FBQyw2QkFBNkIsQ0FBQyxtQkFDdkIsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxZQUUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFxRFQ7OEJBT1EsSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRUksUUFBUTtzQkFBakIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRFdmVudEVtaXR0ZXIsXG5cdGluamVjdCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9udGhWaWV3TW9kZWwsIE5hdmlnYXRpb25FdmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci12aWV3LW1vZGVsJztcbmltcG9ydCB7IE5nYkRhdGUgfSBmcm9tICcuL25nYi1kYXRlJztcbmltcG9ydCB7IE5nYkRhdGVwaWNrZXJJMThuIH0gZnJvbSAnLi9kYXRlcGlja2VyLWkxOG4nO1xuaW1wb3J0IHsgTmdiRGF0ZXBpY2tlck5hdmlnYXRpb25TZWxlY3QgfSBmcm9tICcuL2RhdGVwaWNrZXItbmF2aWdhdGlvbi1zZWxlY3QnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICduZ2ItZGF0ZXBpY2tlci1uYXZpZ2F0aW9uJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW05nYkRhdGVwaWNrZXJOYXZpZ2F0aW9uU2VsZWN0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHN0eWxlVXJsOiAnLi9kYXRlcGlja2VyLW5hdmlnYXRpb24uc2NzcycsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cIm5nYi1kcC1hcnJvdyBuZ2ItZHAtYXJyb3ctcHJldlwiPlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLWxpbmsgbmdiLWRwLWFycm93LWJ0blwiXG5cdFx0XHRcdChjbGljayk9XCJvbkNsaWNrUHJldigkZXZlbnQpXCJcblx0XHRcdFx0W2Rpc2FibGVkXT1cInByZXZEaXNhYmxlZFwiXG5cdFx0XHRcdGkxOG4tYXJpYS1sYWJlbD1cIkBAbmdiLmRhdGVwaWNrZXIucHJldmlvdXMtbW9udGhcIlxuXHRcdFx0XHRhcmlhLWxhYmVsPVwiUHJldmlvdXMgbW9udGhcIlxuXHRcdFx0XHRpMThuLXRpdGxlPVwiQEBuZ2IuZGF0ZXBpY2tlci5wcmV2aW91cy1tb250aFwiXG5cdFx0XHRcdHRpdGxlPVwiUHJldmlvdXMgbW9udGhcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm5nYi1kcC1uYXZpZ2F0aW9uLWNoZXZyb25cIj48L3NwYW4+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0XHRAaWYgKHNob3dTZWxlY3QpIHtcblx0XHRcdDxuZ2ItZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXNlbGVjdFxuXHRcdFx0XHRjbGFzcz1cIm5nYi1kcC1uYXZpZ2F0aW9uLXNlbGVjdFwiXG5cdFx0XHRcdFtkYXRlXT1cImRhdGVcIlxuXHRcdFx0XHRbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRbbW9udGhzXT1cInNlbGVjdEJveGVzLm1vbnRoc1wiXG5cdFx0XHRcdFt5ZWFyc109XCJzZWxlY3RCb3hlcy55ZWFyc1wiXG5cdFx0XHRcdChzZWxlY3QpPVwic2VsZWN0LmVtaXQoJGV2ZW50KVwiXG5cdFx0XHQvPlxuXHRcdH1cblxuXHRcdEBpZiAoIXNob3dTZWxlY3QpIHtcblx0XHRcdEBmb3IgKG1vbnRoIG9mIG1vbnRoczsgdHJhY2sgbW9udGg7IGxldCBpID0gJGluZGV4KSB7XG5cdFx0XHRcdEBpZiAoaSA+IDApIHtcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmdiLWRwLWFycm93XCI+PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5nYi1kcC1tb250aC1uYW1lXCI+XG5cdFx0XHRcdFx0e3sgaTE4bi5nZXRNb250aExhYmVsKG1vbnRoLmZpcnN0RGF0ZSkgfX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdEBpZiAoaSAhPT0gbW9udGhzLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmdiLWRwLWFycm93XCI+PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0PGRpdiBjbGFzcz1cIm5nYi1kcC1hcnJvdyBuZ2ItZHAtYXJyb3ctbmV4dFwiPlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLWxpbmsgbmdiLWRwLWFycm93LWJ0blwiXG5cdFx0XHRcdChjbGljayk9XCJvbkNsaWNrTmV4dCgkZXZlbnQpXCJcblx0XHRcdFx0W2Rpc2FibGVkXT1cIm5leHREaXNhYmxlZFwiXG5cdFx0XHRcdGkxOG4tYXJpYS1sYWJlbD1cIkBAbmdiLmRhdGVwaWNrZXIubmV4dC1tb250aFwiXG5cdFx0XHRcdGFyaWEtbGFiZWw9XCJOZXh0IG1vbnRoXCJcblx0XHRcdFx0aTE4bi10aXRsZT1cIkBAbmdiLmRhdGVwaWNrZXIubmV4dC1tb250aFwiXG5cdFx0XHRcdHRpdGxlPVwiTmV4dCBtb250aFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwibmdiLWRwLW5hdmlnYXRpb24tY2hldnJvblwiPjwvc3Bhbj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2JEYXRlcGlja2VyTmF2aWdhdGlvbiB7XG5cdG5hdmlnYXRpb24gPSBOYXZpZ2F0aW9uRXZlbnQ7XG5cblx0aTE4biA9IGluamVjdChOZ2JEYXRlcGlja2VySTE4bik7XG5cblx0QElucHV0KCkgZGF0ZTogTmdiRGF0ZTtcblx0QElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIG1vbnRoczogTW9udGhWaWV3TW9kZWxbXSA9IFtdO1xuXHRASW5wdXQoKSBzaG93U2VsZWN0OiBib29sZWFuO1xuXHRASW5wdXQoKSBwcmV2RGlzYWJsZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIG5leHREaXNhYmxlZDogYm9vbGVhbjtcblx0QElucHV0KCkgc2VsZWN0Qm94ZXM6IHsgeWVhcnM6IG51bWJlcltdOyBtb250aHM6IG51bWJlcltdIH07XG5cblx0QE91dHB1dCgpIG5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxOYXZpZ2F0aW9uRXZlbnQ+KCk7XG5cdEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE5nYkRhdGU+KCk7XG5cblx0b25DbGlja1ByZXYoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblx0XHQoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuZm9jdXMoKTtcblx0XHR0aGlzLm5hdmlnYXRlLmVtaXQodGhpcy5uYXZpZ2F0aW9uLlBSRVYpO1xuXHR9XG5cblx0b25DbGlja05leHQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblx0XHQoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuZm9jdXMoKTtcblx0XHR0aGlzLm5hdmlnYXRlLmVtaXQodGhpcy5uYXZpZ2F0aW9uLk5FWFQpO1xuXHR9XG59XG4iXX0=