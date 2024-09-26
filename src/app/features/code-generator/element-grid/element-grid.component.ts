import { Component, computed, effect, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ElementValidations } from '../../../../constants/ElementValidations';
import { ElementTypeEnum } from '../../../../constants/enums';
import { IElementBase } from '../../../../types/framework';
import { DataService } from '../../../framework/data.service';

@Component({
  selector: 'app-element-grid',
  standalone: true,
  imports: [FormsModule, NzTableModule],
  templateUrl: './element-grid.component.html',
})
export class ElementGridComponent<T extends ElementTypeEnum> {
  public constructor(private readonly _dataService: DataService) {
    effect(() => {
      this.data();
      this.params().forEach((param) => this.refreshStatus(param.key));
    });
  }

  /* #region Internals */

  public type = input<T>();

  public config = computed<(typeof ElementValidations)[T]>(
    () => ElementValidations[this.type()!]
  );

  public params = computed(() =>
    Object.entries(this.config()).map(([key, value]) => ({
      key: key as keyof IElementBase<T>['validations'],
      value,
    }))
  );

  public readonly data = computed<IElementBase<T>[]>(() => {
    this._dataService.elements();

    const type = this.type();
    if (!type) return [];

    return this._dataService.getElementsByType<IElementBase<T>>(type) ?? [];
  });

  /* #endregion */

  /* #region Checkboxes */
  public isAllChecked = new Map<
    keyof IElementBase<T>['validations'],
    boolean
  >();
  public isSomeChecked = new Map<
    keyof IElementBase<T>['validations'],
    boolean
  >();

  public getCheckboxValue(
    item: IElementBase<T>,
    param: keyof IElementBase<T>['validations']
  ) {
    return item.validations[param]();
  }

  public setCheckboxValue(
    item: IElementBase<T>,
    param: keyof IElementBase<T>['validations'],
    value: boolean
  ) {
    item.validations[param].set(value);
    this.refreshStatus(param);
  }

  public refreshStatus = (param: keyof IElementBase<T>['validations']) => {
    const allChecked =
      !!this.data().length &&
      this.data().every((value) => !!value.validations[param]());

    const allUnChecked = this.data().every(
      (value) => !value.validations[param]()
    );

    this.isAllChecked.set(param, allChecked);
    this.isSomeChecked.set(param, !allChecked && !allUnChecked);
  };

  public checkAll = (
    param: keyof IElementBase<T>['validations'],
    value: boolean
  ) => {
    for (const item of this.data()) {
      item.validations[param].set(value);
    }

    this.refreshStatus(param);
  };

  /* #endregion */

  /* #region Element */

  public removeElement = (item: IElementBase<T>) => {
    this._dataService.removeElement(item);
  };

  /* #endregion */
}
