import { InjectionKey, WritableComputedRef } from 'vue';

export interface YkRadioGroupProps {
  modelValue: string | number | boolean;
  disabled?: boolean;
  fill?: string;
  textColor?: string;
}

export interface YkRadioGroupContext {
  activeLabel: WritableComputedRef<string | number | boolean | undefined>;
  disabled?: boolean;
  fill?: string;
  textColor?: string;
  handleChange?: (value: string | number | boolean) => void;
}

export interface YkRadioProps {
  modelValue?: string | number | boolean;
  label: string | number | boolean;
  disabled?: boolean;
  border?: boolean;
}

export const YkRadioGroupContextKey: InjectionKey<YkRadioGroupContext> =
  Symbol('YkRadioGroupContextKey');
