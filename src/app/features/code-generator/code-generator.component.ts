import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ElementTypeEnum } from '../../../constants/enums';
import { DataParserService } from '../../framework/data-parser.service';
import { DataService } from '../../framework/data.service';
import { OutputGeneratorService } from '../../framework/output-generator.service';
import { ElementValidations } from './../../../constants/ElementValidations';
import { ElementGridComponent } from './element-grid/element-grid.component';

@Component({
  selector: 'app-code-generator',
  standalone: true,
  imports: [
    NzInputModule,
    FormsModule,
    NzTableModule,
    ElementGridComponent,
    NzCheckboxModule,
    NzButtonModule,
  ],
  templateUrl: './code-generator.component.html',
})
export class CodeGeneratorComponent {
  public constructor(
    private readonly _parserService: DataParserService,
    private readonly _dataService: DataService,
    private readonly _outputGeneratorService: OutputGeneratorService
  ) {}

  inputValue: string = '';
  outputValue: string = '';

  public get className() {
    return this._dataService.className;
  }
  public get extendsClassName() {
    return this._dataService.extendsClassName;
  }
  public get withMerge() {
    return this._dataService.withMerge;
  }

  public get prefixes() {
    return this._dataService.prefixes().join('\n');
  }
  public set prefixes(prefixes: string) {
    this._dataService.prefixes.set(prefixes.split('\n').map((p) => p.trim()));
  }

  public elementTypes = Object.keys(ElementValidations) as ElementTypeEnum[];

  public parse() {
    const elements = this._parserService.parseInputToElements(this.inputValue);
    elements.forEach((el) => {
      try {
        this._dataService.addElement(el);
      } catch (err) {
        console.error(err);
      }
    });

    this.inputValue = '';
  }

  public generate() {
    this.outputValue = this._outputGeneratorService.generate();
  }

  public clear() {
    this._dataService.clear();
  }
}
