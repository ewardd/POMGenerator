import { ElementTypeEnum } from '../../../constants/enums';
import { IElementBase } from '../../../types/framework';

const getKeyName = (value: string) =>
  Object.entries(ElementTypeEnum).find(([key, val]) => val === value)?.[0];

export class ElementMethods {
  public static getClickMethod = (
    element: IElementBase
  ): string => `public click${element.title} = () => {
  this.Elements.${getKeyName(element.type)}s.get${element.title}().click();
  return this;
};`;

  public static getVisibilityValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}IsVisible = () => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateIsVisible(); 
  return this;
};`;

  public static getTitleValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}Title = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateTitle('text'); 
  return this;
};`;

  public static getExistValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}Exist = () => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateExists();
  return this;
};`;

  public static getNotExistValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}NotExist = () => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateNotExist();
  return this;
};`;

  public static getTextValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}HaveText = (text: string) => {
  this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateHaveText(text);
  return this;
};`;

  public static getTextIncludeValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}IncludeText = (text: string) => {
  this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateIncludeText(text);
  return this;
};`;

  public static getContainValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}Contains = (text: string) => {
  this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateContains(text);
  return this;
};`;

  public static getDisabledValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}IsDisabled = () => {
  this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateIsDisabled();
  return this;
};`;

  public static getNotDisabledValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}NotDisabled = () => {
  this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateNotDisabled();
  return this;
};`;

  public static getAttributeValidationMethod = (
    element: IElementBase
  ): string => `public validate${
    element.title
  }HasAttribute = (attributeName: string, attributeValue?) => {
  this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateHaveAttribute(attributeName, attributeValue);
  return this;
};`;

  public static getValueValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}Value = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateValue(text);
  return this;
};`;

  public static getTypeWithoutClearMethod = (
    element: IElementBase
  ): string => `public typeInto${element.title}WithClear = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().typeWithoutClear(text);
  return this;
};`;

  public static getTypeMethod = (
    element: IElementBase
  ): string => `public typeInto${element.title} = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${element.title}().type(text);
  return this;
};`;

  public static getClearMethod = (
    element: IElementBase
  ): string => `public clear${element.title} = () => {
this.Elements.${getKeyName(element.type)}s.get${element.title}().clear();
  return this;
};`;

  public static getInvokeValueMethod = (
    element: IElementBase
  ): string => `public invoke${element.title}Value = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().invokeValue(text);
  return this;
};`;

  public static getInvokeValueAndInputOneMethod = (
    element: IElementBase
  ): string => `public invoke${
    element.title
  }ValueAndInputOne = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().invokeValueAndInputOne(text);
  return this;
};`;

  public static getDeleteLastSymbolMethod = (
    element: IElementBase
  ): string => `public delete${element.title}LastSymbol = () => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().deleteLastSymbol();
  return this;
};`;

  public static getValidateEmptyMethod = (
    element: IElementBase
  ): string => `public validate${element.title}IsEmpty = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().validateEmpty(text);
  return this;
};`;

  public static getTypeAndCheckValueMethod = (
    element: IElementBase
  ): string => `public type${element.title}AndCheckValue = (text: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().typeAndCheckValue(text);
  return this;
};`;

  public static getUploadFileMethod = (
    element: IElementBase
  ): string => `public upload${element.title} = (path: string) => {
this.Elements.${getKeyName(element.type)}s.get${
    element.title
  }().uploadFile(text);
  return this;
};`;
}
