import { ChangeDetectionStrategy, Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { NgbDatepickerI18n } from './datepicker-i18n';
import * as i0 from "@angular/core";
export class NgbDatepickerDayView {
    constructor() {
        this.i18n = inject(NgbDatepickerI18n);
    }
    isMuted() {
        return !this.selected && (this.date.month !== this.currentMonth || this.disabled);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerDayView, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.2", type: NgbDatepickerDayView, isStandalone: true, selector: "[ngbDatepickerDayView]", inputs: { currentMonth: "currentMonth", date: "date", disabled: "disabled", focused: "focused", selected: "selected" }, host: { properties: { "class.bg-primary": "selected", "class.text-white": "selected", "class.text-muted": "isMuted()", "class.outside": "isMuted()", "class.active": "focused" }, classAttribute: "btn-light" }, ngImport: i0, template: `{{ i18n.getDayNumerals(date) }}`, isInline: true, styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView]:hover:not(.bg-primary),[ngbDatepickerDayView].active:not(.bg-primary){background-color:var(--bs-tertiary-bg);outline:1px solid var(--bs-border-color)}[ngbDatepickerDayView].outside{opacity:.5}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerDayView, decorators: [{
            type: Component,
            args: [{ selector: '[ngbDatepickerDayView]', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        class: 'btn-light',
                        '[class.bg-primary]': 'selected',
                        '[class.text-white]': 'selected',
                        '[class.text-muted]': 'isMuted()',
                        '[class.outside]': 'isMuted()',
                        '[class.active]': 'focused',
                    }, template: `{{ i18n.getDayNumerals(date) }}`, styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView]:hover:not(.bg-primary),[ngbDatepickerDayView].active:not(.bg-primary){background-color:var(--bs-tertiary-bg);outline:1px solid var(--bs-border-color)}[ngbDatepickerDayView].outside{opacity:.5}\n"] }]
        }], propDecorators: { currentMonth: [{
                type: Input
            }], date: [{
                type: Input
            }], disabled: [{
                type: Input
            }], focused: [{
                type: Input
            }], selected: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kYXktdmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRlcGlja2VyL2RhdGVwaWNrZXItZGF5LXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQWtCdEQsTUFBTSxPQUFPLG9CQUFvQjtJQWhCakM7UUFpQkMsU0FBSSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBV2pDO0lBSEEsT0FBTztRQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkYsQ0FBQzs4R0FYVyxvQkFBb0I7a0dBQXBCLG9CQUFvQiwyWkFGdEIsaUNBQWlDOzsyRkFFL0Isb0JBQW9CO2tCQWhCaEMsU0FBUzsrQkFDQyx3QkFBd0IsY0FDdEIsSUFBSSxtQkFDQyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLFFBRS9CO3dCQUNMLEtBQUssRUFBRSxXQUFXO3dCQUNsQixvQkFBb0IsRUFBRSxVQUFVO3dCQUNoQyxvQkFBb0IsRUFBRSxVQUFVO3dCQUNoQyxvQkFBb0IsRUFBRSxXQUFXO3dCQUNqQyxpQkFBaUIsRUFBRSxXQUFXO3dCQUM5QixnQkFBZ0IsRUFBRSxTQUFTO3FCQUMzQixZQUNTLGlDQUFpQzs4QkFLbEMsWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGluamVjdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JEYXRlIH0gZnJvbSAnLi9uZ2ItZGF0ZSc7XG5pbXBvcnQgeyBOZ2JEYXRlcGlja2VySTE4biB9IGZyb20gJy4vZGF0ZXBpY2tlci1pMThuJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW25nYkRhdGVwaWNrZXJEYXlWaWV3XScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRzdHlsZVVybDogJy4vZGF0ZXBpY2tlci1kYXktdmlldy5zY3NzJyxcblx0aG9zdDoge1xuXHRcdGNsYXNzOiAnYnRuLWxpZ2h0Jyxcblx0XHQnW2NsYXNzLmJnLXByaW1hcnldJzogJ3NlbGVjdGVkJyxcblx0XHQnW2NsYXNzLnRleHQtd2hpdGVdJzogJ3NlbGVjdGVkJyxcblx0XHQnW2NsYXNzLnRleHQtbXV0ZWRdJzogJ2lzTXV0ZWQoKScsXG5cdFx0J1tjbGFzcy5vdXRzaWRlXSc6ICdpc011dGVkKCknLFxuXHRcdCdbY2xhc3MuYWN0aXZlXSc6ICdmb2N1c2VkJyxcblx0fSxcblx0dGVtcGxhdGU6IGB7eyBpMThuLmdldERheU51bWVyYWxzKGRhdGUpIH19YCxcbn0pXG5leHBvcnQgY2xhc3MgTmdiRGF0ZXBpY2tlckRheVZpZXcge1xuXHRpMThuID0gaW5qZWN0KE5nYkRhdGVwaWNrZXJJMThuKTtcblxuXHRASW5wdXQoKSBjdXJyZW50TW9udGg6IG51bWJlcjtcblx0QElucHV0KCkgZGF0ZTogTmdiRGF0ZTtcblx0QElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIGZvY3VzZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHNlbGVjdGVkOiBib29sZWFuO1xuXG5cdGlzTXV0ZWQoKSB7XG5cdFx0cmV0dXJuICF0aGlzLnNlbGVjdGVkICYmICh0aGlzLmRhdGUubW9udGggIT09IHRoaXMuY3VycmVudE1vbnRoIHx8IHRoaXMuZGlzYWJsZWQpO1xuXHR9XG59XG4iXX0=