import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, ElementRef, inject, Input, NgZone, ViewChildren, ViewEncapsulation, } from '@angular/core';
import { distinctUntilChanged, skip, startWith } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ngbNavFadeInTransition, ngbNavFadeOutTransition } from './nav-transition';
import { ngbRunTransition } from '../util/transition/ngbTransition';
import { NgTemplateOutlet } from '@angular/common';
import * as i0 from "@angular/core";
export class NgbNavPane {
    constructor() {
        this.nativeElement = inject(ElementRef).nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbNavPane, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.2", type: NgbNavPane, isStandalone: true, selector: "[ngbNavPane]", inputs: { item: "item", nav: "nav", role: "role" }, host: { properties: { "id": "item.panelDomId", "class.fade": "nav.animation", "attr.role": "role ? role : nav.roles ? \"tabpanel\" : undefined", "attr.aria-labelledby": "item.domId" }, classAttribute: "tab-pane" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbNavPane, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngbNavPane]',
                    standalone: true,
                    host: {
                        '[id]': 'item.panelDomId',
                        class: 'tab-pane',
                        '[class.fade]': 'nav.animation',
                        '[attr.role]': 'role ? role : nav.roles ? "tabpanel" : undefined',
                        '[attr.aria-labelledby]': 'item.domId',
                    },
                }]
        }], propDecorators: { item: [{
                type: Input
            }], nav: [{
                type: Input
            }], role: [{
                type: Input
            }] } });
/**
 * The outlet where currently active nav content will be displayed.
 *
 * @since 5.2.0
 */
