import { NgModule } from '@angular/core';
import { NgbDatepicker, NgbDatepickerContent } from './datepicker';
import { NgbDatepickerMonth } from './datepicker';
import { NgbInputDatepicker } from './datepicker-input';
import * as i0 from "@angular/core";
export { NgbDatepicker, NgbDatepickerContent } from './datepicker';
export { NgbInputDatepicker } from './datepicker-input';
export { NgbCalendar, NgbCalendarGregorian } from './ngb-calendar';
export { NgbCalendarIslamicCivil } from './hijri/ngb-calendar-islamic-civil';
export { NgbCalendarIslamicUmalqura } from './hijri/ngb-calendar-islamic-umalqura';
export { NgbCalendarPersian } from './jalali/ngb-calendar-persian';
export { NgbCalendarHebrew } from './hebrew/ngb-calendar-hebrew';
export { NgbDatepickerI18nHebrew } from './hebrew/datepicker-i18n-hebrew';
export { NgbCalendarBuddhist } from './buddhist/ngb-calendar-buddhist';
export { NgbCalendarEthiopian } from './ethiopian/ngb-calendar-ethiopian';
export { NgbDatepickerI18nAmharic } from './ethiopian/datepicker-i18n-amharic';
export { NgbDatepickerMonth } from './datepicker';
export { NgbDatepickerDayView } from './datepicker-day-view';
export { NgbDatepickerNavigation } from './datepicker-navigation';
export { NgbDatepickerNavigationSelect } from './datepicker-navigation-select';
export { NgbDatepickerConfig } from './datepicker-config';
export { NgbInputDatepickerConfig } from './datepicker-input-config';
export { NgbDatepickerI18n, NgbDatepickerI18nDefault } from './datepicker-i18n';
export { NgbDate } from './ngb-date';
export { NgbDateAdapter, NgbDateStructAdapter } from './adapters/ngb-date-adapter';
export { NgbDateNativeAdapter } from './adapters/ngb-date-native-adapter';
export { NgbDateNativeUTCAdapter } from './adapters/ngb-date-native-utc-adapter';
export { NgbDateParserFormatter } from './ngb-date-parser-formatter';
export { NgbDatepickerKeyboardService } from './datepicker-keyboard-service';
const NGB_DATEPICKER_DIRECTIVES = [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth];
export class NgbDatepickerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerModule, imports: [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth], exports: [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: NGB_DATEPICKER_DIRECTIVES,
                    imports: NGB_DATEPICKER_DIRECTIVES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUV4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixFQUFrRCxNQUFNLGNBQWMsQ0FBQztBQUNuSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFhLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDN0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTdFLE1BQU0seUJBQXlCLEdBQUcsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQU1oSCxNQUFNLE9BQU8sbUJBQW1COzhHQUFuQixtQkFBbUI7K0dBQW5CLG1CQUFtQixZQU5HLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsYUFBM0UsYUFBYSxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQjsrR0FNakcsbUJBQW1COzsyRkFBbkIsbUJBQW1CO2tCQUovQixRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRSx5QkFBeUI7b0JBQ2xDLE9BQU8sRUFBRSx5QkFBeUI7aUJBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkRhdGVwaWNrZXIsIE5nYkRhdGVwaWNrZXJDb250ZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyJztcbmltcG9ydCB7IE5nYkRhdGVwaWNrZXJNb250aCB9IGZyb20gJy4vZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBOZ2JJbnB1dERhdGVwaWNrZXIgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5wdXQnO1xuXG5leHBvcnQgeyBOZ2JEYXRlcGlja2VyLCBOZ2JEYXRlcGlja2VyQ29udGVudCwgTmdiRGF0ZXBpY2tlck5hdmlnYXRlRXZlbnQsIE5nYkRhdGVwaWNrZXJTdGF0ZSB9IGZyb20gJy4vZGF0ZXBpY2tlcic7XG5leHBvcnQgeyBOZ2JJbnB1dERhdGVwaWNrZXIgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5wdXQnO1xuZXhwb3J0IHsgTmdiQ2FsZW5kYXIsIE5nYlBlcmlvZCwgTmdiQ2FsZW5kYXJHcmVnb3JpYW4gfSBmcm9tICcuL25nYi1jYWxlbmRhcic7XG5leHBvcnQgeyBOZ2JDYWxlbmRhcklzbGFtaWNDaXZpbCB9IGZyb20gJy4vaGlqcmkvbmdiLWNhbGVuZGFyLWlzbGFtaWMtY2l2aWwnO1xuZXhwb3J0IHsgTmdiQ2FsZW5kYXJJc2xhbWljVW1hbHF1cmEgfSBmcm9tICcuL2hpanJpL25nYi1jYWxlbmRhci1pc2xhbWljLXVtYWxxdXJhJztcbmV4cG9ydCB7IE5nYkNhbGVuZGFyUGVyc2lhbiB9IGZyb20gJy4vamFsYWxpL25nYi1jYWxlbmRhci1wZXJzaWFuJztcbmV4cG9ydCB7IE5nYkNhbGVuZGFySGVicmV3IH0gZnJvbSAnLi9oZWJyZXcvbmdiLWNhbGVuZGFyLWhlYnJldyc7XG5leHBvcnQgeyBOZ2JEYXRlcGlja2VySTE4bkhlYnJldyB9IGZyb20gJy4vaGVicmV3L2RhdGVwaWNrZXItaTE4bi1oZWJyZXcnO1xuZXhwb3J0IHsgTmdiQ2FsZW5kYXJCdWRkaGlzdCB9IGZyb20gJy4vYnVkZGhpc3QvbmdiLWNhbGVuZGFyLWJ1ZGRoaXN0JztcbmV4cG9ydCB7IE5nYkNhbGVuZGFyRXRoaW9waWFuIH0gZnJvbSAnLi9ldGhpb3BpYW4vbmdiLWNhbGVuZGFyLWV0aGlvcGlhbic7XG5leHBvcnQgeyBOZ2JEYXRlcGlja2VySTE4bkFtaGFyaWMgfSBmcm9tICcuL2V0aGlvcGlhbi9kYXRlcGlja2VyLWkxOG4tYW1oYXJpYyc7XG5leHBvcnQgeyBOZ2JEYXRlcGlja2VyTW9udGggfSBmcm9tICcuL2RhdGVwaWNrZXInO1xuZXhwb3J0IHsgTmdiRGF0ZXBpY2tlckRheVZpZXcgfSBmcm9tICcuL2RhdGVwaWNrZXItZGF5LXZpZXcnO1xuZXhwb3J0IHsgTmdiRGF0ZXBpY2tlck5hdmlnYXRpb24gfSBmcm9tICcuL2RhdGVwaWNrZXItbmF2aWdhdGlvbic7XG5leHBvcnQgeyBOZ2JEYXRlcGlja2VyTmF2aWdhdGlvblNlbGVjdCB9IGZyb20gJy4vZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXNlbGVjdCc7XG5leHBvcnQgeyBOZ2JEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9kYXRlcGlja2VyLWNvbmZpZyc7XG5leHBvcnQgeyBOZ2JJbnB1dERhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5wdXQtY29uZmlnJztcbmV4cG9ydCB7IE5nYkRhdGVwaWNrZXJJMThuLCBOZ2JEYXRlcGlja2VySTE4bkRlZmF1bHQgfSBmcm9tICcuL2RhdGVwaWNrZXItaTE4bic7XG5leHBvcnQgeyBOZ2JEYXRlU3RydWN0IH0gZnJvbSAnLi9uZ2ItZGF0ZS1zdHJ1Y3QnO1xuZXhwb3J0IHsgTmdiRGF0ZSB9IGZyb20gJy4vbmdiLWRhdGUnO1xuZXhwb3J0IHsgTmdiRGF0ZUFkYXB0ZXIsIE5nYkRhdGVTdHJ1Y3RBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVycy9uZ2ItZGF0ZS1hZGFwdGVyJztcbmV4cG9ydCB7IE5nYkRhdGVOYXRpdmVBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVycy9uZ2ItZGF0ZS1uYXRpdmUtYWRhcHRlcic7XG5leHBvcnQgeyBOZ2JEYXRlTmF0aXZlVVRDQWRhcHRlciB9IGZyb20gJy4vYWRhcHRlcnMvbmdiLWRhdGUtbmF0aXZlLXV0Yy1hZGFwdGVyJztcbmV4cG9ydCB7IE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIgfSBmcm9tICcuL25nYi1kYXRlLXBhcnNlci1mb3JtYXR0ZXInO1xuZXhwb3J0IHsgTmdiRGF0ZXBpY2tlcktleWJvYXJkU2VydmljZSB9IGZyb20gJy4vZGF0ZXBpY2tlci1rZXlib2FyZC1zZXJ2aWNlJztcblxuY29uc3QgTkdCX0RBVEVQSUNLRVJfRElSRUNUSVZFUyA9IFtOZ2JEYXRlcGlja2VyLCBOZ2JEYXRlcGlja2VyQ29udGVudCwgTmdiSW5wdXREYXRlcGlja2VyLCBOZ2JEYXRlcGlja2VyTW9udGhdO1xuXG5ATmdNb2R1bGUoe1xuXHRleHBvcnRzOiBOR0JfREFURVBJQ0tFUl9ESVJFQ1RJVkVTLFxuXHRpbXBvcnRzOiBOR0JfREFURVBJQ0tFUl9ESVJFQ1RJVkVTLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2JEYXRlcGlja2VyTW9kdWxlIHt9XG4iXX0=