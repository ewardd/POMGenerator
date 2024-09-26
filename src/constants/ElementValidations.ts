import { ElementTypeEnum } from './enums';

export const ElementValidations = {
  [ElementTypeEnum.Button]: {
    hasClick: {
      title: 'Click',
      defaultValue: true,
    },
    hasVisibilityValidation: {
      title: 'Visibility',
      defaultValue: false,
    },
    hasTitleValidation: {
      title: 'Title',
      defaultValue: false,
    },
    hasExistValidation: {
      title: 'Existence',
      defaultValue: true,
    },
    hasNotExistValidation: {
      title: 'Non-Existence',
      defaultValue: true,
    },
    hasTextValidation: {
      title: 'Text',
      defaultValue: true,
    },
    hasTextIncludeValidation: {
      title: 'Text Include',
      defaultValue: false,
    },
    hasContainValidation: {
      title: 'Contain',
      defaultValue: false,
    },
    hasDisabledValidation: {
      title: 'Disabled',
      defaultValue: false,
    },
    hasNotDisabledValidation: {
      title: 'Not Disabled',
      defaultValue: false,
    },
    hasAttributeValidation: {
      title: 'Attribute',
      defaultValue: false,
    },
  },
  [ElementTypeEnum.Field]: {
    hasClick: {
      title: 'Click',
      defaultValue: false,
    },
    hasVisibilityValidation: {
      title: 'Visibility',
      defaultValue: false,
    },
    hasTitleValidation: {
      title: 'Title',
      defaultValue: false,
    },
    hasExistValidation: {
      title: 'Existence',
      defaultValue: true,
    },
    hasNotExistValidation: {
      title: 'Non-Existence',
      defaultValue: true,
    },
    hasTextValidation: {
      title: 'Text',
      defaultValue: true,
    },
    hasTextIncludeValidation: {
      title: 'Text Include',
      defaultValue: false,
    },
    hasContainValidation: {
      title: 'Contain',
      defaultValue: true,
    },
    hasDisabledValidation: {
      title: 'Disabled',
      defaultValue: false,
    },
    hasNotDisabledValidation: {
      title: 'Not Disabled',
      defaultValue: false,
    },
    hasAttributeValidation: {
      title: 'Attribute',
      defaultValue: false,
    },
    hasValueValidation: {
      title: 'Value',
      defaultValue: false,
    },
  },
  [ElementTypeEnum.InputField]: {
    hasClick: {
      title: 'Click',
      defaultValue: false,
    },
    hasVisibilityValidation: {
      title: 'Visibility',
      defaultValue: false,
    },
    hasTitleValidation: {
      title: 'Title',
      defaultValue: false,
    },
    hasExistValidation: {
      title: 'Existence',
      defaultValue: true,
    },
    hasNotExistValidation: {
      title: 'Non-Existence',
      defaultValue: true,
    },
    hasTextValidation: {
      title: 'Text',
      defaultValue: false,
    },
    hasTextIncludeValidation: {
      title: 'Text Include',
      defaultValue: false,
    },
    hasContainValidation: {
      title: 'Contain',
      defaultValue: false,
    },
    hasDisabledValidation: {
      title: 'Disabled',
      defaultValue: false,
    },
    hasNotDisabledValidation: {
      title: 'Not Disabled',
      defaultValue: false,
    },
    hasAttributeValidation: {
      title: 'Attribute',
      defaultValue: false,
    },
    hasValueValidation: {
      title: 'Value',
      defaultValue: false,
    },
    hasTypeWithoutClear: {
      title: 'Type Without Clear ',
      defaultValue: false,
    },
    hasType: {
      title: 'Type',
      defaultValue: false,
    },
    hasClear: {
      title: 'Clear',
      defaultValue: false,
    },
    hasInvokeValue: {
      title: 'Invoke Value',
      defaultValue: false,
    },
    hasInvokeValueAndInputOne: {
      title: 'Invoke Value And Input One',
      defaultValue: false,
    },
    hasDeleteLastSymbol: {
      title: 'Delete Last Symbol',
      defaultValue: false,
    },
    hasValidateEmpty: {
      title: 'Empty',
      defaultValue: false,
    },
    hasTypeAndCheckValue: {
      title: 'Empty',
      defaultValue: false,
    },
  },
  [ElementTypeEnum.InputFile]: {
    hasClick: {
      title: 'Click',
      defaultValue: false,
    },
    hasVisibilityValidation: {
      title: 'Visibility',
      defaultValue: false,
    },
    hasTitleValidation: {
      title: 'Title',
      defaultValue: false,
    },
    hasExistValidation: {
      title: 'Existence',
      defaultValue: true,
    },
    hasNotExistValidation: {
      title: 'Non-Existence',
      defaultValue: true,
    },
    hasTextValidation: {
      title: 'Text',
      defaultValue: true,
    },
    hasTextIncludeValidation: {
      title: 'Text Include',
      defaultValue: false,
    },
    hasContainValidation: {
      title: 'Contain',
      defaultValue: false,
    },
    hasDisabledValidation: {
      title: 'Disabled',
      defaultValue: false,
    },
    hasNotDisabledValidation: {
      title: 'Not Disabled',
      defaultValue: false,
    },
    hasAttributeValidation: {
      title: 'Attribute',
      defaultValue: false,
    },
    hasUploadFile: {
      title: 'Upload File',
      defaultValue: true,
    },
  },
} as const;
