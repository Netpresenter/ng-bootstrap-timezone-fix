import { inject, Injectable } from '@angular/core';
import { NgbConfig } from '../ngb-config';
import * as i0 from "@angular/core";
/**
 * A configuration service for the [`NgbPopover`](#/components/popover/api#NgbPopover) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
export class NgbPopoverConfig {
    constructor() {
        this._ngbConfig = inject(NgbConfig);
        this.autoClose = true;
        this.placement = 'auto';
        this.popperOptions = (options) => options;
        this.triggers = 'click';
        this.disablePopover = false;
        this.openDelay = 0;
        this.closeDelay = 0;
    }
    get animation() {
        return this._animation ?? this._ngbConfig.animation;
    }
    set animation(animation) {
        this._animation = animation;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPopoverConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPopoverConfig, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPopoverConfig, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcG9wb3Zlci9wb3BvdmVyLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUcxQzs7Ozs7R0FLRztBQUVILE1BQU0sT0FBTyxnQkFBZ0I7SUFEN0I7UUFFUyxlQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBR3ZDLGNBQVMsR0FBbUMsSUFBSSxDQUFDO1FBQ2pELGNBQVMsR0FBbUIsTUFBTSxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsQ0FBQyxPQUF5QixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDdkQsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUVuQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZUFBVSxHQUFHLENBQUMsQ0FBQztLQVFmO0lBTkEsSUFBSSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3JELENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxTQUFrQjtRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDOzhHQW5CVyxnQkFBZ0I7a0hBQWhCLGdCQUFnQixjQURILE1BQU07OzJGQUNuQixnQkFBZ0I7a0JBRDVCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGFjZW1lbnRBcnJheSB9IGZyb20gJy4uL3V0aWwvcG9zaXRpb25pbmcnO1xuaW1wb3J0IHsgTmdiQ29uZmlnIH0gZnJvbSAnLi4vbmdiLWNvbmZpZyc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuXG4vKipcbiAqIEEgY29uZmlndXJhdGlvbiBzZXJ2aWNlIGZvciB0aGUgW2BOZ2JQb3BvdmVyYF0oIy9jb21wb25lbnRzL3BvcG92ZXIvYXBpI05nYlBvcG92ZXIpIGNvbXBvbmVudC5cbiAqXG4gKiBZb3UgY2FuIGluamVjdCB0aGlzIHNlcnZpY2UsIHR5cGljYWxseSBpbiB5b3VyIHJvb3QgY29tcG9uZW50LCBhbmQgY3VzdG9taXplIHRoZSB2YWx1ZXMgb2YgaXRzIHByb3BlcnRpZXMgaW5cbiAqIG9yZGVyIHRvIHByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIGFsbCB0aGUgcG9wb3ZlcnMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTmdiUG9wb3ZlckNvbmZpZyB7XG5cdHByaXZhdGUgX25nYkNvbmZpZyA9IGluamVjdChOZ2JDb25maWcpO1xuXHRwcml2YXRlIF9hbmltYXRpb246IGJvb2xlYW47XG5cblx0YXV0b0Nsb3NlOiBib29sZWFuIHwgJ2luc2lkZScgfCAnb3V0c2lkZScgPSB0cnVlO1xuXHRwbGFjZW1lbnQ6IFBsYWNlbWVudEFycmF5ID0gJ2F1dG8nO1xuXHRwb3BwZXJPcHRpb25zID0gKG9wdGlvbnM6IFBhcnRpYWw8T3B0aW9ucz4pID0+IG9wdGlvbnM7XG5cdHRyaWdnZXJzID0gJ2NsaWNrJztcblx0Y29udGFpbmVyOiBzdHJpbmc7XG5cdGRpc2FibGVQb3BvdmVyID0gZmFsc2U7XG5cdHBvcG92ZXJDbGFzczogc3RyaW5nO1xuXHRvcGVuRGVsYXkgPSAwO1xuXHRjbG9zZURlbGF5ID0gMDtcblxuXHRnZXQgYW5pbWF0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9hbmltYXRpb24gPz8gdGhpcy5fbmdiQ29uZmlnLmFuaW1hdGlvbjtcblx0fVxuXHRzZXQgYW5pbWF0aW9uKGFuaW1hdGlvbjogYm9vbGVhbikge1xuXHRcdHRoaXMuX2FuaW1hdGlvbiA9IGFuaW1hdGlvbjtcblx0fVxufVxuIl19