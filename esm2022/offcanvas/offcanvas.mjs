import { inject, Injectable, Injector } from '@angular/core';
import { NgbOffcanvasConfig } from './offcanvas-config';
import { NgbOffcanvasStack } from './offcanvas-stack';
import * as i0 from "@angular/core";
/**
 * A service for opening an offcanvas.
 *
 * Creating an offcanvas is straightforward: create a component or a template and pass it as an argument to
 * the `.open()` method.
 *
 * @since 12.1.0
 */
export class NgbOffcanvas {
    constructor() {
        this._injector = inject(Injector);
        this._offcanvasStack = inject(NgbOffcanvasStack);
        this._config = inject(NgbOffcanvasConfig);
    }
    /**
     * Opens a new offcanvas panel with the specified content and supplied options.
     *
     * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
     * then instances of those components can be injected with an instance of the `NgbActiveOffcanvas` class. You can then
     * use `NgbActiveOffcanvas` methods to close / dismiss offcanvas from "inside" of your component.
     *
     * Also see the [`NgbOffcanvasOptions`](#/components/offcanvas/api#NgbOffcanvasOptions) for the list of supported
     * options.
     */
    open(content, options = {}) {
        const combinedOptions = { ...this._config, animation: this._config.animation, ...options };
        return this._offcanvasStack.open(this._injector, content, combinedOptions);
    }
    /**
     * Returns an observable that holds the active offcanvas instance.
     */
    get activeInstance() {
        return this._offcanvasStack.activeInstance;
    }
    /**
     * Dismisses the currently displayed offcanvas with the supplied reason.
     */
    dismiss(reason) {
        this._offcanvasStack.dismiss(reason);
    }
    /**
     * Indicates if there is currently an open offcanvas in the application.
     */
    hasOpenOffcanvas() {
        return this._offcanvasStack.hasOpenOffcanvas();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbOffcanvas, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbOffcanvas, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbOffcanvas, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmY2FudmFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL29mZmNhbnZhcy9vZmZjYW52YXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBdUIsTUFBTSxvQkFBb0IsQ0FBQztBQUU3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFdEQ7Ozs7Ozs7R0FPRztBQUVILE1BQU0sT0FBTyxZQUFZO0lBRHpCO1FBRVMsY0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixvQkFBZSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzVDLFlBQU8sR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQXFDN0M7SUFuQ0E7Ozs7Ozs7OztPQVNHO0lBQ0gsSUFBSSxDQUFDLE9BQVksRUFBRSxVQUErQixFQUFFO1FBQ25ELE1BQU0sZUFBZSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQzNGLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxjQUFjO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUM7SUFDNUMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsT0FBTyxDQUFDLE1BQVk7UUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDaEQsQ0FBQzs4R0F2Q1csWUFBWTtrSEFBWixZQUFZLGNBREMsTUFBTTs7MkZBQ25CLFlBQVk7a0JBRHhCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiT2ZmY2FudmFzQ29uZmlnLCBOZ2JPZmZjYW52YXNPcHRpb25zIH0gZnJvbSAnLi9vZmZjYW52YXMtY29uZmlnJztcbmltcG9ydCB7IE5nYk9mZmNhbnZhc1JlZiB9IGZyb20gJy4vb2ZmY2FudmFzLXJlZic7XG5pbXBvcnQgeyBOZ2JPZmZjYW52YXNTdGFjayB9IGZyb20gJy4vb2ZmY2FudmFzLXN0YWNrJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIG9wZW5pbmcgYW4gb2ZmY2FudmFzLlxuICpcbiAqIENyZWF0aW5nIGFuIG9mZmNhbnZhcyBpcyBzdHJhaWdodGZvcndhcmQ6IGNyZWF0ZSBhIGNvbXBvbmVudCBvciBhIHRlbXBsYXRlIGFuZCBwYXNzIGl0IGFzIGFuIGFyZ3VtZW50IHRvXG4gKiB0aGUgYC5vcGVuKClgIG1ldGhvZC5cbiAqXG4gKiBAc2luY2UgMTIuMS4wXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTmdiT2ZmY2FudmFzIHtcblx0cHJpdmF0ZSBfaW5qZWN0b3IgPSBpbmplY3QoSW5qZWN0b3IpO1xuXHRwcml2YXRlIF9vZmZjYW52YXNTdGFjayA9IGluamVjdChOZ2JPZmZjYW52YXNTdGFjayk7XG5cdHByaXZhdGUgX2NvbmZpZyA9IGluamVjdChOZ2JPZmZjYW52YXNDb25maWcpO1xuXG5cdC8qKlxuXHQgKiBPcGVucyBhIG5ldyBvZmZjYW52YXMgcGFuZWwgd2l0aCB0aGUgc3BlY2lmaWVkIGNvbnRlbnQgYW5kIHN1cHBsaWVkIG9wdGlvbnMuXG5cdCAqXG5cdCAqIENvbnRlbnQgY2FuIGJlIHByb3ZpZGVkIGFzIGEgYFRlbXBsYXRlUmVmYCBvciBhIGNvbXBvbmVudCB0eXBlLiBJZiB5b3UgcGFzcyBhIGNvbXBvbmVudCB0eXBlIGFzIGNvbnRlbnQsXG5cdCAqIHRoZW4gaW5zdGFuY2VzIG9mIHRob3NlIGNvbXBvbmVudHMgY2FuIGJlIGluamVjdGVkIHdpdGggYW4gaW5zdGFuY2Ugb2YgdGhlIGBOZ2JBY3RpdmVPZmZjYW52YXNgIGNsYXNzLiBZb3UgY2FuIHRoZW5cblx0ICogdXNlIGBOZ2JBY3RpdmVPZmZjYW52YXNgIG1ldGhvZHMgdG8gY2xvc2UgLyBkaXNtaXNzIG9mZmNhbnZhcyBmcm9tIFwiaW5zaWRlXCIgb2YgeW91ciBjb21wb25lbnQuXG5cdCAqXG5cdCAqIEFsc28gc2VlIHRoZSBbYE5nYk9mZmNhbnZhc09wdGlvbnNgXSgjL2NvbXBvbmVudHMvb2ZmY2FudmFzL2FwaSNOZ2JPZmZjYW52YXNPcHRpb25zKSBmb3IgdGhlIGxpc3Qgb2Ygc3VwcG9ydGVkXG5cdCAqIG9wdGlvbnMuXG5cdCAqL1xuXHRvcGVuKGNvbnRlbnQ6IGFueSwgb3B0aW9uczogTmdiT2ZmY2FudmFzT3B0aW9ucyA9IHt9KTogTmdiT2ZmY2FudmFzUmVmIHtcblx0XHRjb25zdCBjb21iaW5lZE9wdGlvbnMgPSB7IC4uLnRoaXMuX2NvbmZpZywgYW5pbWF0aW9uOiB0aGlzLl9jb25maWcuYW5pbWF0aW9uLCAuLi5vcHRpb25zIH07XG5cdFx0cmV0dXJuIHRoaXMuX29mZmNhbnZhc1N0YWNrLm9wZW4odGhpcy5faW5qZWN0b3IsIGNvbnRlbnQsIGNvbWJpbmVkT3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgaG9sZHMgdGhlIGFjdGl2ZSBvZmZjYW52YXMgaW5zdGFuY2UuXG5cdCAqL1xuXHRnZXQgYWN0aXZlSW5zdGFuY2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX29mZmNhbnZhc1N0YWNrLmFjdGl2ZUluc3RhbmNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIERpc21pc3NlcyB0aGUgY3VycmVudGx5IGRpc3BsYXllZCBvZmZjYW52YXMgd2l0aCB0aGUgc3VwcGxpZWQgcmVhc29uLlxuXHQgKi9cblx0ZGlzbWlzcyhyZWFzb24/OiBhbnkpIHtcblx0XHR0aGlzLl9vZmZjYW52YXNTdGFjay5kaXNtaXNzKHJlYXNvbik7XG5cdH1cblxuXHQvKipcblx0ICogSW5kaWNhdGVzIGlmIHRoZXJlIGlzIGN1cnJlbnRseSBhbiBvcGVuIG9mZmNhbnZhcyBpbiB0aGUgYXBwbGljYXRpb24uXG5cdCAqL1xuXHRoYXNPcGVuT2ZmY2FudmFzKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLl9vZmZjYW52YXNTdGFjay5oYXNPcGVuT2ZmY2FudmFzKCk7XG5cdH1cbn1cbiJdfQ==