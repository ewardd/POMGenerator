import { ElementValidations } from '../../../constants/ElementValidations';
import { ElementTypeEnum } from '../../../constants/enums';
import { IElementBase, IValidationKeys } from '../../../types/framework';
import { ElementMethods } from './elementMethods';

export class PomBuilder {
  protected result: string = '';
  protected padding: number = 0;

  private _className: string = '';
  private _extendsClassName?: string;
  private _elements: IElementBase[] = [];

  public withElements(elements: IElementBase[]): this {
    this._elements = elements;
    if (elements.length <= 0) return this;

    this.result += this.withPadding('const elements = {\n');
    this.increasePadding();

    // Elements here

    const { BUTTON, FIELD, INPUT_FIELD, INPUT_FILE } =
      this.getElementsByType(elements);

    this.addElementsByType('Buttons', BUTTON);
    this.addElementsByType('Fields', FIELD);
    this.addElementsByType('InputFields', INPUT_FIELD);
    this.addElementsByType('InputFiles', INPUT_FILE);

    // Elements here

    this.decreasePadding();
    this.result += this.withPadding('};\n');

    return this;
  }

  public withClassName(className: string): this {
    this._className = className;

    this.result += '\n';
    this.result += `export class ${className} {\n`;
    this.increasePadding();

    return this;
  }

  public withExtendsClassName(extendsClassName: string | undefined): this {
    this._extendsClassName = extendsClassName;
    if (!extendsClassName) return this;

    this.result = this.result.replace(
      `export class ${this._className} {`,
      `export class ${this._className} extends ${extendsClassName} {`
    );

    return this;
  }

  public withPrefixes(prefixes: string[]): this {
    if (prefixes.length <= 0) return this;

    this.result += prefixes
      .filter((prefix) => !!prefix.trim())
      .map((prefix) => this.withPadding(prefix))
      .join('\n');
    this.result += '\n\n';

    return this;
  }

  public withElementField(merge: boolean): this {
    if (!merge || !this._extendsClassName) {
      this.result += this.withPadding('protected Elements = elements;');
    } else {
      this.result += this.withPadding('protected Elements = mergeElements(\n');

      this.increasePadding();
      this.result += this.withPadding('this.Elements,\n');
      this.result += this.withPadding('elements,\n');

      this.decreasePadding();
      this.result += this.withPadding(
        `) as ${this._extendsClassName}["Elements"] & typeof elements;`
      );
    }

    this.result += '\n';

    return this;
  }

  public withMethods(): this {
    if (!this._elements.length) return this;

    new Set(
      Object.values(ElementValidations).flatMap((el) => Object.keys(el))
    ).forEach((validation) =>
      this.addMethodsByValidation(validation as IValidationKeys, this._elements)
    );

    return this;
  }

  public build(): string {
    this.padding = 0;
    this.result += this.withPadding('}\n');

    return this.result;
  }

  /* #region Internals */

  protected withPadding(value: string, padding = this.padding): string {
    if (padding < 0)
      console.error('Padding must be greater than 0', padding, value);
    return new Array(padding).fill(' ').join('') + value;
  }

  protected increasePadding() {
    this.padding += 2;
  }

  protected decreasePadding() {
    this.padding -= 2;
  }

  protected getElementsByType(elements: IElementBase[]) {
    return elements.reduce(
      (acc, el) => ({
        ...acc,
        [el.type]: [...(acc[el.type] || []), el],
      }),
      {
        [ElementTypeEnum.Button]: [],
        [ElementTypeEnum.Field]: [],
        [ElementTypeEnum.InputField]: [],
        [ElementTypeEnum.InputFile]: [],
      }
    );
  }

  protected getStringFromElement = (el: IElementBase) => {
    switch (el.type) {
      case ElementTypeEnum.Button:
        return `get${el.title}: () => new ButtonElement(cy.get("${el.selector}"))`;
      case ElementTypeEnum.Field:
        return `get${el.title}: () => new FieldElement(cy.get("${el.selector}"))`;
      case ElementTypeEnum.InputField:
        return `get${el.title}: () => new InputFieldElement(cy.get("${el.selector}"))`;
      case ElementTypeEnum.InputFile:
        return `get${el.title}: () => new InputFileElement(cy.get("${el.selector}"))`;
    }
  };

  protected addElementsByType(title: string, elements: IElementBase[]): void {
    if (!elements.length) return;

    this.result += this.withPadding(`${title}: {\n`);
    this.increasePadding();

    elements.forEach((element) => {
      this.result += `${this.withPadding(
        this.getStringFromElement(element)
      )},\n`;
    });

    this.decreasePadding();
    this.result += this.withPadding(`},\n`);
  }

  protected addMethodsByValidation = (
    validation: IValidationKeys,
    elements: IElementBase[]
  ) => {
    this.result += '\n';
    this.result += this.withPadding(`//#region ${validation}\n`);
    elements.forEach((el) => {
      this.result += '\n';
      this.result += this.getMethodByElement(el, validation)
        .split('\n')
        .map((value) => this.withPadding(value))
        .join('\n');
      this.result += '\n';
    });
    this.result += '\n';
    this.result += this.withPadding(`//#endregion\n`);
  };

  private getMethodByElement = (
    element: IElementBase,
    validation: IValidationKeys
  ): string => {
    switch (validation) {
      case 'hasVisibilityValidation':
        return ElementMethods.getVisibilityValidationMethod(element);
      case 'hasClick':
        return ElementMethods.getClickMethod(element);
      case 'hasVisibilityValidation':
        return ElementMethods.getVisibilityValidationMethod(element);
      case 'hasTitleValidation':
        return ElementMethods.getTitleValidationMethod(element);
      case 'hasExistValidation':
        return ElementMethods.getExistValidationMethod(element);
      case 'hasNotExistValidation':
        return ElementMethods.getNotExistValidationMethod(element);
      case 'hasTextValidation':
        return ElementMethods.getTextValidationMethod(element);
      case 'hasTextIncludeValidation':
        return ElementMethods.getTextIncludeValidationMethod(element);
      case 'hasContainValidation':
        return ElementMethods.getContainValidationMethod(element);
      case 'hasDisabledValidation':
        return ElementMethods.getDisabledValidationMethod(element);
      case 'hasNotDisabledValidation':
        return ElementMethods.getNotDisabledValidationMethod(element);
      case 'hasAttributeValidation':
        return ElementMethods.getAttributeValidationMethod(element);
      case 'hasValueValidation':
        return ElementMethods.getValueValidationMethod(element);
      case 'hasTypeWithoutClear':
        return ElementMethods.getTypeWithoutClearMethod(element);
      case 'hasType':
        return ElementMethods.getTypeMethod(element);
      case 'hasClear':
        return ElementMethods.getClearMethod(element);
      case 'hasInvokeValue':
        return ElementMethods.getInvokeValueMethod(element);
      case 'hasInvokeValueAndInputOne':
        return ElementMethods.getInvokeValueAndInputOneMethod(element);
      case 'hasDeleteLastSymbol':
        return ElementMethods.getDeleteLastSymbolMethod(element);
      case 'hasValidateEmpty':
        return ElementMethods.getValidateEmptyMethod(element);
      case 'hasTypeAndCheckValue':
        return ElementMethods.getTypeAndCheckValueMethod(element);
      case 'hasUploadFile':
        return ElementMethods.getUploadFileMethod(element);
    }
  };
  /* #endregion */
}
