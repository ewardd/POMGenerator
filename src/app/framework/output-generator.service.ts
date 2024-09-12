import { Injectable } from '@angular/core';
import { ElementTypeEnum } from '../../constants/enums';
import { IElementBase } from '../../types/framework';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class OutputGeneratorService {
  public constructor(private readonly _dataService: DataService) {}

  public generate(): string {
    const hasExtends = !!this._dataService.extendsClassName();

    const getStringFromElement = (el: IElementBase) => {
      switch (el.type) {
        case ElementTypeEnum.Button:
          return `${el.title}: () => new ButtonElement(cy.get("${el.selector}"))`;
        case ElementTypeEnum.Field:
          return `${el.title}: () => new FieldElement(cy.get("${el.selector}"))`;
        case ElementTypeEnum.InputField:
          return `${el.title}: () => new InputFieldElement(cy.get("${el.selector}"))`;
        case ElementTypeEnum.InputFile:
          return `${el.title}: () => new InputFileElement(cy.get("${el.selector}"))`;
      }
    };
    const elements = [...this._dataService.elements().entries()].reduce(
      (acc, [key, value]) => {
        let resultKey: keyof typeof acc;
        switch (key) {
          case ElementTypeEnum.Button:
            resultKey = 'Buttons';
            break;
          case ElementTypeEnum.Field:
            resultKey = 'Fields';
            break;
          case ElementTypeEnum.InputField:
            resultKey = 'Inputs';
            break;
          case ElementTypeEnum.InputFile:
            resultKey = 'InputFiles';
            break;
        }

        acc[resultKey] = [
          ...acc[resultKey],
          ...value.map(getStringFromElement),
        ];

        return acc;
      },
      {
        Buttons: new Array<string>(),
        Fields: new Array<string>(),
        Inputs: new Array<string>(),
        InputFiles: new Array<string>(),
      }
    );

    return `
export class ${this._dataService.className()} ${
      hasExtends ? `extends ${this._dataService.extendsClassName()}` : ''
    } {
  
  ${this._dataService.prefixes()}

  const elements = {
    ${JSON.stringify(elements, null, 2)}
  };
}`;
  }
}
