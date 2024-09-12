import { Validators } from '@angular/forms';
import { Injectable, signal } from '@angular/core';
import { ElementTypeEnum } from '../../constants/enums';
import { IElementBase } from '../../types/framework';
import { ElementValidations } from '../../constants/ElementValidations';

@Injectable({
  providedIn: 'root',
})
export class DataParserService {
  public parseInputToElements(input: string): IElementBase[] {
    const cleanedInput = input.trim();

    // Check if it's an object structure
    if (this.isObjectStructure(cleanedInput)) {
      return this.parseObjectStructure(cleanedInput);
    } else {
      // Assume it's a single element and parse it
      return [this.parseAndCreateElement(cleanedInput)];
    }
  }

  private isObjectStructure(input: string): boolean {
    return input.startsWith('const elements') || input.includes('{');
  }

  // Function to parse object structure
  private parseObjectStructure(input: string): IElementBase[] {
    // Extract all key-value pairs and send them to parseAndCreateElement
    const elementStrings = this.extractElementStringsFromObject(input);

    return elementStrings.map((elementString) =>
      this.parseAndCreateElement(elementString)
    );
  }

  private extractElementStringsFromObject(input: string): string[] {
    const regex =
      /get\w+\s*:\s*\(\)\s*=>\s*new\s+\w+Element\(cy\.get\(.*?\)\)/g;
    const matches = input.match(regex);

    if (matches) {
      return matches;
    } else {
      console.error('No valid elements found in the object structure.');
      return [];
    }
  }

  private parseAndCreateElement(elementString: string): IElementBase {
    const titleMatch = elementString.match(/(\w+)\s*:/);
    const elementTypeMatch = elementString.match(/new\s+(\w+)Element/);
    const selectorMatch = elementString.match(/cy\.get\((.*?)\)/);

    if (!titleMatch || !elementTypeMatch || !selectorMatch)
      throw new Error('Invalid element string format');

    const title = titleMatch[1];
    const elementType = elementTypeMatch[1];
    const selector = selectorMatch[1].replace(/['"]+/g, '');

    let type: ElementTypeEnum;
    switch (elementType) {
      case 'Button':
        type = ElementTypeEnum.Button;
        break;
      case 'Field':
        type = ElementTypeEnum.Field;
        break;
      case 'Input':
        type = ElementTypeEnum.InputField;
        break;
      case 'InputFile':
        type = ElementTypeEnum.InputFile;
        break;
      default:
        throw new Error(`Unsupported element type "${elementType}"`);
    }

    return this.getElement(title, selector, type);
  }

  private getBaseElement(
    selector: string,
    title: string
  ): Omit<IElementBase, 'type' | 'validations'> {
    return {
      id: (Math.random() + 1).toString(36).substring(7),
      title,
      selector,
    };
  }

  private getValidationsByType<T extends ElementTypeEnum>(
    type: T
  ): IElementBase<T>['validations'] {
    const validations = ElementValidations[type];
    const keys = Object.keys(validations) as (keyof typeof validations)[];

    return keys.reduce<IElementBase<T>['validations']>(
      (result, key) => ({
        ...result,
        [key]: signal((validations[key] as any).defaultValue),
      }),
      {} as IElementBase<T>['validations']
    );
  }

  private getElement(title: string, selector: string, type: ElementTypeEnum) {
    return {
      ...this.getBaseElement(selector, title),
      type,
      validations: this.getValidationsByType(type),
    };
  }
}
