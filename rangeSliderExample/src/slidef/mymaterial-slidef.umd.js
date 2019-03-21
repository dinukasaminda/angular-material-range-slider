// /**
//  * @license
//  * Copyright Google Inc. All Rights Reserved.
//  *
//  * Use of this source code is governed by an MIT-style license that can be
//  * found in the LICENSE file at https://angular.io/license
//  */
// (function(global, factory) {
//     typeof exports === "object" && typeof module !== "undefined" ?
//         factory(
//             exports,
//             require("@angular/cdk/a11y"),
//             require("@angular/cdk/bidi"),
//             require("@angular/common"),
//             require("@angular/core"),
//             require("@angular/cdk/coercion"),
//             require("rxjs/Subject"),
//             require("@angular/platform-browser"),
//             require("@angular/cdk/platform"),
//             require("@angular/cdk/keycodes"),
//             require("@angular/forms"),
//             require("rxjs/Subscription")
//         ) :
//         typeof define === "function" && define.amd ?
//         define(
//             [
//                 "exports",
//                 "@angular/cdk/a11y",
//                 "@angular/cdk/bidi",
//                 "@angular/common",
//                 "@angular/core",
//                 "@angular/cdk/coercion",
//                 "rxjs/Subject",
//                 "@angular/platform-browser",
//                 "@angular/cdk/platform",
//                 "@angular/cdk/keycodes",
//                 "@angular/forms",
//                 "rxjs/Subscription"
//             ],
//             factory
//         ) :
//         factory(
//             ((global.ng = global.ng || {}),
//                 (global.ng.material = global.ng.material || {}),
//                 (global.ng.material.slidef = global.ng.material.slidef || {})),
//             global.ng.cdk.a11y,
//             global.ng.cdk.bidi,
//             global.ng.common,
//             global.ng.core,
//             global.ng.cdk.coercion,
//             global.Rx,
//             global.ng.platformBrowser,
//             global.ng.cdk.platform,
//             global.ng.cdk.keycodes,
//             global.ng.forms,
//             global.Rx
//         );
// })(this, function(
//     exports,
//     a11y,
//     bidi,
//     common,
//     core,
//     coercion,
//     rxjs_Subject,
//     _angular_platformBrowser,
//     _angular_cdk_platform,
//     _angular_cdk_keycodes,
//     forms,
//     rxjs
// ) {
//     "use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(
        exports,
        require('@angular/cdk/a11y'),
        require('@angular/cdk/bidi'),
        require('@angular/cdk/coercion'),
        require('@angular/cdk/keycodes'),
        require('@angular/core'),
        require('@angular/forms'),
        require('@angular/material/core'),
        require('@angular/platform-browser/animations'),
        require('rxjs'),
        require('@angular/common'),
        require('@angular/platform-browser')
      )
    : typeof define === 'function' && define.amd
    ? define('@angular/material/slider', [
        'exports',
        '@angular/cdk/a11y',
        '@angular/cdk/bidi',
        '@angular/cdk/coercion',
        '@angular/cdk/keycodes',
        '@angular/core',
        '@angular/forms',
        '@angular/material/core',
        '@angular/platform-browser/animations',
        'rxjs',
        '@angular/common',
        '@angular/platform-browser'
      ], factory)
    : factory(
        ((global.ng = global.ng || {}),
        (global.ng.material = global.ng.material || {}),
        (global.ng.material.slider = {})),
        global.ng.cdk.a11y,
        global.ng.cdk.bidi,
        global.ng.cdk.coercion,
        global.ng.cdk.keycodes,
        global.ng.core,
        global.ng.forms,
        global.ng.material.core,
        global.ng.platformBrowser.animations,
        global.rxjs,
        global.ng.common,
        global.ng.platformBrowser
      );
})(this, function(
  exports,
  a11y,
  bidi,
  coercion,
  keycodes,
  core,
  forms,
  core$1,
  animations,
  rxjs,
  common,
  platformBrowser
) {
  'use strict';
  /*! *****************************************************************************
                                                                                      Copyright (c) Microsoft Corporation. All rights reserved.
                                                                                      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
                                                                                      this file except in compliance with the License. You may obtain a copy of the
                                                                                      License at http://www.apache.org/licenses/LICENSE-2.0

                                                                                      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
                                                                                      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
                                                                                      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
                                                                                      MERCHANTABLITY OR NON-INFRINGEMENT.

                                                                                      See the Apache Version 2.0 License for specific language governing permissions
                                                                                      and limitations under the License.
                                                                                      ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function(d, b) {
        d.__proto__ = b;
      }) ||
    function(d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

  function __extends(d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  }

  var MATERIAL_COMPATIBILITY_MODE = new core.InjectionToken('md-compatibility-mode');
  /**
   * Selector that matches all elements that may have style collisions with AngularJS Material.
   */
  var MAT_ELEMENTS_SELECTOR =
    '\n  [mat-button],\n  [mat-fab],\n  [mat-icon-button],\n  [mat-mini-fab],\n  [mat-raised-button],\n  [matCardSubtitle],\n  [matCardTitle],\n  [matCellDef],\n  [matColumnDef],\n  [matDialogActions],\n  [matDialogClose],\n  [matDialogContent],\n  [matDialogTitle],\n  [matHeaderCellDef],\n  [matHeaderRowDef],\n  [matLine],\n  [matRowDef],\n  [matStepLabel],\n  [matStepperNext],\n  [matStepperPrevious],\n  [matTabLabel],\n  [matTabLink],\n  [matTabNav],\n  [matTooltip],\n  [matInput],\n  [matPrefix],\n  [matSuffix],\n  mat-autocomplete,\n  mat-button-toggle,\n  mat-button-toggle,\n  mat-button-toggle-group,\n  mat-card,\n  mat-card-actions,\n  mat-card-content,\n  mat-card-footer,\n  mat-card-header,\n  mat-card-subtitle,\n  mat-card-title,\n  mat-card-title-group,\n  mat-cell,\n  mat-checkbox,\n  mat-chip,\n  mat-dialog-actions,\n  mat-dialog-container,\n  mat-dialog-content,\n  mat-divider,\n  mat-error,\n  mat-grid-list,\n  mat-grid-tile,\n  mat-grid-tile-footer,\n  mat-grid-tile-header,\n  mat-header-cell,\n  mat-header-row,\n  mat-hint,\n  mat-horizontal-stepper,\n  mat-icon,\n  mat-input-container,\n  mat-form-field,\n  mat-list,\n  mat-list-item,\n  mat-menu,\n  mat-nav-list,\n  mat-option,\n  mat-placeholder,\n  mat-progress-bar,\n  mat-pseudo-checkbox,\n  mat-radio-button,\n  mat-radio-group,\n  mat-row,\n  mat-select,\n  mat-sidenav,\n  mat-sidenav-container,\n  mat-slidef,\n  mat-spinner,\n  mat-step,\n  mat-tab,\n  mat-table,\n  mat-tab-group,\n  mat-toolbar,\n  mat-vertical-stepper';
  /**
   * Selector that matches all elements that may have style collisions with AngularJS Material.
   */
  var MD_ELEMENTS_SELECTOR =
    '\n  [md-button],\n  [md-fab],\n  [md-icon-button],\n  [md-mini-fab],\n  [md-raised-button],\n  [mdCardSubtitle],\n  [mdCardTitle],\n  [mdCellDef],\n  [mdColumnDef],\n  [mdDialogActions],\n  [mdDialogClose],\n  [mdDialogContent],\n  [mdDialogTitle],\n  [mdHeaderCellDef],\n  [mdHeaderRowDef],\n  [mdLine],\n  [mdRowDef],\n  [mdStepLabel],\n  [mdStepperNext],\n  [mdStepperPrevious],\n  [mdTabLabel],\n  [mdTabLink],\n  [mdTabNav],\n  [mdTooltip],\n  [mdInput],\n  [mdPrefix],\n  [mdSuffix],\n  md-autocomplete,\n  md-button-toggle,\n  md-button-toggle,\n  md-button-toggle-group,\n  md-card,\n  md-card-actions,\n  md-card-content,\n  md-card-footer,\n  md-card-header,\n  md-card-subtitle,\n  md-card-title,\n  md-card-title-group,\n  md-cell,\n  md-checkbox,\n  md-chip,\n  md-dialog-actions,\n  md-dialog-container,\n  md-dialog-content,\n  md-divider,\n  md-error,\n  md-grid-list,\n  md-grid-tile,\n  md-grid-tile-footer,\n  md-grid-tile-header,\n  md-header-cell,\n  md-header-row,\n  md-hint,\n  md-horizontal-stepper,\n  md-icon,\n  md-input-container,\n  md-form-field,\n  md-list,\n  md-list-item,\n  md-menu,\n  md-nav-list,\n  md-option,\n  md-placeholder,\n  md-progress-bar,\n  md-pseudo-checkbox,\n  md-radio-button,\n  md-radio-group,\n  md-row,\n  md-select,\n  md-sidenav,\n  md-sidenav-container,\n  md-slidef,\n  md-spinner,\n  md-step,\n  md-tab,\n  md-table,\n  md-tab-group,\n  md-toolbar,\n  md-vertical-stepper';
  /**
   * Directive that enforces that the `mat-` prefix cannot be used.
   */
  var MatPrefixRejector = (function() {
    function MatPrefixRejector() {}
    MatPrefixRejector.decorators = [
      {
        type: core.Directive,
        args: [{ selector: MAT_ELEMENTS_SELECTOR }]
      }
    ];
    /**
     * @nocollapse
     */
    MatPrefixRejector.ctorParameters = function() {
      return [];
    };
    return MatPrefixRejector;
  })();
  /**
   * Directive that enforces that the `md-` prefix cannot be used.
   */
  var MdPrefixRejector = (function() {
    function MdPrefixRejector() {}
    MdPrefixRejector.decorators = [
      {
        type: core.Directive,
        args: [{ selector: MD_ELEMENTS_SELECTOR }]
      }
    ];
    /**
     * @nocollapse
     */
    MdPrefixRejector.ctorParameters = function() {
      return [];
    };
    return MdPrefixRejector;
  })();
  /**
   * Module that enforces the default compatibility mode settings. When this module is loaded
   * without NoConflictStyleCompatibilityMode also being imported, it will throw an error if
   * there are any uses of the `mat-` prefix.
   */
  var CompatibilityModule = (function() {
    function CompatibilityModule() {}
    CompatibilityModule.decorators = [
      {
        type: core.NgModule,
        args: [
          {
            declarations: [MatPrefixRejector, MdPrefixRejector],
            exports: [MatPrefixRejector, MdPrefixRejector]
          }
        ]
      }
    ];
    /**
     * @nocollapse
     */
    CompatibilityModule.ctorParameters = function() {
      return [];
    };
    return CompatibilityModule;
  })();
  /**
   * Injection token that configures whether the Material sanity checks are enabled.
   */
  var MATERIAL_SANITY_CHECKS = new core.InjectionToken('mat-sanity-checks');
  /**
   * Module that captures anything that should be loaded and/or run for *all* Angular Material
   * components. This includes Bidi, compatibility mode, etc.
   *
   * This module should be imported to each top-level component module (e.g., MatTabsModule).
   */
  var MatCommonModule = (function() {
    /**
     * @param {?} sanityChecksEnabled
     */
    function MatCommonModule(sanityChecksEnabled) {
      /**
       * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
       */
      this._hasDoneGlobalChecks = false;
      /**
       * Reference to the global `document` object.
       */
      this._document = typeof document === 'object' && document ? document : null;
      if (sanityChecksEnabled && !this._hasDoneGlobalChecks && core.isDevMode()) {
        this._checkDoctype();
        this._checkTheme();
        this._hasDoneGlobalChecks = true;
      }
    }
    /**
     * @return {?}
     */
    MatCommonModule.prototype._checkDoctype = function() {
      if (this._document && !this._document.doctype) {
        console.warn(
          'Current document does not have a doctype. This may cause ' +
            'some Angular Material components not to behave as expected.'
        );
      }
    };
    /**
     * @return {?}
     */
    MatCommonModule.prototype._checkTheme = function() {
      if (this._document && typeof getComputedStyle === 'function') {
        var /** @type {?} */ testElement = this._document.createElement('div');
        testElement.classList.add('mat-theme-loaded-marker');
        this._document.body.appendChild(testElement);
        var /** @type {?} */ computedStyle = getComputedStyle(testElement);
        // In some situations, the computed style of the test element can be null. For example in
        // Firefox, the computed style is null if an application is running inside of a hidden iframe.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        if (computedStyle && computedStyle.display !== 'none') {
          console.warn(
            'Could not find Angular Material core theme. Most Material ' +
              'components may not work as expected. For more info refer ' +
              'to the theming guide: https://material.angular.io/guide/theming'
          );
        }
        this._document.body.removeChild(testElement);
      }
    };
    MatCommonModule.decorators = [
      {
        type: core.NgModule,
        args: [
          {
            imports: [CompatibilityModule, bidi.BidiModule],
            exports: [CompatibilityModule, bidi.BidiModule],
            providers: [
              {
                provide: MATERIAL_SANITY_CHECKS,
                useValue: true
              }
            ]
          }
        ]
      }
    ];
    /**
     * @nocollapse
     */
    MatCommonModule.ctorParameters = function() {
      return [
        {
          type: undefined,
          decorators: [
            { type: core.Optional },
            { type: core.Inject, args: [MATERIAL_SANITY_CHECKS] }
          ]
        }
      ];
    };
    return MatCommonModule;
  })();

  /**
   * Mixin to augment a directive with a `disabled` property.
   * @template T
   * @param {?} base
   * @return {?}
   */
  function mixinDisabled(base) {
    return (function(_super) {
      __extends(class_1, _super);
      /**
       * @param {...?} args
       */
      function class_1() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this._disabled = false;
        return _this;
      }
      Object.defineProperty(class_1.prototype, 'disabled', {
        /**
         * @return {?}
         */
        get: function() {
          return this._disabled;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function(value) {
          this._disabled = coercion.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
      });
      return class_1;
    })(base);
  }

  /**
   * Mixin to augment a directive with a `color` property.
   * @template T
   * @param {?} base
   * @param {?=} defaultColor
   * @return {?}
   */
  function mixinColor(base, defaultColor) {
    return (function(_super) {
      __extends(class_1, _super);
      /**
       * @param {...?} args
       */
      function class_1() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        // Set the default color that can be specified from the mixin.
        _this.color = defaultColor;
        return _this;
      }
      Object.defineProperty(class_1.prototype, 'color', {
        /**
         * @return {?}
         */
        get: function() {
          return this._color;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function(value) {
          var /** @type {?} */ colorPalette = value || defaultColor;
          if (colorPalette !== this._color) {
            if (this._color) {
              this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
            }
            if (colorPalette) {
              this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + colorPalette);
            }
            this._color = colorPalette;
          }
        },
        enumerable: true,
        configurable: true
      });
      return class_1;
    })(base);
  }

  /**
   * InjectionToken for datepicker that can be used to override default locale code.
   */
  var MAT_DATE_LOCALE = new core.InjectionToken('MAT_DATE_LOCALE');
  /**
   * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
   * @abstract
   */
  var DateAdapter = (function() {
    function DateAdapter() {
      this._localeChanges = new rxjs_Subject.Subject();
    }
    Object.defineProperty(DateAdapter.prototype, 'localeChanges', {
      /**
       * A stream that emits when the locale changes.
       * @return {?}
       */
      get: function() {
        return this._localeChanges;
      },
      enumerable: true,
      configurable: true
    });
    /**
     * Gets the year component of the given date.
     * @abstract
     * @param {?} date The date to extract the year from.
     * @return {?} The year component.
     */
    DateAdapter.prototype.getYear = function(date) {};
    /**
     * Gets the month component of the given date.
     * @abstract
     * @param {?} date The date to extract the month from.
     * @return {?} The month component (0-indexed, 0 = January).
     */
    DateAdapter.prototype.getMonth = function(date) {};
    /**
     * Gets the date of the month component of the given date.
     * @abstract
     * @param {?} date The date to extract the date of the month from.
     * @return {?} The month component (1-indexed, 1 = first of month).
     */
    DateAdapter.prototype.getDate = function(date) {};
    /**
     * Gets the day of the week component of the given date.
     * @abstract
     * @param {?} date The date to extract the day of the week from.
     * @return {?} The month component (0-indexed, 0 = Sunday).
     */
    DateAdapter.prototype.getDayOfWeek = function(date) {};
    /**
     * Gets a list of names for the months.
     * @abstract
     * @param {?} style The naming style (e.g. long = 'January', short = 'Jan', narrow = 'J').
     * @return {?} An ordered list of all month names, starting with January.
     */
    DateAdapter.prototype.getMonthNames = function(style) {};
    /**
     * Gets a list of names for the dates of the month.
     * @abstract
     * @return {?} An ordered list of all date of the month names, starting with '1'.
     */
    DateAdapter.prototype.getDateNames = function() {};
    /**
     * Gets a list of names for the days of the week.
     * @abstract
     * @param {?} style The naming style (e.g. long = 'Sunday', short = 'Sun', narrow = 'S').
     * @return {?} An ordered list of all weekday names, starting with Sunday.
     */
    DateAdapter.prototype.getDayOfWeekNames = function(style) {};
    /**
     * Gets the name for the year of the given date.
     * @abstract
     * @param {?} date The date to get the year name for.
     * @return {?} The name of the given year (e.g. '2017').
     */
    DateAdapter.prototype.getYearName = function(date) {};
    /**
     * Gets the first day of the week.
     * @abstract
     * @return {?} The first day of the week (0-indexed, 0 = Sunday).
     */
    DateAdapter.prototype.getFirstDayOfWeek = function() {};
    /**
     * Gets the number of days in the month of the given date.
     * @abstract
     * @param {?} date The date whose month should be checked.
     * @return {?} The number of days in the month of the given date.
     */
    DateAdapter.prototype.getNumDaysInMonth = function(date) {};
    /**
     * Clones the given date.
     * @abstract
     * @param {?} date The date to clone
     * @return {?} A new date equal to the given date.
     */
    DateAdapter.prototype.clone = function(date) {};
    /**
     * Creates a date with the given year, month, and date. Does not allow over/under-flow of the
     * month and date.
     * @abstract
     * @param {?} year The full year of the date. (e.g. 89 means the year 89, not the year 1989).
     * @param {?} month The month of the date (0-indexed, 0 = January). Must be an integer 0 - 11.
     * @param {?} date The date of month of the date. Must be an integer 1 - length of the given month.
     * @return {?} The new date, or null if invalid.
     */
    DateAdapter.prototype.createDate = function(year, month, date) {};
    /**
     * Gets today's date.
     * @abstract
     * @return {?} Today's date.
     */
    DateAdapter.prototype.today = function() {};
    /**
     * Parses a date from a value.
     * @abstract
     * @param {?} value The value to parse.
     * @param {?} parseFormat The expected format of the value being parsed
     *     (type is implementation-dependent).
     * @return {?} The parsed date.
     */
    DateAdapter.prototype.parse = function(value, parseFormat) {};
    /**
     * Formats a date as a string.
     * @abstract
     * @param {?} date The value to format.
     * @param {?} displayFormat The format to use to display the date as a string.
     * @return {?} The formatted date string.
     */
    DateAdapter.prototype.format = function(date, displayFormat) {};
    /**
     * Adds the given number of years to the date. Years are counted as if flipping 12 pages on the
     * calendar for each year and then finding the closest date in the new month. For example when
     * adding 1 year to Feb 29, 2016, the resulting date will be Feb 28, 2017.
     * @abstract
     * @param {?} date The date to add years to.
     * @param {?} years The number of years to add (may be negative).
     * @return {?} A new date equal to the given one with the specified number of years added.
     */
    DateAdapter.prototype.addCalendarYears = function(date, years) {};
    /**
     * Adds the given number of months to the date. Months are counted as if flipping a page on the
     * calendar for each month and then finding the closest date in the new month. For example when
     * adding 1 month to Jan 31, 2017, the resulting date will be Feb 28, 2017.
     * @abstract
     * @param {?} date The date to add months to.
     * @param {?} months The number of months to add (may be negative).
     * @return {?} A new date equal to the given one with the specified number of months added.
     */
    DateAdapter.prototype.addCalendarMonths = function(date, months) {};
    /**
     * Adds the given number of days to the date. Days are counted as if moving one cell on the
     * calendar for each day.
     * @abstract
     * @param {?} date The date to add days to.
     * @param {?} days The number of days to add (may be negative).
     * @return {?} A new date equal to the given one with the specified number of days added.
     */
    DateAdapter.prototype.addCalendarDays = function(date, days) {};
    /**
     * Gets the RFC 3339 compatible string (https://tools.ietf.org/html/rfc3339) for the given date.
     * @abstract
     * @param {?} date The date to get the ISO date string for.
     * @return {?} The ISO date string date string.
     */
    DateAdapter.prototype.toIso8601 = function(date) {};
    /**
     * Creates a date from an RFC 3339 compatible string (https://tools.ietf.org/html/rfc3339).
     * @abstract
     * @param {?} iso8601String The ISO date string to create a date from
     * @return {?} The date created from the ISO date string.
     */
    DateAdapter.prototype.fromIso8601 = function(iso8601String) {};
    /**
     * Checks whether the given object is considered a date instance by this DateAdapter.
     * @abstract
     * @param {?} obj The object to check
     * @return {?} Whether the object is a date instance.
     */
    DateAdapter.prototype.isDateInstance = function(obj) {};
    /**
     * Checks whether the given date is valid.
     * @abstract
     * @param {?} date The date to check.
     * @return {?} Whether the date is valid.
     */
    DateAdapter.prototype.isValid = function(date) {};
    /**
     * Sets the locale used for all dates.
     * @param {?} locale The new locale.
     * @return {?}
     */
    DateAdapter.prototype.setLocale = function(locale) {
      this.locale = locale;
      this._localeChanges.next();
    };
    /**
     * Compares two dates.
     * @param {?} first The first date to compare.
     * @param {?} second The second date to compare.
     * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    DateAdapter.prototype.compareDate = function(first, second) {
      return (
        this.getYear(first) - this.getYear(second) ||
        this.getMonth(first) - this.getMonth(second) ||
        this.getDate(first) - this.getDate(second)
      );
    };
    /**
     * Checks if two dates are equal.
     * @param {?} first The first date to check.
     * @param {?} second The second date to check.
     *     Null dates are considered equal to other null dates.
     * @return {?}
     */
    DateAdapter.prototype.sameDate = function(first, second) {
      return first && second ? !this.compareDate(first, second) : first == second;
    };
    /**
     * Clamp the given date between min and max dates.
     * @param {?} date The date to clamp.
     * @param {?=} min The minimum value to allow. If null or omitted no min is enforced.
     * @param {?=} max The maximum value to allow. If null or omitted no max is enforced.
     * @return {?} `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */
    DateAdapter.prototype.clampDate = function(date, min, max) {
      if (min && this.compareDate(date, min) < 0) {
        return min;
      }
      if (max && this.compareDate(date, max) > 0) {
        return max;
      }
      return date;
    };
    return DateAdapter;
  })();

  /**
   * Extends an object with the *enumerable* and *own* properties of one or more source objects,
   * similar to Object.assign.
   *
   * @param {?} dest The object which will have properties copied to it.
   * @param {...?} sources The source objects from which properties will be copied.
   * @return {?}
   */
  function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
      throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
      var source = sources_1[_a];
      if (source != null) {
        for (var /** @type {?} */ key in source) {
          if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
          }
        }
      }
    }
    return dest;
  }

  /**
   * Whether the browser supports the Intl API.
   */
  var SUPPORTS_INTL_API = typeof Intl != 'undefined';
  /**
   * The default month names to use if Intl API is not available.
   */
  var DEFAULT_MONTH_NAMES = {
    long: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
  };
  /**
   * The default date names to use if Intl API is not available.
   */
  var DEFAULT_DATE_NAMES = range(31, function(i) {
    return String(i + 1);
  });
  /**
   * The default day of the week names to use if Intl API is not available.
   */
  var DEFAULT_DAY_OF_WEEK_NAMES = {
    long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  };
  /**
   * Matches strings that have the form of a valid RFC 3339 string
   * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
   * because the regex will match strings an with out of bounds month, date, etc.
   */
  var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
  /**
   * Creates an array and fills it with values.
   * @template T
   * @param {?} length
   * @param {?} valueFunction
   * @return {?}
   */
  function range(length, valueFunction) {
    var /** @type {?} */ valuesArray = Array(length);
    for (var /** @type {?} */ i = 0; i < length; i++) {
      valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
  }
  /**
   * Adapts the native JS Date for use with cdk-based components that work with dates.
   */
  var NativeDateAdapter = (function(_super) {
    __extends(NativeDateAdapter, _super);
    /**
     * @param {?} matDateLocale
     */
    function NativeDateAdapter(matDateLocale) {
      var _this = _super.call(this) || this;
      /**
       * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
       * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
       * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
       * will produce `'8/13/1800'`.
       */
      _this.useUtcForDisplay = true;
      _super.prototype.setLocale.call(_this, matDateLocale);
      return _this;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getYear = function(date) {
      return date.getFullYear();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getMonth = function(date) {
      return date.getMonth();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getDate = function(date) {
      return date.getDate();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getDayOfWeek = function(date) {
      return date.getDay();
    };
    /**
     * @param {?} style
     * @return {?}
     */
    NativeDateAdapter.prototype.getMonthNames = function(style) {
      var _this = this;
      if (SUPPORTS_INTL_API) {
        var /** @type {?} */ dtf_1 = new Intl.DateTimeFormat(this.locale, {
            month: style
          });
        return range(12, function(i) {
          return _this._stripDirectionalityCharacters(dtf_1.format(new Date(2017, i, 1)));
        });
      }
      return DEFAULT_MONTH_NAMES[style];
    };
    /**
     * @return {?}
     */
    NativeDateAdapter.prototype.getDateNames = function() {
      var _this = this;
      if (SUPPORTS_INTL_API) {
        var /** @type {?} */ dtf_2 = new Intl.DateTimeFormat(this.locale, {
            day: 'numeric'
          });
        return range(31, function(i) {
          return _this._stripDirectionalityCharacters(dtf_2.format(new Date(2017, 0, i + 1)));
        });
      }
      return DEFAULT_DATE_NAMES;
    };
    /**
     * @param {?} style
     * @return {?}
     */
    NativeDateAdapter.prototype.getDayOfWeekNames = function(style) {
      var _this = this;
      if (SUPPORTS_INTL_API) {
        var /** @type {?} */ dtf_3 = new Intl.DateTimeFormat(this.locale, {
            weekday: style
          });
        return range(7, function(i) {
          return _this._stripDirectionalityCharacters(dtf_3.format(new Date(2017, 0, i + 1)));
        });
      }
      return DEFAULT_DAY_OF_WEEK_NAMES[style];
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getYearName = function(date) {
      if (SUPPORTS_INTL_API) {
        var /** @type {?} */ dtf = new Intl.DateTimeFormat(this.locale, {
            year: 'numeric'
          });
        return this._stripDirectionalityCharacters(dtf.format(date));
      }
      return String(this.getYear(date));
    };
    /**
     * @return {?}
     */
    NativeDateAdapter.prototype.getFirstDayOfWeek = function() {
      // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
      return 0;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getNumDaysInMonth = function(date) {
      return this.getDate(
        this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0)
      );
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.clone = function(date) {
      return this.createDate(this.getYear(date), this.getMonth(date), this.getDate(date));
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.createDate = function(year, month, date) {
      // Check for invalid month and date (except upper bound on date which we have to check after
      // creating the Date).
      if (month < 0 || month > 11) {
        throw Error('Invalid month index "' + month + '". Month index has to be between 0 and 11.');
      }
      if (date < 1) {
        throw Error('Invalid date "' + date + '". Date has to be greater than 0.');
      }
      var /** @type {?} */ result = this._createDateWithOverflow(year, month, date);
      // Check that the date wasn't above the upper bound for the month, causing the month to overflow
      if (result.getMonth() != month) {
        throw Error('Invalid date "' + date + '" for month with index "' + month + '".');
      }
      return result;
    };
    /**
     * @return {?}
     */
    NativeDateAdapter.prototype.today = function() {
      return new Date();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NativeDateAdapter.prototype.parse = function(value) {
      // We have no way using the native JS Date to set the parse format or locale, so we ignore these
      // parameters.
      if (typeof value == 'number') {
        return new Date(value);
      }
      return value ? new Date(Date.parse(value)) : null;
    };
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    NativeDateAdapter.prototype.format = function(date, displayFormat) {
      if (!this.isValid(date)) {
        throw Error('NativeDateAdapter: Cannot format invalid date.');
      }
      if (SUPPORTS_INTL_API) {
        if (this.useUtcForDisplay) {
          date = new Date(
            Date.UTC(
              date.getFullYear(),
              date.getMonth(),
              date.getDate(),
              date.getHours(),
              date.getMinutes(),
              date.getSeconds(),
              date.getMilliseconds()
            )
          );
          displayFormat = extendObject({}, displayFormat, { timeZone: 'utc' });
        }
        var /** @type {?} */ dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
        return this._stripDirectionalityCharacters(dtf.format(date));
      }
      return this._stripDirectionalityCharacters(date.toDateString());
    };
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    NativeDateAdapter.prototype.addCalendarYears = function(date, years) {
      return this.addCalendarMonths(date, years * 12);
    };
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    NativeDateAdapter.prototype.addCalendarMonths = function(date, months) {
      var /** @type {?} */ newDate = this._createDateWithOverflow(
          this.getYear(date),
          this.getMonth(date) + months,
          this.getDate(date)
        );
      // It's possible to wind up in the wrong month if the original month has more days than the new
      // month. In this case we want to go to the last day of the desired month.
      // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
      // guarantee this.
      if (this.getMonth(newDate) != (((this.getMonth(date) + months) % 12) + 12) % 12) {
        newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
      }
      return newDate;
    };
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    NativeDateAdapter.prototype.addCalendarDays = function(date, days) {
      return this._createDateWithOverflow(
        this.getYear(date),
        this.getMonth(date),
        this.getDate(date) + days
      );
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.toIso8601 = function(date) {
      return [
        date.getUTCFullYear(),
        this._2digit(date.getUTCMonth() + 1),
        this._2digit(date.getUTCDate())
      ].join('-');
    };
    /**
     * @param {?} iso8601String
     * @return {?}
     */
    NativeDateAdapter.prototype.fromIso8601 = function(iso8601String) {
      // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
      // string is the right format first.
      if (ISO_8601_REGEX.test(iso8601String)) {
        var /** @type {?} */ d = new Date(iso8601String);
        if (this.isValid(d)) {
          return d;
        }
      }
      return null;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    NativeDateAdapter.prototype.isDateInstance = function(obj) {
      return obj instanceof Date;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.isValid = function(date) {
      return !isNaN(date.getTime());
    };
    /**
     * Creates a date but allows the month and date to overflow.
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype._createDateWithOverflow = function(year, month, date) {
      var /** @type {?} */ result = new Date(year, month, date);
      // We need to correct for the fact that JS native Date treats years in range [0, 99] as
      // abbreviations for 19xx.
      if (year >= 0 && year < 100) {
        result.setFullYear(this.getYear(result) - 1900);
      }
      return result;
    };
    /**
     * Pads a number to make it two digits.
     * @param {?} n The number to pad.
     * @return {?} The padded number.
     */
    NativeDateAdapter.prototype._2digit = function(n) {
      return ('00' + n).slice(-2);
    };
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @param {?} str The string to strip direction characters from.
     * @return {?} The stripped string.
     */
    NativeDateAdapter.prototype._stripDirectionalityCharacters = function(str) {
      return str.replace(/[\u200e\u200f]/g, '');
    };
    NativeDateAdapter.decorators = [{ type: core.Injectable }];
    /**
     * @nocollapse
     */
    NativeDateAdapter.ctorParameters = function() {
      return [
        {
          type: undefined,
          decorators: [{ type: core.Optional }, { type: core.Inject, args: [MAT_DATE_LOCALE] }]
        }
      ];
    };
    return NativeDateAdapter;
  })(DateAdapter);

  var MAT_DATE_FORMATS = new core.InjectionToken('mat-date-formats');

  var GestureConfig = (function(_super) {
    __extends(GestureConfig, _super);

    function GestureConfig() {
      var _this = _super.call(this) || this;
      _this._hammer = typeof window !== 'undefined' ? window.Hammer : null;
      /* List of new event names to add to the gesture support list */
      _this.events = _this._hammer
        ? ['longpress', 'slide', 'slidestart', 'slideend', 'slidefight', 'slideleft']
        : [];
      if (!_this._hammer && core.isDevMode()) {
        console.warn(
          'Could not find HammerJS. Certain Angular Material ' +
            'components may not work correctly.'
        );
      }
      return _this;
    }
    /**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://www.google.com/design/spec/patterns/gestures.html#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * @param {?} element Element to which to assign the new HammerJS gestures.
     * @return {?} Newly-created HammerJS instance.
     */
    GestureConfig.prototype.buildHammer = function(element) {
      var /** @type {?} */ mc = new this._hammer(element);
      // Default Hammer Recognizers.
      var /** @type {?} */ pan = new this._hammer.Pan();
      var /** @type {?} */ swipe = new this._hammer.Swipe();
      var /** @type {?} */ press = new this._hammer.Press();
      // Notice that a HammerJS recognizer can only depend on one other recognizer once.
      // Otherwise the previous `recognizeWith` will be dropped.
      // TODO: Confirm threshold numbers with Material Design UX Team
      var /** @type {?} */ slide = this._createRecognizer(
          pan,
          { event: 'slide', threshold: 0 },
          swipe
        );
      var /** @type {?} */ longpress = this._createRecognizer(press, {
          event: 'longpress',
          time: 500
        });
      // Overwrite the default `pan` event to use the swipe event.
      pan.recognizeWith(swipe);
      // Add customized gestures to Hammer manager
      mc.add([swipe, press, pan, slide, longpress]);
      return mc;
    };
    /**
     * Creates a new recognizer, without affecting the default recognizers of HammerJS
     * @param {?} base
     * @param {?} options
     * @param {...?} inheritances
     * @return {?}
     */
    GestureConfig.prototype._createRecognizer = function(base, options) {
      var inheritances = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        inheritances[_i - 2] = arguments[_i];
      }
      var /** @type {?} */ recognizer = new base.constructor(options);
      inheritances.push(base);
      inheritances.forEach(function(item) {
        return recognizer.recognizeWith(item);
      });
      return recognizer;
    };
    GestureConfig.decorators = [{ type: core.Injectable }];
    /**
     * @nocollapse
     */
    GestureConfig.ctorParameters = function() {
      return [];
    };
    return GestureConfig;
  })(platformBrowser.HammerGestureConfig);

  var RippleState = {};
  RippleState.FADING_IN = 0;
  RippleState.VISIBLE = 1;
  RippleState.FADING_OUT = 2;
  RippleState.HIDDEN = 3;
  RippleState[RippleState.FADING_IN] = 'FADING_IN';
  RippleState[RippleState.VISIBLE] = 'VISIBLE';
  RippleState[RippleState.FADING_OUT] = 'FADING_OUT';
  RippleState[RippleState.HIDDEN] = 'HIDDEN';
  /**
   * Reference to a previously launched ripple element.
   */
  var RippleRef = (function() {
    /**
     * @param {?} _renderer
     * @param {?} element
     * @param {?} config
     */
    function RippleRef(_renderer, element, config) {
      this._renderer = _renderer;
      this.element = element;
      this.config = config;
      /**
       * Current state of the ripple reference.
       */
      this.state = RippleState.HIDDEN;
    }
    /**
     * Fades out the ripple element.
     * @return {?}
     */
    RippleRef.prototype.fadeOut = function() {
      this._renderer.fadeOutRipple(this);
    };
    return RippleRef;
  })();

  /**
   * Fade-in duration for the ripples. Can be modified with the speedFactor option.
   */
  var RIPPLE_FADE_IN_DURATION = 450;
  /**
   * Fade-out duration for the ripples in milliseconds. This can't be modified by the speedFactor.
   */
  var RIPPLE_FADE_OUT_DURATION = 400;
  /**
   * Helper service that performs DOM manipulations. Not intended to be used outside this module.
   * The constructor takes a reference to the ripple directive's host element and a map of DOM
   * event handlers to be installed on the element that triggers ripple animations.
   * This will eventually become a custom renderer once Angular support exists.
   * \@docs-private
   */
  var RippleRenderer = (function() {
    /**
     * @param {?} elementRef
     * @param {?} _ngZone
     * @param {?} platform
     */
    function RippleRenderer(elementRef, _ngZone, platform) {
      this._ngZone = _ngZone;
      /**
       * Whether the pointer is currently being held on the trigger or not.
       */
      this._isPointerDown = false;
      /**
       * Events to be registered on the trigger element.
       */
      this._triggerEvents = new Map();
      /**
       * Set of currently active ripple references.
       */
      this._activeRipples = new Set();
      /**
       * Ripple config for all ripples created by events.
       */
      this.rippleConfig = {};
      /**
       * Whether mouse ripples should be created or not.
       */
      this.rippleDisabled = false;
      // Only do anything if we're on the browser.
      if (platform.isBrowser) {
        this._containerElement = elementRef.nativeElement;
        // Specify events which need to be registered on the trigger.
        this._triggerEvents.set('mousedown', this.onMousedown.bind(this));
        this._triggerEvents.set('touchstart', this.onTouchstart.bind(this));
        this._triggerEvents.set('mouseup', this.onPointerUp.bind(this));
        this._triggerEvents.set('touchend', this.onPointerUp.bind(this));
        this._triggerEvents.set('mouseleave', this.onPointerLeave.bind(this));
        // By default use the host element as trigger element.
        this.setTriggerElement(this._containerElement);
      }
    }
    /**
     * Fades in a ripple at the given coordinates.
     * @param {?} x Coordinate within the element, along the X axis at which to start the ripple.
     * @param {?} y
     * @param {?=} config Extra ripple options.
     * @return {?}
     */
    RippleRenderer.prototype.fadeInRipple = function(x, y, config) {
      var _this = this;
      if (config === void 0) {
        config = {};
      }
      var /** @type {?} */ containerRect = this._containerElement.getBoundingClientRect();
      if (config.centered) {
        x = containerRect.left + containerRect.width / 2;
        y = containerRect.top + containerRect.height / 2;
      }
      var /** @type {?} */ radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
      var /** @type {?} */ duration = RIPPLE_FADE_IN_DURATION * (1 / (config.speedFactor || 1));
      var /** @type {?} */ offsetX = x - containerRect.left;
      var /** @type {?} */ offsetY = y - containerRect.top;
      var /** @type {?} */ ripple = document.createElement('div');
      ripple.classList.add('mat-ripple-element');
      ripple.style.left = offsetX - radius + 'px';
      ripple.style.top = offsetY - radius + 'px';
      ripple.style.height = radius * 2 + 'px';
      ripple.style.width = radius * 2 + 'px';
      // If the color is not set, the default CSS color will be used.
      ripple.style.backgroundColor = config.color || null;
      ripple.style.transitionDuration = duration + 'ms';
      this._containerElement.appendChild(ripple);
      // By default the browser does not recalculate the styles of dynamically created
      // ripple elements. This is critical because then the `scale` would not animate properly.
      enforceStyleRecalculation(ripple);
      ripple.style.transform = 'scale(1)';
      // Exposed reference to the ripple that will be returned.
      var /** @type {?} */ rippleRef = new RippleRef(this, ripple, config);
      rippleRef.state = RippleState.FADING_IN;
      // Add the ripple reference to the list of all active ripples.
      this._activeRipples.add(rippleRef);
      // Wait for the ripple element to be completely faded in.
      // Once it's faded in, the ripple can be hidden immediately if the mouse is released.
      this.runTimeoutOutsideZone(function() {
        rippleRef.state = RippleState.VISIBLE;
        if (!config.persistent && !_this._isPointerDown) {
          rippleRef.fadeOut();
        }
      }, duration);
      return rippleRef;
    };
    /**
     * Fades out a ripple reference.
     * @param {?} rippleRef
     * @return {?}
     */
    RippleRenderer.prototype.fadeOutRipple = function(rippleRef) {
      // For ripples that are not active anymore, don't re-un the fade-out animation.
      if (!this._activeRipples.delete(rippleRef)) {
        return;
      }
      var /** @type {?} */ rippleEl = rippleRef.element;
      rippleEl.style.transitionDuration = RIPPLE_FADE_OUT_DURATION + 'ms';
      rippleEl.style.opacity = '0';
      rippleRef.state = RippleState.FADING_OUT;
      // Once the ripple faded out, the ripple can be safely removed from the DOM.
      this.runTimeoutOutsideZone(function() {
        rippleRef.state = RippleState.HIDDEN; /** @type {?} */
        rippleEl.parentNode.removeChild(rippleEl);
      }, RIPPLE_FADE_OUT_DURATION);
    };
    /**
     * Fades out all currently active ripples.
     * @return {?}
     */
    RippleRenderer.prototype.fadeOutAll = function() {
      this._activeRipples.forEach(function(ripple) {
        return ripple.fadeOut();
      });
    };
    /**
     * Sets the trigger element and registers the mouse events.
     * @param {?} element
     * @return {?}
     */
    RippleRenderer.prototype.setTriggerElement = function(element) {
      var _this = this;
      // Remove all previously register event listeners from the trigger element.
      if (this._triggerElement) {
        this._triggerEvents.forEach(function(fn, type) {
          _this._triggerElement.removeEventListener(type, fn);
        });
      }
      if (element) {
        // If the element is not null, register all event listeners on the trigger element.
        this._ngZone.runOutsideAngular(function() {
          _this._triggerEvents.forEach(function(fn, type) {
            return element.addEventListener(type, fn);
          });
        });
      }
      this._triggerElement = element;
    };
    /**
     * Function being called whenever the trigger is being pressed.
     * @param {?} event
     * @return {?}
     */
    RippleRenderer.prototype.onMousedown = function(event) {
      if (!this.rippleDisabled) {
        this._isPointerDown = true;
        this.fadeInRipple(event.clientX, event.clientY, this.rippleConfig);
      }
    };
    /**
     * Function being called whenever the pointer is being released.
     * @return {?}
     */
    RippleRenderer.prototype.onPointerUp = function() {
      this._isPointerDown = false;
      // Fade-out all ripples that are completely visible and not persistent.
      this._activeRipples.forEach(function(ripple) {
        if (!ripple.config.persistent && ripple.state === RippleState.VISIBLE) {
          ripple.fadeOut();
        }
      });
    };
    /**
     * Function being called whenever the pointer leaves the trigger.
     * @return {?}
     */
    RippleRenderer.prototype.onPointerLeave = function() {
      if (this._isPointerDown) {
        this.onPointerUp();
      }
    };
    /**
     * Function being called whenever the trigger is being touched.
     * @param {?} event
     * @return {?}
     */
    RippleRenderer.prototype.onTouchstart = function(event) {
      if (!this.rippleDisabled) {
        var _a = event.touches[0],
          clientX = _a.clientX,
          clientY = _a.clientY;
        this._isPointerDown = true;
        this.fadeInRipple(clientX, clientY, this.rippleConfig);
      }
    };
    /**
     * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
     * @param {?} fn
     * @param {?=} delay
     * @return {?}
     */
    RippleRenderer.prototype.runTimeoutOutsideZone = function(fn, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      this._ngZone.runOutsideAngular(function() {
        return setTimeout(fn, delay);
      });
    };
    return RippleRenderer;
  })();
  /**
   * @param {?} element
   * @return {?}
   */
  function enforceStyleRecalculation(element) {
    // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
    // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
    // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    window.getComputedStyle(element).getPropertyValue('opacity');
  }
  /**
   * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
   * @param {?} x
   * @param {?} y
   * @param {?} rect
   * @return {?}
   */
  function distanceToFurthestCorner(x, y, rect) {
    var /** @type {?} */ distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    var /** @type {?} */ distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
  }

  /**
   * Injection token that can be used to specify the global ripple options.
   */
  var MAT_RIPPLE_GLOBAL_OPTIONS = new core.InjectionToken('mat-ripple-global-options');
  var MatRipple = (function() {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} globalOptions
     */
    function MatRipple(elementRef, ngZone, platform, globalOptions) {
      /**
       * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
       * will be the distance from the center of the ripple to the furthest corner of the host element's
       * bounding rectangle.
       */
      this.radius = 0;
      /**
       * If set, the normal duration of ripple animations is divided by this value. For example,
       * setting it to 0.5 will cause the animations to take twice as long.
       * A changed speedFactor will not modify the fade-out duration of the ripples.
       */
      this.speedFactor = 1;
      this._rippleRenderer = new RippleRenderer(elementRef, ngZone, platform);
      this._globalOptions = globalOptions ? globalOptions : {};
      this._updateRippleRenderer();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MatRipple.prototype.ngOnChanges = function(changes) {
      if ((changes['trigger'] || changes['_matRippleTrigger']) && this.trigger) {
        this._rippleRenderer.setTriggerElement(this.trigger);
      }
      this._updateRippleRenderer();
    };
    /**
     * @return {?}
     */
    MatRipple.prototype.ngOnDestroy = function() {
      // Set the trigger element to null to cleanup all listeners.
      this._rippleRenderer.setTriggerElement(null);
    };
    /**
     * Launches a manual ripple at the specified position.
     * @param {?} x
     * @param {?} y
     * @param {?=} config
     * @return {?}
     */
    MatRipple.prototype.launch = function(x, y, config) {
      if (config === void 0) {
        config = this.rippleConfig;
      }
      return this._rippleRenderer.fadeInRipple(x, y, config);
    };
    /**
     * Fades out all currently showing ripple elements.
     * @return {?}
     */
    MatRipple.prototype.fadeOutAll = function() {
      this._rippleRenderer.fadeOutAll();
    };
    Object.defineProperty(MatRipple.prototype, 'rippleConfig', {
      /**
       * Ripple configuration from the directive's input values.
       * @return {?}
       */
      get: function() {
        return {
          centered: this.centered,
          speedFactor: this.speedFactor * (this._globalOptions.baseSpeedFactor || 1),
          radius: this.radius,
          color: this.color
        };
      },
      enumerable: true,
      configurable: true
    });
    /**
     * Updates the ripple renderer with the latest ripple configuration.
     * @return {?}
     */
    MatRipple.prototype._updateRippleRenderer = function() {
      this._rippleRenderer.rippleDisabled = this._globalOptions.disabled || this.disabled;
      this._rippleRenderer.rippleConfig = this.rippleConfig;
    };
    MatRipple.decorators = [
      {
        type: core.Directive,
        args: [
          {
            selector: '[mat-ripple], [matRipple]',
            exportAs: 'matRipple',
            host: {
              class: 'mat-ripple',
              '[class.mat-ripple-unbounded]': 'unbounded'
            }
          }
        ]
      }
    ];
    /**
     * @nocollapse
     */
    MatRipple.ctorParameters = function() {
      return [
        { type: core.ElementRef },
        { type: core.NgZone },
        { type: _angular_cdk_platform.Platform },
        {
          type: undefined,
          decorators: [
            { type: core.Optional },
            { type: core.Inject, args: [MAT_RIPPLE_GLOBAL_OPTIONS] }
          ]
        }
      ];
    };
    MatRipple.propDecorators = {
      trigger: [{ type: core.Input, args: ['matRippleTrigger'] }],
      centered: [{ type: core.Input, args: ['matRippleCentered'] }],
      disabled: [{ type: core.Input, args: ['matRippleDisabled'] }],
      radius: [{ type: core.Input, args: ['matRippleRadius'] }],
      speedFactor: [{ type: core.Input, args: ['matRippleSpeedFactor'] }],
      color: [{ type: core.Input, args: ['matRippleColor'] }],
      unbounded: [{ type: core.Input, args: ['matRippleUnbounded'] }]
    };
    return MatRipple;
  })();

  /**
   * \@docs-private
   */
  var MatOptgroupBase = (function() {
    function MatOptgroupBase() {}
    return MatOptgroupBase;
  })();
  var _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase);
  // Counter for unique group ids.
  var _uniqueOptgroupIdCounter = 0;
  /**
   * Component that is used to group instances of `mat-option`.
   */
  var MatOptgroup = (function(_super) {
    __extends(MatOptgroup, _super);

    function MatOptgroup() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;
      /**
       * Unique id for the underlying label.
       */
      _this._labelId = 'mat-optgroup-label-' + _uniqueOptgroupIdCounter++;
      return _this;
    }
    MatOptgroup.decorators = [
      {
        type: core.Component,
        args: [
          {
            selector: 'mat-optgroup',
            exportAs: 'matOptgroup',
            template:
              '<label class="mat-optgroup-label" [id]="_labelId">{{ label }}</label><ng-content select="mat-option"></ng-content>',
            encapsulation: core.ViewEncapsulation.None,
            preserveWhitespaces: false,
            changeDetection: core.ChangeDetectionStrategy.OnPush,
            inputs: ['disabled'],
            host: {
              class: 'mat-optgroup',
              role: 'group',
              '[class.mat-optgroup-disabled]': 'disabled',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[attr.aria-labelledby]': '_labelId'
            }
          }
        ]
      }
    ];
    /**
     * @nocollapse
     */
    MatOptgroup.ctorParameters = function() {
      return [];
    };
    MatOptgroup.propDecorators = {
      label: [{ type: core.Input }]
    };
    return MatOptgroup;
  })(_MatOptgroupMixinBase);

  /**
   * Option IDs need to be unique across components, so this counter exists outside of
   * the component definition.
   */
  var _uniqueIdCounter = 0;
  /**
   * Event object emitted by MatOption when selected or deselected.
   */
  var MatOptionSelectionChange = (function() {
    /**
     * @param {?} source
     * @param {?=} isUserInput
     */
    function MatOptionSelectionChange(source, isUserInput) {
      if (isUserInput === void 0) {
        isUserInput = false;
      }
      this.source = source;
      this.isUserInput = isUserInput;
    }
    return MatOptionSelectionChange;
  })();
  /**
   * Single option inside of a `<mat-select>` element.
   */
  var MatOption = (function() {
    /**
     * @param {?} _element
     * @param {?} _changeDetectorRef
     * @param {?} group
     */
    function MatOption(_element, _changeDetectorRef, group) {
      this._element = _element;
      this._changeDetectorRef = _changeDetectorRef;
      this.group = group;
      this._selected = false;
      this._active = false;
      this._multiple = false;
      this._disableRipple = false;
      /**
       * Whether the option is disabled.
       */
      this._disabled = false;
      this._id = 'mat-option-' + _uniqueIdCounter++;
      /**
       * Event emitted when the option is selected or deselected.
       */
      this.onSelectionChange = new core.EventEmitter();
    }
    Object.defineProperty(MatOption.prototype, 'multiple', {
      /**
       * Whether the wrapping component is in multiple selection mode.
       * @return {?}
       */
      get: function() {
        return this._multiple;
      },
      /**
       * @param {?} value
       * @return {?}
       */
      set: function(value) {
        if (value !== this._multiple) {
          this._multiple = value;
          this._changeDetectorRef.markForCheck();
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatOption.prototype, 'id', {
      /**
       * The unique ID of the option.
       * @return {?}
       */
      get: function() {
        return this._id;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatOption.prototype, 'selected', {
      /**
       * Whether or not the option is currently selected.
       * @return {?}
       */
      get: function() {
        return this._selected;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatOption.prototype, 'disabled', {
      /**
       * Whether the option is disabled.
       * @return {?}
       */
      get: function() {
        return (this.group && this.group.disabled) || this._disabled;
      },
      /**
       * @param {?} value
       * @return {?}
       */
      set: function(value) {
        this._disabled = coercion.coerceBooleanProperty(value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatOption.prototype, 'disableRipple', {
      /**
       * Whether ripples for the option are disabled.
       * @return {?}
       */
      get: function() {
        return this._disableRipple;
      },
      /**
       * @param {?} value
       * @return {?}
       */
      set: function(value) {
        this._disableRipple = value;
        this._changeDetectorRef.markForCheck();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatOption.prototype, 'active', {
      /**
       * Whether or not the option is currently active and ready to be selected.
       * An active option displays styles as if it is focused, but the
       * focus is actually retained somewhere else. This comes in handy
       * for components like autocomplete where focus must remain on the input.
       * @return {?}
       */
      get: function() {
        return this._active;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatOption.prototype, 'viewValue', {
      /**
       * The displayed value of the option. It is necessary to show the selected option in the
       * select's trigger.
       * @return {?}
       */
      get: function() {
        // TODO(kara): Add input property alternative for node envs.
        return (this._getHostElement().textContent || '').trim();
      },
      enumerable: true,
      configurable: true
    });
    /**
     * Selects the option.
     * @return {?}
     */
    MatOption.prototype.select = function() {
      this._selected = true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent();
    };
    /**
     * Deselects the option.
     * @return {?}
     */
    MatOption.prototype.deselect = function() {
      this._selected = false;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent();
    };
    /**
     * Sets focus onto this option.
     * @return {?}
     */
    MatOption.prototype.focus = function() {
      var /** @type {?} */ element = this._getHostElement();
      if (typeof element.focus === 'function') {
        element.focus();
      }
    };
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */
    MatOption.prototype.setActiveStyles = function() {
      if (!this._active) {
        this._active = true;
        this._changeDetectorRef.markForCheck();
      }
    };
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */
    MatOption.prototype.setInactiveStyles = function() {
      if (this._active) {
        this._active = false;
        this._changeDetectorRef.markForCheck();
      }
    };
    /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    MatOption.prototype.getLabel = function() {
      return this.viewValue;
    };
    /**
     * Ensures the option is selected when activated from the keyboard.
     * @param {?} event
     * @return {?}
     */
    MatOption.prototype._handleKeydown = function(event) {
      if (
        event.keyCode === _angular_cdk_keycodes.ENTER ||
        event.keyCode === _angular_cdk_keycodes.SPACE
      ) {
        this._selectViaInteraction();
        // Prevent the page from scrolling down and form submits.
        event.preventDefault();
      }
    };
    /**
     * Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.
     * @return {?}
     */
    MatOption.prototype._selectViaInteraction = function() {
      if (!this.disabled) {
        this._selected = this.multiple ? !this._selected : true;
        this._changeDetectorRef.markForCheck();
        this._emitSelectionChangeEvent(true);
      }
    };
    /**
     * Returns the correct tabindex for the option depending on disabled state.
     * @return {?}
     */
    MatOption.prototype._getTabIndex = function() {
      return this.disabled ? '-1' : '0';
    };
    /**
     * Gets the host DOM element.
     * @return {?}
     */
    MatOption.prototype._getHostElement = function() {
      return this._element.nativeElement;
    };
    /**
     * Emits the selection change event.
     * @param {?=} isUserInput
     * @return {?}
     */
    MatOption.prototype._emitSelectionChangeEvent = function(isUserInput) {
      if (isUserInput === void 0) {
        isUserInput = false;
      }
      this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
    };
    /**
     * Counts the amount of option group labels that precede the specified option.
     * @param {?} optionIndex Index of the option at which to start counting.
     * @param {?} options Flat list of all of the options.
     * @param {?} optionGroups Flat list of all of the option groups.
     * @return {?}
     */
    MatOption.countGroupLabelsBeforeOption = function(optionIndex, options, optionGroups) {
      if (optionGroups.length) {
        var /** @type {?} */ optionsArray = options.toArray();
        var /** @type {?} */ groups = optionGroups.toArray();
        var /** @type {?} */ groupCounter = 0;
        for (var /** @type {?} */ i = 0; i < optionIndex + 1; i++) {
          if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
            groupCounter++;
          }
        }
        return groupCounter;
      }
      return 0;
    };
    MatOption.decorators = [
      {
        type: core.Component,
        args: [
          {
            selector: 'mat-option',
            exportAs: 'matOption',
            host: {
              role: 'option',
              '[attr.tabindex]': '_getTabIndex()',
              '[class.mat-selected]': 'selected',
              '[class.mat-option-multiple]': 'multiple',
              '[class.mat-active]': 'active',
              '[id]': 'id',
              '[attr.aria-selected]': 'selected.toString()',
              '[attr.aria-disabled]': 'disabled.toString()',
              '[class.mat-option-disabled]': 'disabled',
              '(click)': '_selectViaInteraction()',
              '(keydown)': '_handleKeydown($event)',
              class: 'mat-option'
            },
            template:
              '<span *ngIf="multiple"><mat-pseudo-checkbox class="mat-option-pseudo-checkbox" [state]="selected ? \'checked\' : \'\'" [disabled]="disabled"></mat-pseudo-checkbox></span><span class="mat-option-text"><ng-content></ng-content></span><div class="mat-option-ripple" mat-ripple [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple"></div>',
            encapsulation: core.ViewEncapsulation.None,
            preserveWhitespaces: false,
            changeDetection: core.ChangeDetectionStrategy.OnPush
          }
        ]
      }
    ];
    /**
     * @nocollapse
     */
    MatOption.ctorParameters = function() {
      return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef },
        { type: MatOptgroup, decorators: [{ type: core.Optional }] }
      ];
    };
    MatOption.propDecorators = {
      value: [{ type: core.Input }],
      disabled: [{ type: core.Input }],
      onSelectionChange: [{ type: core.Output }]
    };
    return MatOption;
  })();

  /**
   * InjectionToken that can be used to specify the global placeholder options.
   */
  var MAT_PLACEHOLDER_GLOBAL_OPTIONS = new core.InjectionToken('mat-placeholder-global-options');

  /**
   * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
   * the default separation we chose.
   */
  var MIN_AUTO_TICK_SEPARATION = 30;
  /**
   * The thumb gap size for a disabled slidef.
   */
  var DISABLED_THUMB_GAP = 7;
  /**
   * The thumb gap size for a non-active slidef at its minimum value.
   */
  var MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
  /**
   * The thumb gap size for an active slidef at its minimum value.
   */
  var MIN_VALUE_ACTIVE_THUMB_GAP = 10;
  /**
   * Provider Expression that allows mat-slidef to register as a ControlValueAccessor.
   * This allows it to support [(ngModel)] and [formControl].
   */
  var MAT_Slidef_VALUE_ACCESSOR = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef(function() {
      return MatSlidef;
    }),
    multi: true
  };
  /**
   * A simple change event emitted by the MatSlidef component.
   */
  var MatSlidefChange = (function() {
    function MatSlidefChange() {}
    return MatSlidefChange;
  })();
  /**
   * \@docs-private
   */
  var MatSlidefBase = (function() {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function MatSlidefBase(_renderer, _elementRef) {
      this._renderer = _renderer;
      this._elementRef = _elementRef;
    }
    return MatSlidefBase;
  })();
  var _MatSlidefMixinBase = mixinColor(mixinDisabled(MatSlidefBase), 'accent');
  /**
   * Allows users to select from a range of values by moving the slidef thumb. It is similar in
   * behavior to the native `<input type="range">` element.
   */
  var MatSlidef = (function(_super) {
    __extends(MatSlidef, _super);
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} _focusMonitor
     * @param {?} _changeDetectorRef
     * @param {?} _dir
     */
    function MatSlidef(renderer, elementRef, _focusMonitor, _changeDetectorRef, _dir) {
      var _this = _super.call(this, renderer, elementRef) || this;
      _this._focusMonitor = _focusMonitor;
      _this._changeDetectorRef = _changeDetectorRef;
      _this._dir = _dir;
      _this._invert = false;
      _this._max = 100;
      _this._min = 0;
      _this._step = 1;
      _this._thumbLabel = false;
      _this._tickInterval = 0;
      _this._value = null;
      _this._value2 = null;
      _this._startRange = null;
      _this._vertical = false;
      /**
       * Event emitted when the slidef value has changed.
       */
      _this.change = new core.EventEmitter();
      /**
       * Event emitted when the slidef thumb moves.
       */
      _this.input = new core.EventEmitter();
      /**
       * onTouch function registered via registerOnTouch (ControlValueAccessor).
       */
      _this.onTouched = function() {};
      _this._percent = 0;
      _this._percent2 = 0;
      /**
       * Whether or not the thumb is sliding.
       * Used to determine if there should be a transition for the thumb and fill track.
       */
      _this._isSliding = false;
      /**
       * Whether or not the slidef is active (clicked or sliding).
       * Used to shrink and grow the thumb as according to the Material Design spec.
       */
      _this._isActive = false;
      /**
       * The size of a tick interval as a percentage of the size of the track.
       */
      _this._tickIntervalPercent = 0;
      /**
       * The dimensions of the slidef.
       */
      _this._slidefDimensions = null;
      _this._controlValueAccessorChangeFn = function() {};
      /**
       * Subscription to the Directionality change EventEmitter.
       */
      _this._dirChangeSubscription = rxjs.Subscription.EMPTY;
      return _this;
    }
    Object.defineProperty(MatSlidef.prototype, 'invert', {
      /**
       * Whether the slidef is inverted.
       * @return {?}
       */
      get: function() {
        return this._invert;
      },
      /**
       * @param {?} value
       * @return {?}
       */
      set: function(value) {
        this._invert = coercion.coerceBooleanProperty(value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, 'max', {
      /**
       * The maximum value that the slidef can have.
       * @return {?}
       */
      get: function() {
        return this._max;
      },
      /**
       * @param {?} v
       * @return {?}
       */
      set: function(v) {
        this._max = coercion.coerceNumberProperty(v, this._max);
        this._percent = this._calculatePercentage(this._value);

        if (this.value > this._max) {
          this.value = (this._max - this._min) / 2 + 1;
        }
        if (this.value2 > this._max) {
          this.value = (this._max - this._min) / 2;
        }
        // Since this also modifies the percentage, we need to let the change detection know.
        this._changeDetectorRef.markForCheck();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, 'min', {
      /**
       * The minimum value that the slidef can have.
       * @return {?}
       */
      get: function() {
        return this._min;
      },
      /**
       * @param {?} v
       * @return {?}
       */
      set: function(v) {
        this._min = coercion.coerceNumberProperty(v, this._min);
        // If the value wasn't explicitly set by the user, set it to the min.
        if (this._value === null) {
          this.value = this._min;
        }
        this._percent = this._calculatePercentage(this._value);
        // Since this also modifies the percentage, we need to let the change detection know.
        this._changeDetectorRef.markForCheck();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, 'step', {
      /**
       * The values at which the thumb will snap.
       * @return {?}
       */
      get: function() {
        return this._step;
      },
      /**
       * @param {?} v
       * @return {?}
       */
      set: function(v) {
        this._step = coercion.coerceNumberProperty(v, this._step);
        if (this._step % 1 !== 0) {
          this._roundLabelTo = this._step
            .toString()
            .split('.')
            .pop().length;
        }
        // Since this could modify the label, we need to notify the change detection.
        this._changeDetectorRef.markForCheck();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, 'thumbLabel', {
      /**
       * Whether or not to show the thumb label.
       * @return {?}
       */
      get: function() {
        return this._thumbLabel;
      },
      /**
       * @param {?} value
       * @return {?}
       */
      set: function(value) {
        this._thumbLabel = coercion.coerceBooleanProperty(value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, '_thumbLabelDeprecated', {
      /**
       * @deprecated
       * @return {?}
       */
      get: function() {
        return this._thumbLabel;
      },
      /**
       * @param {?} value
       * @return {?}
       */
      set: function(value) {
        this._thumbLabel = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, 'tickInterval', {
      /**
       * How often to show ticks. Relative to the step so that a tick always appears on a step.
       * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
       * @return {?}
       */
      get: function() {
        return this._tickInterval;
      },
      /**
       * @param {?} value
       * @return {?}
       */
      set: function(value) {
        if (value === 'auto') {
          this._tickInterval = 'auto';
        } else if (typeof value === 'number' || typeof value === 'string') {
          this._tickInterval = coercion.coerceNumberProperty(
            value,
            /** @type {?} */
            (this._tickInterval)
          );
        } else {
          this._tickInterval = 0;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, '_tickIntervalDeprecated', {
      /**
       * @deprecated
       * @return {?}
       */
      get: function() {
        return this.tickInterval;
      },
      /**
       * @param {?} v
       * @return {?}
       */
      set: function(v) {
        this.tickInterval = v;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, 'value', {
      /**
       * Value of the slidef.
       * @return {?}
       */

      get: function() {
        // If the value needs to be read and it is still uninitialized, initialize it to the min.
        if (this._value === null) {
          this.value = this._min;
        }
        return this._value;
      },
      /**
       * @param {?} v
       * @return {?}
       */
      set: function(v) {
        if (v !== this._value) {
          this._value = coercion.coerceNumberProperty(v, this._value || 0);
          if (this.values != null) {
            this.values.range_end = this._value;
            // this.values.range_start = this._value.range_start;
          }
          //end value precentage

          this._percent = this._calculatePercentage(this._value);
          this._emitChangeEvent();
          // console.log('_percent:' + this._percent1);
          // Since this also modifies the percentage, we need to let the change detection know.
          this._changeDetectorRef.markForCheck();
        }
      },
      enumerable: true,
      configurable: true
    });

    Object.defineProperty(MatSlidef.prototype, 'value2', {
      /**
       * Value of the slidef.
       * @return {?}
       */

      get: function() {
        // If the value needs to be read and it is still uninitialized, initialize it to the min.
        if (this._value2 === null) {
          this.value2 = this.values.range_end;
        }
        return this._value2;
      },
      /**
       * @param {?} v
       * @return {?}
       */
      set: function(v) {
        if (v !== this._value2) {
          this._value2 = coercion.coerceNumberProperty(v, this._value2 || 0);
          if (this.values != null) {
            this.values.range_start = this._value2;
            // console.log("start value change111")
            this._emitChangeEvent();
          }

          //start_value precentage
          this._percent2 = this._calculatePercentage(this._value2);
          // console.log('_percent2:' + this._percent2);
          // Since this also modifies the percentage, we need to let the change detection know.
          this._changeDetectorRef.markForCheck();
        }
      },
      enumerable: true,
      configurable: true
    });

    Object.defineProperty(MatSlidef.prototype, 'startRange', {
      /**
       * Value of the slidef.
       * @return {?}
       */

      get: function() {
        // If the value needs to be read and it is still uninitialized, initialize it to the min.
        if (this._startRange === null) {
          this.startRange = this.values.range_end;
        }
        return this.values.range_start;
      },
      /**
       * @param {?} v
       * @return {?}
       */
      set: function(v) {
        if (v !== this._startRange) {
          // this._value2 = coercion.coerceNumberProperty(v, this._value2 || 0);
          // if (this.values != null) {
          //   this.values.range_start = this._value2;
          // }
          this._startRange = v;
          // console.log(this._startRange);
          setTimeout(() => {
            this._value2 = v;
            this.values.range_start = v;
            this._percent2 = this._calculatePercentage(this._startRange);
            this._changeDetectorRef.markForCheck();
          }, 200);
          //start_value precentage
          //this._percent2 = this._calculatePercentage(this._value2);
          // console.log('_percent2:' + this._percent2);
          // Since this also modifies the percentage, we need to let the change detection know.
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, 'vertical', {
      /**
       * Whether the slidef is vertical.
       * @return {?}
       */
      get: function() {
        return this._vertical;
      },
      /**
       * @param {?} value
       * @return {?}
       */
      set: function(value) {
        this._vertical = coercion.coerceBooleanProperty(value);
      },
      enumerable: true,
      configurable: true
    });

    function fraction1(val) {
      if (val.length > 3) {
        return (
          fraction1(val.substring(0, val.length - 3)) +
          ',' +
          val.substring(val.length - 3, val.length)
        );
      } else {
        return val;
      }
    }
    //000,00,00,000
    function fraction2(val) {
      var ln = val.length;
      var rslt = val;
      if (ln > 7) {
        rslt =
          val.substr(0, ln - 7) +
          ',' +
          val.substr(ln - 7, 2) +
          ',' +
          val.substr(ln - 5, 2) +
          ',' +
          val.substring(ln - 3);
      } else if (ln > 5) {
        rslt = val.substr(0, ln - 5) + ',' + val.substr(ln - 5, 2) + ',' + val.substring(ln - 3);
      } else if (ln > 3) {
        rslt = val.substr(0, ln - 3) + ',' + val.substring(ln - 3);
      }
      return rslt;
    }

    function nonmatricCurrency(a, float_) {
      a = '' + a;
      var decimalpart = '' + a;
      var flotpart = 0;
      var i1 = a.indexOf('.');
      if (i1 == a.length - 1) {
        decimalpart = a.substring(0, a.length - 1);
      } else if (i1 > -1) {
        decimalpart = a.substring(0, i1);
        if (a.length - (i1 + 1) > 1) {
          flotpart = a.substr(i1 + 1, 2);
        } else {
          flotpart = a.substring(i1 + 1, a.length);
        }
      }
      if (decimalpart.length > 3) {
        decimalpart = fraction2(decimalpart);
      }
      var rslt = '';

      if (float_) {
        if (flotpart > 0) {
          rslt = decimalpart + '.' + flotpart;
        } else {
          rslt = decimalpart + '.00';
        }
      } else {
        rslt = decimalpart;
      }
      return rslt;
    }

    function matricCurrency(a, float_) {
      a = '' + a;
      var decimalpart = '' + a;
      var flotpart = 0;
      var i1 = a.indexOf('.');
      if (i1 == a.length - 1) {
        decimalpart = a.substring(0, a.length - 1);
      } else if (i1 > -1) {
        decimalpart = a.substring(0, i1);
        if (a.length - (i1 + 1) > 2) {
          flotpart = a.substr(i1 + 1, 3);
        } else {
          flotpart = a.substring(i1 + 1, a.length);
        }
      }

      if (decimalpart.length > 3) {
        decimalpart = fraction1(decimalpart);
      }
      var rslt = '';
      if (float_) {
        if (flotpart > 0) {
          rslt = decimalpart + '.' + flotpart;
        } else {
          rslt = decimalpart;
        }
      } else {
        rslt = decimalpart;
      }

      return rslt;
    }

    function getDisplayText(lng, dvl, float_) {
      if (lng == 'si') {
        if (dvl > 9999999) {
          dvl = dvl / 10000000;
          dvl = '' + dvl;
          var i1 = dvl.indexOf('.');
          dvl = 'කෝටි ' + dvl.substring(0, i1 + 2);
        } else if (dvl > 99999) {
          dvl = dvl / 100000;
          dvl = '' + dvl;
          var i1 = dvl.indexOf('.');
          if (i1 > -1) {
            dvl = dvl.substring(0, i1 + 3);
          }
          dvl = 'ලක්ෂ ' + dvl;
        } else {
          dvl = matricCurrency(dvl, float_);
        }
      } else if (lng == 'en') {
        if (dvl > 999999) {
          dvl = dvl / 1000000;
          dvl = '' + dvl;
          var i1 = dvl.indexOf('.');
          dvl = '' + dvl.substring(0, i1 + 2) + 'M';
        } else {
          dvl = matricCurrency(dvl, float_);
        }
      }

      return dvl;
    }

    Object.defineProperty(MatSlidef.prototype, 'displayValue', {
      /**
       * The value to be used for display purposes.
       * @return {?}
       */
      get: function() {
        var dvl = 0;
        // Note that this could be improved further by rounding something like 0.999 to 1 or
        // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
        // every change detection cycle.
        if (this._roundLabelTo && this.value && this.value % 1 !== 0) {
          dvl = this.value.toFixed(this._roundLabelTo);
        }
        dvl = this.value || 0;
        var lang = this.lang;

        return getDisplayText(this.lang, dvl, this.float_);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, 'displayValue2', {
      /**
       * The value to be used for display purposes.
       * @return {?}
       */
      get: function() {
        var dvl = 0;
        // Note that this could be improved further by rounding something like 0.999 to 1 or
        // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
        // every change detection cycle.
        if (this._roundLabelTo && this.value2 && this.value2 % 1 !== 0) {
          dvl = this.value2.toFixed(this._roundLabelTo);
        }
        dvl = this.value2 || 0;
        return getDisplayText(this.lang, dvl, this.float_);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, 'percent', {
      /**
       * The percentage of the slidef that coincides with the value.
       * @return {?}
       */
      get: function() {
        return this._clamp(this._percent);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, 'percent2', {
      /**
       * The percentage of the slidef that coincides with the value.
       * @return {?}
       */
      get: function() {
        return this._clamp(this._percent2);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, '_invertAxis', {
      /**
       * Whether the axis of the slidef is inverted.
       * (i.e. whether moving the thumb in the positive x or y direction decreases the slidef's value).
       * @return {?}
       */
      get: function() {
        // Standard non-inverted mode for a vertical slidef should be dragging the thumb from bottom to
        // top. However from a y-axis standpoint this is inverted.
        return this.vertical ? !this.invert : this.invert;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, '_isMinValue', {
      /**
       * Whether the slidef is at its minimum value.
       * @return {?}
       */
      get: function() {
        return this.percent === 0;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, '_thumbGap', {
      /**
       * The amount of space to leave between the slidef thumb and the track fill & track background
       * elements.
       * @return {?}
       */
      get: function() {
        if (this.disabled) {
          return DISABLED_THUMB_GAP;
        }
        if (this._isMinValue && !this.thumbLabel) {
          return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
        }
        return 0;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, '_trackBackgroundStyles', {
      /**
       * CSS styles for the track background element.
       * @return {?}
       */
      get: function() {
        var /** @type {?} */ axis = this.vertical ? 'Y' : 'X';
        var /** @type {?} */ sign = this._invertMouseCoords ? '-' : '';
        return {
          transform:
            'translate' + axis + '(' + sign + this._thumbGap + 'px) scale' + axis + '(' + 1 + ')'
        };
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, '_trackBackgroundStyles2', {
      /**
       * CSS styles for the track background element.
       * @return {?}
       */
      get: function() {
        var /** @type {?} */ axis = this.vertical ? 'Y' : 'X';
        var /** @type {?} */ sign = this._invertMouseCoords ? '' : '-';
        return {
          transform: 'translate' + axis + '(' + 100 + '%) scale' + axis + '(' + 0.4 + ')'
        };
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, '_trackFillStyles', {
      /**
       * CSS styles for the track fill element.
       * @return {?}
       */
      get: function() {
        var /** @type {?} */ axis = this.vertical ? 'Y' : 'X';
        var /** @type {?} */ sign = this._invertMouseCoords ? '' : '-';

        return {
          transform:
            'translate' +
            axis +
            '(' +
            this.percent2 * 100 +
            '%) scale' +
            axis +
            '(' +
            (this.percent - this.percent2) +
            ')'
        };
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, '_ticksContainerStyles', {
      /**
       * CSS styles for the ticks container element.
       * @return {?}
       */
      get: function() {
        var /** @type {?} */ axis = this.vertical ? 'Y' : 'X';
        // For a horizontal slidef in RTL languages we push the ticks container off the left edge
        // instead of the right edge to avoid causing a horizontal scrollbar to appear.
        var /** @type {?} */ sign = !this.vertical && this._direction == 'rtl' ? '' : '-';
        var /** @type {?} */ offset = (this._tickIntervalPercent / 2) * 100;
        return {
          transform: 'translate' + axis + '(' + sign + offset + '%)'
        };
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, '_ticksStyles', {
      /**
       * CSS styles for the ticks element.
       * @return {?}
       */
      get: function() {
        var /** @type {?} */ tickSize = this._tickIntervalPercent * 100;
        var /** @type {?} */ backgroundSize = this.vertical
            ? '2px ' + tickSize + '%'
            : tickSize + '% 2px';
        var /** @type {?} */ axis = this.vertical ? 'Y' : 'X';
        // Depending on the direction we pushed the ticks container, push the ticks the opposite
        // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
        // ticks 180 degrees so we're really cutting off the end edge abd not the start.
        var /** @type {?} */ sign = !this.vertical && this._direction == 'rtl' ? '-' : '';
        var /** @type {?} */ rotate =
            !this.vertical && this._direction == 'rtl' ? ' rotate(180deg)' : '';
        var /** @type {?} */ styles = {
            backgroundSize: backgroundSize,
            // Without translateZ ticks sometimes jitter as the slidef moves on Chrome & Firefox.
            transform: 'translateZ(0) translate' + axis + '(' + sign + tickSize / 2 + '%)' + rotate
          };
        if (this._isMinValue && this._thumbGap) {
          var /** @type {?} */ side = this.vertical
              ? this._invertAxis
                ? 'Bottom'
                : 'Top'
              : this._invertAxis
              ? 'Right'
              : 'Left';
          styles['padding' + side] = this._thumbGap + 'px';
        }
        return styles;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, '_thumbContainerStyles', {
      /**
       * @return {?}
       */
      get: function() {
        var /** @type {?} */ axis = this.vertical ? 'Y' : 'X';
        // For a horizontal slidef in RTL languages we push the thumb container off the left edge
        // instead of the right edge to avoid causing a horizontal scrollbar to appear.
        var /** @type {?} */ invertOffset =
            this._direction == 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
        var /** @type {?} */ offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
        return {
          transform: 'translate' + axis + '(-' + offset + '%)'
        };
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, '_thumbContainerStyles2', {
      /**
       * @return {?}
       */
      get: function() {
        var /** @type {?} */ axis = this.vertical ? 'Y' : 'X';
        // For a horizontal slidef in RTL languages we push the thumb container off the left edge
        // instead of the right edge to avoid causing a horizontal scrollbar to appear.
        var /** @type {?} */ invertOffset =
            this._direction == 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
        var /** @type {?} */ offset = (invertOffset ? this.percent2 : 1 - this.percent2) * 100;

        return {
          transform: 'translate' + axis + '(-' + offset + '%)'
        };
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, '_invertMouseCoords', {
      /**
       * Whether mouse events should be converted to a slidef position by calculating their distance
       * from the right or bottom edge of the slidef as opposed to the top or left.
       * @return {?}
       */
      get: function() {
        return this._direction == 'rtl' && !this.vertical ? !this._invertAxis : this._invertAxis;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MatSlidef.prototype, '_direction', {
      /**
       * The language direction for this slidef element.
       * @return {?}
       */
      get: function() {
        return this._dir && this._dir.value == 'rtl' ? 'rtl' : 'ltr';
      },
      enumerable: true,
      configurable: true
    });
    /**
     * @return {?}
     */
    MatSlidef.prototype.ngOnInit = function() {
      var _this = this;
      this._focusMonitor
        .monitor(this._elementRef.nativeElement, this._renderer, true)
        .subscribe(function(origin) {
          _this._isActive = !!origin && origin !== 'keyboard';
          _this._changeDetectorRef.detectChanges();
        });
      if (this._dir) {
        this._dirChangeSubscription = this._dir.change.subscribe(function() {
          _this._changeDetectorRef.markForCheck();
        });
      }
    };
    /**
     * @return {?}
     */
    MatSlidef.prototype.ngOnDestroy = function() {
      this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
      this._dirChangeSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    MatSlidef.prototype._onMouseenter = function() {
      if (this.disabled) {
        return;
      }
      // We save the dimensions of the slidef here so we can use them to update the spacing of the
      // ticks and determine where on the slidef click and slide events happen.
      this._slidefDimensions = this._getSlidefDimensions();
      this._updateTickIntervalPercent();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatSlidef.prototype._onClick = function(event) {
      if (this.disabled) {
        return;
      }
      var /** @type {?} */ oldValue = this.value;
      this._isSliding = false;
      this._focusHostElement();
      this._updateValueFromPosition({ x: event.clientX, y: event.clientY });
      /* Emit a change and input event if the value changed. */
      if (oldValue != this.value) {
        this._emitInputEvent();
        this._emitChangeEvent();
      }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatSlidef.prototype._onSlide = function(event) {
      if (this.disabled) {
        return;
      }
      // The slide start event sometimes fails to fire on iOS, so if we're not already in the sliding
      // state, call the slide start handler manually.
      if (!this._isSliding) {
        this._onSlideStart(null);
      }
      // Prevent the slide from selecting anything else.
      event.preventDefault();
      var /** @type {?} */ oldValue = this.value;
      this._updateValueFromPosition({ x: event.center.x, y: event.center.y });
      // Native range elements always emit `input` events when the value changed while sliding.
      if (oldValue != this.value) {
        this._emitInputEvent();
      }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatSlidef.prototype._onSlideStart = function(event) {
      if (this.disabled || this._isSliding) {
        return;
      }
      // Simulate mouseenter in case this is a mobile device.
      this._onMouseenter();
      this._isSliding = true;
      this._focusHostElement();
      this._valueOnSlideStart = this.value;
      if (event) {
        this._updateValueFromPosition({ x: event.center.x, y: event.center.y });
        event.preventDefault();
      }
    };
    /**
     * @return {?}
     */
    MatSlidef.prototype._onSlideEnd = function() {
      this._isSliding = false;
      if (this._valueOnSlideStart != this.value) {
        this._emitChangeEvent();
      }
      this._valueOnSlideStart = null;
    };
    /**
     * @return {?}
     */
    MatSlidef.prototype._onFocus = function() {
      // We save the dimensions of the slidef here so we can use them to update the spacing of the
      // ticks and determine where on the slidef click and slide events happen.
      this._slidefDimensions = this._getSlidefDimensions();
      this._updateTickIntervalPercent();
    };
    /**
     * @return {?}
     */
    MatSlidef.prototype._onBlur = function() {
      this.onTouched();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatSlidef.prototype._onKeydown = function(event) {
      if (this.disabled) {
        return;
      }
      var /** @type {?} */ oldValue = this.value;
      switch (event.keyCode) {
        case _angular_cdk_keycodes.PAGE_UP:
          this._increment(10);
          break;
        case _angular_cdk_keycodes.PAGE_DOWN:
          this._increment(-10);
          break;
        case _angular_cdk_keycodes.END:
          this.value = this.max;
          break;
        case _angular_cdk_keycodes.HOME:
          this.value = this.min;
          break;
        case _angular_cdk_keycodes.LEFT_ARROW:
          // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
          // inverted slidef the thumb moves in that direction. However for a blind user, nothing
          // about the slidef indicates that it is inverted. They will expect left to be decrement,
          // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
          // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
          // RTL. For inverted slidefs we prefer a good a11y experience to having it "look right" for
          // sighted users, therefore we do not swap the meaning.
          this._increment(this._direction == 'rtl' ? 1 : -1);
          break;
        case _angular_cdk_keycodes.UP_ARROW:
          this._increment(1);
          break;
        case _angular_cdk_keycodes.RIGHT_ARROW:
          // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
          this._increment(this._direction == 'rtl' ? -1 : 1);
          break;
        case _angular_cdk_keycodes.DOWN_ARROW:
          this._increment(-1);
          break;
        default:
          // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
          // it.
          return;
      }
      if (oldValue != this.value) {
        this._emitInputEvent();
        this._emitChangeEvent();
      }
      this._isSliding = true;
      event.preventDefault();
    };
    /**
     * @return {?}
     */
    MatSlidef.prototype._onKeyup = function() {
      this._isSliding = false;
    };
    /**
     * Increments the slidef by the given number of steps (negative number decrements).
     * @param {?} numSteps
     * @return {?}
     */
    MatSlidef.prototype._increment = function(numSteps) {
      this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
    };
    /**
     * Calculate the new value from the new physical location. The value will always be snapped.
     * @param {?} pos
     * @return {?}
     */
    function getModulus(a) {
      if (a < 0) {
        return a * -1;
      }
      return a;
    }
    MatSlidef.prototype._updateValueFromPosition = function(pos) {
      if (!this._slidefDimensions) {
        return;
      }
      var /** @type {?} */ offset = this.vertical
          ? this._slidefDimensions.top
          : this._slidefDimensions.left;
      var /** @type {?} */ size = this.vertical
          ? this._slidefDimensions.height
          : this._slidefDimensions.width;
      var /** @type {?} */ posComponent = this.vertical ? pos.y : pos.x;
      // The exact value is calculated from the event and used to find the closest snap value.
      var /** @type {?} */ percent = this._clamp((posComponent - offset) / size);
      if (this._invertMouseCoords) {
        percent = 1 - percent;
      }
      var /** @type {?} */ exactValue = this._calculateValue(percent);
      // This calculation finds the closest step by finding the closest whole number divisible by the
      // step relative to the min.
      var /** @type {?} */ closestValue =
          Math.round((exactValue - this.min) / this.step) * this.step + this.min;
      // The value needs to snap to the min and max.
      if (this.value > this.max || this.value < this.min) {
        this.value = this.min;
      }
      if (this.value2 > this.max || this.value2 < this.min) {
        this.value2 = this.max;
      }
      if (getModulus(closestValue - this.value) < getModulus(closestValue - this.value2)) {
        this.value = this._clamp(closestValue, this.min, this.max);
      } else {
        this.value2 = this._clamp(closestValue, this.min, this.max);
      }
    };
    /**
     * Emits a change event if the current value is different from the last emitted value.
     * @return {?}
     */
    MatSlidef.prototype._emitChangeEvent = function() {
      this._controlValueAccessorChangeFn(this.value);
      this.change.emit(this._createChangeEvent());
    };
    /**
     * Emits an input event when the current value is different from the last emitted value.
     * @return {?}
     */
    MatSlidef.prototype._emitInputEvent = function() {
      this.input.emit(this._createChangeEvent());
    };
    /**
     * Updates the amount of space between ticks as a percentage of the width of the slidef.
     * @return {?}
     */
    MatSlidef.prototype._updateTickIntervalPercent = function() {
      if (!this.tickInterval || !this._slidefDimensions) {
        return;
      }
      if (this.tickInterval == 'auto') {
        var /** @type {?} */ trackSize = this.vertical
            ? this._slidefDimensions.height
            : this._slidefDimensions.width;
        var /** @type {?} */ pixelsPerStep = (trackSize * this.step) / (this.max - this.min);
        var /** @type {?} */ stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
        var /** @type {?} */ pixelsPerTick = stepsPerTick * this.step;
        this._tickIntervalPercent = pixelsPerTick / trackSize;
      } else {
        this._tickIntervalPercent = (this.tickInterval * this.step) / (this.max - this.min);
      }
    };
    /**
     * Creates a slidef change object from the specified value.
     * @param {?=} value
     * @return {?}
     */
    MatSlidef.prototype._createChangeEvent = function(value) {
      if (value === void 0) {
        value = this.value;
      }
      var /** @type {?} */ event = new MatSlidefChange();
      event.source = this;
      event.value = value;

      return event;
    };
    /**
     * Calculates the percentage of the slidef that a value is.
     * @param {?} value
     * @return {?}
     */
    MatSlidef.prototype._calculatePercentage = function(value) {
      return ((value || 0) - this.min) / (this.max - this.min);
    };
    /**
     * Calculates the value a percentage of the slidef corresponds to.
     * @param {?} percentage
     * @return {?}
     */
    MatSlidef.prototype._calculateValue = function(percentage) {
      return this.min + percentage * (this.max - this.min);
    };
    /**
     * Return a number between two numbers.
     * @param {?} value
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    MatSlidef.prototype._clamp = function(value, min, max) {
      if (min === void 0) {
        min = 0;
      }
      if (max === void 0) {
        max = 1;
      }
      return Math.max(min, Math.min(value, max));
    };
    /**
     * Get the bounding client rect of the slidef track element.
     * The track is used rather than the native element to ignore the extra space that the thumb can
     * take up.
     * @return {?}
     */
    MatSlidef.prototype._getSlidefDimensions = function() {
      return this._slidefWrapper ? this._slidefWrapper.nativeElement.getBoundingClientRect() : null;
    };
    /**
     * Focuses the native element.
     * Currently only used to allow a blur event to fire but will be used with keyboard input later.
     * @return {?}
     */
    MatSlidef.prototype._focusHostElement = function() {
      this._elementRef.nativeElement.focus();
    };
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    MatSlidef.prototype.writeValue = function(value) {
      this.value = value;
    };
    /**
     * Registers a callback to eb triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    MatSlidef.prototype.registerOnChange = function(fn) {
      this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Registers a callback to be triggered when the component is touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    MatSlidef.prototype.registerOnTouched = function(fn) {
      this.onTouched = fn;
    };
    /**
     * Sets whether the component should be disabled.
     * Implemented as part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    MatSlidef.prototype.setDisabledState = function(isDisabled) {
      this.disabled = isDisabled;
    };
    MatSlidef.decorators = [
      {
        type: core.Component,
        args: [
          {
            selector: 'mat-slidef',
            exportAs: 'matSlidef',
            providers: [MAT_Slidef_VALUE_ACCESSOR],
            host: {
              '(focus)': '_onFocus()',
              '(blur)': '_onBlur()',
              '(click)': '_onClick($event)',
              '(keydown)': '_onKeydown($event)',
              '(keyup)': '_onKeyup()',
              '(mouseenter)': '_onMouseenter()',
              '(slide)': '_onSlide($event)',
              '(slideend)': '_onSlideEnd()',
              '(slidestart)': '_onSlideStart($event)',
              class: 'mat-slidef',
              role: 'slidef',
              tabindex: '0',
              '[attr.aria-disabled]': 'disabled',
              '[attr.aria-valuemax]': 'max',
              '[attr.aria-valuemin]': 'min',
              '[attr.aria-valuenow]': 'value',
              '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
              '[class.mat-slidef-disabled]': 'disabled',
              '[class.mat-slidef-has-ticks]': 'tickInterval',
              '[class.mat-slidef-horizontal]': '!vertical',
              '[class.mat-slidef-axis-inverted]': '_invertAxis',
              '[class.mat-slidef-sliding]': '_isSliding',
              '[class.cdk-focused]': 'true',
              '[class.cdk-mouse-focused]': 'true',
              '[class.mat-slidef-thumb-label-showing]': 'thumbLabel',
              '[class.mat-slidef-vertical]': 'vertical',
              '[class.mat-slidef-min-value]': '_isMinValue',
              '[class.mat-slidef-hide-last-tick]':
                'disabled || _isMinValue && _thumbGap && _invertAxis'
            },
            template:
              '<div class="mat-slidef-wrapper" #slidefWrapper> <div class="mat-slidef-track-wrapper"> <div class="mat-slidef-track-background" [ngStyle]="_trackBackgroundStyles"></div> <div class="mat-slidef-track-fill" [ngStyle]="_trackFillStyles"></div> </div> <div class="mat-slidef-ticks-container " [ngStyle]="_ticksContainerStyles"> <div class="1mat-slidef-ticks" [ngStyle]="_ticksStyles"></div> </div> <div class="mat-slidef-thumb-container" [ngStyle]="_thumbContainerStyles"> <div class="mat-slidef-focus-ring"></div>  <div class="mat-slidef-thumb"></div> <div class="mat-slidef-thumb-label"><span class="mat-slidef-thumb-label-text">{{displayValue}}</span></div> </div> <div class="mat-slidef-thumb-container" [ngStyle]="_thumbContainerStyles2"> <div class="mat-slidef-focus-ring"></div> <div class="mat-slidef-thumb" ></div> <div class="mat-slidef-thumb-label"><span class="mat-slidef-thumb-label-text">{{displayValue2}}</span></div> </div></div>',
            styles: [
              '.mat-slidef { display: inline-block; position: relative; box-sizing: border-box; padding: 8px; outline: 0; vertical-align: middle;}.mat-slidef-wrapper { position: absolute;}.mat-slidef-track-wrapper { position: absolute; top: 0; left: 0; overflow: hidden;} .mat-slidef-track-fill { position: absolute; transform-origin: 0 0; background: #5e9cd4; opacity: 1; transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);}.mat-slidef-track-background2 { position: absolute; transform-origin: 0% 0%; transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);}.mat-slidef-track-background { position: absolute; transform-origin: 100% 100%; background: #444444; transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);}.mat-slidef-ticks-container { position: absolute; left: 0; top: 0; overflow: hidden;}.mat-slidef-ticks { background-repeat: repeat; background-clip: content-box; box-sizing: border-box; opacity: 0; transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);}.mat-slidef-thumb-container { position: absolute; z-index: 1; transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);}.mat-slidef-focus-ring { position: absolute; width: 30px; height: 30px; border-radius: 50%; transform: scale(0); opacity: 0; transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);}.cdk-keyboard-focused .mat-slidef-focus-ring { transform: scale(1); opacity: 1;}.mat-slidef:not(.mat-slidef-disabled) .mat-slidef-thumb,.mat-slidef:not(.mat-slidef-disabled) .mat-slidef-thumb-label { cursor: -webkit-grab; cursor: grab;}.mat-slidef-sliding:not(.mat-slidef-disabled) .mat-slidef-thumb,.mat-slidef-sliding:not(.mat-slidef-disabled) .mat-slidef-thumb-label,.mat-slidef:not(.mat-slidef-disabled) .mat-slidef-thumb-label:active,.mat-slidef:not(.mat-slidef-disabled) .mat-slidef-thumb:active { cursor: -webkit-grabbing; cursor: grabbing;}.mat-slider-thumb { position: absolute; right: -10px; bottom: -10px; box-sizing: border-box; width: 20px; height: 20px; border: 3px solid transparent; border-radius: 50%; transform: scale(0.7); transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);}.mat-slidef-thumb-label { display: none; align-items: center; justify-content: center; text-align: center; position: absolute; padding-top: -20px; width: 32px; height: 32px; border-radius: 50%; background: #5e9cd4; transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), border-radius 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);}.mat-slidef-thumb-label-text { z-index: 1; opacity: 0; transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);}.mat-slidef-sliding .mat-slidef-thumb-container,.mat-slidef-sliding .mat-slidef-track-background,.mat-slidef-sliding .mat-slidef-track-fill { transition-duration: 0s;}.mat-slidef-has-ticks .mat-slidef-wrapper::after { content: ""; position: absolute; border-width: 0; border-style: solid; opacity: 0; transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);}.mat-slidef-has-ticks.cdk-focused:not(.mat-slidef-hide-last-tick) .mat-slidef-wrapper::after,.mat-slidef-has-ticks:hover:not(.mat-slidef-hide-last-tick) .mat-slidef-wrapper::after { opacity: 1;}.mat-slidef-has-ticks.cdk-focused:not(.mat-slidef-disabled) .mat-slidef-ticks,.mat-slidef-has-ticks:hover:not(.mat-slidef-disabled) .mat-slidef-ticks { opacity: 1;}.mat-slidef-thumb-label-showing .mat-slidef-focus-ring { transform: scale(0); opacity: 0;}.mat-slidef-thumb-label-showing .mat-slidef-thumb-label { display: flex;}.mat-slidef-axis-inverted .mat-slidef-track-fill { transform-origin: 100% 100%;}.mat-slidef-axis-inverted .mat-slidef-track-background { transform-origin: 0 0;}.mat-slidef:not(.mat-slidef-disabled).cdk-focused.mat-slidef-thumb-label-showing .mat-slidef-thumb { transform: scale(0);}.mat-slidef:not(.mat-slidef-disabled) .mat-slidef-thumb-label { border-radius: 50% 50% 0;}.mat-slidef:not(.mat-slidef-disabled) .mat-slidef-thumb-label-text { opacity: 1;}.mat-slidef:not(.mat-slidef-disabled).cdk-mouse-focused .mat-slidef-thumb,.mat-slidef:not(.mat-slidef-disabled).cdk-program-focused .mat-slidef-thumb,.mat-slidef:not(.mat-slidef-disabled).cdk-touch-focused .mat-slidef-thumb { border-width: 2px; transform: scale(1);}.mat-slidef-disabled .mat-slidef-focus-ring { transform: scale(0); opacity: 0;}.mat-slidef-disabled .mat-slidef-thumb { border-width: 4px; transform: scale(0.5);}.mat-slidef-disabled .mat-slidef-thumb-label { display: none;}.mat-slidef-horizontal { height: 48px; min-width: 128px;}.mat-slidef-horizontal .mat-slidef-wrapper { height: 2px; top: 23px; left: 8px; right: 8px;}.mat-slidef-horizontal .mat-slidef-wrapper::after { height: 2px; border-left-width: 2px; right: 0; top: 0;}.mat-slidef-horizontal .mat-slidef-track-wrapper { height: 2px; width: 100%;}.mat-slidef-horizontal .mat-slidef-track-fill { height: 2px; width: 100%; transform: scaleX(0);}.mat-slidef-horizontal .mat-slidef-track-background { height: 2px; width: 100%; transform: scaleX(1);}.mat-slidef-horizontal .mat-slidef-ticks-container { height: 2px; width: 100%;}.mat-slidef-horizontal .mat-slidef-ticks { height: 2px; width: 100%;}.mat-slidef-horizontal .mat-slidef-thumb-container { width: 100%; height: 0; top: 50%;}.mat-slidef-horizontal .mat-slidef-focus-ring { top: -15px; right: -15px;}.mat-slidef-horizontal .mat-slidef-thumb-label { right: -14px; top: -40px; transform: translateY(26px) scale(0.01) rotate(45deg);}.mat-slidef-horizontal .mat-slidef-thumb-label-text { transform: rotate(-45deg);}.mat-slidef-horizontal .mat-slidef-thumb-label { transform: rotate(45deg);}.mat-slidef-vertical { width: 48px; min-height: 128px;}.mat-slidef-vertical .mat-slidef-wrapper { width: 2px; top: 8px; bottom: 8px; left: 23px;}.mat-slidef-vertical .mat-slidef-wrapper::after { width: 2px; border-top-width: 2px; bottom: 0; left: 0;}.mat-slidef-vertical .mat-slidef-track-wrapper { height: 100%; width: 2px;}.mat-slidef-vertical .mat-slidef-track-fill { height: 100%; width: 2px; transform: scaleY(0);}.mat-slidef-vertical .mat-slidef-track-background { height: 100%; width: 2px; transform: scaleY(1);}.mat-slidef-vertical .mat-slidef-ticks-container { width: 2px; height: 100%;}.mat-slidef-vertical .mat-slidef-focus-ring { bottom: -15px; left: -15px;}.mat-slidef-vertical .mat-slidef-ticks { width: 2px; height: 100%;}.mat-slidef-vertical .mat-slidef-thumb-container { height: 100%; width: 0; left: 50%;}.mat-slidef-vertical .mat-slidef-thumb-label { bottom: -14px; left: -40px; transform: translateX(26px) scale(0.01) rotate(-45deg);}.mat-slidef-vertical .mat-slidef-thumb-label-text { transform: rotate(45deg);}.mat-slidef-vertical .mat-slidef-thumb-label { transform: rotate(-45deg);}[dir="rtl"] .mat-slidef-wrapper::after { left: 0; right: auto;}[dir="rtl"] .mat-slidef-horizontal .mat-slidef-track-fill { transform-origin: 100% 100%;}[dir="rtl"] .mat-slidef-horizontal .mat-slidef-track-background { transform-origin: 0 0;}[dir="rtl"] .mat-slidef-horizontal.mat-slidef-axis-inverted .mat-slidef-track-fill { transform-origin: 0 0;}[dir="rtl"] .mat-slidef-horizontal.mat-slidef-axis-inverted .mat-slidef-track-background { transform-origin: 100% 100%;}   .mat-slidef-thumb{ position: absolute; right: -7px; bottom: -7px; box-sizing: border-box; width: 15px; height: 15px; border: 3px solid transparent; border-radius: 50%; transform: scale(.7);  }'
            ],
            inputs: ['disabled', 'color'],
            encapsulation: core.ViewEncapsulation.None,
            preserveWhitespaces: false,
            changeDetection: core.ChangeDetectionStrategy.OnPush
          }
        ]
      }
    ];
    /**
     * @nocollapse
     */
    MatSlidef.ctorParameters = function() {
      return [
        { type: core.Renderer2 },
        { type: core.ElementRef },
        { type: a11y.FocusMonitor },
        { type: core.ChangeDetectorRef },
        {
          type: bidi.Directionality,
          decorators: [{ type: core.Optional }]
        }
      ];
    };
    MatSlidef.propDecorators = {
      invert: [{ type: core.Input }],
      values: [{ type: core.Input }],
      value2: [{ type: core.Input }],
      startRange: [{ type: core.Input }],
      max: [{ type: core.Input }],
      min: [{ type: core.Input }],
      step: [{ type: core.Input }],
      lang: [{ type: core.Input }],
      float_: [{ type: core.Input }],
      endpoint: [{ type: core.Input }],
      thumbLabel: [{ type: core.Input }],
      _thumbLabelDeprecated: [{ type: core.Input, args: ['thumb-label'] }],
      tickInterval: [{ type: core.Input }],
      _tickIntervalDeprecated: [{ type: core.Input, args: ['tick-interval'] }],
      value: [{ type: core.Input }],
      vertical: [{ type: core.Input }],
      change: [{ type: core.Output }],
      input: [{ type: core.Output }],

      _slidefWrapper: [{ type: core.ViewChild, args: ['slidefWrapper'] }]
    };
    return MatSlidef;
  })(_MatSlidefMixinBase);

  var MatSlidefModule = (function() {
    function MatSlidefModule() {}
    MatSlidefModule.decorators = [
      {
        type: core.NgModule,
        args: [
          {
            imports: [common.CommonModule, MatCommonModule, bidi.BidiModule, a11y.A11yModule],
            exports: [MatSlidef, MatCommonModule],
            declarations: [MatSlidef],
            providers: [
              {
                provide: platformBrowser.HAMMER_GESTURE_CONFIG,
                useClass: GestureConfig
              }
            ]
          }
        ]
      }
    ];
    /**
     * @nocollapse
     */
    MatSlidefModule.ctorParameters = function() {
      return [];
    };
    return MatSlidefModule;
  })();

  exports.MatSlidefModule = MatSlidefModule;
  exports.MAT_Slidef_VALUE_ACCESSOR = MAT_Slidef_VALUE_ACCESSOR;
  exports.MatSlidefChange = MatSlidefChange;
  exports.MatSlidefBase = MatSlidefBase;
  exports._MatSlidefMixinBase = _MatSlidefMixinBase;
  exports.MatSlidef = MatSlidef;

  Object.defineProperty(exports, '__esModule', { value: true });
});
// sourceMappingURL = "material-slidef.umd.js.map"
