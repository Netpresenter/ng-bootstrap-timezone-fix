import { inject, Injectable } from '@angular/core';
import { NgbConfig } from '../ngb-config';
import * as i0 from "@angular/core";
/**
 * A configuration service for the [NgbCarousel](#/components/carousel/api#NgbCarousel) component.
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all carousels used in the application.
 */
export class NgbCarouselConfig {
    constructor() {
        this._ngbConfig = inject(NgbConfig);
        this.interval = 5000;
        this.wrap = true;
        this.keyboard = true;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.showNavigationArrows = true;
        this.showNavigationIndicators = true;
    }
    get animation() {
        return this._animation ?? this._ngbConfig.animation;
    }
    set animation(animation) {
        this._animation = animation;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbCarouselConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbCarouselConfig, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbCarouselConfig, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Nhcm91c2VsL2Nhcm91c2VsLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUxQzs7Ozs7R0FLRztBQUVILE1BQU0sT0FBTyxpQkFBaUI7SUFEOUI7UUFFUyxlQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBR3ZDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLDZCQUF3QixHQUFHLElBQUksQ0FBQztLQVFoQztJQU5BLElBQUksU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsU0FBa0I7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQzs4R0FqQlcsaUJBQWlCO2tIQUFqQixpQkFBaUIsY0FESixNQUFNOzsyRkFDbkIsaUJBQWlCO2tCQUQ3QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiQ29uZmlnIH0gZnJvbSAnLi4vbmdiLWNvbmZpZyc7XG5cbi8qKlxuICogQSBjb25maWd1cmF0aW9uIHNlcnZpY2UgZm9yIHRoZSBbTmdiQ2Fyb3VzZWxdKCMvY29tcG9uZW50cy9jYXJvdXNlbC9hcGkjTmdiQ2Fyb3VzZWwpIGNvbXBvbmVudC5cbiAqXG4gKiBZb3UgY2FuIGluamVjdCB0aGlzIHNlcnZpY2UsIHR5cGljYWxseSBpbiB5b3VyIHJvb3QgY29tcG9uZW50LCBhbmQgY3VzdG9taXplIGl0cyBwcm9wZXJ0aWVzXG4gKiB0byBwcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciBhbGwgY2Fyb3VzZWxzIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE5nYkNhcm91c2VsQ29uZmlnIHtcblx0cHJpdmF0ZSBfbmdiQ29uZmlnID0gaW5qZWN0KE5nYkNvbmZpZyk7XG5cdHByaXZhdGUgX2FuaW1hdGlvbjogYm9vbGVhbjtcblxuXHRpbnRlcnZhbCA9IDUwMDA7XG5cdHdyYXAgPSB0cnVlO1xuXHRrZXlib2FyZCA9IHRydWU7XG5cdHBhdXNlT25Ib3ZlciA9IHRydWU7XG5cdHBhdXNlT25Gb2N1cyA9IHRydWU7XG5cdHNob3dOYXZpZ2F0aW9uQXJyb3dzID0gdHJ1ZTtcblx0c2hvd05hdmlnYXRpb25JbmRpY2F0b3JzID0gdHJ1ZTtcblxuXHRnZXQgYW5pbWF0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9hbmltYXRpb24gPz8gdGhpcy5fbmdiQ29uZmlnLmFuaW1hdGlvbjtcblx0fVxuXHRzZXQgYW5pbWF0aW9uKGFuaW1hdGlvbjogYm9vbGVhbikge1xuXHRcdHRoaXMuX2FuaW1hdGlvbiA9IGFuaW1hdGlvbjtcblx0fVxufVxuIl19