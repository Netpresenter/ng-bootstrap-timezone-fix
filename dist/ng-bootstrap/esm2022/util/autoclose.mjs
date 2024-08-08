import { fromEvent, race } from 'rxjs';
import { delay, filter, map, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { closest } from './util';
const isContainedIn = (element, array) => array ? array.some((item) => item.contains(element)) : false;
const matchesSelectorIfAny = (element, selector) => !selector || closest(element, selector) != null;
// we have to add a more significant delay to avoid re-opening when handling (click) on a toggling element
// TODO: use proper Angular platform detection when NgbAutoClose becomes a service and we can inject PLATFORM_ID
const isMobile = (() => {
    const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
    const isAndroid = () => /Android/.test(navigator.userAgent);
    return typeof navigator !== 'undefined' ? !!navigator.userAgent && (isIOS() || isAndroid()) : false;
})();
// setting 'ngbAutoClose' synchronously on mobile results in immediate popup closing
// when tapping on the triggering element
const wrapAsyncForMobile = (fn) => (isMobile ? () => setTimeout(() => fn(), 100) : fn);
export function ngbAutoClose(zone, document, type, close, closed$, insideElements, ignoreElements, insideSelector) {
    // closing on ESC and outside clicks
    if (type) {
        zone.runOutsideAngular(wrapAsyncForMobile(() => {
            const shouldCloseOnClick = (event) => {
                const element = event.target;
                if (event.button === 2 || isContainedIn(element, ignoreElements)) {
                    return false;
                }
                if (type === 'inside') {
                    return isContainedIn(element, insideElements) && matchesSelectorIfAny(element, insideSelector);
                }
                else if (type === 'outside') {
                    return !isContainedIn(element, insideElements);
                } /* if (type === true) */
                else {
                    return matchesSelectorIfAny(element, insideSelector) || !isContainedIn(element, insideElements);
                }
            };
            const escapes$ = fromEvent(document, 'keydown').pipe(takeUntil(closed$), filter((e) => e.key === 'Escape'), tap((e) => e.preventDefault()));
            // we have to pre-calculate 'shouldCloseOnClick' on 'mousedown',
            // because on 'mouseup' DOM nodes might be detached
            const mouseDowns$ = fromEvent(document, 'mousedown').pipe(map(shouldCloseOnClick), takeUntil(closed$));
            const closeableClicks$ = fromEvent(document, 'mouseup').pipe(withLatestFrom(mouseDowns$), filter(([_, shouldClose]) => shouldClose), delay(0), takeUntil(closed$));
            race([escapes$.pipe(map((_) => 0 /* SOURCE.ESCAPE */)), closeableClicks$.pipe(map((_) => 1 /* SOURCE.CLICK */))]).subscribe((source) => zone.run(() => close(source)));
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2Nsb3NlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWwvYXV0b2Nsb3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQWMsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFakMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxPQUFvQixFQUFFLEtBQXFCLEVBQUUsRUFBRSxDQUNyRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBRTlELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxPQUFvQixFQUFFLFFBQWlCLEVBQUUsRUFBRSxDQUN4RSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUVqRCwwR0FBMEc7QUFDMUcsZ0hBQWdIO0FBQ2hILE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ3RCLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUNsQixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUM1QyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyRyxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxT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LFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsc0JBQWMsQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLHFCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQzFHLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUNqRCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7QUFDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIHJhY2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsLCB0YXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgY2xvc2VzdCB9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IGlzQ29udGFpbmVkSW4gPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIGFycmF5PzogSFRNTEVsZW1lbnRbXSkgPT5cblx0YXJyYXkgPyBhcnJheS5zb21lKChpdGVtKSA9PiBpdGVtLmNvbnRhaW5zKGVsZW1lbnQpKSA6IGZhbHNlO1xuXG5jb25zdCBtYXRjaGVzU2VsZWN0b3JJZkFueSA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgc2VsZWN0b3I/OiBzdHJpbmcpID0+XG5cdCFzZWxlY3RvciB8fCBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSAhPSBudWxsO1xuXG4vLyB3ZSBoYXZlIHRvIGFkZCBhIG1vcmUgc2lnbmlmaWNhbnQgZGVsYXkgdG8gYXZvaWQgcmUtb3BlbmluZyB3aGVuIGhhbmRsaW5nIChjbGljaykgb24gYSB0b2dnbGluZyBlbGVtZW50XG4vLyBUT0RPOiB1c2UgcHJvcGVyIEFuZ3VsYXIgcGxhdGZvcm0gZGV0ZWN0aW9uIHdoZW4gTmdiQXV0b0Nsb3NlIGJlY29tZXMgYSBzZXJ2aWNlIGFuZCB3ZSBjYW4gaW5qZWN0IFBMQVRGT1JNX0lEXG5jb25zdCBpc01vYmlsZSA9ICgoKSA9PiB7XG5cdGNvbnN0IGlzSU9TID0gKCkgPT5cblx0XHQvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fFxuXHRcdCgvTWFjaW50b3NoLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAyKTtcblx0Y29uc3QgaXNBbmRyb2lkID0gKCkgPT4gL0FuZHJvaWQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cblx0cmV0dXJuIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnID8gISFuYXZpZ2F0b3IudXNlckFnZW50ICYmIChpc0lPUygpIHx8IGlzQW5kcm9pZCgpKSA6IGZhbHNlO1xufSkoKTtcblxuLy8gc2V0dGluZyAnbmdiQXV0b0Nsb3NlJyBzeW5jaHJvbm91c2x5IG9uIG1vYmlsZSByZXN1bHRzIGluIGltbWVkaWF0ZSBwb3B1cCBjbG9zaW5nXG4vLyB3aGVuIHRhcHBpbmcgb24gdGhlIHRyaWdnZXJpbmcgZWxlbWVudFxuY29uc3Qgd3JhcEFzeW5jRm9yTW9iaWxlID0gKGZuKSA9PiAoaXNNb2JpbGUgPyAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IGZuKCksIDEwMCkgOiBmbik7XG5cbmV4cG9ydCBjb25zdCBlbnVtIFNPVVJDRSB7XG5cdEVTQ0FQRSxcblx0Q0xJQ0ssXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZ2JBdXRvQ2xvc2UoXG5cdHpvbmU6IE5nWm9uZSxcblx0ZG9jdW1lbnQ6IGFueSxcblx0dHlwZTogYm9vbGVhbiB8ICdpbnNpZGUnIHwgJ291dHNpZGUnLFxuXHRjbG9zZTogKHNvdXJjZTogU09VUkNFKSA9PiB2b2lkLFxuXHRjbG9zZWQkOiBPYnNlcnZhYmxlPGFueT4sXG5cdGluc2lkZUVsZW1lbnRzOiBIVE1MRWxlbWVudFtdLFxuXHRpZ25vcmVFbGVtZW50cz86IEhUTUxFbGVtZW50W10sXG5cdGluc2lkZVNlbGVjdG9yPzogc3RyaW5nLFxuKSB7XG5cdC8vIGNsb3Npbmcgb24gRVNDIGFuZCBvdXRzaWRlIGNsaWNrc1xuXHRpZiAodHlwZSkge1xuXHRcdHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoXG5cdFx0XHR3cmFwQXN5bmNGb3JNb2JpbGUoKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBzaG91bGRDbG9zZU9uQ2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0XHRcdGlmIChldmVudC5idXR0b24gPT09IDIgfHwgaXNDb250YWluZWRJbihlbGVtZW50LCBpZ25vcmVFbGVtZW50cykpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHR5cGUgPT09ICdpbnNpZGUnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaXNDb250YWluZWRJbihlbGVtZW50LCBpbnNpZGVFbGVtZW50cykgJiYgbWF0Y2hlc1NlbGVjdG9ySWZBbnkoZWxlbWVudCwgaW5zaWRlU2VsZWN0b3IpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZSA9PT0gJ291dHNpZGUnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gIWlzQ29udGFpbmVkSW4oZWxlbWVudCwgaW5zaWRlRWxlbWVudHMpO1xuXHRcdFx0XHRcdH0gLyogaWYgKHR5cGUgPT09IHRydWUpICovIGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG1hdGNoZXNTZWxlY3RvcklmQW55KGVsZW1lbnQsIGluc2lkZVNlbGVjdG9yKSB8fCAhaXNDb250YWluZWRJbihlbGVtZW50LCBpbnNpZGVFbGVtZW50cyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGNvbnN0IGVzY2FwZXMkID0gZnJvbUV2ZW50PEtleWJvYXJkRXZlbnQ+KGRvY3VtZW50LCAna2V5ZG93bicpLnBpcGUoXG5cdFx0XHRcdFx0dGFrZVVudGlsKGNsb3NlZCQpLFxuXHRcdFx0XHRcdGZpbHRlcigoZSkgPT4gZS5rZXkgPT09ICdFc2NhcGUnKSxcblx0XHRcdFx0XHR0YXAoKGUpID0+IGUucHJldmVudERlZmF1bHQoKSksXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Ly8gd2UgaGF2ZSB0byBwcmUtY2FsY3VsYXRlICdzaG91bGRDbG9zZU9uQ2xpY2snIG9uICdtb3VzZWRvd24nLFxuXHRcdFx0XHQvLyBiZWNhdXNlIG9uICdtb3VzZXVwJyBET00gbm9kZXMgbWlnaHQgYmUgZGV0YWNoZWRcblx0XHRcdFx0Y29uc3QgbW91c2VEb3ducyQgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oZG9jdW1lbnQsICdtb3VzZWRvd24nKS5waXBlKFxuXHRcdFx0XHRcdG1hcChzaG91bGRDbG9zZU9uQ2xpY2spLFxuXHRcdFx0XHRcdHRha2VVbnRpbChjbG9zZWQkKSxcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRjb25zdCBjbG9zZWFibGVDbGlja3MkID0gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KGRvY3VtZW50LCAnbW91c2V1cCcpLnBpcGUoXG5cdFx0XHRcdFx0d2l0aExhdGVzdEZyb20obW91c2VEb3ducyQpLFxuXHRcdFx0XHRcdGZpbHRlcigoW18sIHNob3VsZENsb3NlXSkgPT4gc2hvdWxkQ2xvc2UpLFxuXHRcdFx0XHRcdGRlbGF5KDApLFxuXHRcdFx0XHRcdHRha2VVbnRpbChjbG9zZWQkKSxcblx0XHRcdFx0KSBhcyBPYnNlcnZhYmxlPE1vdXNlRXZlbnQ+O1xuXG5cdFx0XHRcdHJhY2UoW2VzY2FwZXMkLnBpcGUobWFwKChfKSA9PiBTT1VSQ0UuRVNDQVBFKSksIGNsb3NlYWJsZUNsaWNrcyQucGlwZShtYXAoKF8pID0+IFNPVVJDRS5DTElDSykpXSkuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdChzb3VyY2U6IFNPVVJDRSkgPT4gem9uZS5ydW4oKCkgPT4gY2xvc2Uoc291cmNlKSksXG5cdFx0XHRcdCk7XG5cdFx0XHR9KSxcblx0XHQpO1xuXHR9XG59XG4iXX0=