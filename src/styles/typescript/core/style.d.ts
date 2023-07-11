import type { StyleRule } from '@vanilla-extract/css';

export type StyleClass = string;
export type StyleConstant = string | number | boolean;
export type StyleFunction = (...params: any[]) => StyleConstant;
export type StyleMixin = (...params: any[]) => StyleRule;
export type StyleSelector = string;

export interface Style {
  class?: Record<string, StyleClass>;
  constant?: Record<string, StyleConstant>;
  function?: Record<string, StyleFunction>;
  mixin?: Record<string, StyleMixin>;
  selector?: Record<string, StyleSelector>;
}
