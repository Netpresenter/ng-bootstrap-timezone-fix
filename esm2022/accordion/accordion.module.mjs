import { NgModule } from '@angular/core';
import { NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionBody, NgbAccordionCollapse, NgbAccordionButton, } from './accordion.directive';
import * as i0 from "@angular/core";
export { NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionBody, NgbAccordionCollapse, } from './accordion.directive';
export { NgbAccordionConfig } from './accordion-config';
const NGB_ACCORDION_DIRECTIVES = [
    NgbAccordionButton,
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionToggle,
    NgbAccordionBody,
    NgbAccordionCollapse,
];
export class NgbAccordionModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbAccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.2", ngImport: i0, type: NgbAccordionModule, imports: [NgbAccordionButton,
            NgbAccordionDirective,
            NgbAccordionItem,
            NgbAccordionHeader,
            NgbAccordionToggle,
            NgbAccordionBody,
            NgbAccordionCollapse], exports: [NgbAccordionButton,
            NgbAccordionDirective,
            NgbAccordionItem,
            NgbAccordionHeader,
            NgbAccordionToggle,
            NgbAccordionBody,
            NgbAccordionCollapse] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbAccordionModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbAccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: NGB_ACCORDION_DIRECTIVES,
                    exports: NGB_ACCORDION_DIRECTIVES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hY2NvcmRpb24vYWNjb3JkaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFDTixxQkFBcUIsRUFDckIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLG9CQUFvQixFQUNwQixrQkFBa0IsR0FDbEIsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFL0IsT0FBTyxFQUNOLGtCQUFrQixFQUNsQixxQkFBcUIsRUFDckIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLG9CQUFvQixHQUNwQixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE1BQU0sd0JBQXdCLEdBQUc7SUFDaEMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3BCLENBQUM7QUFNRixNQUFNLE9BQU8sa0JBQWtCOzhHQUFsQixrQkFBa0I7K0dBQWxCLGtCQUFrQixZQWI5QixrQkFBa0I7WUFDbEIscUJBQXFCO1lBQ3JCLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixvQkFBb0IsYUFOcEIsa0JBQWtCO1lBQ2xCLHFCQUFxQjtZQUNyQixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixnQkFBZ0I7WUFDaEIsb0JBQW9COytHQU9SLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFKOUIsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUUsd0JBQXdCO29CQUNqQyxPQUFPLEVBQUUsd0JBQXdCO2lCQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG5cdE5nYkFjY29yZGlvbkRpcmVjdGl2ZSxcblx0TmdiQWNjb3JkaW9uSXRlbSxcblx0TmdiQWNjb3JkaW9uSGVhZGVyLFxuXHROZ2JBY2NvcmRpb25Ub2dnbGUsXG5cdE5nYkFjY29yZGlvbkJvZHksXG5cdE5nYkFjY29yZGlvbkNvbGxhcHNlLFxuXHROZ2JBY2NvcmRpb25CdXR0b24sXG59IGZyb20gJy4vYWNjb3JkaW9uLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCB7XG5cdE5nYkFjY29yZGlvbkJ1dHRvbixcblx0TmdiQWNjb3JkaW9uRGlyZWN0aXZlLFxuXHROZ2JBY2NvcmRpb25JdGVtLFxuXHROZ2JBY2NvcmRpb25IZWFkZXIsXG5cdE5nYkFjY29yZGlvblRvZ2dsZSxcblx0TmdiQWNjb3JkaW9uQm9keSxcblx0TmdiQWNjb3JkaW9uQ29sbGFwc2UsXG59IGZyb20gJy4vYWNjb3JkaW9uLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBOZ2JBY2NvcmRpb25Db25maWcgfSBmcm9tICcuL2FjY29yZGlvbi1jb25maWcnO1xuXG5jb25zdCBOR0JfQUNDT1JESU9OX0RJUkVDVElWRVMgPSBbXG5cdE5nYkFjY29yZGlvbkJ1dHRvbixcblx0TmdiQWNjb3JkaW9uRGlyZWN0aXZlLFxuXHROZ2JBY2NvcmRpb25JdGVtLFxuXHROZ2JBY2NvcmRpb25IZWFkZXIsXG5cdE5nYkFjY29yZGlvblRvZ2dsZSxcblx0TmdiQWNjb3JkaW9uQm9keSxcblx0TmdiQWNjb3JkaW9uQ29sbGFwc2UsXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBOR0JfQUNDT1JESU9OX0RJUkVDVElWRVMsXG5cdGV4cG9ydHM6IE5HQl9BQ0NPUkRJT05fRElSRUNUSVZFUyxcbn0pXG5leHBvcnQgY2xhc3MgTmdiQWNjb3JkaW9uTW9kdWxlIHt9XG4iXX0=