import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, inject, Input, Output, TemplateRef, } from '@angular/core';
import { getValueInRange, isNumber } from '../util/util';
import { NgbPaginationConfig } from './pagination-config';
import { NgTemplateOutlet } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * A directive to match the 'ellipsis' link template
 *
 * @since 4.1.0
 */
export class NgbPaginationEllipsis {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPaginationEllipsis, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.2", type: NgbPaginationEllipsis, isStandalone: true, selector: "ng-template[ngbPaginationEllipsis]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPaginationEllipsis, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[ngbPaginationEllipsis]', standalone: true }]
        }] });
/**
 * A directive to match the 'first' link template
 *
 * @since 4.1.0
 */
export class NgbPaginationFirst {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPaginationFirst, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.2", type: NgbPaginationFirst, isStandalone: true, selector: "ng-template[ngbPaginationFirst]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPaginationFirst, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[ngbPaginationFirst]', standalone: true }]
        }] });
/**
 * A directive to match the 'last' link template
 *
 * @since 4.1.0
 */
export class NgbPaginationLast {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPaginationLast, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.2", type: NgbPaginationLast, isStandalone: true, selector: "ng-template[ngbPaginationLast]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPaginationLast, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[ngbPaginationLast]', standalone: true }]
        }] });
/**
 * A directive to match the 'next' link template
 *
 * @since 4.1.0
 */
export class NgbPaginationNext {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPaginationNext, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.2", type: NgbPaginationNext, isStandalone: true, selector: "ng-template[ngbPaginationNext]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPaginationNext, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[ngbPaginationNext]', standalone: true }]
        }] });
/**
 * A directive to match the page 'number' link template
 *
 * @since 4.1.0
 */
export class NgbPaginationNumber {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPaginationNumber, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.2", type: NgbPaginationNumber, isStandalone: true, selector: "ng-template[ngbPaginationNumber]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPaginationNumber, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[ngbPaginationNumber]', standalone: true }]
        }] });
/**
 * A directive to match the 'previous' link template
 *
 * @since 4.1.0
 */
export class NgbPaginationPrevious {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPaginationPrevious, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.2", type: NgbPaginationPrevious, isStandalone: true, selector: "ng-template[ngbPaginationPrevious]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPaginationPrevious, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[ngbPaginationPrevious]', standalone: true }]
        }] });
/**
 * A directive to match the 'pages' whole content
 *
 * @since 9.1.0
 */
export class NgbPaginationPages {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPaginationPages, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.2", type: NgbPaginationPages, isStandalone: true, selector: "ng-template[ngbPaginationPages]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPaginationPages, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[ngbPaginationPages]', standalone: true }]
        }] });
/**
 * A component that displays page numbers and allows to customize them in several ways.
 */
