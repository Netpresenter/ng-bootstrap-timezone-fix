import { inject, Injectable } from '@angular/core';
import { NgbConfig } from '../ngb-config';
import * as i0 from "@angular/core";
/**
 * A configuration service for the [`NgbAccordionDirective`](#/components/accordion/api#NgbAccordionDirective).
 *
 * You can inject this service, typically in your root component, and customize its properties
 * to provide default values for all accordions used in the application.
 */
export class NgbAccordionConfig {
    constructor() {
        this._ngbConfig = inject(NgbConfig);
        this.closeOthers = false;
        this.destroyOnHide = true;
    }
    get animation() {
        return this._animation ?? this._ngbConfig.animation;
    }
    set animation(animation) {
        this._animation = animation;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbAccordionConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbAccordionConfig, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbAccordionConfig, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hY2NvcmRpb24vYWNjb3JkaW9uLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUxQzs7Ozs7R0FLRztBQUVILE1BQU0sT0FBTyxrQkFBa0I7SUFEL0I7UUFFUyxlQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBR3ZDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0tBUXJCO0lBTkEsSUFBSSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQ3JELENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxTQUFrQjtRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDOzhHQVpXLGtCQUFrQjtrSEFBbEIsa0JBQWtCLGNBREwsTUFBTTs7MkZBQ25CLGtCQUFrQjtrQkFEOUIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkNvbmZpZyB9IGZyb20gJy4uL25nYi1jb25maWcnO1xuXG4vKipcbiAqIEEgY29uZmlndXJhdGlvbiBzZXJ2aWNlIGZvciB0aGUgW2BOZ2JBY2NvcmRpb25EaXJlY3RpdmVgXSgjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FwaSNOZ2JBY2NvcmRpb25EaXJlY3RpdmUpLlxuICpcbiAqIFlvdSBjYW4gaW5qZWN0IHRoaXMgc2VydmljZSwgdHlwaWNhbGx5IGluIHlvdXIgcm9vdCBjb21wb25lbnQsIGFuZCBjdXN0b21pemUgaXRzIHByb3BlcnRpZXNcbiAqIHRvIHByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIGFsbCBhY2NvcmRpb25zIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE5nYkFjY29yZGlvbkNvbmZpZyB7XG5cdHByaXZhdGUgX25nYkNvbmZpZyA9IGluamVjdChOZ2JDb25maWcpO1xuXHRwcml2YXRlIF9hbmltYXRpb246IGJvb2xlYW47XG5cblx0Y2xvc2VPdGhlcnMgPSBmYWxzZTtcblx0ZGVzdHJveU9uSGlkZSA9IHRydWU7XG5cblx0Z2V0IGFuaW1hdGlvbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5fYW5pbWF0aW9uID8/IHRoaXMuX25nYkNvbmZpZy5hbmltYXRpb247XG5cdH1cblx0c2V0IGFuaW1hdGlvbihhbmltYXRpb246IGJvb2xlYW4pIHtcblx0XHR0aGlzLl9hbmltYXRpb24gPSBhbmltYXRpb247XG5cdH1cbn1cbiJdfQ==