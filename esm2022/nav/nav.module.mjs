import { NgModule } from '@angular/core';
import { NgbNav, NgbNavContent, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkButton, NgbNavLinkBase } from './nav';
import { NgbNavOutlet, NgbNavPane } from './nav-outlet';
import * as i0 from "@angular/core";
export { NgbNav, NgbNavContent, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkButton, NgbNavLinkBase, } from './nav';
export { NgbNavOutlet, NgbNavPane } from './nav-outlet';
export { NgbNavConfig } from './nav-config';
const NGB_NAV_DIRECTIVES = [
    NgbNavContent,
    NgbNav,
    NgbNavItem,
    NgbNavItemRole,
    NgbNavLink,
    NgbNavLinkButton,
    NgbNavLinkBase,
    NgbNavOutlet,
    NgbNavPane,
];
export class NgbNavModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbNavModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.2", ngImport: i0, type: NgbNavModule, imports: [NgbNavContent,
            NgbNav,
            NgbNavItem,
            NgbNavItemRole,
            NgbNavLink,
            NgbNavLinkButton,
            NgbNavLinkBase,
            NgbNavOutlet,
            NgbNavPane], exports: [NgbNavContent,
            NgbNav,
            NgbNavItem,
            NgbNavItemRole,
            NgbNavLink,
            NgbNavLinkButton,
            NgbNavLinkBase,
            NgbNavOutlet,
            NgbNavPane] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbNavModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbNavModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: NGB_NAV_DIRECTIVES,
                    exports: NGB_NAV_DIRECTIVES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9uYXYvbmF2Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUV4SCxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFeEQsT0FBTyxFQUNOLE1BQU0sRUFDTixhQUFhLEVBRWIsVUFBVSxFQUNWLGNBQWMsRUFDZCxVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLGNBQWMsR0FFZCxNQUFNLE9BQU8sQ0FBQztBQUNmLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFNUMsTUFBTSxrQkFBa0IsR0FBRztJQUMxQixhQUFhO0lBQ2IsTUFBTTtJQUNOLFVBQVU7SUFDVixjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFVBQVU7Q0FDVixDQUFDO0FBTUYsTUFBTSxPQUFPLFlBQVk7OEdBQVosWUFBWTsrR0FBWixZQUFZLFlBZnhCLGFBQWE7WUFDYixNQUFNO1lBQ04sVUFBVTtZQUNWLGNBQWM7WUFDZCxVQUFVO1lBQ1YsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxZQUFZO1lBQ1osVUFBVSxhQVJWLGFBQWE7WUFDYixNQUFNO1lBQ04sVUFBVTtZQUNWLGNBQWM7WUFDZCxVQUFVO1lBQ1YsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxZQUFZO1lBQ1osVUFBVTsrR0FPRSxZQUFZOzsyRkFBWixZQUFZO2tCQUp4QixRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLE9BQU8sRUFBRSxrQkFBa0I7aUJBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmdiTmF2LCBOZ2JOYXZDb250ZW50LCBOZ2JOYXZJdGVtLCBOZ2JOYXZJdGVtUm9sZSwgTmdiTmF2TGluaywgTmdiTmF2TGlua0J1dHRvbiwgTmdiTmF2TGlua0Jhc2UgfSBmcm9tICcuL25hdic7XG5cbmltcG9ydCB7IE5nYk5hdk91dGxldCwgTmdiTmF2UGFuZSB9IGZyb20gJy4vbmF2LW91dGxldCc7XG5cbmV4cG9ydCB7XG5cdE5nYk5hdixcblx0TmdiTmF2Q29udGVudCxcblx0TmdiTmF2Q29udGVudENvbnRleHQsXG5cdE5nYk5hdkl0ZW0sXG5cdE5nYk5hdkl0ZW1Sb2xlLFxuXHROZ2JOYXZMaW5rLFxuXHROZ2JOYXZMaW5rQnV0dG9uLFxuXHROZ2JOYXZMaW5rQmFzZSxcblx0TmdiTmF2Q2hhbmdlRXZlbnQsXG59IGZyb20gJy4vbmF2JztcbmV4cG9ydCB7IE5nYk5hdk91dGxldCwgTmdiTmF2UGFuZSB9IGZyb20gJy4vbmF2LW91dGxldCc7XG5leHBvcnQgeyBOZ2JOYXZDb25maWcgfSBmcm9tICcuL25hdi1jb25maWcnO1xuXG5jb25zdCBOR0JfTkFWX0RJUkVDVElWRVMgPSBbXG5cdE5nYk5hdkNvbnRlbnQsXG5cdE5nYk5hdixcblx0TmdiTmF2SXRlbSxcblx0TmdiTmF2SXRlbVJvbGUsXG5cdE5nYk5hdkxpbmssXG5cdE5nYk5hdkxpbmtCdXR0b24sXG5cdE5nYk5hdkxpbmtCYXNlLFxuXHROZ2JOYXZPdXRsZXQsXG5cdE5nYk5hdlBhbmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBOR0JfTkFWX0RJUkVDVElWRVMsXG5cdGV4cG9ydHM6IE5HQl9OQVZfRElSRUNUSVZFUyxcbn0pXG5leHBvcnQgY2xhc3MgTmdiTmF2TW9kdWxlIHt9XG4iXX0=