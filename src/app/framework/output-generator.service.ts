import { Injectable } from '@angular/core';
import { ElementTypeEnum } from '../../constants/enums';
import { IElementBase } from '../../types/framework';
import { DataService } from './data.service';
import { PomBuilder } from './pom-builder/builder';

@Injectable({
  providedIn: 'root',
})
export class OutputGeneratorService {
  public constructor(private readonly _dataService: DataService) {}

  public generate(): string {
    return new PomBuilder()
      .withElements(
        [...this._dataService.elements().values()].flatMap((e) => e)
      )
      .withClassName(this._dataService.className())
      .withExtendsClassName(this._dataService.extendsClassName())
      .withPrefixes(this._dataService.prefixes())
      .withElementField(this._dataService.withMerge())
      .withMethods()
      .build();
  }
}
