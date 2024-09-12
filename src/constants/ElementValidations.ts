import { ElementTypeEnum } from './enums';

export const ElementValidations = {
  [ElementTypeEnum.Button]: {
    hasClick: {
      title: 'Enable Click Validation',
      defaultValue: false,
    },
    hasTextValidation: {
      title: 'Enable Text Validation',
      defaultValue: false,
    },
    hasTextIncludeValidation: {
      title: 'Enable Text Include Validation',
      defaultValue: false,
    },
    hasExistValidation: {
      title: 'Enable Existence Validation',
      defaultValue: true,
    },
    hasNotExistValidation: {
      title: 'Enable Non-Existence Validation',
      defaultValue: false,
    },
    hasVisibilityValidation: {
      title: 'Enable Visibility Validation',
      defaultValue: true,
    },
  },
  [ElementTypeEnum.InputField]: {
    hasExistValidation: {
      title: 'Enable Existence Validation',
      defaultValue: true,
    },
    hasNotExistValidation: {
      title: 'Enable Non-Existence Validation',
      defaultValue: false,
    },
    hasVisibilityValidation: {
      title: 'Enable Visibility Validation',
      defaultValue: true,
    },
  },
  [ElementTypeEnum.Field]: {},
  [ElementTypeEnum.InputFile]: {},
} as const;
