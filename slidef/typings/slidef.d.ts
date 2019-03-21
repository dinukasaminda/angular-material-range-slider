/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import {
  ChangeDetectorRef,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CanColor, CanDisable, HammerInput } from '@angular/material/core';
import { FocusMonitor } from '@angular/cdk/a11y';
/**
 * Provider Expression that allows mat-slidef to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)] and [formControl].
 */
export declare const MAT_Slidef_VALUE_ACCESSOR: any;
/** A simple change event emitted by the MatSlidef component. */
export declare class MatSlidefChange {
  /** The MatSlidef that changed. */
  source: MatSlidef;
  /** The new value of the source slidef. */
  value: number | null;
}
/** @docs-private */
export declare class MatSlidefBase {
  _renderer: Renderer2;
  _elementRef: ElementRef;
  constructor(_renderer: Renderer2, _elementRef: ElementRef);
}
export declare const _MatSlidefMixinBase: (new (...args: any[]) => CanColor) &
  (new (...args: any[]) => CanDisable) &
  typeof MatSlidefBase;
/**
 * Allows users to select from a range of values by moving the slidef thumb. It is similar in
 * behavior to the native `<input type="range">` element.
 */
export declare class MatSlidef extends _MatSlidefMixinBase
  implements ControlValueAccessor, OnDestroy, CanDisable, CanColor, OnInit {
  private _focusMonitor;
  private _changeDetectorRef;
  private _dir;

  /** Whether the slidef is inverted. */
  invert: any;
  private _invert;
  /** The maximum value that the slidef can have. */
  max: number;
  private _max;
  /** The minimum value that the slidef can have. */
  min: number;
  private _min;
  /** The values at which the thumb will snap. */
  step: number;
  private _step;

  startpoint: number;
  private _startpoint;

  endpoint: number;
  private _endpoint;

  /** Whether or not to show the thumb label. */
  thumbLabel: boolean;
  private _thumbLabel;
  /** @deprecated */
  _thumbLabelDeprecated: boolean;
  /**
   * How often to show ticks. Relative to the step so that a tick always appears on a step.
   * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
   */
  tickInterval: 'auto' | number;
  private _tickInterval;
  /** @deprecated */
  _tickIntervalDeprecated: number | 'auto';
  /** Value of the slidef. */
  value: any | null;
  private _value;

  value2: number | null;
  private _value2;
  /** Whether the slidef is vertical. */
  vertical: any;
  private _vertical;

  /** Event emitted when the slidef value has changed. */
  change: EventEmitter<MatSlidefChange>;
  /** Event emitted when the slidef thumb moves. */
  input: EventEmitter<MatSlidefChange>;
  /** The value to be used for display purposes. */
  readonly displayValue: string | number;
  readonly displayValue2: string | number;
  /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
  onTouched: () => any;
  /** The percentage of the slidef that coincides with the value. */
  readonly percent: number;
  private _percent;
  /**
   * Whether or not the thumb is sliding.
   * Used to determine if there should be a transition for the thumb and fill track.
   */
  _isSliding: boolean;
  /**
   * Whether or not the slidef is active (clicked or sliding).
   * Used to shrink and grow the thumb as according to the Material Design spec.
   */
  _isActive: boolean;
  /**
   * Whether the axis of the slidef is inverted.
   * (i.e. whether moving the thumb in the positive x or y direction decreases the slidef's value).
   */
  readonly _invertAxis: any;
  /** Whether the slidef is at its minimum value. */
  readonly _isMinValue: boolean;
  /**
   * The amount of space to leave between the slidef thumb and the track fill & track background
   * elements.
   */
  readonly _thumbGap: number;
  /** CSS styles for the track background element. */
  readonly _trackBackgroundStyles: {
    [key: string]: string;
  };
  /** CSS styles for the track fill element. */
  readonly _trackFillStyles: {
    [key: string]: string;
  };
  /** CSS styles for the ticks container element. */
  readonly _ticksContainerStyles: {
    [key: string]: string;
  };
  /** CSS styles for the ticks element. */
  readonly _ticksStyles: {
    [key: string]: string;
  };
  readonly _thumbContainerStyles: {
    [key: string]: string;
  };
  readonly _thumbContainerStyles2: {
    [key: string]: string;
  };

  /** The size of a tick interval as a percentage of the size of the track. */
  private _tickIntervalPercent;
  /** The dimensions of the slidef. */
  private _slidefDimensions;
  private _controlValueAccessorChangeFn;
  /** Decimal places to round to, based on the step amount. */
  private _roundLabelTo;
  /** Subscription to the Directionality change EventEmitter. */
  private _dirChangeSubscription;
  /** The value of the slidef when the slide start event fires. */
  private _valueOnSlideStart;
  /** Reference to the inner slidef wrapper element. */
  private _slidefWrapper;
  /**
   * Whether mouse events should be converted to a slidef position by calculating their distance
   * from the right or bottom edge of the slidef as opposed to the top or left.
   */
  private readonly _invertMouseCoords;
  /** The language direction for this slidef element. */
  private readonly _direction;
  constructor(
    renderer: Renderer2,
    elementRef: ElementRef,
    _focusMonitor: FocusMonitor,
    _changeDetectorRef: ChangeDetectorRef,
    _dir: Directionality
  );
  ngOnInit(): void;
  ngOnDestroy(): void;
  _onMouseenter(): void;
  _onClick(event: MouseEvent): void;
  _onSlide(event: HammerInput): void;
  _onSlideStart(event: HammerInput | null): void;
  _onSlideEnd(): void;
  _onFocus(): void;
  _onBlur(): void;
  _onKeydown(event: KeyboardEvent): void;
  _onKeyup(): void;
  /** Increments the slidef by the given number of steps (negative number decrements). */
  private _increment(numSteps);
  /** Calculate the new value from the new physical location. The value will always be snapped. */
  private _updateValueFromPosition(pos);
  /** Emits a change event if the current value is different from the last emitted value. */
  private _emitChangeEvent();
  /** Emits an input event when the current value is different from the last emitted value. */
  private _emitInputEvent();
  /** Updates the amount of space between ticks as a percentage of the width of the slidef. */
  private _updateTickIntervalPercent();
  /** Creates a slidef change object from the specified value. */
  private _createChangeEvent(value?);
  /** Calculates the percentage of the slidef that a value is. */
  private _calculatePercentage(value);
  /** Calculates the value a percentage of the slidef corresponds to. */
  private _calculateValue(percentage);
  /** Return a number between two numbers. */
  private _clamp(value, min?, max?);
  /**
   * Get the bounding client rect of the slidef track element.
   * The track is used rather than the native element to ignore the extra space that the thumb can
   * take up.
   */
  private _getSlidefDimensions();
  /**
   * Focuses the native element.
   * Currently only used to allow a blur event to fire but will be used with keyboard input later.
   */
  private _focusHostElement();
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value: any): void;
  /**
   * Registers a callback to eb triggered when the value has changed.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn: (value: any) => void): void;
  /**
   * Registers a callback to be triggered when the component is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn: any): void;
  /**
   * Sets whether the component should be disabled.
   * Implemented as part of ControlValueAccessor.
   * @param isDisabled
   */
  setDisabledState(isDisabled: boolean): void;
}
