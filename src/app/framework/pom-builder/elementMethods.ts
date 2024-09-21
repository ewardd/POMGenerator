import { IElementBase } from '../../../types/framework';

export class ElementMethods {
  public static getClickMethod = (
    element: IElementBase
  ): string => `public click${element.title}() {
  this.Elements.${element.selector}.click();
};`;

  public static getTextValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}HaveText = (text: string) => {
  this.Elements.${element.selector}.should('have.text', text);
};`;

  public static getTextIncludeValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}IncludeText = (text: string) => {
  this.Elements.${element.selector}.should('include.text', text);
};`;

  public static getExistValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}Exist = () => {
  this.Elements.${element.selector}.should('exist');
};`;

  public static getNotExistValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}NotExist = () => {
  this.Elements.${element.selector}.should('not.exist');
};`;

  public static getVisibilityValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}IsVisible = () => {
  this.Elements.${element.selector}.should('be.visible'); 
};`;

  public static getNotVisibleValidationMethod = (
    element: IElementBase
  ): string => `public validate${element.title}IsNotVisible = () => {
  this.Elements.${element.selector}.should('not.be.visible'); 
};`;
}
