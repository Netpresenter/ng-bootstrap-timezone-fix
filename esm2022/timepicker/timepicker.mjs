import { Component, forwardRef, Input, ViewEncapsulation, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isInteger, isNumber, padNumber, toInteger } from '../util/util';
import { NgbTime } from './ngb-time';
import * as i0 from "@angular/core";
import * as i1 from "./timepicker-config";
import * as i2 from "./ngb-time-adapter";
import * as i3 from "./timepicker-i18n";
const FILTER_REGEX = /[^0-9]/g;
/**
 * A directive that helps with wth picking hours, minutes and seconds.
 */
export class NgbTimepicker {
    /**
     * The number of hours to add/subtract when clicking hour spinners.
     */
    set hourStep(step) {
        this._hourStep = isInteger(step) ? step : this._config.hourStep;
    }
    get hourStep() {
        return this._hourStep;
    }
    /**
     * The number of minutes to add/subtract when clicking minute spinners.
     */
    set minuteStep(step) {
        this._minuteStep = isInteger(step) ? step : this._config.minuteStep;
    }
    get minuteStep() {
        return this._minuteStep;
    }
    /**
     * The number of seconds to add/subtract when clicking second spinners.
     */
    set secondStep(step) {
        this._secondStep = isInteger(step) ? step : this._config.secondStep;
    }
    get secondStep() {
        return this._secondStep;
    }
    constructor(_config, _ngbTimeAdapter, _cd, i18n) {
        this._config = _config;
        this._ngbTimeAdapter = _ngbTimeAdapter;
        this._cd = _cd;
        this.i18n = i18n;
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this.meridian = _config.meridian;
        this.spinners = _config.spinners;
        this.seconds = _config.seconds;
        this.hourStep = _config.hourStep;
        this.minuteStep = _config.minuteStep;
        this.secondStep = _config.secondStep;
        this.disabled = _config.disabled;
        this.readonlyInputs = _config.readonlyInputs;
        this.size = _config.size;
    }
    writeValue(value) {
        const structValue = this._ngbTimeAdapter.fromModel(value);
        this.model = structValue ? new NgbTime(structValue.hour, structValue.minute, structValue.second) : new NgbTime();
        if (!this.seconds && (!structValue || !isNumber(structValue.second))) {
            this.model.second = 0;
        }
        this._cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * Increments the hours by the given step.
     */
    changeHour(step) {
        this.model?.changeHour(step);
        this.propagateModelChange();
    }
    /**
     * Increments the minutes by the given step.
     */
    changeMinute(step) {
        this.model?.changeMinute(step);
        this.propagateModelChange();
    }
    /**
     * Increments the seconds by the given step.
     */
    changeSecond(step) {
        this.model?.changeSecond(step);
        this.propagateModelChange();
    }
    /**
     * Update hours with the new value.
     */
    updateHour(newVal) {
        const isPM = this.model ? this.model.hour >= 12 : false;
        const enteredHour = toInteger(newVal);
        if (this.meridian && ((isPM && enteredHour < 12) || (!isPM && enteredHour === 12))) {
            this.model?.updateHour(enteredHour + 12);
        }
        else {
            this.model?.updateHour(enteredHour);
        }
        this.propagateModelChange();
    }
    /**
     * Update minutes with the new value.
     */
    updateMinute(newVal) {
        this.model?.updateMinute(toInteger(newVal));
        this.propagateModelChange();
    }
    /**
     * Update seconds with the new value.
     */
    updateSecond(newVal) {
        this.model?.updateSecond(toInteger(newVal));
        this.propagateModelChange();
    }
    toggleMeridian() {
        if (this.meridian) {
            this.changeHour(12);
        }
    }
    formatInput(input) {
        input.value = input.value.replace(FILTER_REGEX, '');
    }
    formatHour(value) {
        if (isNumber(value)) {
            if (this.meridian) {
                return padNumber(value % 12 === 0 ? 12 : value % 12);
            }
            else {
                return padNumber(value % 24);
            }
        }
        else {
            return padNumber(NaN);
        }
    }
    formatMinSec(value) {
        return padNumber(isNumber(value) ? value : NaN);
    }
    handleBlur() {
        this.onTouched();
    }
    get isSmallSize() {
        return this.size === 'small';
    }
    get isLargeSize() {
        return this.size === 'large';
    }
    ngOnChanges(changes) {
        if (changes['seconds'] && !this.seconds && this.model && !isNumber(this.model.second)) {
            this.model.second = 0;
            this.propagateModelChange(false);
        }
    }
    propagateModelChange(touched = true) {
        if (touched) {
            this.onTouched();
        }
        if (this.model?.isValid(this.seconds)) {
            this.onChange(this._ngbTimeAdapter.toModel({ hour: this.model.hour, minute: this.model.minute, second: this.model.second }));
        }
        else {
            this.onChange(this._ngbTimeAdapter.toModel(null));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbTimepicker, deps: [{ token: i1.NgbTimepickerConfig }, { token: i2.NgbTimeAdapter }, { token: i0.ChangeDetectorRef }, { token: i3.NgbTimepickerI18n }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.2", type: NgbTimepicker, isStandalone: true, selector: "ngb-timepicker", inputs: { meridian: "meridian", spinners: "spinners", seconds: "seconds", hourStep: "hourStep", minuteStep: "minuteStep", secondStep: "secondStep", readonlyInputs: "readonlyInputs", size: "size" }, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbTimepicker), multi: true }], exportAs: ["ngbTimepicker"], usesOnChanges: true, ngImport: i0, template: `
		<fieldset [disabled]="disabled" [class.disabled]="disabled">
			<div class="ngb-tp">
				<div class="ngb-tp-input-container ngb-tp-hour">
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeHour(hourStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.increment-hours">Increment hours</span>
						</button>
					}
					<input
						type="text"
						class="ngb-tp-input form-control"
						[class.form-control-sm]="isSmallSize"
						[class.form-control-lg]="isLargeSize"
						maxlength="2"
						inputmode="numeric"
						placeholder="HH"
						i18n-placeholder="@@ngb.timepicker.HH"
						[value]="formatHour(model?.hour)"
						(change)="updateHour($any($event).target.value)"
						[readOnly]="readonlyInputs"
						[disabled]="disabled"
						aria-label="Hours"
						i18n-aria-label="@@ngb.timepicker.hours"
						(blur)="handleBlur()"
						(input)="formatInput($any($event).target)"
						(keydown.ArrowUp)="changeHour(hourStep); $event.preventDefault()"
						(keydown.ArrowDown)="changeHour(-hourStep); $event.preventDefault()"
					/>
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeHour(-hourStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron bottom"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-hours">Decrement hours</span>
						</button>
					}
				</div>
				<div class="ngb-tp-spacer">:</div>
				<div class="ngb-tp-input-container ngb-tp-minute">
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeMinute(minuteStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.increment-minutes">Increment minutes</span>
						</button>
					}
					<input
						type="text"
						class="ngb-tp-input form-control"
						[class.form-control-sm]="isSmallSize"
						[class.form-control-lg]="isLargeSize"
						maxlength="2"
						inputmode="numeric"
						placeholder="MM"
						i18n-placeholder="@@ngb.timepicker.MM"
						[value]="formatMinSec(model?.minute)"
						(change)="updateMinute($any($event).target.value)"
						[readOnly]="readonlyInputs"
						[disabled]="disabled"
						aria-label="Minutes"
						i18n-aria-label="@@ngb.timepicker.minutes"
						(blur)="handleBlur()"
						(input)="formatInput($any($event).target)"
						(keydown.ArrowUp)="changeMinute(minuteStep); $event.preventDefault()"
						(keydown.ArrowDown)="changeMinute(-minuteStep); $event.preventDefault()"
					/>
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeMinute(-minuteStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron bottom"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-minutes">Decrement minutes</span>
						</button>
					}
				</div>
				@if (seconds) {
					<div class="ngb-tp-spacer">:</div>
					<div class="ngb-tp-input-container ngb-tp-second">
						@if (spinners) {
							<button
								tabindex="-1"
								type="button"
								(click)="changeSecond(secondStep)"
								class="btn btn-link"
								[class.btn-sm]="isSmallSize"
								[class.btn-lg]="isLargeSize"
								[class.disabled]="disabled"
								[disabled]="disabled"
							>
								<span class="chevron ngb-tp-chevron"></span>
								<span class="visually-hidden" i18n="@@ngb.timepicker.increment-seconds">Increment seconds</span>
							</button>
						}
						<input
							type="text"
							class="ngb-tp-input form-control"
							[class.form-control-sm]="isSmallSize"
							[class.form-control-lg]="isLargeSize"
							maxlength="2"
							inputmode="numeric"
							placeholder="SS"
							i18n-placeholder="@@ngb.timepicker.SS"
							[value]="formatMinSec(model?.second)"
							(change)="updateSecond($any($event).target.value)"
							[readOnly]="readonlyInputs"
							[disabled]="disabled"
							aria-label="Seconds"
							i18n-aria-label="@@ngb.timepicker.seconds"
							(blur)="handleBlur()"
							(input)="formatInput($any($event).target)"
							(keydown.ArrowUp)="changeSecond(secondStep); $event.preventDefault()"
							(keydown.ArrowDown)="changeSecond(-secondStep); $event.preventDefault()"
						/>
						@if (spinners) {
							<button
								tabindex="-1"
								type="button"
								(click)="changeSecond(-secondStep)"
								class="btn btn-link"
								[class.btn-sm]="isSmallSize"
								[class.btn-lg]="isLargeSize"
								[class.disabled]="disabled"
								[disabled]="disabled"
							>
								<span class="chevron ngb-tp-chevron bottom"></span>
								<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-seconds">Decrement seconds</span>
							</button>
						}
					</div>
				}
				@if (meridian) {
					<div class="ngb-tp-spacer"></div>
					<div class="ngb-tp-meridian">
						<button
							type="button"
							class="btn btn-outline-primary"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[disabled]="disabled"
							[class.disabled]="disabled"
							(click)="toggleMeridian()"
						>
							@if (model && model.hour >= 12) {
								<ng-container i18n="@@ngb.timepicker.PM">{{ i18n.getAfternoonPeriod() }}</ng-container>
							} @else {
								<ng-container>{{ i18n.getMorningPeriod() }}</ng-container>
							}
						</button>
					</div>
				}
			</div>
		</fieldset>
	`, isInline: true, styles: ["ngb-timepicker{font-size:1rem}.ngb-tp{display:flex;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron:before{border-style:solid;border-width:.29em .29em 0 0;content:\"\";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-minute,.ngb-tp-second,.ngb-tp-meridian{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}\n"], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.2", ngImport: i0, type: NgbTimepicker, decorators: [{
            type: Component,
            args: [{ exportAs: 'ngbTimepicker', selector: 'ngb-timepicker', standalone: true, encapsulation: ViewEncapsulation.None, template: `
		<fieldset [disabled]="disabled" [class.disabled]="disabled">
			<div class="ngb-tp">
				<div class="ngb-tp-input-container ngb-tp-hour">
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeHour(hourStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.increment-hours">Increment hours</span>
						</button>
					}
					<input
						type="text"
						class="ngb-tp-input form-control"
						[class.form-control-sm]="isSmallSize"
						[class.form-control-lg]="isLargeSize"
						maxlength="2"
						inputmode="numeric"
						placeholder="HH"
						i18n-placeholder="@@ngb.timepicker.HH"
						[value]="formatHour(model?.hour)"
						(change)="updateHour($any($event).target.value)"
						[readOnly]="readonlyInputs"
						[disabled]="disabled"
						aria-label="Hours"
						i18n-aria-label="@@ngb.timepicker.hours"
						(blur)="handleBlur()"
						(input)="formatInput($any($event).target)"
						(keydown.ArrowUp)="changeHour(hourStep); $event.preventDefault()"
						(keydown.ArrowDown)="changeHour(-hourStep); $event.preventDefault()"
					/>
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeHour(-hourStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron bottom"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-hours">Decrement hours</span>
						</button>
					}
				</div>
				<div class="ngb-tp-spacer">:</div>
				<div class="ngb-tp-input-container ngb-tp-minute">
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeMinute(minuteStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.increment-minutes">Increment minutes</span>
						</button>
					}
					<input
						type="text"
						class="ngb-tp-input form-control"
						[class.form-control-sm]="isSmallSize"
						[class.form-control-lg]="isLargeSize"
						maxlength="2"
						inputmode="numeric"
						placeholder="MM"
						i18n-placeholder="@@ngb.timepicker.MM"
						[value]="formatMinSec(model?.minute)"
						(change)="updateMinute($any($event).target.value)"
						[readOnly]="readonlyInputs"
						[disabled]="disabled"
						aria-label="Minutes"
						i18n-aria-label="@@ngb.timepicker.minutes"
						(blur)="handleBlur()"
						(input)="formatInput($any($event).target)"
						(keydown.ArrowUp)="changeMinute(minuteStep); $event.preventDefault()"
						(keydown.ArrowDown)="changeMinute(-minuteStep); $event.preventDefault()"
					/>
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeMinute(-minuteStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron bottom"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-minutes">Decrement minutes</span>
						</button>
					}
				</div>
				@if (seconds) {
					<div class="ngb-tp-spacer">:</div>
					<div class="ngb-tp-input-container ngb-tp-second">
						@if (spinners) {
							<button
								tabindex="-1"
								type="button"
								(click)="changeSecond(secondStep)"
								class="btn btn-link"
								[class.btn-sm]="isSmallSize"
								[class.btn-lg]="isLargeSize"
								[class.disabled]="disabled"
								[disabled]="disabled"
							>
								<span class="chevron ngb-tp-chevron"></span>
								<span class="visually-hidden" i18n="@@ngb.timepicker.increment-seconds">Increment seconds</span>
							</button>
						}
						<input
							type="text"
							class="ngb-tp-input form-control"
							[class.form-control-sm]="isSmallSize"
							[class.form-control-lg]="isLargeSize"
							maxlength="2"
							inputmode="numeric"
							placeholder="SS"
							i18n-placeholder="@@ngb.timepicker.SS"
							[value]="formatMinSec(model?.second)"
							(change)="updateSecond($any($event).target.value)"
							[readOnly]="readonlyInputs"
							[disabled]="disabled"
							aria-label="Seconds"
							i18n-aria-label="@@ngb.timepicker.seconds"
							(blur)="handleBlur()"
							(input)="formatInput($any($event).target)"
							(keydown.ArrowUp)="changeSecond(secondStep); $event.preventDefault()"
							(keydown.ArrowDown)="changeSecond(-secondStep); $event.preventDefault()"
						/>
						@if (spinners) {
							<button
								tabindex="-1"
								type="button"
								(click)="changeSecond(-secondStep)"
								class="btn btn-link"
								[class.btn-sm]="isSmallSize"
								[class.btn-lg]="isLargeSize"
								[class.disabled]="disabled"
								[disabled]="disabled"
							>
								<span class="chevron ngb-tp-chevron bottom"></span>
								<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-seconds">Decrement seconds</span>
							</button>
						}
					</div>
				}
				@if (meridian) {
					<div class="ngb-tp-spacer"></div>
					<div class="ngb-tp-meridian">
						<button
							type="button"
							class="btn btn-outline-primary"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[disabled]="disabled"
							[class.disabled]="disabled"
							(click)="toggleMeridian()"
						>
							@if (model && model.hour >= 12) {
								<ng-container i18n="@@ngb.timepicker.PM">{{ i18n.getAfternoonPeriod() }}</ng-container>
							} @else {
								<ng-container>{{ i18n.getMorningPeriod() }}</ng-container>
							}
						</button>
					</div>
				}
			</div>
		</fieldset>
	`, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgbTimepicker), multi: true }], styles: ["ngb-timepicker{font-size:1rem}.ngb-tp{display:flex;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron:before{border-style:solid;border-width:.29em .29em 0 0;content:\"\";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-minute,.ngb-tp-second,.ngb-tp-meridian{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}\n"] }]
        }], ctorParameters: () => [{ type: i1.NgbTimepickerConfig }, { type: i2.NgbTimeAdapter }, { type: i0.ChangeDetectorRef }, { type: i3.NgbTimepickerI18n }], propDecorators: { meridian: [{
                type: Input
            }], spinners: [{
                type: Input
            }], seconds: [{
                type: Input
            }], hourStep: [{
                type: Input
            }], minuteStep: [{
                type: Input
            }], secondStep: [{
                type: Input
            }], readonlyInputs: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90aW1lcGlja2VyL3RpbWVwaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVOLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLGlCQUFpQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7OztBQUtyQyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUM7QUFFL0I7O0dBRUc7QUFtTUgsTUFBTSxPQUFPLGFBQWE7SUF5QnpCOztPQUVHO0lBQ0gsSUFDSSxRQUFRLENBQUMsSUFBWTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNqRSxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQ0ksVUFBVSxDQUFDLElBQVk7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDckUsQ0FBQztJQUVELElBQUksVUFBVTtRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUNJLFVBQVUsQ0FBQyxJQUFZO1FBQzFC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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF5TFQ7OzJGQUdXLGFBQWE7a0JBbE16QixTQUFTOytCQUNDLGVBQWUsWUFDZixnQkFBZ0IsY0FDZCxJQUFJLGlCQUNELGlCQUFpQixDQUFDLElBQUksWUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeUxULGFBQ1UsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7cUxBZTdGLFFBQVE7c0JBQWhCLEtBQUs7Z0JBS0csUUFBUTtzQkFBaEIsS0FBSztnQkFLRyxPQUFPO3NCQUFmLEtBQUs7Z0JBTUYsUUFBUTtzQkFEWCxLQUFLO2dCQWFGLFVBQVU7c0JBRGIsS0FBSztnQkFhRixVQUFVO3NCQURiLEtBQUs7Z0JBWUcsY0FBYztzQkFBdEIsS0FBSztnQkFLRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRmb3J3YXJkUmVmLFxuXHRJbnB1dCxcblx0T25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGlzSW50ZWdlciwgaXNOdW1iZXIsIHBhZE51bWJlciwgdG9JbnRlZ2VyIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IE5nYlRpbWUgfSBmcm9tICcuL25nYi10aW1lJztcbmltcG9ydCB7IE5nYlRpbWVwaWNrZXJDb25maWcgfSBmcm9tICcuL3RpbWVwaWNrZXItY29uZmlnJztcbmltcG9ydCB7IE5nYlRpbWVBZGFwdGVyIH0gZnJvbSAnLi9uZ2ItdGltZS1hZGFwdGVyJztcbmltcG9ydCB7IE5nYlRpbWVwaWNrZXJJMThuIH0gZnJvbSAnLi90aW1lcGlja2VyLWkxOG4nO1xuXG5jb25zdCBGSUxURVJfUkVHRVggPSAvW14wLTldL2c7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBoZWxwcyB3aXRoIHd0aCBwaWNraW5nIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzLlxuICovXG5AQ29tcG9uZW50KHtcblx0ZXhwb3J0QXM6ICduZ2JUaW1lcGlja2VyJyxcblx0c2VsZWN0b3I6ICduZ2ItdGltZXBpY2tlcicsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHN0eWxlVXJsOiAnLi90aW1lcGlja2VyLnNjc3MnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxmaWVsZHNldCBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJuZ2ItdHBcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5nYi10cC1pbnB1dC1jb250YWluZXIgbmdiLXRwLWhvdXJcIj5cblx0XHRcdFx0XHRAaWYgKHNwaW5uZXJzKSB7XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdHRhYmluZGV4PVwiLTFcIlxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cImNoYW5nZUhvdXIoaG91clN0ZXApXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLWxpbmtcIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3MuYnRuLXNtXT1cImlzU21hbGxTaXplXCJcblx0XHRcdFx0XHRcdFx0W2NsYXNzLmJ0bi1sZ109XCJpc0xhcmdlU2l6ZVwiXG5cdFx0XHRcdFx0XHRcdFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHRcdFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2hldnJvbiBuZ2ItdHAtY2hldnJvblwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIiBpMThuPVwiQEBuZ2IudGltZXBpY2tlci5pbmNyZW1lbnQtaG91cnNcIj5JbmNyZW1lbnQgaG91cnM8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cIm5nYi10cC1pbnB1dCBmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0W2NsYXNzLmZvcm0tY29udHJvbC1zbV09XCJpc1NtYWxsU2l6ZVwiXG5cdFx0XHRcdFx0XHRbY2xhc3MuZm9ybS1jb250cm9sLWxnXT1cImlzTGFyZ2VTaXplXCJcblx0XHRcdFx0XHRcdG1heGxlbmd0aD1cIjJcIlxuXHRcdFx0XHRcdFx0aW5wdXRtb2RlPVwibnVtZXJpY1wiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkhIXCJcblx0XHRcdFx0XHRcdGkxOG4tcGxhY2Vob2xkZXI9XCJAQG5nYi50aW1lcGlja2VyLkhIXCJcblx0XHRcdFx0XHRcdFt2YWx1ZV09XCJmb3JtYXRIb3VyKG1vZGVsPy5ob3VyKVwiXG5cdFx0XHRcdFx0XHQoY2hhbmdlKT1cInVwZGF0ZUhvdXIoJGFueSgkZXZlbnQpLnRhcmdldC52YWx1ZSlcIlxuXHRcdFx0XHRcdFx0W3JlYWRPbmx5XT1cInJlYWRvbmx5SW5wdXRzXCJcblx0XHRcdFx0XHRcdFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiSG91cnNcIlxuXHRcdFx0XHRcdFx0aTE4bi1hcmlhLWxhYmVsPVwiQEBuZ2IudGltZXBpY2tlci5ob3Vyc1wiXG5cdFx0XHRcdFx0XHQoYmx1cik9XCJoYW5kbGVCbHVyKClcIlxuXHRcdFx0XHRcdFx0KGlucHV0KT1cImZvcm1hdElucHV0KCRhbnkoJGV2ZW50KS50YXJnZXQpXCJcblx0XHRcdFx0XHRcdChrZXlkb3duLkFycm93VXApPVwiY2hhbmdlSG91cihob3VyU3RlcCk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0XHRcdChrZXlkb3duLkFycm93RG93bik9XCJjaGFuZ2VIb3VyKC1ob3VyU3RlcCk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdEBpZiAoc3Bpbm5lcnMpIHtcblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0dGFiaW5kZXg9XCItMVwiXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHQoY2xpY2spPVwiY2hhbmdlSG91cigtaG91clN0ZXApXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLWxpbmtcIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3MuYnRuLXNtXT1cImlzU21hbGxTaXplXCJcblx0XHRcdFx0XHRcdFx0W2NsYXNzLmJ0bi1sZ109XCJpc0xhcmdlU2l6ZVwiXG5cdFx0XHRcdFx0XHRcdFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHRcdFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2hldnJvbiBuZ2ItdHAtY2hldnJvbiBib3R0b21cIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCIgaTE4bj1cIkBAbmdiLnRpbWVwaWNrZXIuZGVjcmVtZW50LWhvdXJzXCI+RGVjcmVtZW50IGhvdXJzPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5nYi10cC1zcGFjZXJcIj46PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuZ2ItdHAtaW5wdXQtY29udGFpbmVyIG5nYi10cC1taW51dGVcIj5cblx0XHRcdFx0XHRAaWYgKHNwaW5uZXJzKSB7XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdHRhYmluZGV4PVwiLTFcIlxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cImNoYW5nZU1pbnV0ZShtaW51dGVTdGVwKVwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiYnRuIGJ0bi1saW5rXCJcblx0XHRcdFx0XHRcdFx0W2NsYXNzLmJ0bi1zbV09XCJpc1NtYWxsU2l6ZVwiXG5cdFx0XHRcdFx0XHRcdFtjbGFzcy5idG4tbGddPVwiaXNMYXJnZVNpemVcIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdFx0XHRbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNoZXZyb24gbmdiLXRwLWNoZXZyb25cIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCIgaTE4bj1cIkBAbmdiLnRpbWVwaWNrZXIuaW5jcmVtZW50LW1pbnV0ZXNcIj5JbmNyZW1lbnQgbWludXRlczwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGNsYXNzPVwibmdiLXRwLWlucHV0IGZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRbY2xhc3MuZm9ybS1jb250cm9sLXNtXT1cImlzU21hbGxTaXplXCJcblx0XHRcdFx0XHRcdFtjbGFzcy5mb3JtLWNvbnRyb2wtbGddPVwiaXNMYXJnZVNpemVcIlxuXHRcdFx0XHRcdFx0bWF4bGVuZ3RoPVwiMlwiXG5cdFx0XHRcdFx0XHRpbnB1dG1vZGU9XCJudW1lcmljXCJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiTU1cIlxuXHRcdFx0XHRcdFx0aTE4bi1wbGFjZWhvbGRlcj1cIkBAbmdiLnRpbWVwaWNrZXIuTU1cIlxuXHRcdFx0XHRcdFx0W3ZhbHVlXT1cImZvcm1hdE1pblNlYyhtb2RlbD8ubWludXRlKVwiXG5cdFx0XHRcdFx0XHQoY2hhbmdlKT1cInVwZGF0ZU1pbnV0ZSgkYW55KCRldmVudCkudGFyZ2V0LnZhbHVlKVwiXG5cdFx0XHRcdFx0XHRbcmVhZE9ubHldPVwicmVhZG9ubHlJbnB1dHNcIlxuXHRcdFx0XHRcdFx0W2Rpc2FibGVkXT1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9XCJNaW51dGVzXCJcblx0XHRcdFx0XHRcdGkxOG4tYXJpYS1sYWJlbD1cIkBAbmdiLnRpbWVwaWNrZXIubWludXRlc1wiXG5cdFx0XHRcdFx0XHQoYmx1cik9XCJoYW5kbGVCbHVyKClcIlxuXHRcdFx0XHRcdFx0KGlucHV0KT1cImZvcm1hdElucHV0KCRhbnkoJGV2ZW50KS50YXJnZXQpXCJcblx0XHRcdFx0XHRcdChrZXlkb3duLkFycm93VXApPVwiY2hhbmdlTWludXRlKG1pbnV0ZVN0ZXApOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG5cdFx0XHRcdFx0XHQoa2V5ZG93bi5BcnJvd0Rvd24pPVwiY2hhbmdlTWludXRlKC1taW51dGVTdGVwKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0QGlmIChzcGlubmVycykge1xuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0YWJpbmRleD1cIi0xXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdChjbGljayk9XCJjaGFuZ2VNaW51dGUoLW1pbnV0ZVN0ZXApXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLWxpbmtcIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3MuYnRuLXNtXT1cImlzU21hbGxTaXplXCJcblx0XHRcdFx0XHRcdFx0W2NsYXNzLmJ0bi1sZ109XCJpc0xhcmdlU2l6ZVwiXG5cdFx0XHRcdFx0XHRcdFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHRcdFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiY2hldnJvbiBuZ2ItdHAtY2hldnJvbiBib3R0b21cIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCIgaTE4bj1cIkBAbmdiLnRpbWVwaWNrZXIuZGVjcmVtZW50LW1pbnV0ZXNcIj5EZWNyZW1lbnQgbWludXRlczwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdEBpZiAoc2Vjb25kcykge1xuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJuZ2ItdHAtc3BhY2VyXCI+OjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJuZ2ItdHAtaW5wdXQtY29udGFpbmVyIG5nYi10cC1zZWNvbmRcIj5cblx0XHRcdFx0XHRcdEBpZiAoc3Bpbm5lcnMpIHtcblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdHRhYmluZGV4PVwiLTFcIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdChjbGljayk9XCJjaGFuZ2VTZWNvbmQoc2Vjb25kU3RlcClcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiYnRuIGJ0bi1saW5rXCJcblx0XHRcdFx0XHRcdFx0XHRbY2xhc3MuYnRuLXNtXT1cImlzU21hbGxTaXplXCJcblx0XHRcdFx0XHRcdFx0XHRbY2xhc3MuYnRuLWxnXT1cImlzTGFyZ2VTaXplXCJcblx0XHRcdFx0XHRcdFx0XHRbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdFx0XHRcdFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNoZXZyb24gbmdiLXRwLWNoZXZyb25cIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIiBpMThuPVwiQEBuZ2IudGltZXBpY2tlci5pbmNyZW1lbnQtc2Vjb25kc1wiPkluY3JlbWVudCBzZWNvbmRzPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwibmdiLXRwLWlucHV0IGZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFtjbGFzcy5mb3JtLWNvbnRyb2wtc21dPVwiaXNTbWFsbFNpemVcIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3MuZm9ybS1jb250cm9sLWxnXT1cImlzTGFyZ2VTaXplXCJcblx0XHRcdFx0XHRcdFx0bWF4bGVuZ3RoPVwiMlwiXG5cdFx0XHRcdFx0XHRcdGlucHV0bW9kZT1cIm51bWVyaWNcIlxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNTXCJcblx0XHRcdFx0XHRcdFx0aTE4bi1wbGFjZWhvbGRlcj1cIkBAbmdiLnRpbWVwaWNrZXIuU1NcIlxuXHRcdFx0XHRcdFx0XHRbdmFsdWVdPVwiZm9ybWF0TWluU2VjKG1vZGVsPy5zZWNvbmQpXCJcblx0XHRcdFx0XHRcdFx0KGNoYW5nZSk9XCJ1cGRhdGVTZWNvbmQoJGFueSgkZXZlbnQpLnRhcmdldC52YWx1ZSlcIlxuXHRcdFx0XHRcdFx0XHRbcmVhZE9ubHldPVwicmVhZG9ubHlJbnB1dHNcIlxuXHRcdFx0XHRcdFx0XHRbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiU2Vjb25kc1wiXG5cdFx0XHRcdFx0XHRcdGkxOG4tYXJpYS1sYWJlbD1cIkBAbmdiLnRpbWVwaWNrZXIuc2Vjb25kc1wiXG5cdFx0XHRcdFx0XHRcdChibHVyKT1cImhhbmRsZUJsdXIoKVwiXG5cdFx0XHRcdFx0XHRcdChpbnB1dCk9XCJmb3JtYXRJbnB1dCgkYW55KCRldmVudCkudGFyZ2V0KVwiXG5cdFx0XHRcdFx0XHRcdChrZXlkb3duLkFycm93VXApPVwiY2hhbmdlU2Vjb25kKHNlY29uZFN0ZXApOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG5cdFx0XHRcdFx0XHRcdChrZXlkb3duLkFycm93RG93bik9XCJjaGFuZ2VTZWNvbmQoLXNlY29uZFN0ZXApOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0QGlmIChzcGlubmVycykge1xuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0dGFiaW5kZXg9XCItMVwiXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cImNoYW5nZVNlY29uZCgtc2Vjb25kU3RlcClcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiYnRuIGJ0bi1saW5rXCJcblx0XHRcdFx0XHRcdFx0XHRbY2xhc3MuYnRuLXNtXT1cImlzU21hbGxTaXplXCJcblx0XHRcdFx0XHRcdFx0XHRbY2xhc3MuYnRuLWxnXT1cImlzTGFyZ2VTaXplXCJcblx0XHRcdFx0XHRcdFx0XHRbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdFx0XHRcdFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImNoZXZyb24gbmdiLXRwLWNoZXZyb24gYm90dG9tXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCIgaTE4bj1cIkBAbmdiLnRpbWVwaWNrZXIuZGVjcmVtZW50LXNlY29uZHNcIj5EZWNyZW1lbnQgc2Vjb25kczwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0QGlmIChtZXJpZGlhbikge1xuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJuZ2ItdHAtc3BhY2VyXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm5nYi10cC1tZXJpZGlhblwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRcdFtjbGFzcy5idG4tc21dPVwiaXNTbWFsbFNpemVcIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3MuYnRuLWxnXT1cImlzTGFyZ2VTaXplXCJcblx0XHRcdFx0XHRcdFx0W2Rpc2FibGVkXT1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRcdFx0W2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cInRvZ2dsZU1lcmlkaWFuKClcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRAaWYgKG1vZGVsICYmIG1vZGVsLmhvdXIgPj0gMTIpIHtcblx0XHRcdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyIGkxOG49XCJAQG5nYi50aW1lcGlja2VyLlBNXCI+e3sgaTE4bi5nZXRBZnRlcm5vb25QZXJpb2QoKSB9fTwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdFx0XHR9IEBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyPnt7IGkxOG4uZ2V0TW9ybmluZ1BlcmlvZCgpIH19PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2ZpZWxkc2V0PlxuXHRgLFxuXHRwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ2JUaW1lcGlja2VyKSwgbXVsdGk6IHRydWUgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5nYlRpbWVwaWNrZXIgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcblx0c3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpemU6IHN0cmluZztcblxuXHRkaXNhYmxlZDogYm9vbGVhbjtcblx0bW9kZWw/OiBOZ2JUaW1lO1xuXG5cdHByaXZhdGUgX2hvdXJTdGVwOiBudW1iZXI7XG5cdHByaXZhdGUgX21pbnV0ZVN0ZXA6IG51bWJlcjtcblx0cHJpdmF0ZSBfc2Vjb25kU3RlcDogbnVtYmVyO1xuXG5cdC8qKlxuXHQgKiBXaGV0aGVyIHRvIGRpc3BsYXkgMTJIIG9yIDI0SCBtb2RlLlxuXHQgKi9cblx0QElucHV0KCkgbWVyaWRpYW46IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIHNwaW5uZXJzIGFib3ZlIGFuZCBiZWxvdyBpbnB1dHMgYXJlIHZpc2libGUuXG5cdCAqL1xuXHRASW5wdXQoKSBzcGlubmVyczogYm9vbGVhbjtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBpdCBpcyBwb3NzaWJsZSB0byBzZWxlY3Qgc2Vjb25kcy5cblx0ICovXG5cdEBJbnB1dCgpIHNlY29uZHM6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIFRoZSBudW1iZXIgb2YgaG91cnMgdG8gYWRkL3N1YnRyYWN0IHdoZW4gY2xpY2tpbmcgaG91ciBzcGlubmVycy5cblx0ICovXG5cdEBJbnB1dCgpXG5cdHNldCBob3VyU3RlcChzdGVwOiBudW1iZXIpIHtcblx0XHR0aGlzLl9ob3VyU3RlcCA9IGlzSW50ZWdlcihzdGVwKSA/IHN0ZXAgOiB0aGlzLl9jb25maWcuaG91clN0ZXA7XG5cdH1cblxuXHRnZXQgaG91clN0ZXAoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5faG91clN0ZXA7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBtaW51dGVzIHRvIGFkZC9zdWJ0cmFjdCB3aGVuIGNsaWNraW5nIG1pbnV0ZSBzcGlubmVycy5cblx0ICovXG5cdEBJbnB1dCgpXG5cdHNldCBtaW51dGVTdGVwKHN0ZXA6IG51bWJlcikge1xuXHRcdHRoaXMuX21pbnV0ZVN0ZXAgPSBpc0ludGVnZXIoc3RlcCkgPyBzdGVwIDogdGhpcy5fY29uZmlnLm1pbnV0ZVN0ZXA7XG5cdH1cblxuXHRnZXQgbWludXRlU3RlcCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl9taW51dGVTdGVwO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBudW1iZXIgb2Ygc2Vjb25kcyB0byBhZGQvc3VidHJhY3Qgd2hlbiBjbGlja2luZyBzZWNvbmQgc3Bpbm5lcnMuXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRzZXQgc2Vjb25kU3RlcChzdGVwOiBudW1iZXIpIHtcblx0XHR0aGlzLl9zZWNvbmRTdGVwID0gaXNJbnRlZ2VyKHN0ZXApID8gc3RlcCA6IHRoaXMuX2NvbmZpZy5zZWNvbmRTdGVwO1xuXHR9XG5cblx0Z2V0IHNlY29uZFN0ZXAoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fc2Vjb25kU3RlcDtcblx0fVxuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSB0aW1lcGlja2VyIGlzIHJlYWRvbmx5IGFuZCBjYW4ndCBiZSBjaGFuZ2VkLlxuXHQgKi9cblx0QElucHV0KCkgcmVhZG9ubHlJbnB1dHM6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIFRoZSBzaXplIG9mIGlucHV0cyBhbmQgYnV0dG9ucy5cblx0ICovXG5cdEBJbnB1dCgpIHNpemU6ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBfY29uZmlnOiBOZ2JUaW1lcGlja2VyQ29uZmlnLFxuXHRcdHByaXZhdGUgX25nYlRpbWVBZGFwdGVyOiBOZ2JUaW1lQWRhcHRlcjxhbnk+LFxuXHRcdHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRwdWJsaWMgaTE4bjogTmdiVGltZXBpY2tlckkxOG4sXG5cdCkge1xuXHRcdHRoaXMubWVyaWRpYW4gPSBfY29uZmlnLm1lcmlkaWFuO1xuXHRcdHRoaXMuc3Bpbm5lcnMgPSBfY29uZmlnLnNwaW5uZXJzO1xuXHRcdHRoaXMuc2Vjb25kcyA9IF9jb25maWcuc2Vjb25kcztcblx0XHR0aGlzLmhvdXJTdGVwID0gX2NvbmZpZy5ob3VyU3RlcDtcblx0XHR0aGlzLm1pbnV0ZVN0ZXAgPSBfY29uZmlnLm1pbnV0ZVN0ZXA7XG5cdFx0dGhpcy5zZWNvbmRTdGVwID0gX2NvbmZpZy5zZWNvbmRTdGVwO1xuXHRcdHRoaXMuZGlzYWJsZWQgPSBfY29uZmlnLmRpc2FibGVkO1xuXHRcdHRoaXMucmVhZG9ubHlJbnB1dHMgPSBfY29uZmlnLnJlYWRvbmx5SW5wdXRzO1xuXHRcdHRoaXMuc2l6ZSA9IF9jb25maWcuc2l6ZTtcblx0fVxuXG5cdG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cdG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG5cdHdyaXRlVmFsdWUodmFsdWUpIHtcblx0XHRjb25zdCBzdHJ1Y3RWYWx1ZSA9IHRoaXMuX25nYlRpbWVBZGFwdGVyLmZyb21Nb2RlbCh2YWx1ZSk7XG5cdFx0dGhpcy5tb2RlbCA9IHN0cnVjdFZhbHVlID8gbmV3IE5nYlRpbWUoc3RydWN0VmFsdWUuaG91ciwgc3RydWN0VmFsdWUubWludXRlLCBzdHJ1Y3RWYWx1ZS5zZWNvbmQpIDogbmV3IE5nYlRpbWUoKTtcblx0XHRpZiAoIXRoaXMuc2Vjb25kcyAmJiAoIXN0cnVjdFZhbHVlIHx8ICFpc051bWJlcihzdHJ1Y3RWYWx1ZS5zZWNvbmQpKSkge1xuXHRcdFx0dGhpcy5tb2RlbC5zZWNvbmQgPSAwO1xuXHRcdH1cblx0XHR0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuXHRcdHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluY3JlbWVudHMgdGhlIGhvdXJzIGJ5IHRoZSBnaXZlbiBzdGVwLlxuXHQgKi9cblx0Y2hhbmdlSG91cihzdGVwOiBudW1iZXIpIHtcblx0XHR0aGlzLm1vZGVsPy5jaGFuZ2VIb3VyKHN0ZXApO1xuXHRcdHRoaXMucHJvcGFnYXRlTW9kZWxDaGFuZ2UoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbmNyZW1lbnRzIHRoZSBtaW51dGVzIGJ5IHRoZSBnaXZlbiBzdGVwLlxuXHQgKi9cblx0Y2hhbmdlTWludXRlKHN0ZXA6IG51bWJlcikge1xuXHRcdHRoaXMubW9kZWw/LmNoYW5nZU1pbnV0ZShzdGVwKTtcblx0XHR0aGlzLnByb3BhZ2F0ZU1vZGVsQ2hhbmdlKCk7XG5cdH1cblxuXHQvKipcblx0ICogSW5jcmVtZW50cyB0aGUgc2Vjb25kcyBieSB0aGUgZ2l2ZW4gc3RlcC5cblx0ICovXG5cdGNoYW5nZVNlY29uZChzdGVwOiBudW1iZXIpIHtcblx0XHR0aGlzLm1vZGVsPy5jaGFuZ2VTZWNvbmQoc3RlcCk7XG5cdFx0dGhpcy5wcm9wYWdhdGVNb2RlbENoYW5nZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSBob3VycyB3aXRoIHRoZSBuZXcgdmFsdWUuXG5cdCAqL1xuXHR1cGRhdGVIb3VyKG5ld1ZhbDogc3RyaW5nKSB7XG5cdFx0Y29uc3QgaXNQTSA9IHRoaXMubW9kZWwgPyB0aGlzLm1vZGVsLmhvdXIgPj0gMTIgOiBmYWxzZTtcblx0XHRjb25zdCBlbnRlcmVkSG91ciA9IHRvSW50ZWdlcihuZXdWYWwpO1xuXHRcdGlmICh0aGlzLm1lcmlkaWFuICYmICgoaXNQTSAmJiBlbnRlcmVkSG91ciA8IDEyKSB8fCAoIWlzUE0gJiYgZW50ZXJlZEhvdXIgPT09IDEyKSkpIHtcblx0XHRcdHRoaXMubW9kZWw/LnVwZGF0ZUhvdXIoZW50ZXJlZEhvdXIgKyAxMik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubW9kZWw/LnVwZGF0ZUhvdXIoZW50ZXJlZEhvdXIpO1xuXHRcdH1cblx0XHR0aGlzLnByb3BhZ2F0ZU1vZGVsQ2hhbmdlKCk7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIG1pbnV0ZXMgd2l0aCB0aGUgbmV3IHZhbHVlLlxuXHQgKi9cblx0dXBkYXRlTWludXRlKG5ld1ZhbDogc3RyaW5nKSB7XG5cdFx0dGhpcy5tb2RlbD8udXBkYXRlTWludXRlKHRvSW50ZWdlcihuZXdWYWwpKTtcblx0XHR0aGlzLnByb3BhZ2F0ZU1vZGVsQ2hhbmdlKCk7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIHNlY29uZHMgd2l0aCB0aGUgbmV3IHZhbHVlLlxuXHQgKi9cblx0dXBkYXRlU2Vjb25kKG5ld1ZhbDogc3RyaW5nKSB7XG5cdFx0dGhpcy5tb2RlbD8udXBkYXRlU2Vjb25kKHRvSW50ZWdlcihuZXdWYWwpKTtcblx0XHR0aGlzLnByb3BhZ2F0ZU1vZGVsQ2hhbmdlKCk7XG5cdH1cblxuXHR0b2dnbGVNZXJpZGlhbigpIHtcblx0XHRpZiAodGhpcy5tZXJpZGlhbikge1xuXHRcdFx0dGhpcy5jaGFuZ2VIb3VyKDEyKTtcblx0XHR9XG5cdH1cblxuXHRmb3JtYXRJbnB1dChpbnB1dDogSFRNTElucHV0RWxlbWVudCkge1xuXHRcdGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUucmVwbGFjZShGSUxURVJfUkVHRVgsICcnKTtcblx0fVxuXG5cdGZvcm1hdEhvdXIodmFsdWU/OiBudW1iZXIpIHtcblx0XHRpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG5cdFx0XHRpZiAodGhpcy5tZXJpZGlhbikge1xuXHRcdFx0XHRyZXR1cm4gcGFkTnVtYmVyKHZhbHVlICUgMTIgPT09IDAgPyAxMiA6IHZhbHVlICUgMTIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHBhZE51bWJlcih2YWx1ZSAlIDI0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHBhZE51bWJlcihOYU4pO1xuXHRcdH1cblx0fVxuXG5cdGZvcm1hdE1pblNlYyh2YWx1ZT86IG51bWJlcikge1xuXHRcdHJldHVybiBwYWROdW1iZXIoaXNOdW1iZXIodmFsdWUpID8gdmFsdWUgOiBOYU4pO1xuXHR9XG5cblx0aGFuZGxlQmx1cigpIHtcblx0XHR0aGlzLm9uVG91Y2hlZCgpO1xuXHR9XG5cblx0Z2V0IGlzU21hbGxTaXplKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNpemUgPT09ICdzbWFsbCc7XG5cdH1cblxuXHRnZXQgaXNMYXJnZVNpemUoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2xhcmdlJztcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcblx0XHRpZiAoY2hhbmdlc1snc2Vjb25kcyddICYmICF0aGlzLnNlY29uZHMgJiYgdGhpcy5tb2RlbCAmJiAhaXNOdW1iZXIodGhpcy5tb2RlbC5zZWNvbmQpKSB7XG5cdFx0XHR0aGlzLm1vZGVsLnNlY29uZCA9IDA7XG5cdFx0XHR0aGlzLnByb3BhZ2F0ZU1vZGVsQ2hhbmdlKGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHByb3BhZ2F0ZU1vZGVsQ2hhbmdlKHRvdWNoZWQgPSB0cnVlKSB7XG5cdFx0aWYgKHRvdWNoZWQpIHtcblx0XHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLm1vZGVsPy5pc1ZhbGlkKHRoaXMuc2Vjb25kcykpIHtcblx0XHRcdHRoaXMub25DaGFuZ2UoXG5cdFx0XHRcdHRoaXMuX25nYlRpbWVBZGFwdGVyLnRvTW9kZWwoeyBob3VyOiB0aGlzLm1vZGVsLmhvdXIsIG1pbnV0ZTogdGhpcy5tb2RlbC5taW51dGUsIHNlY29uZDogdGhpcy5tb2RlbC5zZWNvbmQgfSksXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9uQ2hhbmdlKHRoaXMuX25nYlRpbWVBZGFwdGVyLnRvTW9kZWwobnVsbCkpO1xuXHRcdH1cblx0fVxufVxuIl19