import { WritableSignal } from '@angular/core';
import { ElementTypeEnum } from '../constants/enums';
import { ElementValidations } from '../constants/ElementValidations';

export interface IElementBase<T extends ElementTypeEnum = ElementTypeEnum> {
  id: string;

  type: T;
  title: string;
  selector: string;

  validations: Record<
    keyof (typeof ElementValidations)[T],
    WritableSignal<boolean>
  >;
}

/**
 * TODO: Probably need a full list of all possible validations
 * Required for sorting by methods instead of elements (like it's done right now)
 *
 * @see ElementMethods
 */
export type IValidationKeys =
  | keyof (typeof ElementValidations)['BUTTON']
  | keyof (typeof ElementValidations)['FIELD']
  | keyof (typeof ElementValidations)['INPUT_FIELD']
  | keyof (typeof ElementValidations)['INPUT_FILE'];
