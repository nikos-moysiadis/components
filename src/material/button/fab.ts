/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {
  ChangeDetectionStrategy,
  Component,
  InjectionToken,
  Input,
  ViewEncapsulation,
  booleanAttribute,
  inject,
} from '@angular/core';

import {MatButtonBase} from './button-base';
import {ThemePalette} from '../core';

/** Default FAB options that can be overridden. */
export interface MatFabDefaultOptions {
  /**
   * Default theme color of the button. This API is supported in M2 themes
   * only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/button/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants.
   */
  color?: ThemePalette;
}

/** Injection token to be used to override the default options for FAB. */
export const MAT_FAB_DEFAULT_OPTIONS = new InjectionToken<MatFabDefaultOptions>(
  'mat-mdc-fab-default-options',
  {
    providedIn: 'root',
    factory: MAT_FAB_DEFAULT_OPTIONS_FACTORY,
  },
);

/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
export function MAT_FAB_DEFAULT_OPTIONS_FACTORY(): MatFabDefaultOptions {
  return {
    // The FAB by default has its color set to accent.
    color: 'accent',
  };
}

// Default FAB configuration.
const defaults = MAT_FAB_DEFAULT_OPTIONS_FACTORY();

/**
 * Material Design floating action button (FAB) component. These buttons represent the primary
 * or most common action for users to interact with.
 * See https://m3.material.io/components/floating-action-button/overview
 *
 * The `MatFabButton` class has two appearances: normal and extended.
 */
@Component({
  selector: `button[mat-fab], a[mat-fab], button[matFab], a[matFab]`,
  templateUrl: 'button.html',
  styleUrl: 'fab.css',
  host: {
    'class': 'mdc-fab mat-mdc-fab-base mat-mdc-fab',
    '[class.mdc-fab--extended]': 'extended',
    '[class.mat-mdc-extended-fab]': 'extended',
  },
  exportAs: 'matButton, matAnchor',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatFabButton extends MatButtonBase {
  private _options = inject<MatFabDefaultOptions>(MAT_FAB_DEFAULT_OPTIONS, {optional: true});

  override _isFab = true;

  @Input({transform: booleanAttribute}) extended: boolean;

  constructor(...args: unknown[]);

  constructor() {
    super();
    this._options = this._options || defaults;
    this.color = this._options!.color || defaults.color;
  }
}

/**
 * Material Design mini floating action button (FAB) component. These buttons represent the primary
 * or most common action for users to interact with.
 * See https://m3.material.io/components/floating-action-button/overview
 */
@Component({
  selector: `button[mat-mini-fab], a[mat-mini-fab], button[matMiniFab], a[matMiniFab]`,
  templateUrl: 'button.html',
  styleUrl: 'fab.css',
  host: {
    'class': 'mdc-fab mat-mdc-fab-base mdc-fab--mini mat-mdc-mini-fab',
  },
  exportAs: 'matButton, matAnchor',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatMiniFabButton extends MatButtonBase {
  private _options = inject<MatFabDefaultOptions>(MAT_FAB_DEFAULT_OPTIONS, {optional: true});

  override _isFab = true;

  constructor(...args: unknown[]);

  constructor() {
    super();
    this._options = this._options || defaults;
    this.color = this._options!.color || defaults.color;
  }
}

// tslint:disable:variable-name
/**
 * Material Design floating action button (FAB) component for anchor elements. Anchor elements
 * are used to provide links for the user to navigate across different routes or pages.
 * See https://m3.material.io/components/floating-action-button/overview
 *
 * The `MatFabAnchor` class has two appearances: normal and extended.
 */
export const MatFabAnchor = MatFabButton;
export type MatFabAnchor = MatFabButton;

/**
 * Material Design mini floating action button (FAB) component for anchor elements. Anchor elements
 * are used to provide links for the user to navigate across different routes or pages.
 * See https://m3.material.io/components/floating-action-button/overview
 */
export const MatMiniFabAnchor = MatMiniFabButton;
export type MatMiniFabAnchor = MatMiniFabButton;
// tslint:enable:variable-name
