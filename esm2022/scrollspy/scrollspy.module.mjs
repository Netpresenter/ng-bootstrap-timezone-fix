import { NgModule } from '@angular/core';
import { NgbScrollSpy, NgbScrollSpyFragment, NgbScrollSpyItem, NgbScrollSpyMenu } from './scrollspy';
import * as i0 from "@angular/core";
export { NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu } from './scrollspy';
export { NgbScrollSpyConfig } from './scrollspy-config';
export { NgbScrollSpyService } from './scrollspy.service';
export class NgbScrollSpyModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbScrollSpyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.2", ngImport: i0, type: NgbScrollSpyModule, imports: [NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu], exports: [NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbScrollSpyModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbScrollSpyModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu],
                    exports: [NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsc3B5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zY3JvbGxzcHkvc2Nyb2xsc3B5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRXJHLE9BQU8sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUE4QixNQUFNLHFCQUFxQixDQUFDO0FBTXRGLE1BQU0sT0FBTyxrQkFBa0I7OEdBQWxCLGtCQUFrQjsrR0FBbEIsa0JBQWtCLFlBSHBCLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsYUFDdEUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLGdCQUFnQjsrR0FFcEUsa0JBQWtCOzsyRkFBbEIsa0JBQWtCO2tCQUo5QixRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDakYsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLGdCQUFnQixDQUFDO2lCQUNqRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nYlNjcm9sbFNweSwgTmdiU2Nyb2xsU3B5RnJhZ21lbnQsIE5nYlNjcm9sbFNweUl0ZW0sIE5nYlNjcm9sbFNweU1lbnUgfSBmcm9tICcuL3Njcm9sbHNweSc7XG5cbmV4cG9ydCB7IE5nYlNjcm9sbFNweSwgTmdiU2Nyb2xsU3B5SXRlbSwgTmdiU2Nyb2xsU3B5RnJhZ21lbnQsIE5nYlNjcm9sbFNweU1lbnUgfSBmcm9tICcuL3Njcm9sbHNweSc7XG5leHBvcnQgeyBOZ2JTY3JvbGxTcHlDb25maWcgfSBmcm9tICcuL3Njcm9sbHNweS1jb25maWcnO1xuZXhwb3J0IHsgTmdiU2Nyb2xsU3B5U2VydmljZSwgTmdiU2Nyb2xsU3B5UHJvY2Vzc0NoYW5nZXMgfSBmcm9tICcuL3Njcm9sbHNweS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW05nYlNjcm9sbFNweSwgTmdiU2Nyb2xsU3B5SXRlbSwgTmdiU2Nyb2xsU3B5RnJhZ21lbnQsIE5nYlNjcm9sbFNweU1lbnVdLFxuXHRleHBvcnRzOiBbTmdiU2Nyb2xsU3B5LCBOZ2JTY3JvbGxTcHlJdGVtLCBOZ2JTY3JvbGxTcHlGcmFnbWVudCwgTmdiU2Nyb2xsU3B5TWVudV0sXG59KVxuZXhwb3J0IGNsYXNzIE5nYlNjcm9sbFNweU1vZHVsZSB7fVxuIl19