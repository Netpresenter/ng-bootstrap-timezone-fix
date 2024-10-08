import { Injectable } from '@angular/core';
import { defaultProcessChanges } from './scrollspy.utils';
import * as i0 from "@angular/core";
/**
 * A configuration service for the [`NgbScrollSpyService`](#/components/scrollspy/api#NgbScrollSpyService).
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all scrollspies used in the application.
 *
 * @since 15.1.0
 */
export class NgbScrollSpyConfig {
    constructor() {
        this.scrollBehavior = 'smooth';
        this.processChanges = defaultProcessChanges;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbScrollSpyConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbScrollSpyConfig, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbScrollSpyConfig, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsc3B5LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zY3JvbGxzcHkvc2Nyb2xsc3B5LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUUxRDs7Ozs7OztHQU9HO0FBRUgsTUFBTSxPQUFPLGtCQUFrQjtJQUQvQjtRQUVDLG1CQUFjLEdBQXNCLFFBQVEsQ0FBQztRQUM3QyxtQkFBYyxHQUErQixxQkFBcUIsQ0FBQztLQUNuRTs4R0FIWSxrQkFBa0I7a0hBQWxCLGtCQUFrQixjQURMLE1BQU07OzJGQUNuQixrQkFBa0I7a0JBRDlCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiU2Nyb2xsU3B5UHJvY2Vzc0NoYW5nZXMgfSBmcm9tICcuL3Njcm9sbHNweS5zZXJ2aWNlJztcbmltcG9ydCB7IGRlZmF1bHRQcm9jZXNzQ2hhbmdlcyB9IGZyb20gJy4vc2Nyb2xsc3B5LnV0aWxzJztcblxuLyoqXG4gKiBBIGNvbmZpZ3VyYXRpb24gc2VydmljZSBmb3IgdGhlIFtgTmdiU2Nyb2xsU3B5U2VydmljZWBdKCMvY29tcG9uZW50cy9zY3JvbGxzcHkvYXBpI05nYlNjcm9sbFNweVNlcnZpY2UpLlxuICpcbiAqIFlvdSBjYW4gaW5qZWN0IHRoaXMgc2VydmljZSwgdHlwaWNhbGx5IGluIHlvdXIgcm9vdCBjb21wb25lbnQsIGFuZCBjdXN0b21pemUgdGhlIHZhbHVlcyBvZiBpdHMgcHJvcGVydGllcyBpblxuICogb3JkZXIgdG8gcHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBmb3IgYWxsIHNjcm9sbHNwaWVzIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICpcbiAqIEBzaW5jZSAxNS4xLjBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBOZ2JTY3JvbGxTcHlDb25maWcge1xuXHRzY3JvbGxCZWhhdmlvcjogJ2F1dG8nIHwgJ3Ntb290aCcgPSAnc21vb3RoJztcblx0cHJvY2Vzc0NoYW5nZXM6IE5nYlNjcm9sbFNweVByb2Nlc3NDaGFuZ2VzID0gZGVmYXVsdFByb2Nlc3NDaGFuZ2VzO1xufVxuIl19