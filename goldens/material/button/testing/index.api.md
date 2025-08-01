## API Report File for "@angular/material_button_testing"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarnessConstructor } from '@angular/cdk/testing';
import { ContentContainerComponentHarness } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';

// @public
export type ButtonAppearance = 'text' | 'filled' | 'elevated' | 'outlined' | 'tonal';

// @public
export interface ButtonHarnessFilters extends BaseHarnessFilters {
    appearance?: ButtonAppearance;
    disabled?: boolean;
    text?: string | RegExp;
    variant?: ButtonVariant;
}

// @public
export type ButtonVariant = 'basic' | 'icon' | 'fab' | 'mini-fab';

// @public
export class MatButtonHarness extends ContentContainerComponentHarness {
    blur(): Promise<void>;
    click(relativeX: number, relativeY: number): Promise<void>;
    click(location: 'center'): Promise<void>;
    click(): Promise<void>;
    focus(): Promise<void>;
    getAppearance(): Promise<ButtonAppearance | null>;
    getText(): Promise<string>;
    getVariant(): Promise<ButtonVariant>;
    static hostSelector: string;
    isDisabled(): Promise<boolean>;
    isFocused(): Promise<boolean>;
    static with<T extends MatButtonHarness>(this: ComponentHarnessConstructor<T>, options?: ButtonHarnessFilters): HarnessPredicate<T>;
}

// (No @packageDocumentation comment for this package)

```
