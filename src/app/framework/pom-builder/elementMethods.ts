import { IElementBase } from '../../../types/framework';

export class ElementMethods {
  public static getClickMethod = (
    element: IElementBase
  ): string => `public click${element.title}() {
  this.Elements.${element.selector}.click();
};`;

  public static getVisibilityValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}IsVisible = () => {
this.Elements.${element.selector}.validateIsVisible(); 
};`;

  public static getTitleValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}Title = (text: string) => {
this.Elements.${element.selector}.validateTitle('text'); 
};`;

  public static getExistValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}Exist = () => {
this.Elements.${element.selector}.validateExists();
};`;

  public static getNotExistValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}NotExist = () => {
this.Elements.${element.selector}.validateNotExist();
};`;

  public static getTextValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}HaveText = (text: string) => {
  this.Elements.${element.selector}.validateHaveText(text);
};`;

  public static getTextIncludeValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}IncludeText = (text: string) => {
  this.Elements.${element.selector}.validateIncludeText(text);
};`;

  public static getContainValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}Contains = (text: string) => {
  this.Elements.${element.selector}.validateContains(text);
};`;

  public static getDisabledValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}IsDisabled = () => {
  this.Elements.${element.selector}.validateIsDisabled();
};`;

  public static getNotDisabledValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}NotDisabled = () => {
  this.Elements.${element.selector}.validateNotDisabled();
};`;

  public static getAttributeValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}HasAttribute = (attributeName: string, attributeValue?) => {
  this.Elements.${element.selector}.validateHaveAttribute(attributeName, attributeValue);
};`;

  public static getValueValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}Value = (text: string) => {
this.Elements.${element.selector}.validateValue(text);
};`;

  public static getTypeWithoutClearMethod = (
    element: IElementBase
  ): string => `public typeInto${element.title}WithClear = (text: string) => {
this.Elements.${element.selector}.typeWithoutClear(text);
};`;

  public static getTypeMethod = (
    element: IElementBase
  ): string => `public typeInto${element.title} = (text: string) => {
this.Elements.${element.selector}.type(text);
};`;

  public static getClearMethod = (
    element: IElementBase
  ): string => `public clear${element.title} = () => {
this.Elements.${element.selector}.clear();
};`;

  public static getInvokeValueMethod = (
    element: IElementBase
  ): string => `public invoke${element.title}Value = (text: string) => {
this.Elements.${element.selector}.invokeValue(text);
};`;

  public static getInvokeValueAndInputOneMethod = (
    element: IElementBase
  ): string => `public invoke${element.title}ValueAndInputOne = (text: string) => {
this.Elements.${element.selector}.invokeValueAndInputOne(text);
};`;

  public static getDeleteLastSymbolMethod = (
    element: IElementBase
  ): string => `public delete${element.title}LastSymbol = () => {
this.Elements.${element.selector}.deleteLastSymbol();
};`;

  public static getValidateEmptyMethod = (
    element: IElementBase
  ): string => `public validate${element.title}IsEmpty = (text: string) => {
this.Elements.${element.selector}.validateEmpty(text);
};`;

  public static getTypeAndCheckValueMethod = (
    element: IElementBase
  ): string => `public type${element.title}AndCheckValue = (text: string) => {
this.Elements.${element.selector}.typeAndCheckValue(text);
};`;

  public static getUploadFileMethod = (
    element: IElementBase
  ): string => `public upload${element.title} = (path: string) => {
this.Elements.${element.selector}.uploadFile(text);
};`;
}
