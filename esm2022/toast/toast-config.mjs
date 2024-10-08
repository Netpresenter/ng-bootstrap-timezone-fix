import { inject, Injectable } from '@angular/core';
import { NgbConfig } from '../ngb-config';
import * as i0 from "@angular/core";
/**
 * Configuration service for the NgbToast component. You can inject this service, typically in your root component,
 * and customize the values of its properties in order to provide default values for all the toasts used in the
 * application.
 *
 * @since 5.0.0
 */
export class NgbToastConfig {
    constructor() {
        this._ngbConfig = inject(NgbConfig);
        this.autohide = true;
        this.delay = 5000;
        this.ariaLive = 'polite';
    }
    get animation() {
        return this._animation ?? this._ngbConfig.animation;
    }
    set animation(animation) {
        this._animation = animation;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbToastConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbToastConfig, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbToastConfig, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RvYXN0L3RvYXN0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQTZCMUM7Ozs7OztHQU1HO0FBRUgsTUFBTSxPQUFPLGNBQWM7SUFEM0I7UUFFUyxlQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBR3ZDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLGFBQVEsR0FBdUIsUUFBUSxDQUFDO0tBUXhDO0lBTkEsSUFBSSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3JELENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxTQUFrQjtRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDOzhHQWJXLGNBQWM7a0hBQWQsY0FBYyxjQURELE1BQU07OzJGQUNuQixjQUFjO2tCQUQxQixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiQ29uZmlnIH0gZnJvbSAnLi4vbmdiLWNvbmZpZyc7XG5cbi8qKlxuICogSW50ZXJmYWNlIHVzZWQgdG8gdHlwZSBhbGwgdG9hc3QgY29uZmlnIG9wdGlvbnMuIFNlZSBgTmdiVG9hc3RDb25maWdgLlxuICpcbiAqIEBzaW5jZSA1LjAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nYlRvYXN0T3B0aW9ucyB7XG5cdC8qKlxuXHQgKiBTcGVjaWZ5IGlmIHRoZSB0b2FzdCBjb21wb25lbnQgc2hvdWxkIGVtaXQgdGhlIGBoaWRlKClgIG91dHB1dFxuXHQgKiBhZnRlciBhIGNlcnRhaW4gYGRlbGF5YCBpbiBtcy5cblx0ICovXG5cdGF1dG9oaWRlPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogRGVsYXkgaW4gbXMgYWZ0ZXIgd2hpY2ggdGhlIGBoaWRlKClgIG91dHB1dCBzaG91bGQgYmUgZW1pdHRlZC5cblx0ICovXG5cdGRlbGF5PzogbnVtYmVyO1xuXG5cdC8qKlxuXHQgKiBUeXBlIG9mIGFyaWEtbGl2ZSBhdHRyaWJ1dGUgdG8gYmUgdXNlZC5cblx0ICpcblx0ICogQ291bGQgYmUgb25lIG9mIHRoZXNlIDIgdmFsdWVzIChhcyBzdHJpbmcpOlxuXHQgKiAtIGBwb2xpdGVgIChkZWZhdWx0KVxuXHQgKiAtIGBhbGVydGBcblx0ICovXG5cdGFyaWFMaXZlPzogJ3BvbGl0ZScgfCAnYWxlcnQnO1xufVxuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gc2VydmljZSBmb3IgdGhlIE5nYlRvYXN0IGNvbXBvbmVudC4gWW91IGNhbiBpbmplY3QgdGhpcyBzZXJ2aWNlLCB0eXBpY2FsbHkgaW4geW91ciByb290IGNvbXBvbmVudCxcbiAqIGFuZCBjdXN0b21pemUgdGhlIHZhbHVlcyBvZiBpdHMgcHJvcGVydGllcyBpbiBvcmRlciB0byBwcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciBhbGwgdGhlIHRvYXN0cyB1c2VkIGluIHRoZVxuICogYXBwbGljYXRpb24uXG4gKlxuICogQHNpbmNlIDUuMC4wXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTmdiVG9hc3RDb25maWcgaW1wbGVtZW50cyBOZ2JUb2FzdE9wdGlvbnMge1xuXHRwcml2YXRlIF9uZ2JDb25maWcgPSBpbmplY3QoTmdiQ29uZmlnKTtcblx0cHJpdmF0ZSBfYW5pbWF0aW9uOiBib29sZWFuO1xuXG5cdGF1dG9oaWRlID0gdHJ1ZTtcblx0ZGVsYXkgPSA1MDAwO1xuXHRhcmlhTGl2ZTogJ3BvbGl0ZScgfCAnYWxlcnQnID0gJ3BvbGl0ZSc7XG5cblx0Z2V0IGFuaW1hdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5fYW5pbWF0aW9uID8/IHRoaXMuX25nYkNvbmZpZy5hbmltYXRpb247XG5cdH1cblx0c2V0IGFuaW1hdGlvbihhbmltYXRpb246IGJvb2xlYW4pIHtcblx0XHR0aGlzLl9hbmltYXRpb24gPSBhbmltYXRpb247XG5cdH1cbn1cbiJdfQ==