import { afterNextRender, AfterRenderPhase, ApplicationRef, inject, Injector, NgZone, TemplateRef, ViewContainerRef, } from '@angular/core';
import { of, Subject } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { ngbRunTransition } from './transition/ngbTransition';
import { DOCUMENT } from '@angular/common';
export class ContentRef {
    constructor(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
}
export class PopupService {
    constructor(_componentType) {
        this._componentType = _componentType;
        this._windowRef = null;
        this._contentRef = null;
        this._document = inject(DOCUMENT);
        this._applicationRef = inject(ApplicationRef);
        this._injector = inject(Injector);
        this._viewContainerRef = inject(ViewContainerRef);
        this._ngZone = inject(NgZone);
    }
    open(content, templateContext, animation = false) {
        if (!this._windowRef) {
            this._contentRef = this._getContentRef(content, templateContext);
            this._windowRef = this._viewContainerRef.createComponent(this._componentType, {
                injector: this._injector,
                projectableNodes: this._contentRef.nodes,
            });
        }
        const { nativeElement } = this._windowRef.location;
        const nextRenderSubject = new Subject();
        afterNextRender(() => {
            nextRenderSubject.next();
            nextRenderSubject.complete();
        }, {
            injector: this._injector,
            phase: AfterRenderPhase.MixedReadWrite,
        });
        const transition$ = nextRenderSubject.pipe(mergeMap(() => ngbRunTransition(this._ngZone, nativeElement, ({ classList }) => classList.add('show'), {
            animation,
            runningTransition: 'continue',
        })));
        return { windowRef: this._windowRef, transition$ };
    }
    close(animation = false) {
        if (!this._windowRef) {
            return of(undefined);
        }
        return ngbRunTransition(this._ngZone, this._windowRef.location.nativeElement, ({ classList }) => classList.remove('show'), { animation, runningTransition: 'stop' }).pipe(tap(() => {
            this._windowRef?.destroy();
            this._contentRef?.viewRef?.destroy();
            this._windowRef = null;
            this._contentRef = null;
        }));
    }
    _getContentRef(content, templateContext) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof TemplateRef) {
            const viewRef = content.createEmbeddedView(templateContext);
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        else {
            return new ContentRef([[this._document.createTextNode(`${content}`)]]);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbC9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ04sZUFBZSxFQUNmLGdCQUFnQixFQUNoQixjQUFjLEVBRWQsTUFBTSxFQUNOLFFBQVEsRUFDUixNQUFNLEVBQ04sV0FBVyxFQUVYLGdCQUFnQixHQUVoQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxNQUFNLE9BQU8sVUFBVTtJQUN0QixZQUNRLEtBQWUsRUFDZixPQUFpQixFQUNqQixZQUFnQztRQUZoQyxVQUFLLEdBQUwsS0FBSyxDQUFVO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7SUFDckMsQ0FBQztDQUNKO0FBRUQsTUFBTSxPQUFPLFlBQVk7SUFVeEIsWUFBb0IsY0FBdUI7UUFBdkIsbUJBQWMsR0FBZCxjQUFjLENBQVM7UUFUbkMsZUFBVSxHQUEyQixJQUFJLENBQUM7UUFDMUMsZ0JBQVcsR0FBc0IsSUFBSSxDQUFDO1FBRXRDLGNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0Isb0JBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekMsY0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixzQkFBaUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3QyxZQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FB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QyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckQsQ0FBQzthQUFNLENBQUM7WUFDUCxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQztJQUNGLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdGFmdGVyTmV4dFJlbmRlcixcblx0QWZ0ZXJSZW5kZXJQaGFzZSxcblx0QXBwbGljYXRpb25SZWYsXG5cdENvbXBvbmVudFJlZixcblx0aW5qZWN0LFxuXHRJbmplY3Rvcixcblx0Tmdab25lLFxuXHRUZW1wbGF0ZVJlZixcblx0VHlwZSxcblx0Vmlld0NvbnRhaW5lclJlZixcblx0Vmlld1JlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtZXJnZU1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBuZ2JSdW5UcmFuc2l0aW9uIH0gZnJvbSAnLi90cmFuc2l0aW9uL25nYlRyYW5zaXRpb24nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgQ29udGVudFJlZiB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBub2RlczogTm9kZVtdW10sXG5cdFx0cHVibGljIHZpZXdSZWY/OiBWaWV3UmVmLFxuXHRcdHB1YmxpYyBjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8YW55Pixcblx0KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUG9wdXBTZXJ2aWNlPFQ+IHtcblx0cHJpdmF0ZSBfd2luZG93UmVmOiBDb21wb25lbnRSZWY8VD4gfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSBfY29udGVudFJlZjogQ29udGVudFJlZiB8IG51bGwgPSBudWxsO1xuXG5cdHByaXZhdGUgX2RvY3VtZW50ID0gaW5qZWN0KERPQ1VNRU5UKTtcblx0cHJpdmF0ZSBfYXBwbGljYXRpb25SZWYgPSBpbmplY3QoQXBwbGljYXRpb25SZWYpO1xuXHRwcml2YXRlIF9pbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cdHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWYgPSBpbmplY3QoVmlld0NvbnRhaW5lclJlZik7XG5cdHByaXZhdGUgX25nWm9uZSA9IGluamVjdChOZ1pvbmUpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbXBvbmVudFR5cGU6IFR5cGU8VD4pIHt9XG5cblx0b3Blbihcblx0XHRjb250ZW50Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pixcblx0XHR0ZW1wbGF0ZUNvbnRleHQ/OiBhbnksXG5cdFx0YW5pbWF0aW9uID0gZmFsc2UsXG5cdCk6IHsgd2luZG93UmVmOiBDb21wb25lbnRSZWY8VD47IHRyYW5zaXRpb24kOiBPYnNlcnZhYmxlPHZvaWQ+IH0ge1xuXHRcdGlmICghdGhpcy5fd2luZG93UmVmKSB7XG5cdFx0XHR0aGlzLl9jb250ZW50UmVmID0gdGhpcy5fZ2V0Q29udGVudFJlZihjb250ZW50LCB0ZW1wbGF0ZUNvbnRleHQpO1xuXHRcdFx0dGhpcy5fd2luZG93UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQodGhpcy5fY29tcG9uZW50VHlwZSwge1xuXHRcdFx0XHRpbmplY3RvcjogdGhpcy5faW5qZWN0b3IsXG5cdFx0XHRcdHByb2plY3RhYmxlTm9kZXM6IHRoaXMuX2NvbnRlbnRSZWYubm9kZXMsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRjb25zdCB7IG5hdGl2ZUVsZW1lbnQgfSA9IHRoaXMuX3dpbmRvd1JlZi5sb2NhdGlvbjtcblxuXHRcdGNvbnN0IG5leHRSZW5kZXJTdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblx0XHRhZnRlck5leHRSZW5kZXIoXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdG5leHRSZW5kZXJTdWJqZWN0Lm5leHQoKTtcblx0XHRcdFx0bmV4dFJlbmRlclN1YmplY3QuY29tcGxldGUoKTtcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGluamVjdG9yOiB0aGlzLl9pbmplY3Rvcixcblx0XHRcdFx0cGhhc2U6IEFmdGVyUmVuZGVyUGhhc2UuTWl4ZWRSZWFkV3JpdGUsXG5cdFx0XHR9LFxuXHRcdCk7XG5cdFx0Y29uc3QgdHJhbnNpdGlvbiQgPSBuZXh0UmVuZGVyU3ViamVjdC5waXBlKFxuXHRcdFx0bWVyZ2VNYXAoKCkgPT5cblx0XHRcdFx0bmdiUnVuVHJhbnNpdGlvbih0aGlzLl9uZ1pvbmUsIG5hdGl2ZUVsZW1lbnQsICh7IGNsYXNzTGlzdCB9KSA9PiBjbGFzc0xpc3QuYWRkKCdzaG93JyksIHtcblx0XHRcdFx0XHRhbmltYXRpb24sXG5cdFx0XHRcdFx0cnVubmluZ1RyYW5zaXRpb246ICdjb250aW51ZScsXG5cdFx0XHRcdH0pLFxuXHRcdFx0KSxcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHsgd2luZG93UmVmOiB0aGlzLl93aW5kb3dSZWYsIHRyYW5zaXRpb24kIH07XG5cdH1cblxuXHRjbG9zZShhbmltYXRpb24gPSBmYWxzZSk6IE9ic2VydmFibGU8dm9pZD4ge1xuXHRcdGlmICghdGhpcy5fd2luZG93UmVmKSB7XG5cdFx0XHRyZXR1cm4gb2YodW5kZWZpbmVkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmdiUnVuVHJhbnNpdGlvbihcblx0XHRcdHRoaXMuX25nWm9uZSxcblx0XHRcdHRoaXMuX3dpbmRvd1JlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LFxuXHRcdFx0KHsgY2xhc3NMaXN0IH0pID0+IGNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKSxcblx0XHRcdHsgYW5pbWF0aW9uLCBydW5uaW5nVHJhbnNpdGlvbjogJ3N0b3AnIH0sXG5cdFx0KS5waXBlKFxuXHRcdFx0dGFwKCgpID0+IHtcblx0XHRcdFx0dGhpcy5fd2luZG93UmVmPy5kZXN0cm95KCk7XG5cdFx0XHRcdHRoaXMuX2NvbnRlbnRSZWY/LnZpZXdSZWY/LmRlc3Ryb3koKTtcblx0XHRcdFx0dGhpcy5fd2luZG93UmVmID0gbnVsbDtcblx0XHRcdFx0dGhpcy5fY29udGVudFJlZiA9IG51bGw7XG5cdFx0XHR9KSxcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBfZ2V0Q29udGVudFJlZihjb250ZW50Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiwgdGVtcGxhdGVDb250ZXh0PzogYW55KTogQ29udGVudFJlZiB7XG5cdFx0aWYgKCFjb250ZW50KSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbnRlbnRSZWYoW10pO1xuXHRcdH0gZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG5cdFx0XHRjb25zdCB2aWV3UmVmID0gY29udGVudC5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVDb250ZXh0KTtcblx0XHRcdHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG5cdFx0XHRyZXR1cm4gbmV3IENvbnRlbnRSZWYoW3ZpZXdSZWYucm9vdE5vZGVzXSwgdmlld1JlZik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgQ29udGVudFJlZihbW3RoaXMuX2RvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2NvbnRlbnR9YCldXSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=