import { NgbDate } from '../ngb-date';
const JD_EPOCH = 1724220.5;
const DAYSPERMONTH = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 5];
/**
 * Determine whether this date is in a leap year.
 * * `year` is the year to examine
 * returns boolean - true if this is a leap year, false if not
 * */
export function isEthiopianLeapYear(year) {
    if (year != null) {
        return year % 4 == 3 || year % 4 == -1;
    }
    return false;
}
/**
 * Sets the Ethiopian year.
 * * `date` is Ethiopian date
 * * `yearValue` incremented year
 * returns NgbDate - ethiopian date
 * */
export function setEthiopianYear(date, yearValue) {
    date.year = +yearValue;
    return date;
}
/**
 * Sets the Ethiopian month.
 * * `date` is Ethiopian date
 * * `val` incremented month
 * returns NgbDate - Ethiopian date
 * */
export function setEthiopianMonth(date, val) {
    val = +val;
    date.year = date.year + Math.floor((val - 1) / 13);
    date.month = Math.floor((((val - 1) % 13) + 13) % 13) + 1;
    return date;
}
/**
 * Sets the Ethiopian day.
 * * `date` is Ethiopian date
 * * `day` incremented day
 * returns NgbDate - Ethiopian date
 * */
export function setEthiopianDay(date, day) {
    let mDays = getDaysPerMonth(date.month, date.year);
    if (day <= 0) {
        while (day <= 0) {
            date = setEthiopianMonth(date, date.month - 1);
            mDays = getDaysPerMonth(date.month, date.year);
            day += mDays;
        }
    }
    else if (day > mDays) {
        while (day > mDays) {
            day -= mDays;
            date = setEthiopianMonth(date, date.month + 1);
            mDays = getDaysPerMonth(date.month, date.year);
        }
    }
    date.day = day;
    return date;
}
function getDaysPerMonth(month, year) {
    let leapYear = isEthiopianLeapYear(year);
    return DAYSPERMONTH[month - 1] + (month === 13 && leapYear ? 1 : 0);
}
export function toGregorian(ethiopianDate) {
    let jdn = ethiopianToJulian(ethiopianDate.year, ethiopianDate.month, ethiopianDate.day);
    let date = julianToGregorian(jdn);
    date.setHours(6, 30, 3, 200);
    return date;
}
export function fromGregorian(gdate) {
    let g2d = gregorianToJulian(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
    return juilianToEthiopia(g2d);
}
export function ethiopianToJulian(year, month, day) {
    if (year < 0) {
        year++;
    } // No year zero
    return day + (month - 1) * 30 + (year - 1) * 365 + Math.floor(year / 4) + JD_EPOCH - 1;
}
function juilianToEthiopia(jd) {
    let c = Math.floor(jd) + 0.5 - JD_EPOCH;
    let year = Math.floor((c - Math.floor((c + 366) / 1461)) / 365) + 1;
    if (year <= 0) {
        year--;
    } // No year zero
    c = Math.floor(jd) + 0.5 - ethiopianToJulian(year, 1, 1);
    let month = Math.floor(c / 30) + 1;
    let day = c - (month - 1) * 30 + 1;
    return new NgbDate(year, month, day);
}
function julianToGregorian(jd) {
    let z = Math.floor(jd + 0.5);
    let a = Math.floor((z - 1867216.25) / 36524.25);
    a = z + 1 + a - Math.floor(a / 4);
    let b = a + 1524;
    let c = Math.floor((b - 122.1) / 365.25);
    let d = Math.floor(365.25 * c);
    let e = Math.floor((b - d) / 30.6001);
    let day = b - d - Math.floor(e * 30.6001);
    let month = e - (e > 13.5 ? 13 : 1);
    let year = c - (month > 2.5 ? 4716 : 4715);
    if (year <= 0) {
        year--;
    } // No year zero
    return new Date(year, month, day);
}
export function gregorianToJulian(year, month, day) {
    if (year < 0) {
        year++;
    } // No year zero
    // Jean Meeus algorithm, "Astronomical Algorithms", 1991
    if (month < 3) {
        month += 12;
        year--;
    }
    let a = Math.floor(year / 100);
    let b = 2 - a + Math.floor(a / 4);
    return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524.5;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXRoaW9waWFuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2RhdGVwaWNrZXIvZXRoaW9waWFuL2V0aGlvcGlhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXRDLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQztBQUMzQixNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXpFOzs7O0tBSUs7QUFFTCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsSUFBWTtJQUMvQyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNsQixPQUFPLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2QsQ0FBQztBQUVEOzs7OztLQUtLO0FBRUwsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQWEsRUFBRSxTQUFpQjtJQUNoRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQztBQUVEOzs7OztLQUtLO0FBQ0wsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQWEsRUFBRSxHQUFXO0lBQzNELEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFELE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQztBQUVEOzs7OztLQUtLO0FBQ0wsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUFhLEVBQUUsR0FBVztJQUN6RCxJQUFJLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDZCxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNqQixJQUFJLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0MsS0FBSyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxHQUFHLElBQUksS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUNGLENBQUM7U0FBTSxJQUFJLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUN4QixPQUFPLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQztZQUNwQixHQUFHLElBQUksS0FBSyxDQUFDO1lBQ2IsSUFBSSxHQUFHLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9DLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUNGLENBQUM7SUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNmLE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUFDLEtBQWEsRUFBRSxJQUFZO0lBQ25ELElBQUksUUFBUSxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLE9BQU8sWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLGFBQXNCO0lBQ2pELElBQUksR0FBRyxHQUFHLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEYsSUFBSSxJQUFJLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3QixPQUFPLElBQUksQ0FBQztBQUNiLENBQUM7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQVc7SUFDeEMsSUFBSSxHQUFHLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDeEYsT0FBTyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQVksRUFBRSxLQUFhLEVBQUUsR0FBVztJQUN6RSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNkLElBQUksRUFBRSxDQUFDO0lBQ1IsQ0FBQyxDQUFDLGVBQWU7SUFDakIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ3hGLENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLEVBQVU7SUFDcEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO0lBQ3hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNmLElBQUksRUFBRSxDQUFDO0lBQ1IsQ0FBQyxDQUFDLGVBQWU7SUFDakIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxFQUFVO0lBQ3BDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDakIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN6QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDMUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2YsSUFBSSxFQUFFLENBQUM7SUFDUixDQUFDLENBQUMsZUFBZTtJQUNqQixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLEdBQVc7SUFDekUsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDZCxJQUFJLEVBQUUsQ0FBQztJQUNSLENBQUMsQ0FBQyxlQUFlO0lBQ2pCLHdEQUF3RDtJQUN4RCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNmLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLEVBQUUsQ0FBQztJQUNSLENBQUM7SUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQ2xHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ2JEYXRlIH0gZnJvbSAnLi4vbmdiLWRhdGUnO1xuXG5jb25zdCBKRF9FUE9DSCA9IDE3MjQyMjAuNTtcbmNvbnN0IERBWVNQRVJNT05USCA9IFszMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCA1XTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGlzIGRhdGUgaXMgaW4gYSBsZWFwIHllYXIuXG4gKiAqIGB5ZWFyYCBpcyB0aGUgeWVhciB0byBleGFtaW5lXG4gKiByZXR1cm5zIGJvb2xlYW4gLSB0cnVlIGlmIHRoaXMgaXMgYSBsZWFwIHllYXIsIGZhbHNlIGlmIG5vdFxuICogKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXRoaW9waWFuTGVhcFllYXIoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG5cdGlmICh5ZWFyICE9IG51bGwpIHtcblx0XHRyZXR1cm4geWVhciAlIDQgPT0gMyB8fCB5ZWFyICUgNCA9PSAtMTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgRXRoaW9waWFuIHllYXIuXG4gKiAqIGBkYXRlYCBpcyBFdGhpb3BpYW4gZGF0ZVxuICogKiBgeWVhclZhbHVlYCBpbmNyZW1lbnRlZCB5ZWFyXG4gKiByZXR1cm5zIE5nYkRhdGUgLSBldGhpb3BpYW4gZGF0ZVxuICogKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEV0aGlvcGlhblllYXIoZGF0ZTogTmdiRGF0ZSwgeWVhclZhbHVlOiBudW1iZXIpOiBOZ2JEYXRlIHtcblx0ZGF0ZS55ZWFyID0gK3llYXJWYWx1ZTtcblx0cmV0dXJuIGRhdGU7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgRXRoaW9waWFuIG1vbnRoLlxuICogKiBgZGF0ZWAgaXMgRXRoaW9waWFuIGRhdGVcbiAqICogYHZhbGAgaW5jcmVtZW50ZWQgbW9udGhcbiAqIHJldHVybnMgTmdiRGF0ZSAtIEV0aGlvcGlhbiBkYXRlXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEV0aGlvcGlhbk1vbnRoKGRhdGU6IE5nYkRhdGUsIHZhbDogbnVtYmVyKTogTmdiRGF0ZSB7XG5cdHZhbCA9ICt2YWw7XG5cdGRhdGUueWVhciA9IGRhdGUueWVhciArIE1hdGguZmxvb3IoKHZhbCAtIDEpIC8gMTMpO1xuXHRkYXRlLm1vbnRoID0gTWF0aC5mbG9vcigoKCh2YWwgLSAxKSAlIDEzKSArIDEzKSAlIDEzKSArIDE7XG5cdHJldHVybiBkYXRlO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIEV0aGlvcGlhbiBkYXkuXG4gKiAqIGBkYXRlYCBpcyBFdGhpb3BpYW4gZGF0ZVxuICogKiBgZGF5YCBpbmNyZW1lbnRlZCBkYXlcbiAqIHJldHVybnMgTmdiRGF0ZSAtIEV0aGlvcGlhbiBkYXRlXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEV0aGlvcGlhbkRheShkYXRlOiBOZ2JEYXRlLCBkYXk6IG51bWJlcik6IE5nYkRhdGUge1xuXHRsZXQgbURheXMgPSBnZXREYXlzUGVyTW9udGgoZGF0ZS5tb250aCwgZGF0ZS55ZWFyKTtcblx0aWYgKGRheSA8PSAwKSB7XG5cdFx0d2hpbGUgKGRheSA8PSAwKSB7XG5cdFx0XHRkYXRlID0gc2V0RXRoaW9waWFuTW9udGgoZGF0ZSwgZGF0ZS5tb250aCAtIDEpO1xuXHRcdFx0bURheXMgPSBnZXREYXlzUGVyTW9udGgoZGF0ZS5tb250aCwgZGF0ZS55ZWFyKTtcblx0XHRcdGRheSArPSBtRGF5cztcblx0XHR9XG5cdH0gZWxzZSBpZiAoZGF5ID4gbURheXMpIHtcblx0XHR3aGlsZSAoZGF5ID4gbURheXMpIHtcblx0XHRcdGRheSAtPSBtRGF5cztcblx0XHRcdGRhdGUgPSBzZXRFdGhpb3BpYW5Nb250aChkYXRlLCBkYXRlLm1vbnRoICsgMSk7XG5cdFx0XHRtRGF5cyA9IGdldERheXNQZXJNb250aChkYXRlLm1vbnRoLCBkYXRlLnllYXIpO1xuXHRcdH1cblx0fVxuXHRkYXRlLmRheSA9IGRheTtcblx0cmV0dXJuIGRhdGU7XG59XG5cbmZ1bmN0aW9uIGdldERheXNQZXJNb250aChtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXIpOiBudW1iZXIge1xuXHRsZXQgbGVhcFllYXIgPSBpc0V0aGlvcGlhbkxlYXBZZWFyKHllYXIpO1xuXHRyZXR1cm4gREFZU1BFUk1PTlRIW21vbnRoIC0gMV0gKyAobW9udGggPT09IDEzICYmIGxlYXBZZWFyID8gMSA6IDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9HcmVnb3JpYW4oZXRoaW9waWFuRGF0ZTogTmdiRGF0ZSk6IERhdGUge1xuXHRsZXQgamRuID0gZXRoaW9waWFuVG9KdWxpYW4oZXRoaW9waWFuRGF0ZS55ZWFyLCBldGhpb3BpYW5EYXRlLm1vbnRoLCBldGhpb3BpYW5EYXRlLmRheSk7XG5cdGxldCBkYXRlID0ganVsaWFuVG9HcmVnb3JpYW4oamRuKTtcblx0ZGF0ZS5zZXRIb3Vycyg2LCAzMCwgMywgMjAwKTtcblx0cmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tR3JlZ29yaWFuKGdkYXRlOiBEYXRlKTogTmdiRGF0ZSB7XG5cdGxldCBnMmQgPSBncmVnb3JpYW5Ub0p1bGlhbihnZGF0ZS5nZXRGdWxsWWVhcigpLCBnZGF0ZS5nZXRNb250aCgpICsgMSwgZ2RhdGUuZ2V0RGF0ZSgpKTtcblx0cmV0dXJuIGp1aWxpYW5Ub0V0aGlvcGlhKGcyZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldGhpb3BpYW5Ub0p1bGlhbih5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRheTogbnVtYmVyKSB7XG5cdGlmICh5ZWFyIDwgMCkge1xuXHRcdHllYXIrKztcblx0fSAvLyBObyB5ZWFyIHplcm9cblx0cmV0dXJuIGRheSArIChtb250aCAtIDEpICogMzAgKyAoeWVhciAtIDEpICogMzY1ICsgTWF0aC5mbG9vcih5ZWFyIC8gNCkgKyBKRF9FUE9DSCAtIDE7XG59XG5cbmZ1bmN0aW9uIGp1aWxpYW5Ub0V0aGlvcGlhKGpkOiBudW1iZXIpIHtcblx0bGV0IGMgPSBNYXRoLmZsb29yKGpkKSArIDAuNSAtIEpEX0VQT0NIO1xuXHRsZXQgeWVhciA9IE1hdGguZmxvb3IoKGMgLSBNYXRoLmZsb29yKChjICsgMzY2KSAvIDE0NjEpKSAvIDM2NSkgKyAxO1xuXHRpZiAoeWVhciA8PSAwKSB7XG5cdFx0eWVhci0tO1xuXHR9IC8vIE5vIHllYXIgemVyb1xuXHRjID0gTWF0aC5mbG9vcihqZCkgKyAwLjUgLSBldGhpb3BpYW5Ub0p1bGlhbih5ZWFyLCAxLCAxKTtcblx0bGV0IG1vbnRoID0gTWF0aC5mbG9vcihjIC8gMzApICsgMTtcblx0bGV0IGRheSA9IGMgLSAobW9udGggLSAxKSAqIDMwICsgMTtcblx0cmV0dXJuIG5ldyBOZ2JEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xufVxuXG5mdW5jdGlvbiBqdWxpYW5Ub0dyZWdvcmlhbihqZDogbnVtYmVyKSB7XG5cdGxldCB6ID0gTWF0aC5mbG9vcihqZCArIDAuNSk7XG5cdGxldCBhID0gTWF0aC5mbG9vcigoeiAtIDE4NjcyMTYuMjUpIC8gMzY1MjQuMjUpO1xuXHRhID0geiArIDEgKyBhIC0gTWF0aC5mbG9vcihhIC8gNCk7XG5cdGxldCBiID0gYSArIDE1MjQ7XG5cdGxldCBjID0gTWF0aC5mbG9vcigoYiAtIDEyMi4xKSAvIDM2NS4yNSk7XG5cdGxldCBkID0gTWF0aC5mbG9vcigzNjUuMjUgKiBjKTtcblx0bGV0IGUgPSBNYXRoLmZsb29yKChiIC0gZCkgLyAzMC42MDAxKTtcblx0bGV0IGRheSA9IGIgLSBkIC0gTWF0aC5mbG9vcihlICogMzAuNjAwMSk7XG5cdGxldCBtb250aCA9IGUgLSAoZSA+IDEzLjUgPyAxMyA6IDEpO1xuXHRsZXQgeWVhciA9IGMgLSAobW9udGggPiAyLjUgPyA0NzE2IDogNDcxNSk7XG5cdGlmICh5ZWFyIDw9IDApIHtcblx0XHR5ZWFyLS07XG5cdH0gLy8gTm8geWVhciB6ZXJvXG5cdHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyZWdvcmlhblRvSnVsaWFuKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIpIHtcblx0aWYgKHllYXIgPCAwKSB7XG5cdFx0eWVhcisrO1xuXHR9IC8vIE5vIHllYXIgemVyb1xuXHQvLyBKZWFuIE1lZXVzIGFsZ29yaXRobSwgXCJBc3Ryb25vbWljYWwgQWxnb3JpdGhtc1wiLCAxOTkxXG5cdGlmIChtb250aCA8IDMpIHtcblx0XHRtb250aCArPSAxMjtcblx0XHR5ZWFyLS07XG5cdH1cblx0bGV0IGEgPSBNYXRoLmZsb29yKHllYXIgLyAxMDApO1xuXHRsZXQgYiA9IDIgLSBhICsgTWF0aC5mbG9vcihhIC8gNCk7XG5cdHJldHVybiBNYXRoLmZsb29yKDM2NS4yNSAqICh5ZWFyICsgNDcxNikpICsgTWF0aC5mbG9vcigzMC42MDAxICogKG1vbnRoICsgMSkpICsgZGF5ICsgYiAtIDE1MjQuNTtcbn1cbiJdfQ==