export class NgbNavOutlet {
    constructor() {
        this._cd = inject(ChangeDetectorRef);
        this._ngZone = inject(NgZone);
        this._activePane = null;
    }
    isPanelTransitioning(item) {
        return this._activePane?.item === item;
    }
    ngAfterViewInit() {
        // initial display
        this._updateActivePane();
        // this will be emitted for all 3 types of nav changes: .select(), [activeId] or (click)
        this.nav.navItemChange$
            .pipe(takeUntilDestroyed(this.nav.destroyRef), startWith(this._activePane?.item || null), distinctUntilChanged(), skip(1))
            .subscribe((nextItem) => {
            const options = { animation: this.nav.animation, runningTransition: 'stop' };
            // next panel we're switching to will only appear in DOM after the change detection is done
            // and `this._panes` will be updated
            this._cd.detectChanges();
            // fading out
            if (this._activePane) {
                ngbRunTransition(this._ngZone, this._activePane.nativeElement, ngbNavFadeOutTransition, options).subscribe(() => {
                    const activeItem = this._activePane?.item;
                    this._activePane = this._getPaneForItem(nextItem);
                    // mark for check when transition finishes as outlet or parent containers might be OnPush
                    // without this the panes that have "faded out" will stay in DOM
                    this._cd.markForCheck();
                    // fading in
                    if (this._activePane) {
                        // we have to add the '.active' class before running the transition,
                        // because it should be in place before `ngbRunTransition` does `reflow()`
                        this._activePane.nativeElement.classList.add('active');
                        ngbRunTransition(this._ngZone, this._activePane.nativeElement, ngbNavFadeInTransition, options).subscribe(() => {
                            if (nextItem) {
                                nextItem.shown.emit();
                                this.nav.shown.emit(nextItem.id);
                            }
                        });
                    }
                    if (activeItem) {
                        activeItem.hidden.emit();
                        this.nav.hidden.emit(activeItem.id);
                    }
                });
            }
            else {
                this._updateActivePane();
            }
        });
    }
    _updateActivePane() {
        this._activePane = this._getActivePane();
        this._activePane?.nativeElement.classList.add('show', 'active');
    }
    _getPaneForItem(item) {
        return (this._panes && this._panes.find((pane) => pane.item === item)) || null;
    }
    _getActivePane() {
        return (this._panes && this._panes.find((pane) => pane.item.active)) || null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbNavOutlet, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.2", type: NgbNavOutlet, isStandalone: true, selector: "[ngbNavOutlet]", inputs: { paneRole: "paneRole", nav: ["ngbNavOutlet", "nav"] }, host: { classAttribute: "tab-content" }, viewQueries: [{ propertyName: "_panes", predicate: NgbNavPane, descendants: true }], ngImport: i0, template: `
		@for (item of nav.items; track item) {
			@if (item.isPanelInDom() || isPanelTransitioning(item)) {
				<div ngbNavPane [item]="item" [nav]="nav" [role]="paneRole">
					<ng-template
						[ngTemplateOutlet]="item.contentTpl?.templateRef || null"
						[ngTemplateOutletContext]="{ $implicit: item.active || isPanelTransitioning(item) }"
					/>
				</div>
			}
		}
	`, isInline: true, dependencies: [{ kind: "directive", type: NgbNavPane, selector: "[ngbNavPane]", inputs: ["item", "nav", "role"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbNavOutlet, decorators: [{
            type: Component,
            args: [{
                    selector: '[ngbNavOutlet]',
                    standalone: true,
                    imports: [NgbNavPane, NgTemplateOutlet],
                    host: {
                        class: 'tab-content',
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
		@for (item of nav.items; track item) {
			@if (item.isPanelInDom() || isPanelTransitioning(item)) {
				<div ngbNavPane [item]="item" [nav]="nav" [role]="paneRole">
					<ng-template
						[ngTemplateOutlet]="item.contentTpl?.templateRef || null"
						[ngTemplateOutletContext]="{ $implicit: item.active || isPanelTransitioning(item) }"
					/>
				</div>
			}
		}
	`,
                }]
        }], propDecorators: { _panes: [{
                type: ViewChildren,
                args: [NgbNavPane]
            }], paneRole: [{
                type: Input
            }], nav: [{
                type: Input,
                args: ['ngbNavOutlet']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LW91dGxldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9uYXYvbmF2LW91dGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBQ1osaUJBQWlCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkYsT0FBTyxFQUFFLGdCQUFnQixFQUF3QixNQUFNLGtDQUFrQyxDQUFDO0FBRTFGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQWFuRCxNQUFNLE9BQU8sVUFBVTtJQVh2QjtRQVlDLGtCQUFhLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQTRCLENBQUM7S0FLaEU7OEdBTlksVUFBVTtrR0FBVixVQUFVOzsyRkFBVixVQUFVO2tCQVh0QixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxjQUFjO29CQUN4QixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsSUFBSSxFQUFFO3dCQUNMLE1BQU0sRUFBRSxpQkFBaUI7d0JBQ3pCLEtBQUssRUFBRSxVQUFVO3dCQUNqQixjQUFjLEVBQUUsZUFBZTt3QkFDL0IsYUFBYSxFQUFFLGtEQUFrRDt3QkFDakUsd0JBQXdCLEVBQUUsWUFBWTtxQkFDdEM7aUJBQ0Q7OEJBSVMsSUFBSTtzQkFBWixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxJQUFJ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QixLQUFLO3VCQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RGlyZWN0aXZlLFxuXHRFbGVtZW50UmVmLFxuXHRpbmplY3QsXG5cdElucHV0LFxuXHROZ1pvbmUsXG5cdFF1ZXJ5TGlzdCxcblx0Vmlld0NoaWxkcmVuLFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc2tpcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuXG5pbXBvcnQgeyBuZ2JOYXZGYWRlSW5UcmFuc2l0aW9uLCBuZ2JOYXZGYWRlT3V0VHJhbnNpdGlvbiB9IGZyb20gJy4vbmF2LXRyYW5zaXRpb24nO1xuaW1wb3J0IHsgbmdiUnVuVHJhbnNpdGlvbiwgTmdiVHJhbnNpdGlvbk9wdGlvbnMgfSBmcm9tICcuLi91dGlsL3RyYW5zaXRpb24vbmdiVHJhbnNpdGlvbic7XG5pbXBvcnQgeyBOZ2JOYXYsIE5nYk5hdkl0ZW0gfSBmcm9tICcuL25hdic7XG5pbXBvcnQgeyBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW25nYk5hdlBhbmVdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aG9zdDoge1xuXHRcdCdbaWRdJzogJ2l0ZW0ucGFuZWxEb21JZCcsXG5cdFx0Y2xhc3M6ICd0YWItcGFuZScsXG5cdFx0J1tjbGFzcy5mYWRlXSc6ICduYXYuYW5pbWF0aW9uJyxcblx0XHQnW2F0dHIucm9sZV0nOiAncm9sZSA/IHJvbGUgOiBuYXYucm9sZXMgPyBcInRhYnBhbmVsXCIgOiB1bmRlZmluZWQnLFxuXHRcdCdbYXR0ci5hcmlhLWxhYmVsbGVkYnldJzogJ2l0ZW0uZG9tSWQnLFxuXHR9LFxufSlcbmV4cG9ydCBjbGFzcyBOZ2JOYXZQYW5lIHtcblx0bmF0aXZlRWxlbWVudCA9IGluamVjdChFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuXG5cdEBJbnB1dCgpIGl0ZW06IE5nYk5hdkl0ZW07XG5cdEBJbnB1dCgpIG5hdjogTmdiTmF2O1xuXHRASW5wdXQoKSByb2xlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogVGhlIG91dGxldCB3aGVyZSBjdXJyZW50bHkgYWN0aXZlIG5hdiBjb250ZW50IHdpbGwgYmUgZGlzcGxheWVkLlxuICpcbiAqIEBzaW5jZSA1LjIuMFxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbbmdiTmF2T3V0bGV0XScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtOZ2JOYXZQYW5lLCBOZ1RlbXBsYXRlT3V0bGV0XSxcblx0aG9zdDoge1xuXHRcdGNsYXNzOiAndGFiLWNvbnRlbnQnLFxuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0dGVtcGxhdGU6IGBcblx0XHRAZm9yIChpdGVtIG9mIG5hdi5pdGVtczsgdHJhY2sgaXRlbSkge1xuXHRcdFx0QGlmIChpdGVtLmlzUGFuZWxJbkRvbSgpIHx8IGlzUGFuZWxUcmFuc2l0aW9uaW5nKGl0ZW0pKSB7XG5cdFx0XHRcdDxkaXYgbmdiTmF2UGFuZSBbaXRlbV09XCJpdGVtXCIgW25hdl09XCJuYXZcIiBbcm9sZV09XCJwYW5lUm9sZVwiPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxuXHRcdFx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbS5jb250ZW50VHBsPy50ZW1wbGF0ZVJlZiB8fCBudWxsXCJcblx0XHRcdFx0XHRcdFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaXRlbS5hY3RpdmUgfHwgaXNQYW5lbFRyYW5zaXRpb25pbmcoaXRlbSkgfVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHR9XG5cdFx0fVxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2JOYXZPdXRsZXQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblx0cHJpdmF0ZSBfY2QgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHRwcml2YXRlIF9uZ1pvbmUgPSBpbmplY3QoTmdab25lKTtcblxuXHRwcml2YXRlIF9hY3RpdmVQYW5lOiBOZ2JOYXZQYW5lIHwgbnVsbCA9IG51bGw7XG5cblx0QFZpZXdDaGlsZHJlbihOZ2JOYXZQYW5lKSBwcml2YXRlIF9wYW5lczogUXVlcnlMaXN0PE5nYk5hdlBhbmU+O1xuXG5cdC8qKlxuXHQgKiBBIHJvbGUgdG8gc2V0IG9uIHRoZSBuYXYgcGFuZVxuXHQgKi9cblx0QElucHV0KCkgcGFuZVJvbGU7XG5cblx0LyoqXG5cdCAqIFJlZmVyZW5jZSB0byB0aGUgYE5nYk5hdmBcblx0ICovXG5cdEBJbnB1dCgnbmdiTmF2T3V0bGV0JykgbmF2OiBOZ2JOYXY7XG5cblx0aXNQYW5lbFRyYW5zaXRpb25pbmcoaXRlbTogTmdiTmF2SXRlbSkge1xuXHRcdHJldHVybiB0aGlzLl9hY3RpdmVQYW5lPy5pdGVtID09PSBpdGVtO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdC8vIGluaXRpYWwgZGlzcGxheVxuXHRcdHRoaXMuX3VwZGF0ZUFjdGl2ZVBhbmUoKTtcblxuXHRcdC8vIHRoaXMgd2lsbCBiZSBlbWl0dGVkIGZvciBhbGwgMyB0eXBlcyBvZiBuYXYgY2hhbmdlczogLnNlbGVjdCgpLCBbYWN0aXZlSWRdIG9yIChjbGljaylcblx0XHR0aGlzLm5hdi5uYXZJdGVtQ2hhbmdlJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLm5hdi5kZXN0cm95UmVmKSxcblx0XHRcdFx0c3RhcnRXaXRoKHRoaXMuX2FjdGl2ZVBhbmU/Lml0ZW0gfHwgbnVsbCksXG5cdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHRcdHNraXAoMSksXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChuZXh0SXRlbSkgPT4ge1xuXHRcdFx0XHRjb25zdCBvcHRpb25zOiBOZ2JUcmFuc2l0aW9uT3B0aW9uczx1bmRlZmluZWQ+ID0geyBhbmltYXRpb246IHRoaXMubmF2LmFuaW1hdGlvbiwgcnVubmluZ1RyYW5zaXRpb246ICdzdG9wJyB9O1xuXG5cdFx0XHRcdC8vIG5leHQgcGFuZWwgd2UncmUgc3dpdGNoaW5nIHRvIHdpbGwgb25seSBhcHBlYXIgaW4gRE9NIGFmdGVyIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIGlzIGRvbmVcblx0XHRcdFx0Ly8gYW5kIGB0aGlzLl9wYW5lc2Agd2lsbCBiZSB1cGRhdGVkXG5cdFx0XHRcdHRoaXMuX2NkLmRldGVjdENoYW5nZXMoKTtcblxuXHRcdFx0XHQvLyBmYWRpbmcgb3V0XG5cdFx0XHRcdGlmICh0aGlzLl9hY3RpdmVQYW5lKSB7XG5cdFx0XHRcdFx0bmdiUnVuVHJhbnNpdGlvbih0aGlzLl9uZ1pvbmUsIHRoaXMuX2FjdGl2ZVBhbmUubmF0aXZlRWxlbWVudCwgbmdiTmF2RmFkZU91dFRyYW5zaXRpb24sIG9wdGlvbnMpLnN1YnNjcmliZShcblx0XHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgYWN0aXZlSXRlbSA9IHRoaXMuX2FjdGl2ZVBhbmU/Lml0ZW07XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2FjdGl2ZVBhbmUgPSB0aGlzLl9nZXRQYW5lRm9ySXRlbShuZXh0SXRlbSk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gbWFyayBmb3IgY2hlY2sgd2hlbiB0cmFuc2l0aW9uIGZpbmlzaGVzIGFzIG91dGxldCBvciBwYXJlbnQgY29udGFpbmVycyBtaWdodCBiZSBPblB1c2hcblx0XHRcdFx0XHRcdFx0Ly8gd2l0aG91dCB0aGlzIHRoZSBwYW5lcyB0aGF0IGhhdmUgXCJmYWRlZCBvdXRcIiB3aWxsIHN0YXkgaW4gRE9NXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuXG5cdFx0XHRcdFx0XHRcdC8vIGZhZGluZyBpblxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5fYWN0aXZlUGFuZSkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIHdlIGhhdmUgdG8gYWRkIHRoZSAnLmFjdGl2ZScgY2xhc3MgYmVmb3JlIHJ1bm5pbmcgdGhlIHRyYW5zaXRpb24sXG5cdFx0XHRcdFx0XHRcdFx0Ly8gYmVjYXVzZSBpdCBzaG91bGQgYmUgaW4gcGxhY2UgYmVmb3JlIGBuZ2JSdW5UcmFuc2l0aW9uYCBkb2VzIGByZWZsb3coKWBcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9hY3RpdmVQYW5lLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHRcdFx0bmdiUnVuVHJhbnNpdGlvbihcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX25nWm9uZSxcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX2FjdGl2ZVBhbmUubmF0aXZlRWxlbWVudCxcblx0XHRcdFx0XHRcdFx0XHRcdG5nYk5hdkZhZGVJblRyYW5zaXRpb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLFxuXHRcdFx0XHRcdFx0XHRcdCkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChuZXh0SXRlbSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRuZXh0SXRlbS5zaG93bi5lbWl0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubmF2LnNob3duLmVtaXQobmV4dEl0ZW0uaWQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKGFjdGl2ZUl0ZW0pIHtcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmVJdGVtLmhpZGRlbi5lbWl0KCk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5uYXYuaGlkZGVuLmVtaXQoYWN0aXZlSXRlbS5pZCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl91cGRhdGVBY3RpdmVQYW5lKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBfdXBkYXRlQWN0aXZlUGFuZSgpIHtcblx0XHR0aGlzLl9hY3RpdmVQYW5lID0gdGhpcy5fZ2V0QWN0aXZlUGFuZSgpO1xuXHRcdHRoaXMuX2FjdGl2ZVBhbmU/Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycsICdhY3RpdmUnKTtcblx0fVxuXG5cdHByaXZhdGUgX2dldFBhbmVGb3JJdGVtKGl0ZW06IE5nYk5hdkl0ZW0gfCBudWxsKSB7XG5cdFx0cmV0dXJuICh0aGlzLl9wYW5lcyAmJiB0aGlzLl9wYW5lcy5maW5kKChwYW5lKSA9PiBwYW5lLml0ZW0gPT09IGl0ZW0pKSB8fCBudWxsO1xuXHR9XG5cblx0cHJpdmF0ZSBfZ2V0QWN0aXZlUGFuZSgpOiBOZ2JOYXZQYW5lIHwgbnVsbCB7XG5cdFx0cmV0dXJuICh0aGlzLl9wYW5lcyAmJiB0aGlzLl9wYW5lcy5maW5kKChwYW5lKSA9PiBwYW5lLml0ZW0uYWN0aXZlKSkgfHwgbnVsbDtcblx0fVxufVxuIl19