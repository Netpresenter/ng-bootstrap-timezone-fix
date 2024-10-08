import { NgModule } from '@angular/core';
import { NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem, } from './dropdown';
import * as i0 from "@angular/core";
export { NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem, } from './dropdown';
export { NgbDropdownConfig } from './dropdown-config';
const NGB_DROPDOWN_DIRECTIVES = [
    NgbDropdown,
    NgbDropdownAnchor,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
    NgbDropdownButtonItem,
];
export class NgbDropdownModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDropdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.2", ngImport: i0, type: NgbDropdownModule, imports: [NgbDropdown,
            NgbDropdownAnchor,
            NgbDropdownToggle,
            NgbDropdownMenu,
            NgbDropdownItem,
            NgbDropdownButtonItem], exports: [NgbDropdown,
            NgbDropdownAnchor,
            NgbDropdownToggle,
            NgbDropdownMenu,
            NgbDropdownItem,
            NgbDropdownButtonItem] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDropdownModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDropdownModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: NGB_DROPDOWN_DIRECTIVES,
                    exports: NGB_DROPDOWN_DIRECTIVES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsZUFBZSxFQUNmLHFCQUFxQixHQUNyQixNQUFNLFlBQVksQ0FBQzs7QUFFcEIsT0FBTyxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixlQUFlLEVBQ2YscUJBQXFCLEdBQ3JCLE1BQU0sWUFBWSxDQUFDO0FBQ3BCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXRELE1BQU0sdUJBQXVCLEdBQUc7SUFDL0IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZixxQkFBcUI7Q0FDckIsQ0FBQztBQU1GLE1BQU0sT0FBTyxpQkFBaUI7OEdBQWpCLGlCQUFpQjsrR0FBakIsaUJBQWlCLFlBWjdCLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixlQUFlO1lBQ2YscUJBQXFCLGFBTHJCLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixlQUFlO1lBQ2YscUJBQXFCOytHQU9ULGlCQUFpQjs7MkZBQWpCLGlCQUFpQjtrQkFKN0IsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUUsdUJBQXVCO29CQUNoQyxPQUFPLEVBQUUsdUJBQXVCO2lCQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHROZ2JEcm9wZG93bixcblx0TmdiRHJvcGRvd25BbmNob3IsXG5cdE5nYkRyb3Bkb3duVG9nZ2xlLFxuXHROZ2JEcm9wZG93bk1lbnUsXG5cdE5nYkRyb3Bkb3duSXRlbSxcblx0TmdiRHJvcGRvd25CdXR0b25JdGVtLFxufSBmcm9tICcuL2Ryb3Bkb3duJztcblxuZXhwb3J0IHtcblx0TmdiRHJvcGRvd24sXG5cdE5nYkRyb3Bkb3duQW5jaG9yLFxuXHROZ2JEcm9wZG93blRvZ2dsZSxcblx0TmdiRHJvcGRvd25NZW51LFxuXHROZ2JEcm9wZG93bkl0ZW0sXG5cdE5nYkRyb3Bkb3duQnV0dG9uSXRlbSxcbn0gZnJvbSAnLi9kcm9wZG93bic7XG5leHBvcnQgeyBOZ2JEcm9wZG93bkNvbmZpZyB9IGZyb20gJy4vZHJvcGRvd24tY29uZmlnJztcblxuY29uc3QgTkdCX0RST1BET1dOX0RJUkVDVElWRVMgPSBbXG5cdE5nYkRyb3Bkb3duLFxuXHROZ2JEcm9wZG93bkFuY2hvcixcblx0TmdiRHJvcGRvd25Ub2dnbGUsXG5cdE5nYkRyb3Bkb3duTWVudSxcblx0TmdiRHJvcGRvd25JdGVtLFxuXHROZ2JEcm9wZG93bkJ1dHRvbkl0ZW0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBOR0JfRFJPUERPV05fRElSRUNUSVZFUyxcblx0ZXhwb3J0czogTkdCX0RST1BET1dOX0RJUkVDVElWRVMsXG59KVxuZXhwb3J0IGNsYXNzIE5nYkRyb3Bkb3duTW9kdWxlIHt9XG4iXX0=