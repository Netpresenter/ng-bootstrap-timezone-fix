import { inject, Injectable, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * A service supplying i18n data to the datepicker component.
 *
 * The default implementation of this service uses the Angular locale and registered locale data for
 * weekdays and month names (as explained in the Angular i18n guide).
 *
 * It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year
 * numerals. For other static labels the datepicker uses the default Angular i18n.
 *
 * See the [i18n demo](#/components/datepicker/examples#i18n) and
 * [Hebrew calendar demo](#/components/datepicker/calendars#hebrew) on how to extend this class and define
 * a custom provider for i18n.
 */
export class NgbDatepickerI18n {
    /**
     * Returns the text label to display above the day view.
     *
     * @since 9.1.0
     */
    getMonthLabel(date) {
        return `${this.getMonthFullName(date.month, date.year)} ${this.getYearNumerals(date.year)}`;
    }
    /**
     * Returns the textual representation of a day that is rendered in a day cell.
     *
     * @since 3.0.0
     */
    getDayNumerals(date) {
        return `${date.day}`;
    }
    /**
     * Returns the textual representation of a week number rendered by datepicker.
     *
     * @since 3.0.0
     */
    getWeekNumerals(weekNumber) {
        return `${weekNumber}`;
    }
    /**
     * Returns the textual representation of a year that is rendered in the datepicker year select box.
     *
     * @since 3.0.0
     */
    getYearNumerals(year) {
        return `${year}`;
    }
    /**
     * Returns the week label to display in the heading of the month view.
     *
     * @since 9.1.0
     */
    getWeekLabel() {
        return '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerI18n, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerI18n, providedIn: 'root', useFactory: () => new NgbDatepickerI18nDefault() }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerI18n, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: () => new NgbDatepickerI18nDefault(),
                }]
        }] });
/**
 * A service providing default implementation for the datepicker i18n.
 * It can be used as a base implementation if necessary.
 *
 * @since 9.1.0
 */
