import { ElementTypeEnum } from '../../../constants/enums';
import { IElementBase } from '../../../types/framework';

const getKeyName = (value: string) =>
  Object.entries(ElementTypeEnum).find(([key, val]) => val === value)?.[0];

export class ElementMethods {
  public static getClickMethod = (
    element: IElementBase
  ): string => `public click${element.title} = () => {
  this.Elements.${getKeyName(element.type)}s.get${element.title}().click();
};`;

  public static getVisibilityValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}IsVisible = () => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateIsVisible(); 
};`;

  public static getTitleValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}Title = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateTitle('text'); 
};`;

  public static getExistValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}Exist = () => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateExists();
};`;

  public static getNotExistValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}NotExist = () => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateNotExist();
};`;

  public static getTextValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}HaveText = (text: string) => {
  this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateHaveText(text);
};`;

  public static getTextIncludeValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}IncludeText = (text: string) => {
  this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateIncludeText(text);
};`;

  public static getContainValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}Contains = (text: string) => {
  this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateContains(text);
};`;

  public static getDisabledValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}IsDisabled = () => {
  this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateIsDisabled();
};`;

  public static getNotDisabledValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}NotDisabled = () => {
  this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateNotDisabled();
};`;

  public static getAttributeValidationMethod = (
    element: IElementBase
  ): string => `public validate${
    element.title
  }HasAttribute = (attributeName: string, attributeValue?) => {
  this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateHaveAttribute(attributeName, attributeValue);
};`;

  public static getValueValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}Value = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateValue(text);
};`;

  public static getTypeWithoutClearMethod = (
    element: IElementBase
  ): string => `public typeInto${element.title}WithClear = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().typeWithoutClear(text);
};`;

  public static getTypeMethod = (
    element: IElementBase
  ): string => `public typeInto${element.title} = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${element.title}().type(text);
};`;

  public static getClearMethod = (
    element: IElementBase
  ): string => `public clear${element.title} = () => {
this.Elements.${getKeyName(element.type)}s.get${element.title}().clear();
};`;

  public static getInvokeValueMethod = (
    element: IElementBase
  ): string => `public invoke${element.title}Value = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().invokeValue(text);
};`;

  public static getInvokeValueAndInputOneMethod = (
    element: IElementBase
  ): string => `public invoke${
    element.title
  }ValueAndInputOne = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().invokeValueAndInputOne(text);
};`;

  public static getDeleteLastSymbolMethod = (
    element: IElementBase
  ): string => `public delete${element.title}LastSymbol = () => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().deleteLastSymbol();
};`;

  public static getValidateEmptyMethod = (
    element: IElementBase
  ): string => `public validate${element.title}IsEmpty = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateEmpty(text);
};`;

  public static getTypeAndCheckValueMethod = (
    element: IElementBase
  ): string => `public type${element.title}AndCheckValue = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().typeAndCheckValue(text);
};`;

  public static getUploadFileMethod = (
    element: IElementBase
  ): string => `public upload${element.title} = (path: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().uploadFile(text);
};`;
}
