import { inject, Injectable } from '@angular/core';
import { NgbConfig } from '../ngb-config';
import * as i0 from "@angular/core";
/**
 * A configuration service for the [`NgbNav`](#/components/nav/api#NgbNav) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the navs used in the application.
 *
 * @since 5.2.0
 */
export class NgbNavConfig {
    constructor() {
        this._ngbConfig = inject(NgbConfig);
        this.destroyOnHide = true;
        this.orientation = 'horizontal';
        this.roles = 'tablist';
        this.keyboard = true;
    }
    get animation() {
        return this._animation ?? this._ngbConfig.animation;
    }
    set animation(animation) {
        this._animation = animation;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbNavConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbNavConfig, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbNavConfig, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9uYXYvbmF2LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUxQzs7Ozs7OztHQU9HO0FBRUgsTUFBTSxPQUFPLFlBQVk7SUFEekI7UUFFUyxlQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBR3ZDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGdCQUFXLEdBQThCLFlBQVksQ0FBQztRQUN0RCxVQUFLLEdBQXNCLFNBQVMsQ0FBQztRQUNyQyxhQUFRLEdBQWlDLElBQUksQ0FBQztLQVE5QztJQU5BLElBQUksU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBSSxTQUFTLENBQUMsU0FBa0I7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQzs4R0FkVyxZQUFZO2tIQUFaLFlBQVksY0FEQyxNQUFNOzsyRkFDbkIsWUFBWTtrQkFEeEIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkNvbmZpZyB9IGZyb20gJy4uL25nYi1jb25maWcnO1xuXG4vKipcbiAqIEEgY29uZmlndXJhdGlvbiBzZXJ2aWNlIGZvciB0aGUgW2BOZ2JOYXZgXSgjL2NvbXBvbmVudHMvbmF2L2FwaSNOZ2JOYXYpIGNvbXBvbmVudC5cbiAqXG4gKiBZb3UgY2FuIGluamVjdCB0aGlzIHNlcnZpY2UsIHR5cGljYWxseSBpbiB5b3VyIHJvb3QgY29tcG9uZW50LCBhbmQgY3VzdG9taXplIHRoZSB2YWx1ZXMgb2YgaXRzIHByb3BlcnRpZXMgaW5cbiAqIG9yZGVyIHRvIHByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIGFsbCB0aGUgbmF2cyB1c2VkIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAqXG4gKiBAc2luY2UgNS4yLjBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBOZ2JOYXZDb25maWcge1xuXHRwcml2YXRlIF9uZ2JDb25maWcgPSBpbmplY3QoTmdiQ29uZmlnKTtcblx0cHJpdmF0ZSBfYW5pbWF0aW9uOiBib29sZWFuO1xuXG5cdGRlc3Ryb3lPbkhpZGUgPSB0cnVlO1xuXHRvcmllbnRhdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcblx0cm9sZXM6ICd0YWJsaXN0JyB8IGZhbHNlID0gJ3RhYmxpc3QnO1xuXHRrZXlib2FyZDogYm9vbGVhbiB8ICdjaGFuZ2VXaXRoQXJyb3dzJyA9IHRydWU7XG5cblx0Z2V0IGFuaW1hdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5fYW5pbWF0aW9uID8/IHRoaXMuX25nYkNvbmZpZy5hbmltYXRpb247XG5cdH1cblx0c2V0IGFuaW1hdGlvbihhbmltYXRpb246IGJvb2xlYW4pIHtcblx0XHR0aGlzLl9hbmltYXRpb24gPSBhbmltYXRpb247XG5cdH1cbn1cbiJdfQ==