export class NgbDatepickerI18nDefault extends NgbDatepickerI18n {
    constructor() {
        super(...arguments);
        this._locale = inject(LOCALE_ID);
        this._monthsShort = [...Array(12).keys()].map((month) => Intl.DateTimeFormat(this._locale, { month: 'short', timeZone: 'UTC' }).format(new Date(2000, month, 15)));
        this._monthsFull = [...Array(12).keys()].map((month) => Intl.DateTimeFormat(this._locale, { month: 'long', timeZone: 'UTC' }).format(new Date(2000, month, 15)));
    }
    getWeekdayLabel(weekday, width = 'narrow') {
        const weekdaysStartingOnSunday = [...Array(7).keys()].map((day) => Intl.DateTimeFormat(this._locale, { weekday: width, timeZone: 'UTC' }).format(new Date(Date.UTC(2021, 5, day - 1))));
        const weekdays = weekdaysStartingOnSunday.map((day, index) => weekdaysStartingOnSunday[(index + 1) % 7]);
        return weekdays[weekday - 1] || '';
    }
    getMonthShortName(month) {
        return this._monthsShort[month - 1] || '';
    }
    getMonthFullName(month) {
        return this._monthsFull[month - 1] || '';
    }
    getDayAriaLabel(date) {
        const jsDate = new Date(date.year, date.month - 1, date.day);
        return formatDate(jsDate, 'fullDate', this._locale);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerI18nDefault, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerI18nDefault }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbDatepickerI18nDefault, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pMThuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1pMThuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRzdDOzs7Ozs7Ozs7Ozs7R0FZRztBQUtILE1BQU0sT0FBZ0IsaUJBQWlCO0lBc0J0Qzs7OztPQUlHO0lBQ0gsYUFBYSxDQUFDLElBQW1CO1FBQ2hDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUM3RixDQUFDO0lBU0Q7Ozs7T0FJRztJQUNILGNBQWMsQ0FBQyxJQUFtQjtRQUNqQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsZUFBZSxDQUFDLFVBQWtCO1FBQ2pDLE9BQU8sR0FBRyxVQUFVLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGVBQWUsQ0FBQyxJQUFZO1FBQzNCLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFlBQVk7UUFDWCxPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7OEdBeEVvQixpQkFBaUI7a0hBQWpCLGlCQUFpQixjQUgxQixNQUFNLGNBQ04sR0FBRyxFQUFFLENBQUMsSUFBSSx3QkFBd0IsRUFBRTs7MkZBRTNCLGlCQUFpQjtrQkFKdEMsVUFBVTttQkFBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtvQkFDbEIsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksd0JBQXdCLEVBQUU7aUJBQ2hEOztBQTRFRDs7Ozs7R0FLRztBQUVILE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxpQkFBaUI7SUFEL0Q7O1FBRVMsWUFBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1QixpQkFBWSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUMxRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ3hHLENBQUM7UUFDTSxnQkFBVyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ3ZHLENBQUM7S0EyQkY7SUF6QkEsZUFBZSxDQUNkLE9BQWUsRUFDZixRQUFtRSxRQUFRO1FBRTNFLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ2pFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUM1RSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQ3BDLENBQ0QsQ0FBQztRQUNGLE1BQU0sUUFBUSxHQUFHLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekcsT0FBTyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBYTtRQUM5QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBYTtRQUM3QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQW1CO1FBQ2xDLE1BQU0sTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdELE9BQU8sVUFBVSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7OEdBbENXLHdCQUF3QjtrSEFBeEIsd0JBQXdCOzsyRkFBeEIsd0JBQXdCO2tCQURwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3RhYmxlLCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdiRGF0ZVN0cnVjdCB9IGZyb20gJy4vbmdiLWRhdGUtc3RydWN0JztcblxuLyoqXG4gKiBBIHNlcnZpY2Ugc3VwcGx5aW5nIGkxOG4gZGF0YSB0byB0aGUgZGF0ZXBpY2tlciBjb21wb25lbnQuXG4gKlxuICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBzZXJ2aWNlIHVzZXMgdGhlIEFuZ3VsYXIgbG9jYWxlIGFuZCByZWdpc3RlcmVkIGxvY2FsZSBkYXRhIGZvclxuICogd2Vla2RheXMgYW5kIG1vbnRoIG5hbWVzIChhcyBleHBsYWluZWQgaW4gdGhlIEFuZ3VsYXIgaTE4biBndWlkZSkuXG4gKlxuICogSXQgYWxzbyBwcm92aWRlcyBhIHdheSB0byBpMThuIGRhdGEgdGhhdCBkZXBlbmRzIG9uIGNhbGVuZGFyIGNhbGN1bGF0aW9ucywgbGlrZSBhcmlhIGxhYmVscywgZGF5LCB3ZWVrIGFuZCB5ZWFyXG4gKiBudW1lcmFscy4gRm9yIG90aGVyIHN0YXRpYyBsYWJlbHMgdGhlIGRhdGVwaWNrZXIgdXNlcyB0aGUgZGVmYXVsdCBBbmd1bGFyIGkxOG4uXG4gKlxuICogU2VlIHRoZSBbaTE4biBkZW1vXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9leGFtcGxlcyNpMThuKSBhbmRcbiAqIFtIZWJyZXcgY2FsZW5kYXIgZGVtb10oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvY2FsZW5kYXJzI2hlYnJldykgb24gaG93IHRvIGV4dGVuZCB0aGlzIGNsYXNzIGFuZCBkZWZpbmVcbiAqIGEgY3VzdG9tIHByb3ZpZGVyIGZvciBpMThuLlxuICovXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290Jyxcblx0dXNlRmFjdG9yeTogKCkgPT4gbmV3IE5nYkRhdGVwaWNrZXJJMThuRGVmYXVsdCgpLFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOZ2JEYXRlcGlja2VySTE4biB7XG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB3ZWVrZGF5IGxhYmVsIHVzaW5nIHNwZWNpZmllZCB3aWR0aFxuXHQgKlxuXHQgKiBAc2luY2UgOS4xLjBcblx0ICovXG5cdGFic3RyYWN0IGdldFdlZWtkYXlMYWJlbCh3ZWVrZGF5OiBudW1iZXIsIHdpZHRoPzogRXhjbHVkZTxJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9uc1snd2Vla2RheSddLCB1bmRlZmluZWQ+KTogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBzaG9ydCBtb250aCBuYW1lIHRvIGRpc3BsYXkgaW4gdGhlIGRhdGUgcGlja2VyIG5hdmlnYXRpb24uXG5cdCAqXG5cdCAqIFdpdGggZGVmYXVsdCBjYWxlbmRhciB3ZSB1c2UgSVNPIDg2MDE6ICdtb250aCcgaXMgMT1KYW4gLi4uIDEyPURlYy5cblx0ICovXG5cdGFic3RyYWN0IGdldE1vbnRoU2hvcnROYW1lKG1vbnRoOiBudW1iZXIsIHllYXI/OiBudW1iZXIpOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGZ1bGwgbW9udGggbmFtZSB0byBkaXNwbGF5IGluIHRoZSBkYXRlIHBpY2tlciBuYXZpZ2F0aW9uLlxuXHQgKlxuXHQgKiBXaXRoIGRlZmF1bHQgY2FsZW5kYXIgd2UgdXNlIElTTyA4NjAxOiAnbW9udGgnIGlzIDE9SmFuIC4uLiAxMj1EZWMuXG5cdCAqL1xuXHRhYnN0cmFjdCBnZXRNb250aEZ1bGxOYW1lKG1vbnRoOiBudW1iZXIsIHllYXI/OiBudW1iZXIpOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHRleHQgbGFiZWwgdG8gZGlzcGxheSBhYm92ZSB0aGUgZGF5IHZpZXcuXG5cdCAqXG5cdCAqIEBzaW5jZSA5LjEuMFxuXHQgKi9cblx0Z2V0TW9udGhMYWJlbChkYXRlOiBOZ2JEYXRlU3RydWN0KTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYCR7dGhpcy5nZXRNb250aEZ1bGxOYW1lKGRhdGUubW9udGgsIGRhdGUueWVhcil9ICR7dGhpcy5nZXRZZWFyTnVtZXJhbHMoZGF0ZS55ZWFyKX1gO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBgYXJpYS1sYWJlbGAgYXR0cmlidXRlIGZvciBhIHNwZWNpZmljIGRhdGUuXG5cdCAqXG5cdCAqIEBzaW5jZSAyLjAuMFxuXHQgKi9cblx0YWJzdHJhY3QgZ2V0RGF5QXJpYUxhYmVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgYSBkYXkgdGhhdCBpcyByZW5kZXJlZCBpbiBhIGRheSBjZWxsLlxuXHQgKlxuXHQgKiBAc2luY2UgMy4wLjBcblx0ICovXG5cdGdldERheU51bWVyYWxzKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBzdHJpbmcge1xuXHRcdHJldHVybiBgJHtkYXRlLmRheX1gO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgYSB3ZWVrIG51bWJlciByZW5kZXJlZCBieSBkYXRlcGlja2VyLlxuXHQgKlxuXHQgKiBAc2luY2UgMy4wLjBcblx0ICovXG5cdGdldFdlZWtOdW1lcmFscyh3ZWVrTnVtYmVyOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdHJldHVybiBgJHt3ZWVrTnVtYmVyfWA7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiBhIHllYXIgdGhhdCBpcyByZW5kZXJlZCBpbiB0aGUgZGF0ZXBpY2tlciB5ZWFyIHNlbGVjdCBib3guXG5cdCAqXG5cdCAqIEBzaW5jZSAzLjAuMFxuXHQgKi9cblx0Z2V0WWVhck51bWVyYWxzKHllYXI6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGAke3llYXJ9YDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB3ZWVrIGxhYmVsIHRvIGRpc3BsYXkgaW4gdGhlIGhlYWRpbmcgb2YgdGhlIG1vbnRoIHZpZXcuXG5cdCAqXG5cdCAqIEBzaW5jZSA5LjEuMFxuXHQgKi9cblx0Z2V0V2Vla0xhYmVsKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG59XG5cbi8qKlxuICogQSBzZXJ2aWNlIHByb3ZpZGluZyBkZWZhdWx0IGltcGxlbWVudGF0aW9uIGZvciB0aGUgZGF0ZXBpY2tlciBpMThuLlxuICogSXQgY2FuIGJlIHVzZWQgYXMgYSBiYXNlIGltcGxlbWVudGF0aW9uIGlmIG5lY2Vzc2FyeS5cbiAqXG4gKiBAc2luY2UgOS4xLjBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5nYkRhdGVwaWNrZXJJMThuRGVmYXVsdCBleHRlbmRzIE5nYkRhdGVwaWNrZXJJMThuIHtcblx0cHJpdmF0ZSBfbG9jYWxlID0gaW5qZWN0KExPQ0FMRV9JRCk7XG5cblx0cHJpdmF0ZSBfbW9udGhzU2hvcnQgPSBbLi4uQXJyYXkoMTIpLmtleXMoKV0ubWFwKChtb250aCkgPT5cblx0XHRJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMuX2xvY2FsZSwgeyBtb250aDogJ3Nob3J0JywgdGltZVpvbmU6ICdVVEMnIH0pLmZvcm1hdChuZXcgRGF0ZSgyMDAwLCBtb250aCwgMTUpKSxcblx0KTtcblx0cHJpdmF0ZSBfbW9udGhzRnVsbCA9IFsuLi5BcnJheSgxMikua2V5cygpXS5tYXAoKG1vbnRoKSA9PlxuXHRcdEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5fbG9jYWxlLCB7IG1vbnRoOiAnbG9uZycsIHRpbWVab25lOiAnVVRDJyB9KS5mb3JtYXQobmV3IERhdGUoMjAwMCwgbW9udGgsIDE1KSksXG5cdCk7XG5cblx0Z2V0V2Vla2RheUxhYmVsKFxuXHRcdHdlZWtkYXk6IG51bWJlcixcblx0XHR3aWR0aDogRXhjbHVkZTxJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9uc1snd2Vla2RheSddLCB1bmRlZmluZWQ+ID0gJ25hcnJvdycsXG5cdCk6IHN0cmluZyB7XG5cdFx0Y29uc3Qgd2Vla2RheXNTdGFydGluZ09uU3VuZGF5ID0gWy4uLkFycmF5KDcpLmtleXMoKV0ubWFwKChkYXkpID0+XG5cdFx0XHRJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMuX2xvY2FsZSwgeyB3ZWVrZGF5OiB3aWR0aCwgdGltZVpvbmU6ICdVVEMnIH0pLmZvcm1hdChcblx0XHRcdFx0bmV3IERhdGUoRGF0ZS5VVEMoMjAyMSwgNSwgZGF5IC0gMSkpLFxuXHRcdFx0KSxcblx0XHQpO1xuXHRcdGNvbnN0IHdlZWtkYXlzID0gd2Vla2RheXNTdGFydGluZ09uU3VuZGF5Lm1hcCgoZGF5LCBpbmRleCkgPT4gd2Vla2RheXNTdGFydGluZ09uU3VuZGF5WyhpbmRleCArIDEpICUgN10pO1xuXHRcdHJldHVybiB3ZWVrZGF5c1t3ZWVrZGF5IC0gMV0gfHwgJyc7XG5cdH1cblxuXHRnZXRNb250aFNob3J0TmFtZShtb250aDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRbbW9udGggLSAxXSB8fCAnJztcblx0fVxuXG5cdGdldE1vbnRoRnVsbE5hbWUobW9udGg6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuX21vbnRoc0Z1bGxbbW9udGggLSAxXSB8fCAnJztcblx0fVxuXG5cdGdldERheUFyaWFMYWJlbChkYXRlOiBOZ2JEYXRlU3RydWN0KTogc3RyaW5nIHtcblx0XHRjb25zdCBqc0RhdGUgPSBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSk7XG5cdFx0cmV0dXJuIGZvcm1hdERhdGUoanNEYXRlLCAnZnVsbERhdGUnLCB0aGlzLl9sb2NhbGUpO1xuXHR9XG59XG4iXX0=