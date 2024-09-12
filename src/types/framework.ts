import { WritableSignal } from '@angular/core';
import { ElementTypeEnum } from '../constants/enums';
import { ElementValidations } from '../constants/ElementValidations';

export interface IElementBase<T extends ElementTypeEnum = ElementTypeEnum> {
  id: string;

  type: ElementTypeEnum;
  title: string;
  selector: string;

  validations: Record<
    keyof (typeof ElementValidations)[T],
    WritableSignal<boolean>
  >;
}

export interface IButtonValidations
  extends IElementBase<ElementTypeEnum.Button> {
  validations: {
    hasClick: WritableSignal<boolean>;
    hasTextValidation: WritableSignal<boolean>;
    hasTextIncludeValidation: WritableSignal<boolean>;
    hasExistValidation: WritableSignal<boolean>;
    hasNotExistValidation: WritableSignal<boolean>;
    hasVisibilityValidation: WritableSignal<boolean>;
  };
}

export interface IInputValidations
  extends IElementBase<ElementTypeEnum.InputField> {
  validations: {
    hasExistValidation: WritableSignal<boolean>;
    hasNotExistValidation: WritableSignal<boolean>;
    hasVisibilityValidation: WritableSignal<boolean>;
  };
}