export class NgbPagination {
    constructor() {
        this._config = inject(NgbPaginationConfig);
        this.pageCount = 0;
        this.pages = [];
        /**
         * If `true`, pagination links will be disabled.
         */
        this.disabled = this._config.disabled;
        /**
         * If `true`, the "First" and "Last" page links are shown.
         */
        this.boundaryLinks = this._config.boundaryLinks;
        /**
         * If `true`, the "Next" and "Previous" page links are shown.
         */
        this.directionLinks = this._config.directionLinks;
        /**
         * If `true`, the ellipsis symbols and first/last page numbers will be shown when `maxSize` > number of pages.
         */
        this.ellipses = this._config.ellipses;
        /**
         * Whether to rotate pages when `maxSize` > number of pages.
         *
         * The current page always stays in the middle if `true`.
         */
        this.rotate = this._config.rotate;
        /**
         *  The maximum number of pages to display.
         */
        this.maxSize = this._config.maxSize;
        /**
         *  The current page.
         *
         *  Page numbers start with `1`.
         */
        this.page = 1;
        /**
         *  The number of items per page.
         */
        this.pageSize = this._config.pageSize;
        /**
         *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
         *
         *  Event payload is the number of the newly selected page.
         *
         *  Page numbers start with `1`.
         */
        this.pageChange = new EventEmitter(true);
        /**
         * The pagination display size.
         *
         * Bootstrap currently supports small and large sizes.
         *
         * If the passed value is a string (ex. 'custom'), it will just add the `pagination-custom` css class
         */
        this.size = this._config.size;
    }
    hasPrevious() {
        return this.page > 1;
    }
    hasNext() {
        return this.page < this.pageCount;
    }
    nextDisabled() {
        return !this.hasNext() || this.disabled;
    }
    previousDisabled() {
        return !this.hasPrevious() || this.disabled;
    }
    selectPage(pageNumber) {
        this._updatePages(pageNumber);
    }
    ngOnChanges(changes) {
        this._updatePages(this.page);
    }
    isEllipsis(pageNumber) {
        return pageNumber === -1;
    }
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    _applyEllipses(start, end) {
        if (this.ellipses) {
            if (start > 0) {
                // The first page will always be included. If the displayed range
                // starts after the third page, then add ellipsis. But if the range
                // starts on the third page, then add the second page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (start > 2) {
                    this.pages.unshift(-1);
                }
                else if (start === 2) {
                    this.pages.unshift(2);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                // The last page will always be included. If the displayed range
                // ends before the third-last page, then add ellipsis. But if the range
                // ends on third-last page, then add the second-last page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (end < this.pageCount - 2) {
                    this.pages.push(-1);
                }
                else if (end === this.pageCount - 2) {
                    this.pages.push(this.pageCount - 1);
                }
                this.pages.push(this.pageCount);
            }
        }
    }
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    _applyRotation() {
        let start = 0;
        let end = this.pageCount;
        let leftOffset = Math.floor(this.maxSize / 2);
        let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    }
    /**
     * Paginates page numbers based on maxSize items per page.
     */
    _applyPagination() {
        let page = Math.ceil(this.page / this.maxSize) - 1;
        let start = page * this.maxSize;
        let end = start + this.maxSize;
        return [start, end];
    }
    _setPageInRange(newPageNo) {
        const prevPageNo = this.page;
        this.page = getValueInRange(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
            this.pageChange.emit(this.page);
        }
    }
    _updatePages(newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!isNumber(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (let i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            let start = 0;
            let end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                [start, end] = this._applyRotation();
            }
            else {
                [start, end] = this._applyPagination();
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPagination, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.2", type: NgbPagination, isStandalone: true, selector: "ngb-pagination", inputs: { disabled: "disabled", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", ellipses: "ellipses", rotate: "rotate", collectionSize: "collectionSize", maxSize: "maxSize", page: "page", pageSize: "pageSize", size: "size" }, outputs: { pageChange: "pageChange" }, host: { attributes: { "role": "navigation" } }, queries: [{ propertyName: "tplEllipsis", first: true, predicate: NgbPaginationEllipsis, descendants: true }, { propertyName: "tplFirst", first: true, predicate: NgbPaginationFirst, descendants: true }, { propertyName: "tplLast", first: true, predicate: NgbPaginationLast, descendants: true }, { propertyName: "tplNext", first: true, predicate: NgbPaginationNext, descendants: true }, { propertyName: "tplNumber", first: true, predicate: NgbPaginationNumber, descendants: true }, { propertyName: "tplPrevious", first: true, predicate: NgbPaginationPrevious, descendants: true }, { propertyName: "tplPages", first: true, predicate: NgbPaginationPages, descendants: true }], usesOnChanges: true, ngImport: i0, template: `
		<ng-template #first><span aria-hidden="true" i18n="@@ngb.pagination.first">&laquo;&laquo;</span></ng-template>
		<ng-template #previous><span aria-hidden="true" i18n="@@ngb.pagination.previous">&laquo;</span></ng-template>
		<ng-template #next><span aria-hidden="true" i18n="@@ngb.pagination.next">&raquo;</span></ng-template>
		<ng-template #last><span aria-hidden="true" i18n="@@ngb.pagination.last">&raquo;&raquo;</span></ng-template>
		<ng-template #ellipsis>...</ng-template>
		<ng-template #defaultNumber let-page let-currentPage="currentPage">{{ page }}</ng-template>
		<ng-template #defaultPages let-page let-pages="pages" let-disabled="disabled">
			@for (pageNumber of pages; track $index) {
				<li
					class="page-item"
					[class.active]="pageNumber === page"
					[class.disabled]="isEllipsis(pageNumber) || disabled"
					[attr.aria-current]="pageNumber === page ? 'page' : null"
				>
					@if (isEllipsis(pageNumber)) {
						<a class="page-link" tabindex="-1" aria-disabled="true">
							<ng-template
								[ngTemplateOutlet]="tplEllipsis?.templateRef || ellipsis"
								[ngTemplateOutletContext]="{ disabled: true, currentPage: page }"
							/>
						</a>
					} @else {
						<a
							class="page-link"
							href
							(click)="selectPage(pageNumber); $event.preventDefault()"
							[attr.tabindex]="disabled ? '-1' : null"
							[attr.aria-disabled]="disabled ? 'true' : null"
						>
							<ng-template
								[ngTemplateOutlet]="tplNumber?.templateRef || defaultNumber"
								[ngTemplateOutletContext]="{ disabled: disabled, $implicit: pageNumber, currentPage: page }"
							/>
						</a>
					}
				</li>
			}
		</ng-template>
		<ul [class]="'pagination' + (size ? ' pagination-' + size : '')">
			@if (boundaryLinks) {
				<li class="page-item" [class.disabled]="previousDisabled()">
					<a
						aria-label="First"
						i18n-aria-label="@@ngb.pagination.first-aria"
						class="page-link"
						href
						(click)="selectPage(1); $event.preventDefault()"
						[attr.tabindex]="previousDisabled() ? '-1' : null"
						[attr.aria-disabled]="previousDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplFirst?.templateRef || first"
							[ngTemplateOutletContext]="{ disabled: previousDisabled(), currentPage: page }"
						/>
					</a>
				</li>
			}
			@if (directionLinks) {
				<li class="page-item" [class.disabled]="previousDisabled()">
					<a
						aria-label="Previous"
						i18n-aria-label="@@ngb.pagination.previous-aria"
						class="page-link"
						href
						(click)="selectPage(page - 1); $event.preventDefault()"
						[attr.tabindex]="previousDisabled() ? '-1' : null"
						[attr.aria-disabled]="previousDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplPrevious?.templateRef || previous"
							[ngTemplateOutletContext]="{ disabled: previousDisabled() }"
						/>
					</a>
				</li>
			}
			<ng-template
				[ngTemplateOutlet]="tplPages?.templateRef || defaultPages"
				[ngTemplateOutletContext]="{ $implicit: page, pages: pages, disabled: disabled }"
			/>
			@if (directionLinks) {
				<li class="page-item" [class.disabled]="nextDisabled()">
					<a
						aria-label="Next"
						i18n-aria-label="@@ngb.pagination.next-aria"
						class="page-link"
						href
						(click)="selectPage(page + 1); $event.preventDefault()"
						[attr.tabindex]="nextDisabled() ? '-1' : null"
						[attr.aria-disabled]="nextDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplNext?.templateRef || next"
							[ngTemplateOutletContext]="{ disabled: nextDisabled(), currentPage: page }"
						/>
					</a>
				</li>
			}
			@if (boundaryLinks) {
				<li class="page-item" [class.disabled]="nextDisabled()">
					<a
						aria-label="Last"
						i18n-aria-label="@@ngb.pagination.last-aria"
						class="page-link"
						href
						(click)="selectPage(pageCount); $event.preventDefault()"
						[attr.tabindex]="nextDisabled() ? '-1' : null"
						[attr.aria-disabled]="nextDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplLast?.templateRef || last"
							[ngTemplateOutletContext]="{ disabled: nextDisabled(), currentPage: page }"
						/>
					</a>
				</li>
			}
		</ul>
	`, isInline: true, dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbPagination, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngb-pagination',
                    standalone: true,
                    imports: [NgTemplateOutlet],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        role: 'navigation',
                    },
                    template: `
		<ng-template #first><span aria-hidden="true" i18n="@@ngb.pagination.first">&laquo;&laquo;</span></ng-template>
		<ng-template #previous><span aria-hidden="true" i18n="@@ngb.pagination.previous">&laquo;</span></ng-template>
		<ng-template #next><span aria-hidden="true" i18n="@@ngb.pagination.next">&raquo;</span></ng-template>
		<ng-template #last><span aria-hidden="true" i18n="@@ngb.pagination.last">&raquo;&raquo;</span></ng-template>
		<ng-template #ellipsis>...</ng-template>
		<ng-template #defaultNumber let-page let-currentPage="currentPage">{{ page }}</ng-template>
		<ng-template #defaultPages let-page let-pages="pages" let-disabled="disabled">
			@for (pageNumber of pages; track $index) {
				<li
					class="page-item"
					[class.active]="pageNumber === page"
					[class.disabled]="isEllipsis(pageNumber) || disabled"
					[attr.aria-current]="pageNumber === page ? 'page' : null"
				>
					@if (isEllipsis(pageNumber)) {
						<a class="page-link" tabindex="-1" aria-disabled="true">
							<ng-template
								[ngTemplateOutlet]="tplEllipsis?.templateRef || ellipsis"
								[ngTemplateOutletContext]="{ disabled: true, currentPage: page }"
							/>
						</a>
					} @else {
						<a
							class="page-link"
							href
							(click)="selectPage(pageNumber); $event.preventDefault()"
							[attr.tabindex]="disabled ? '-1' : null"
							[attr.aria-disabled]="disabled ? 'true' : null"
						>
							<ng-template
								[ngTemplateOutlet]="tplNumber?.templateRef || defaultNumber"
								[ngTemplateOutletContext]="{ disabled: disabled, $implicit: pageNumber, currentPage: page }"
							/>
						</a>
					}
				</li>
			}
		</ng-template>
		<ul [class]="'pagination' + (size ? ' pagination-' + size : '')">
			@if (boundaryLinks) {
				<li class="page-item" [class.disabled]="previousDisabled()">
					<a
						aria-label="First"
						i18n-aria-label="@@ngb.pagination.first-aria"
						class="page-link"
						href
						(click)="selectPage(1); $event.preventDefault()"
						[attr.tabindex]="previousDisabled() ? '-1' : null"
						[attr.aria-disabled]="previousDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplFirst?.templateRef || first"
							[ngTemplateOutletContext]="{ disabled: previousDisabled(), currentPage: page }"
						/>
					</a>
				</li>
			}
			@if (directionLinks) {
				<li class="page-item" [class.disabled]="previousDisabled()">
					<a
						aria-label="Previous"
						i18n-aria-label="@@ngb.pagination.previous-aria"
						class="page-link"
						href
						(click)="selectPage(page - 1); $event.preventDefault()"
						[attr.tabindex]="previousDisabled() ? '-1' : null"
						[attr.aria-disabled]="previousDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplPrevious?.templateRef || previous"
							[ngTemplateOutletContext]="{ disabled: previousDisabled() }"
						/>
					</a>
				</li>
			}
			<ng-template
				[ngTemplateOutlet]="tplPages?.templateRef || defaultPages"
				[ngTemplateOutletContext]="{ $implicit: page, pages: pages, disabled: disabled }"
			/>
			@if (directionLinks) {
				<li class="page-item" [class.disabled]="nextDisabled()">
					<a
						aria-label="Next"
						i18n-aria-label="@@ngb.pagination.next-aria"
						class="page-link"
						href
						(click)="selectPage(page + 1); $event.preventDefault()"
						[attr.tabindex]="nextDisabled() ? '-1' : null"
						[attr.aria-disabled]="nextDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplNext?.templateRef || next"
							[ngTemplateOutletContext]="{ disabled: nextDisabled(), currentPage: page }"
						/>
					</a>
				</li>
			}
			@if (boundaryLinks) {
				<li class="page-item" [class.disabled]="nextDisabled()">
					<a
						aria-label="Last"
						i18n-aria-label="@@ngb.pagination.last-aria"
						class="page-link"
						href
						(click)="selectPage(pageCount); $event.preventDefault()"
						[attr.tabindex]="nextDisabled() ? '-1' : null"
						[attr.aria-disabled]="nextDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplLast?.templateRef || last"
							[ngTemplateOutletContext]="{ disabled: nextDisabled(), currentPage: page }"
						/>
					</a>
				</li>
			}
		</ul>
	`,
                }]
        }], propDecorators: { tplEllipsis: [{
                type: ContentChild,
                args: [NgbPaginationEllipsis, { static: false }]
            }], tplFirst: [{
                type: ContentChild,
                args: [NgbPaginationFirst, { static: false }]
            }], tplLast: [{
                type: ContentChild,
                args: [NgbPaginationLast, { static: false }]
            }], tplNext: [{
                type: ContentChild,
                args: [NgbPaginationNext, { static: false }]
            }], tplNumber: [{
                type: ContentChild,
                args: [NgbPaginationNumber, { static: false }]
            }], tplPrevious: [{
                type: ContentChild,
                args: [NgbPaginationPrevious, { static: false }]
            }], tplPages: [{
                type: ContentChild,
                args: [NgbPaginationPages, { static: false }]
            }], disabled: [{
                type: Input
            }], boundaryLinks: [{
                type: Input
            }], directionLinks: [{
                type: Input
            }], ellipses: [{
                type: Input
            }], rotate: [{
                type: Input
            }], collectionSize: [{
                type: Input,
                args: [{ required: true }]
            }], maxSize: [{
                type: Input
            }], page: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], pageChange: [{
                type: Output
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wYWdpbmF0aW9uL3BhZ2luYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxNQUFNLEVBRU4sV0FBVyxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQWdFbkQ7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyxxQkFBcUI7SUFEbEM7UUFFQyxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQXFDLENBQUEsQ0FBQyxDQUFDO0tBQzVEOzhHQUZZLHFCQUFxQjtrR0FBckIscUJBQXFCOzsyRkFBckIscUJBQXFCO2tCQURqQyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLG9DQUFvQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7O0FBSy9FOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sa0JBQWtCO0lBRC9CO1FBRUMsZ0JBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUFxQyxDQUFBLENBQUMsQ0FBQztLQUM1RDs4R0FGWSxrQkFBa0I7a0dBQWxCLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFEOUIsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxpQ0FBaUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFOztBQUs1RTs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLGlCQUFpQjtJQUQ5QjtRQUVDLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBcUMsQ0FBQSxDQUFD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LEtBQUssRUFBRTtnQkFDSSxXQUFXO3NCQUFsRSxZQUFZO3VCQUFDLHFCQUFxQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFDRCxRQUFRO3NCQUE1RCxZQUFZO3VCQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFLMUMsUUFBUTtzQkFBaEIsS0FBSztnQkFLRyxhQUFhO3NCQUFyQixLQUFLO2dCQUtHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBS0csUUFBUTtzQkFBaEIsS0FBSztnQkFPRyxNQUFNO3NCQUFkLEtBQUs7Z0JBU3FCLGNBQWM7c0JBQXhDLEtBQUs7dUJBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2dCQUtoQixPQUFPO3NCQUFmLEtBQUs7Z0JBT0csSUFBSTtzQkFBWixLQUFLO2dCQUtHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBU0ksVUFBVTtzQkFBbkIsTUFBTTtnQkFTRSxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q29tcG9uZW50LFxuXHRDb250ZW50Q2hpbGQsXG5cdERpcmVjdGl2ZSxcblx0RXZlbnRFbWl0dGVyLFxuXHRpbmplY3QsXG5cdElucHV0LFxuXHRPbkNoYW5nZXMsXG5cdE91dHB1dCxcblx0U2ltcGxlQ2hhbmdlcyxcblx0VGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0VmFsdWVJblJhbmdlLCBpc051bWJlciB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBOZ2JQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9wYWdpbmF0aW9uLWNvbmZpZyc7XG5pbXBvcnQgeyBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqXG4gKiBBIGNvbnRleHQgZm9yIHRoZVxuICogKiBgTmdiUGFnaW5hdGlvbkZpcnN0YFxuICogKiBgTmdiUGFnaW5hdGlvblByZXZpb3VzYFxuICogKiBgTmdiUGFnaW5hdGlvbk5leHRgXG4gKiAqIGBOZ2JQYWdpbmF0aW9uTGFzdGBcbiAqICogYE5nYlBhZ2luYXRpb25FbGxpcHNpc2BcbiAqICogYE5nYlBhZ2luYXRpb25QYWdlc2BcbiAqXG4gKiBsaW5rIHRlbXBsYXRlcyBpbiBjYXNlIHlvdSB3YW50IHRvIG92ZXJyaWRlIG9uZS5cbiAqXG4gKiBAc2luY2UgNC4xLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ2JQYWdpbmF0aW9uTGlua0NvbnRleHQge1xuXHQvKipcblx0ICogUGFnZSBudW1iZXIgZGlzcGxheWVkIGJ5IHRoZSBjdXJyZW50IGxpbmsuXG5cdCAqL1xuXHRjdXJyZW50UGFnZTogbnVtYmVyO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSBjdXJyZW50IGxpbmsgaXMgZGlzYWJsZWQuXG5cdCAqL1xuXHRkaXNhYmxlZDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBIGNvbnRleHQgZm9yIHRoZSBgTmdiUGFnaW5hdGlvbk51bWJlcmAgbGluayB0ZW1wbGF0ZSBpbiBjYXNlIHlvdSB3YW50IHRvIG92ZXJyaWRlIG9uZS5cbiAqXG4gKiBFeHRlbmRzIGBOZ2JQYWdpbmF0aW9uTGlua0NvbnRleHRgLlxuICpcbiAqIEBzaW5jZSA0LjEuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nYlBhZ2luYXRpb25OdW1iZXJDb250ZXh0IGV4dGVuZHMgTmdiUGFnaW5hdGlvbkxpbmtDb250ZXh0IHtcblx0LyoqXG5cdCAqIFRoZSBwYWdlIG51bWJlciwgZGlzcGxheWVkIGJ5IHRoZSBjdXJyZW50IHBhZ2UgbGluay5cblx0ICovXG5cdCRpbXBsaWNpdDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEEgY29udGV4dCBmb3IgdGhlIGBOZ2JQYWdpbmF0aW9uUGFnZXNgIHBhZ2VzIHRlbXBsYXRlIGluIGNhc2UgeW91IHdhbnQgdG8gb3ZlcnJpZGVcbiAqIHRoZSB3YXkgYWxsIHBhZ2VzIGFyZSBkaXNwbGF5ZWQuXG4gKlxuICogQHNpbmNlIDkuMS4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdiUGFnaW5hdGlvblBhZ2VzQ29udGV4dCB7XG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIHBhZ2UgbnVtYmVyLlxuXHQgKi9cblx0JGltcGxpY2l0OiBudW1iZXI7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgcGFnaW5hdGlvbiBpcyBkaXNhYmxlZC5cblx0ICovXG5cdGRpc2FibGVkOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBQYWdlcyBudW1iZXJzIHRoYXQgc2hvdWxkIGJlIHJlbmRlcmVkIHN0YXJ0aW5nIHdpdGggMS5cblx0ICovXG5cdHBhZ2VzOiBudW1iZXJbXTtcbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byBtYXRjaCB0aGUgJ2VsbGlwc2lzJyBsaW5rIHRlbXBsYXRlXG4gKlxuICogQHNpbmNlIDQuMS4wXG4gKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW25nYlBhZ2luYXRpb25FbGxpcHNpc10nLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgTmdiUGFnaW5hdGlvbkVsbGlwc2lzIHtcblx0dGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TmdiUGFnaW5hdGlvbkxpbmtDb250ZXh0Pik7XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gbWF0Y2ggdGhlICdmaXJzdCcgbGluayB0ZW1wbGF0ZVxuICpcbiAqIEBzaW5jZSA0LjEuMFxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtuZ2JQYWdpbmF0aW9uRmlyc3RdJywgc3RhbmRhbG9uZTogdHJ1ZSB9KVxuZXhwb3J0IGNsYXNzIE5nYlBhZ2luYXRpb25GaXJzdCB7XG5cdHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE5nYlBhZ2luYXRpb25MaW5rQ29udGV4dD4pO1xufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHRvIG1hdGNoIHRoZSAnbGFzdCcgbGluayB0ZW1wbGF0ZVxuICpcbiAqIEBzaW5jZSA0LjEuMFxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtuZ2JQYWdpbmF0aW9uTGFzdF0nLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgTmdiUGFnaW5hdGlvbkxhc3Qge1xuXHR0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxOZ2JQYWdpbmF0aW9uTGlua0NvbnRleHQ+KTtcbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byBtYXRjaCB0aGUgJ25leHQnIGxpbmsgdGVtcGxhdGVcbiAqXG4gKiBAc2luY2UgNC4xLjBcbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbmdiUGFnaW5hdGlvbk5leHRdJywgc3RhbmRhbG9uZTogdHJ1ZSB9KVxuZXhwb3J0IGNsYXNzIE5nYlBhZ2luYXRpb25OZXh0IHtcblx0dGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TmdiUGFnaW5hdGlvbkxpbmtDb250ZXh0Pik7XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gbWF0Y2ggdGhlIHBhZ2UgJ251bWJlcicgbGluayB0ZW1wbGF0ZVxuICpcbiAqIEBzaW5jZSA0LjEuMFxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtuZ2JQYWdpbmF0aW9uTnVtYmVyXScsIHN0YW5kYWxvbmU6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBOZ2JQYWdpbmF0aW9uTnVtYmVyIHtcblx0dGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TmdiUGFnaW5hdGlvbk51bWJlckNvbnRleHQ+KTtcbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byBtYXRjaCB0aGUgJ3ByZXZpb3VzJyBsaW5rIHRlbXBsYXRlXG4gKlxuICogQHNpbmNlIDQuMS4wXG4gKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW25nYlBhZ2luYXRpb25QcmV2aW91c10nLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgTmdiUGFnaW5hdGlvblByZXZpb3VzIHtcblx0dGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8TmdiUGFnaW5hdGlvbkxpbmtDb250ZXh0Pik7XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gbWF0Y2ggdGhlICdwYWdlcycgd2hvbGUgY29udGVudFxuICpcbiAqIEBzaW5jZSA5LjEuMFxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtuZ2JQYWdpbmF0aW9uUGFnZXNdJywgc3RhbmRhbG9uZTogdHJ1ZSB9KVxuZXhwb3J0IGNsYXNzIE5nYlBhZ2luYXRpb25QYWdlcyB7XG5cdHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPE5nYlBhZ2luYXRpb25QYWdlc0NvbnRleHQ+KTtcbn1cblxuLyoqXG4gKiBBIGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIHBhZ2UgbnVtYmVycyBhbmQgYWxsb3dzIHRvIGN1c3RvbWl6ZSB0aGVtIGluIHNldmVyYWwgd2F5cy5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmdiLXBhZ2luYXRpb24nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbTmdUZW1wbGF0ZU91dGxldF0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0cm9sZTogJ25hdmlnYXRpb24nLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSAjZmlyc3Q+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgaTE4bj1cIkBAbmdiLnBhZ2luYXRpb24uZmlyc3RcIj4mbGFxdW87JmxhcXVvOzwvc3Bhbj48L25nLXRlbXBsYXRlPlxuXHRcdDxuZy10ZW1wbGF0ZSAjcHJldmlvdXM+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgaTE4bj1cIkBAbmdiLnBhZ2luYXRpb24ucHJldmlvdXNcIj4mbGFxdW87PC9zcGFuPjwvbmctdGVtcGxhdGU+XG5cdFx0PG5nLXRlbXBsYXRlICNuZXh0PjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGkxOG49XCJAQG5nYi5wYWdpbmF0aW9uLm5leHRcIj4mcmFxdW87PC9zcGFuPjwvbmctdGVtcGxhdGU+XG5cdFx0PG5nLXRlbXBsYXRlICNsYXN0PjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGkxOG49XCJAQG5nYi5wYWdpbmF0aW9uLmxhc3RcIj4mcmFxdW87JnJhcXVvOzwvc3Bhbj48L25nLXRlbXBsYXRlPlxuXHRcdDxuZy10ZW1wbGF0ZSAjZWxsaXBzaXM+Li4uPC9uZy10ZW1wbGF0ZT5cblx0XHQ8bmctdGVtcGxhdGUgI2RlZmF1bHROdW1iZXIgbGV0LXBhZ2UgbGV0LWN1cnJlbnRQYWdlPVwiY3VycmVudFBhZ2VcIj57eyBwYWdlIH19PC9uZy10ZW1wbGF0ZT5cblx0XHQ8bmctdGVtcGxhdGUgI2RlZmF1bHRQYWdlcyBsZXQtcGFnZSBsZXQtcGFnZXM9XCJwYWdlc1wiIGxldC1kaXNhYmxlZD1cImRpc2FibGVkXCI+XG5cdFx0XHRAZm9yIChwYWdlTnVtYmVyIG9mIHBhZ2VzOyB0cmFjayAkaW5kZXgpIHtcblx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0Y2xhc3M9XCJwYWdlLWl0ZW1cIlxuXHRcdFx0XHRcdFtjbGFzcy5hY3RpdmVdPVwicGFnZU51bWJlciA9PT0gcGFnZVwiXG5cdFx0XHRcdFx0W2NsYXNzLmRpc2FibGVkXT1cImlzRWxsaXBzaXMocGFnZU51bWJlcikgfHwgZGlzYWJsZWRcIlxuXHRcdFx0XHRcdFthdHRyLmFyaWEtY3VycmVudF09XCJwYWdlTnVtYmVyID09PSBwYWdlID8gJ3BhZ2UnIDogbnVsbFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHRAaWYgKGlzRWxsaXBzaXMocGFnZU51bWJlcikpIHtcblx0XHRcdFx0XHRcdDxhIGNsYXNzPVwicGFnZS1saW5rXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtZGlzYWJsZWQ9XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxuXHRcdFx0XHRcdFx0XHRcdFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbEVsbGlwc2lzPy50ZW1wbGF0ZVJlZiB8fCBlbGxpcHNpc1wiXG5cdFx0XHRcdFx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgZGlzYWJsZWQ6IHRydWUsIGN1cnJlbnRQYWdlOiBwYWdlIH1cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdH0gQGVsc2Uge1xuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJwYWdlLWxpbmtcIlxuXHRcdFx0XHRcdFx0XHRocmVmXG5cdFx0XHRcdFx0XHRcdChjbGljayk9XCJzZWxlY3RQYWdlKHBhZ2VOdW1iZXIpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLnRhYmluZGV4XT1cImRpc2FibGVkID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cImRpc2FibGVkID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxuXHRcdFx0XHRcdFx0XHRcdFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbE51bWJlcj8udGVtcGxhdGVSZWYgfHwgZGVmYXVsdE51bWJlclwiXG5cdFx0XHRcdFx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgZGlzYWJsZWQ6IGRpc2FibGVkLCAkaW1wbGljaXQ6IHBhZ2VOdW1iZXIsIGN1cnJlbnRQYWdlOiBwYWdlIH1cIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9saT5cblx0XHRcdH1cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdDx1bCBbY2xhc3NdPVwiJ3BhZ2luYXRpb24nICsgKHNpemUgPyAnIHBhZ2luYXRpb24tJyArIHNpemUgOiAnJylcIj5cblx0XHRcdEBpZiAoYm91bmRhcnlMaW5rcykge1xuXHRcdFx0XHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbY2xhc3MuZGlzYWJsZWRdPVwicHJldmlvdXNEaXNhYmxlZCgpXCI+XG5cdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9XCJGaXJzdFwiXG5cdFx0XHRcdFx0XHRpMThuLWFyaWEtbGFiZWw9XCJAQG5nYi5wYWdpbmF0aW9uLmZpcnN0LWFyaWFcIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJwYWdlLWxpbmtcIlxuXHRcdFx0XHRcdFx0aHJlZlxuXHRcdFx0XHRcdFx0KGNsaWNrKT1cInNlbGVjdFBhZ2UoMSk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0XHRcdFthdHRyLnRhYmluZGV4XT1cInByZXZpb3VzRGlzYWJsZWQoKSA/ICctMScgOiBudWxsXCJcblx0XHRcdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwicHJldmlvdXNEaXNhYmxlZCgpID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlXG5cdFx0XHRcdFx0XHRcdFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbEZpcnN0Py50ZW1wbGF0ZVJlZiB8fCBmaXJzdFwiXG5cdFx0XHRcdFx0XHRcdFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGRpc2FibGVkOiBwcmV2aW91c0Rpc2FibGVkKCksIGN1cnJlbnRQYWdlOiBwYWdlIH1cIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHR9XG5cdFx0XHRAaWYgKGRpcmVjdGlvbkxpbmtzKSB7XG5cdFx0XHRcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5kaXNhYmxlZF09XCJwcmV2aW91c0Rpc2FibGVkKClcIj5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0YXJpYS1sYWJlbD1cIlByZXZpb3VzXCJcblx0XHRcdFx0XHRcdGkxOG4tYXJpYS1sYWJlbD1cIkBAbmdiLnBhZ2luYXRpb24ucHJldmlvdXMtYXJpYVwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGlua1wiXG5cdFx0XHRcdFx0XHRocmVmXG5cdFx0XHRcdFx0XHQoY2xpY2spPVwic2VsZWN0UGFnZShwYWdlIC0gMSk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0XHRcdFthdHRyLnRhYmluZGV4XT1cInByZXZpb3VzRGlzYWJsZWQoKSA/ICctMScgOiBudWxsXCJcblx0XHRcdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwicHJldmlvdXNEaXNhYmxlZCgpID8gJ3RydWUnIDogbnVsbFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlXG5cdFx0XHRcdFx0XHRcdFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbFByZXZpb3VzPy50ZW1wbGF0ZVJlZiB8fCBwcmV2aW91c1wiXG5cdFx0XHRcdFx0XHRcdFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGRpc2FibGVkOiBwcmV2aW91c0Rpc2FibGVkKCkgfVwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9saT5cblx0XHRcdH1cblx0XHRcdDxuZy10ZW1wbGF0ZVxuXHRcdFx0XHRbbmdUZW1wbGF0ZU91dGxldF09XCJ0cGxQYWdlcz8udGVtcGxhdGVSZWYgfHwgZGVmYXVsdFBhZ2VzXCJcblx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBwYWdlLCBwYWdlczogcGFnZXMsIGRpc2FibGVkOiBkaXNhYmxlZCB9XCJcblx0XHRcdC8+XG5cdFx0XHRAaWYgKGRpcmVjdGlvbkxpbmtzKSB7XG5cdFx0XHRcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5kaXNhYmxlZF09XCJuZXh0RGlzYWJsZWQoKVwiPlxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiTmV4dFwiXG5cdFx0XHRcdFx0XHRpMThuLWFyaWEtbGFiZWw9XCJAQG5nYi5wYWdpbmF0aW9uLm5leHQtYXJpYVwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGlua1wiXG5cdFx0XHRcdFx0XHRocmVmXG5cdFx0XHRcdFx0XHQoY2xpY2spPVwic2VsZWN0UGFnZShwYWdlICsgMSk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0XHRcdFthdHRyLnRhYmluZGV4XT1cIm5leHREaXNhYmxlZCgpID8gJy0xJyA6IG51bGxcIlxuXHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJuZXh0RGlzYWJsZWQoKSA/ICd0cnVlJyA6IG51bGxcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxuXHRcdFx0XHRcdFx0XHRbbmdUZW1wbGF0ZU91dGxldF09XCJ0cGxOZXh0Py50ZW1wbGF0ZVJlZiB8fCBuZXh0XCJcblx0XHRcdFx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgZGlzYWJsZWQ6IG5leHREaXNhYmxlZCgpLCBjdXJyZW50UGFnZTogcGFnZSB9XCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0fVxuXHRcdFx0QGlmIChib3VuZGFyeUxpbmtzKSB7XG5cdFx0XHRcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtjbGFzcy5kaXNhYmxlZF09XCJuZXh0RGlzYWJsZWQoKVwiPlxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiTGFzdFwiXG5cdFx0XHRcdFx0XHRpMThuLWFyaWEtbGFiZWw9XCJAQG5nYi5wYWdpbmF0aW9uLmxhc3QtYXJpYVwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cInBhZ2UtbGlua1wiXG5cdFx0XHRcdFx0XHRocmVmXG5cdFx0XHRcdFx0XHQoY2xpY2spPVwic2VsZWN0UGFnZShwYWdlQ291bnQpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG5cdFx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJuZXh0RGlzYWJsZWQoKSA/ICctMScgOiBudWxsXCJcblx0XHRcdFx0XHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwibmV4dERpc2FibGVkKCkgPyAndHJ1ZScgOiBudWxsXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGVcblx0XHRcdFx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRdPVwidHBsTGFzdD8udGVtcGxhdGVSZWYgfHwgbGFzdFwiXG5cdFx0XHRcdFx0XHRcdFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGRpc2FibGVkOiBuZXh0RGlzYWJsZWQoKSwgY3VycmVudFBhZ2U6IHBhZ2UgfVwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9saT5cblx0XHRcdH1cblx0XHQ8L3VsPlxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBOZ2JQYWdpbmF0aW9uIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0cHJpdmF0ZSBfY29uZmlnID0gaW5qZWN0KE5nYlBhZ2luYXRpb25Db25maWcpO1xuXG5cdHBhZ2VDb3VudCA9IDA7XG5cdHBhZ2VzOiBudW1iZXJbXSA9IFtdO1xuXG5cdEBDb250ZW50Q2hpbGQoTmdiUGFnaW5hdGlvbkVsbGlwc2lzLCB7IHN0YXRpYzogZmFsc2UgfSkgdHBsRWxsaXBzaXM/OiBOZ2JQYWdpbmF0aW9uRWxsaXBzaXM7XG5cdEBDb250ZW50Q2hpbGQoTmdiUGFnaW5hdGlvbkZpcnN0LCB7IHN0YXRpYzogZmFsc2UgfSkgdHBsRmlyc3Q/OiBOZ2JQYWdpbmF0aW9uRmlyc3Q7XG5cdEBDb250ZW50Q2hpbGQoTmdiUGFnaW5hdGlvbkxhc3QsIHsgc3RhdGljOiBmYWxzZSB9KSB0cGxMYXN0PzogTmdiUGFnaW5hdGlvbkxhc3Q7XG5cdEBDb250ZW50Q2hpbGQoTmdiUGFnaW5hdGlvbk5leHQsIHsgc3RhdGljOiBmYWxzZSB9KSB0cGxOZXh0PzogTmdiUGFnaW5hdGlvbk5leHQ7XG5cdEBDb250ZW50Q2hpbGQoTmdiUGFnaW5hdGlvbk51bWJlciwgeyBzdGF0aWM6IGZhbHNlIH0pIHRwbE51bWJlcj86IE5nYlBhZ2luYXRpb25OdW1iZXI7XG5cdEBDb250ZW50Q2hpbGQoTmdiUGFnaW5hdGlvblByZXZpb3VzLCB7IHN0YXRpYzogZmFsc2UgfSkgdHBsUHJldmlvdXM/OiBOZ2JQYWdpbmF0aW9uUHJldmlvdXM7XG5cdEBDb250ZW50Q2hpbGQoTmdiUGFnaW5hdGlvblBhZ2VzLCB7IHN0YXRpYzogZmFsc2UgfSkgdHBsUGFnZXM/OiBOZ2JQYWdpbmF0aW9uUGFnZXM7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgcGFnaW5hdGlvbiBsaW5rcyB3aWxsIGJlIGRpc2FibGVkLlxuXHQgKi9cblx0QElucHV0KCkgZGlzYWJsZWQgPSB0aGlzLl9jb25maWcuZGlzYWJsZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIFwiRmlyc3RcIiBhbmQgXCJMYXN0XCIgcGFnZSBsaW5rcyBhcmUgc2hvd24uXG5cdCAqL1xuXHRASW5wdXQoKSBib3VuZGFyeUxpbmtzID0gdGhpcy5fY29uZmlnLmJvdW5kYXJ5TGlua3M7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIFwiTmV4dFwiIGFuZCBcIlByZXZpb3VzXCIgcGFnZSBsaW5rcyBhcmUgc2hvd24uXG5cdCAqL1xuXHRASW5wdXQoKSBkaXJlY3Rpb25MaW5rcyA9IHRoaXMuX2NvbmZpZy5kaXJlY3Rpb25MaW5rcztcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgZWxsaXBzaXMgc3ltYm9scyBhbmQgZmlyc3QvbGFzdCBwYWdlIG51bWJlcnMgd2lsbCBiZSBzaG93biB3aGVuIGBtYXhTaXplYCA+IG51bWJlciBvZiBwYWdlcy5cblx0ICovXG5cdEBJbnB1dCgpIGVsbGlwc2VzID0gdGhpcy5fY29uZmlnLmVsbGlwc2VzO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRvIHJvdGF0ZSBwYWdlcyB3aGVuIGBtYXhTaXplYCA+IG51bWJlciBvZiBwYWdlcy5cblx0ICpcblx0ICogVGhlIGN1cnJlbnQgcGFnZSBhbHdheXMgc3RheXMgaW4gdGhlIG1pZGRsZSBpZiBgdHJ1ZWAuXG5cdCAqL1xuXHRASW5wdXQoKSByb3RhdGUgPSB0aGlzLl9jb25maWcucm90YXRlO1xuXG5cdC8qKlxuXHQgKiAgVGhlIG51bWJlciBvZiBpdGVtcyBpbiB5b3VyIHBhZ2luYXRlZCBjb2xsZWN0aW9uLlxuXHQgKlxuXHQgKiAgTm90ZSwgdGhhdCB0aGlzIGlzIG5vdCB0aGUgbnVtYmVyIG9mIHBhZ2VzLiBQYWdlIG51bWJlcnMgYXJlIGNhbGN1bGF0ZWQgZHluYW1pY2FsbHkgYmFzZWQgb25cblx0ICogIGBjb2xsZWN0aW9uU2l6ZWAgYW5kIGBwYWdlU2l6ZWAuIEV4LiBpZiB5b3UgaGF2ZSAxMDAgaXRlbXMgaW4geW91ciBjb2xsZWN0aW9uIGFuZCBkaXNwbGF5aW5nIDIwIGl0ZW1zIHBlciBwYWdlLFxuXHQgKiAgeW91J2xsIGVuZCB1cCB3aXRoIDUgcGFnZXMuXG5cdCAqL1xuXHRASW5wdXQoeyByZXF1aXJlZDogdHJ1ZSB9KSBjb2xsZWN0aW9uU2l6ZTogbnVtYmVyO1xuXG5cdC8qKlxuXHQgKiAgVGhlIG1heGltdW0gbnVtYmVyIG9mIHBhZ2VzIHRvIGRpc3BsYXkuXG5cdCAqL1xuXHRASW5wdXQoKSBtYXhTaXplID0gdGhpcy5fY29uZmlnLm1heFNpemU7XG5cblx0LyoqXG5cdCAqICBUaGUgY3VycmVudCBwYWdlLlxuXHQgKlxuXHQgKiAgUGFnZSBudW1iZXJzIHN0YXJ0IHdpdGggYDFgLlxuXHQgKi9cblx0QElucHV0KCkgcGFnZSA9IDE7XG5cblx0LyoqXG5cdCAqICBUaGUgbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlLlxuXHQgKi9cblx0QElucHV0KCkgcGFnZVNpemUgPSB0aGlzLl9jb25maWcucGFnZVNpemU7XG5cblx0LyoqXG5cdCAqICBBbiBldmVudCBmaXJlZCB3aGVuIHRoZSBwYWdlIGlzIGNoYW5nZWQuIFdpbGwgZmlyZSBvbmx5IGlmIGNvbGxlY3Rpb24gc2l6ZSBpcyBzZXQgYW5kIGFsbCB2YWx1ZXMgYXJlIHZhbGlkLlxuXHQgKlxuXHQgKiAgRXZlbnQgcGF5bG9hZCBpcyB0aGUgbnVtYmVyIG9mIHRoZSBuZXdseSBzZWxlY3RlZCBwYWdlLlxuXHQgKlxuXHQgKiAgUGFnZSBudW1iZXJzIHN0YXJ0IHdpdGggYDFgLlxuXHQgKi9cblx0QE91dHB1dCgpIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4odHJ1ZSk7XG5cblx0LyoqXG5cdCAqIFRoZSBwYWdpbmF0aW9uIGRpc3BsYXkgc2l6ZS5cblx0ICpcblx0ICogQm9vdHN0cmFwIGN1cnJlbnRseSBzdXBwb3J0cyBzbWFsbCBhbmQgbGFyZ2Ugc2l6ZXMuXG5cdCAqXG5cdCAqIElmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBzdHJpbmcgKGV4LiAnY3VzdG9tJyksIGl0IHdpbGwganVzdCBhZGQgdGhlIGBwYWdpbmF0aW9uLWN1c3RvbWAgY3NzIGNsYXNzXG5cdCAqL1xuXHRASW5wdXQoKSBzaXplID0gdGhpcy5fY29uZmlnLnNpemU7XG5cblx0aGFzUHJldmlvdXMoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZSA+IDE7XG5cdH1cblxuXHRoYXNOZXh0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnBhZ2UgPCB0aGlzLnBhZ2VDb3VudDtcblx0fVxuXG5cdG5leHREaXNhYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIXRoaXMuaGFzTmV4dCgpIHx8IHRoaXMuZGlzYWJsZWQ7XG5cdH1cblxuXHRwcmV2aW91c0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhdGhpcy5oYXNQcmV2aW91cygpIHx8IHRoaXMuZGlzYWJsZWQ7XG5cdH1cblxuXHRzZWxlY3RQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuX3VwZGF0ZVBhZ2VzKHBhZ2VOdW1iZXIpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHRoaXMuX3VwZGF0ZVBhZ2VzKHRoaXMucGFnZSk7XG5cdH1cblxuXHRpc0VsbGlwc2lzKHBhZ2VOdW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gcGFnZU51bWJlciA9PT0gLTE7XG5cdH1cblxuXHQvKipcblx0ICogQXBwZW5kcyBlbGxpcHNlcyBhbmQgZmlyc3QvbGFzdCBwYWdlIG51bWJlciB0byB0aGUgZGlzcGxheWVkIHBhZ2VzXG5cdCAqL1xuXHRwcml2YXRlIF9hcHBseUVsbGlwc2VzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG5cdFx0aWYgKHRoaXMuZWxsaXBzZXMpIHtcblx0XHRcdGlmIChzdGFydCA+IDApIHtcblx0XHRcdFx0Ly8gVGhlIGZpcnN0IHBhZ2Ugd2lsbCBhbHdheXMgYmUgaW5jbHVkZWQuIElmIHRoZSBkaXNwbGF5ZWQgcmFuZ2Vcblx0XHRcdFx0Ly8gc3RhcnRzIGFmdGVyIHRoZSB0aGlyZCBwYWdlLCB0aGVuIGFkZCBlbGxpcHNpcy4gQnV0IGlmIHRoZSByYW5nZVxuXHRcdFx0XHQvLyBzdGFydHMgb24gdGhlIHRoaXJkIHBhZ2UsIHRoZW4gYWRkIHRoZSBzZWNvbmQgcGFnZSBpbnN0ZWFkIG9mXG5cdFx0XHRcdC8vIGFuIGVsbGlwc2lzLCBiZWNhdXNlIHRoZSBlbGxpcHNpcyB3b3VsZCBvbmx5IGhpZGUgYSBzaW5nbGUgcGFnZS5cblx0XHRcdFx0aWYgKHN0YXJ0ID4gMikge1xuXHRcdFx0XHRcdHRoaXMucGFnZXMudW5zaGlmdCgtMSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RhcnQgPT09IDIpIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2VzLnVuc2hpZnQoMik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5wYWdlcy51bnNoaWZ0KDEpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVuZCA8IHRoaXMucGFnZUNvdW50KSB7XG5cdFx0XHRcdC8vIFRoZSBsYXN0IHBhZ2Ugd2lsbCBhbHdheXMgYmUgaW5jbHVkZWQuIElmIHRoZSBkaXNwbGF5ZWQgcmFuZ2Vcblx0XHRcdFx0Ly8gZW5kcyBiZWZvcmUgdGhlIHRoaXJkLWxhc3QgcGFnZSwgdGhlbiBhZGQgZWxsaXBzaXMuIEJ1dCBpZiB0aGUgcmFuZ2Vcblx0XHRcdFx0Ly8gZW5kcyBvbiB0aGlyZC1sYXN0IHBhZ2UsIHRoZW4gYWRkIHRoZSBzZWNvbmQtbGFzdCBwYWdlIGluc3RlYWQgb2Zcblx0XHRcdFx0Ly8gYW4gZWxsaXBzaXMsIGJlY2F1c2UgdGhlIGVsbGlwc2lzIHdvdWxkIG9ubHkgaGlkZSBhIHNpbmdsZSBwYWdlLlxuXHRcdFx0XHRpZiAoZW5kIDwgdGhpcy5wYWdlQ291bnQgLSAyKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdlcy5wdXNoKC0xKTtcblx0XHRcdFx0fSBlbHNlIGlmIChlbmQgPT09IHRoaXMucGFnZUNvdW50IC0gMikge1xuXHRcdFx0XHRcdHRoaXMucGFnZXMucHVzaCh0aGlzLnBhZ2VDb3VudCAtIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucGFnZXMucHVzaCh0aGlzLnBhZ2VDb3VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJvdGF0ZXMgcGFnZSBudW1iZXJzIGJhc2VkIG9uIG1heFNpemUgaXRlbXMgdmlzaWJsZS5cblx0ICogQ3VycmVudGx5IHNlbGVjdGVkIHBhZ2Ugc3RheXMgaW4gdGhlIG1pZGRsZTpcblx0ICpcblx0ICogRXguIGZvciBzZWxlY3RlZCBwYWdlID0gNjpcblx0ICogWzUsKjYqLDddIGZvciBtYXhTaXplID0gM1xuXHQgKiBbNCw1LCo2Kiw3XSBmb3IgbWF4U2l6ZSA9IDRcblx0ICovXG5cdHByaXZhdGUgX2FwcGx5Um90YXRpb24oKTogW251bWJlciwgbnVtYmVyXSB7XG5cdFx0bGV0IHN0YXJ0ID0gMDtcblx0XHRsZXQgZW5kID0gdGhpcy5wYWdlQ291bnQ7XG5cdFx0bGV0IGxlZnRPZmZzZXQgPSBNYXRoLmZsb29yKHRoaXMubWF4U2l6ZSAvIDIpO1xuXHRcdGxldCByaWdodE9mZnNldCA9IHRoaXMubWF4U2l6ZSAlIDIgPT09IDAgPyBsZWZ0T2Zmc2V0IC0gMSA6IGxlZnRPZmZzZXQ7XG5cblx0XHRpZiAodGhpcy5wYWdlIDw9IGxlZnRPZmZzZXQpIHtcblx0XHRcdC8vIHZlcnkgYmVnaW5uaW5nLCBubyByb3RhdGlvbiAtPiBbMC4ubWF4U2l6ZV1cblx0XHRcdGVuZCA9IHRoaXMubWF4U2l6ZTtcblx0XHR9IGVsc2UgaWYgKHRoaXMucGFnZUNvdW50IC0gdGhpcy5wYWdlIDwgbGVmdE9mZnNldCkge1xuXHRcdFx0Ly8gdmVyeSBlbmQsIG5vIHJvdGF0aW9uIC0+IFtsZW4tbWF4U2l6ZS4ubGVuXVxuXHRcdFx0c3RhcnQgPSB0aGlzLnBhZ2VDb3VudCAtIHRoaXMubWF4U2l6ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcm90YXRlXG5cdFx0XHRzdGFydCA9IHRoaXMucGFnZSAtIGxlZnRPZmZzZXQgLSAxO1xuXHRcdFx0ZW5kID0gdGhpcy5wYWdlICsgcmlnaHRPZmZzZXQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtzdGFydCwgZW5kXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQYWdpbmF0ZXMgcGFnZSBudW1iZXJzIGJhc2VkIG9uIG1heFNpemUgaXRlbXMgcGVyIHBhZ2UuXG5cdCAqL1xuXHRwcml2YXRlIF9hcHBseVBhZ2luYXRpb24oKTogW251bWJlciwgbnVtYmVyXSB7XG5cdFx0bGV0IHBhZ2UgPSBNYXRoLmNlaWwodGhpcy5wYWdlIC8gdGhpcy5tYXhTaXplKSAtIDE7XG5cdFx0bGV0IHN0YXJ0ID0gcGFnZSAqIHRoaXMubWF4U2l6ZTtcblx0XHRsZXQgZW5kID0gc3RhcnQgKyB0aGlzLm1heFNpemU7XG5cblx0XHRyZXR1cm4gW3N0YXJ0LCBlbmRdO1xuXHR9XG5cblx0cHJpdmF0ZSBfc2V0UGFnZUluUmFuZ2UobmV3UGFnZU5vKSB7XG5cdFx0Y29uc3QgcHJldlBhZ2VObyA9IHRoaXMucGFnZTtcblx0XHR0aGlzLnBhZ2UgPSBnZXRWYWx1ZUluUmFuZ2UobmV3UGFnZU5vLCB0aGlzLnBhZ2VDb3VudCwgMSk7XG5cblx0XHRpZiAodGhpcy5wYWdlICE9PSBwcmV2UGFnZU5vICYmIGlzTnVtYmVyKHRoaXMuY29sbGVjdGlvblNpemUpKSB7XG5cdFx0XHR0aGlzLnBhZ2VDaGFuZ2UuZW1pdCh0aGlzLnBhZ2UpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgX3VwZGF0ZVBhZ2VzKG5ld1BhZ2U6IG51bWJlcikge1xuXHRcdHRoaXMucGFnZUNvdW50ID0gTWF0aC5jZWlsKHRoaXMuY29sbGVjdGlvblNpemUgLyB0aGlzLnBhZ2VTaXplKTtcblxuXHRcdGlmICghaXNOdW1iZXIodGhpcy5wYWdlQ291bnQpKSB7XG5cdFx0XHR0aGlzLnBhZ2VDb3VudCA9IDA7XG5cdFx0fVxuXG5cdFx0Ly8gZmlsbC1pbiBtb2RlbCBuZWVkZWQgdG8gcmVuZGVyIHBhZ2VzXG5cdFx0dGhpcy5wYWdlcy5sZW5ndGggPSAwO1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMucGFnZUNvdW50OyBpKyspIHtcblx0XHRcdHRoaXMucGFnZXMucHVzaChpKTtcblx0XHR9XG5cblx0XHQvLyBzZXQgcGFnZSB3aXRoaW4gMS4ubWF4IHJhbmdlXG5cdFx0dGhpcy5fc2V0UGFnZUluUmFuZ2UobmV3UGFnZSk7XG5cblx0XHQvLyBhcHBseSBtYXhTaXplIGlmIG5lY2Vzc2FyeVxuXHRcdGlmICh0aGlzLm1heFNpemUgPiAwICYmIHRoaXMucGFnZUNvdW50ID4gdGhpcy5tYXhTaXplKSB7XG5cdFx0XHRsZXQgc3RhcnQgPSAwO1xuXHRcdFx0bGV0IGVuZCA9IHRoaXMucGFnZUNvdW50O1xuXG5cdFx0XHQvLyBlaXRoZXIgcGFnaW5hdGluZyBvciByb3RhdGluZyBwYWdlIG51bWJlcnNcblx0XHRcdGlmICh0aGlzLnJvdGF0ZSkge1xuXHRcdFx0XHRbc3RhcnQsIGVuZF0gPSB0aGlzLl9hcHBseVJvdGF0aW9uKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRbc3RhcnQsIGVuZF0gPSB0aGlzLl9hcHBseVBhZ2luYXRpb24oKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wYWdlcyA9IHRoaXMucGFnZXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cblx0XHRcdC8vIGFkZGluZyBlbGxpcHNlc1xuXHRcdFx0dGhpcy5fYXBwbHlFbGxpcHNlcyhzdGFydCwgZW5kKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==