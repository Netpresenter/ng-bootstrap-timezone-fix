import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, inject, Input, NgZone, Output, ViewEncapsulation, } from '@angular/core';
import { NgbAlertConfig } from './alert-config';
import { ngbRunTransition } from '../util/transition/ngbTransition';
import { ngbAlertFadingTransition } from './alert-transition';
import * as i0 from "@angular/core";
/**
 * Alert is a component to provide contextual feedback messages for user.
 *
 * It supports several alert types and can be dismissed.
 */
export class NgbAlert {
    constructor() {
        this._config = inject(NgbAlertConfig);
        this._elementRef = inject((ElementRef));
        this._zone = inject(NgZone);
        /**
         * If `true`, alert closing will be animated.
         *
         * Animation is triggered only when clicked on the close button (×)
         * or via the `.close()` function
         *
         * @since 8.0.0
         */
        this.animation = this._config.animation;
        /**
         * If `true`, alert can be dismissed by the user.
         *
         * The close button (×) will be displayed and you can be notified
         * of the event with the `(closed)` output.
         */
        this.dismissible = this._config.dismissible;
        /**
         * Type of the alert.
         *
         * Bootstrap provides styles for the following types: `'success'`, `'info'`, `'warning'`, `'danger'`, `'primary'`,
         * `'secondary'`, `'light'` and `'dark'`.
         */
        this.type = this._config.type;
        /**
         * An event emitted when the close button is clicked. It has no payload and only relevant for dismissible alerts.
         *
         * @since 8.0.0
         */
        this.closed = new EventEmitter();
    }
    /**
     * Triggers alert closing programmatically (same as clicking on the close button (×)).
     *
     * The returned observable will emit and be completed once the closing transition has finished.
     * If the animations are turned off this happens synchronously.
     *
     * Alternatively you could listen or subscribe to the `(closed)` output
     *
     * @since 8.0.0
     */
    close() {
        const transition = ngbRunTransition(this._zone, this._elementRef.nativeElement, ngbAlertFadingTransition, {
            animation: this.animation,
            runningTransition: 'continue',
        });
        transition.subscribe(() => this.closed.emit());
        return transition;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbAlert, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.2", type: NgbAlert, isStandalone: true, selector: "ngb-alert", inputs: { animation: "animation", dismissible: "dismissible", type: "type" }, outputs: { closed: "closed" }, host: { attributes: { "role": "alert" }, properties: { "class": "\"alert show\" + (type ? \" alert-\" + type : \"\")", "class.fade": "animation", "class.alert-dismissible": "dismissible" } }, exportAs: ["ngbAlert"], ngImport: i0, template: `
		<ng-content />
		@if (dismissible) {
			<button
				type="button"
				class="btn-close"
				aria-label="Close"
				i18n-aria-label="@@ngb.alert.close"
				(click)="close()"
			></button>
		}
	`, isInline: true, styles: ["ngb-alert{display:block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbAlert, decorators: [{
            type: Component,
            args: [{ selector: 'ngb-alert', exportAs: 'ngbAlert', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        role: 'alert',
                        '[class]': '"alert show" + (type ? " alert-" + type : "")',
                        '[class.fade]': 'animation',
                        '[class.alert-dismissible]': 'dismissible',
                    }, template: `
		<ng-content />
		@if (dismissible) {
			<button
				type="button"
				class="btn-close"
				aria-label="Close"
				i18n-aria-label="@@ngb.alert.close"
				(click)="close()"
			></button>
		}
	`, styles: ["ngb-alert{display:block}\n"] }]
        }], propDecorators: { animation: [{
                type: Input
            }], dismissible: [{
                type: Input
            }], type: [{
                type: Input
            }], closed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYWxlcnQvYWxlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04saUJBQWlCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFOUQ7Ozs7R0FJRztBQTJCSCxNQUFNLE9BQU8sUUFBUTtJQTFCckI7UUEyQlMsWUFBTyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFVBQXVCLENBQUEsQ0FBQyxDQUFDO1FBQzlDLFVBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0I7Ozs7Ozs7V0FPRztRQUNNLGNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUU1Qzs7Ozs7V0FLRztRQUNNLGdCQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFaEQ7Ozs7O1dBS0c7UUFDTSxTQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFbEM7Ozs7V0FJRztRQUNPLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0tBb0I1QztJQWxCQTs7Ozs7Ozs7O09BU0c7SUFDSCxLQUFLO1FBQ0osTUFBTSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSx3QkFBd0IsRUFBRTtZQUN6RyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsaUJBQWlCLEVBQUUsVUFBVTtTQUM3QixDQUFDLENBQUM7UUFDSCxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMvQyxPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOzhHQXZEVyxRQUFRO2tHQUFSLFFBQVEsMFlBZFY7Ozs7Ozs7Ozs7O0VBV1Q7OzJGQUdXLFFBQVE7a0JBMUJwQixTQUFTOytCQUNDLFdBQVcsWUFDWCxVQUFVLGNBQ1IsSUFBSSxtQkFDQyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLFFBQy9CO3dCQUNMLElBQUksRUFBRSxPQUFPO3dCQUNiLFNBQVMsRUFBRSwrQ0FBK0M7d0JBQzFELGNBQWMsRUFBRSxXQUFXO3dCQUMzQiwyQkFBMkIsRUFBRSxhQUFhO3FCQUMxQyxZQUNTOzs7Ozs7Ozs7OztFQVdUOzhCQWdCUSxTQUFTO3NCQUFqQixLQUFLO2dCQVFHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBUUcsSUFBSTtzQkFBWixLQUFLO2dCQU9JLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdEV2ZW50RW1pdHRlcixcblx0aW5qZWN0LFxuXHRJbnB1dCxcblx0Tmdab25lLFxuXHRPdXRwdXQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOZ2JBbGVydENvbmZpZyB9IGZyb20gJy4vYWxlcnQtY29uZmlnJztcbmltcG9ydCB7IG5nYlJ1blRyYW5zaXRpb24gfSBmcm9tICcuLi91dGlsL3RyYW5zaXRpb24vbmdiVHJhbnNpdGlvbic7XG5pbXBvcnQgeyBuZ2JBbGVydEZhZGluZ1RyYW5zaXRpb24gfSBmcm9tICcuL2FsZXJ0LXRyYW5zaXRpb24nO1xuXG4vKipcbiAqIEFsZXJ0IGlzIGEgY29tcG9uZW50IHRvIHByb3ZpZGUgY29udGV4dHVhbCBmZWVkYmFjayBtZXNzYWdlcyBmb3IgdXNlci5cbiAqXG4gKiBJdCBzdXBwb3J0cyBzZXZlcmFsIGFsZXJ0IHR5cGVzIGFuZCBjYW4gYmUgZGlzbWlzc2VkLlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICduZ2ItYWxlcnQnLFxuXHRleHBvcnRBczogJ25nYkFsZXJ0Jyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHRyb2xlOiAnYWxlcnQnLFxuXHRcdCdbY2xhc3NdJzogJ1wiYWxlcnQgc2hvd1wiICsgKHR5cGUgPyBcIiBhbGVydC1cIiArIHR5cGUgOiBcIlwiKScsXG5cdFx0J1tjbGFzcy5mYWRlXSc6ICdhbmltYXRpb24nLFxuXHRcdCdbY2xhc3MuYWxlcnQtZGlzbWlzc2libGVdJzogJ2Rpc21pc3NpYmxlJyxcblx0fSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctY29udGVudCAvPlxuXHRcdEBpZiAoZGlzbWlzc2libGUpIHtcblx0XHRcdDxidXR0b25cblx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdGNsYXNzPVwiYnRuLWNsb3NlXCJcblx0XHRcdFx0YXJpYS1sYWJlbD1cIkNsb3NlXCJcblx0XHRcdFx0aTE4bi1hcmlhLWxhYmVsPVwiQEBuZ2IuYWxlcnQuY2xvc2VcIlxuXHRcdFx0XHQoY2xpY2spPVwiY2xvc2UoKVwiXG5cdFx0XHQ+PC9idXR0b24+XG5cdFx0fVxuXHRgLFxuXHRzdHlsZVVybDogJy4vYWxlcnQuc2NzcycsXG59KVxuZXhwb3J0IGNsYXNzIE5nYkFsZXJ0IHtcblx0cHJpdmF0ZSBfY29uZmlnID0gaW5qZWN0KE5nYkFsZXJ0Q29uZmlnKTtcblx0cHJpdmF0ZSBfZWxlbWVudFJlZiA9IGluamVjdChFbGVtZW50UmVmPEhUTUxFbGVtZW50Pik7XG5cdHByaXZhdGUgX3pvbmUgPSBpbmplY3QoTmdab25lKTtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjbG9zaW5nIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEFuaW1hdGlvbiBpcyB0cmlnZ2VyZWQgb25seSB3aGVuIGNsaWNrZWQgb24gdGhlIGNsb3NlIGJ1dHRvbiAow5cpXG5cdCAqIG9yIHZpYSB0aGUgYC5jbG9zZSgpYCBmdW5jdGlvblxuXHQgKlxuXHQgKiBAc2luY2UgOC4wLjBcblx0ICovXG5cdEBJbnB1dCgpIGFuaW1hdGlvbiA9IHRoaXMuX2NvbmZpZy5hbmltYXRpb247XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgYWxlcnQgY2FuIGJlIGRpc21pc3NlZCBieSB0aGUgdXNlci5cblx0ICpcblx0ICogVGhlIGNsb3NlIGJ1dHRvbiAow5cpIHdpbGwgYmUgZGlzcGxheWVkIGFuZCB5b3UgY2FuIGJlIG5vdGlmaWVkXG5cdCAqIG9mIHRoZSBldmVudCB3aXRoIHRoZSBgKGNsb3NlZClgIG91dHB1dC5cblx0ICovXG5cdEBJbnB1dCgpIGRpc21pc3NpYmxlID0gdGhpcy5fY29uZmlnLmRpc21pc3NpYmxlO1xuXG5cdC8qKlxuXHQgKiBUeXBlIG9mIHRoZSBhbGVydC5cblx0ICpcblx0ICogQm9vdHN0cmFwIHByb3ZpZGVzIHN0eWxlcyBmb3IgdGhlIGZvbGxvd2luZyB0eXBlczogYCdzdWNjZXNzJ2AsIGAnaW5mbydgLCBgJ3dhcm5pbmcnYCwgYCdkYW5nZXInYCwgYCdwcmltYXJ5J2AsXG5cdCAqIGAnc2Vjb25kYXJ5J2AsIGAnbGlnaHQnYCBhbmQgYCdkYXJrJ2AuXG5cdCAqL1xuXHRASW5wdXQoKSB0eXBlID0gdGhpcy5fY29uZmlnLnR5cGU7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY2xvc2UgYnV0dG9uIGlzIGNsaWNrZWQuIEl0IGhhcyBubyBwYXlsb2FkIGFuZCBvbmx5IHJlbGV2YW50IGZvciBkaXNtaXNzaWJsZSBhbGVydHMuXG5cdCAqXG5cdCAqIEBzaW5jZSA4LjAuMFxuXHQgKi9cblx0QE91dHB1dCgpIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHQvKipcblx0ICogVHJpZ2dlcnMgYWxlcnQgY2xvc2luZyBwcm9ncmFtbWF0aWNhbGx5IChzYW1lIGFzIGNsaWNraW5nIG9uIHRoZSBjbG9zZSBidXR0b24gKMOXKSkuXG5cdCAqXG5cdCAqIFRoZSByZXR1cm5lZCBvYnNlcnZhYmxlIHdpbGwgZW1pdCBhbmQgYmUgY29tcGxldGVkIG9uY2UgdGhlIGNsb3NpbmcgdHJhbnNpdGlvbiBoYXMgZmluaXNoZWQuXG5cdCAqIElmIHRoZSBhbmltYXRpb25zIGFyZSB0dXJuZWQgb2ZmIHRoaXMgaGFwcGVucyBzeW5jaHJvbm91c2x5LlxuXHQgKlxuXHQgKiBBbHRlcm5hdGl2ZWx5IHlvdSBjb3VsZCBsaXN0ZW4gb3Igc3Vic2NyaWJlIHRvIHRoZSBgKGNsb3NlZClgIG91dHB1dFxuXHQgKlxuXHQgKiBAc2luY2UgOC4wLjBcblx0ICovXG5cdGNsb3NlKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuXHRcdGNvbnN0IHRyYW5zaXRpb24gPSBuZ2JSdW5UcmFuc2l0aW9uKHRoaXMuX3pvbmUsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgbmdiQWxlcnRGYWRpbmdUcmFuc2l0aW9uLCB7XG5cdFx0XHRhbmltYXRpb246IHRoaXMuYW5pbWF0aW9uLFxuXHRcdFx0cnVubmluZ1RyYW5zaXRpb246ICdjb250aW51ZScsXG5cdFx0fSk7XG5cdFx0dHJhbnNpdGlvbi5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZWQuZW1pdCgpKTtcblx0XHRyZXR1cm4gdHJhbnNpdGlvbjtcblx0fVxufVxuIl19