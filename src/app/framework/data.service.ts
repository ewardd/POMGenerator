import { Injectable, Signal, signal } from '@angular/core';
import { ElementTypeEnum } from '../../constants/enums';
import { IElementBase } from '../../types/framework';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public className = signal<string>('');

  public extendsClassName = signal<string>('PageBase');
  public withMerge = signal<boolean>(false);

  public prefixes = signal<string[]>([]);

  private readonly _elements = signal(
    new Map<ElementTypeEnum, IElementBase[]>()
  );
  public get elements(): Signal<Map<ElementTypeEnum, IElementBase[]>> {
    return this._elements;
  }

  public getElementsByType<T extends IElementBase>(type: ElementTypeEnum) {
    return this.elements().get(type) as unknown as T[];
  }

  public addElement = (newElement: IElementBase): void => {
    const elementType = newElement.type;

    if (
      this._elements()
        .get(elementType)
        ?.find((element) => element.selector === newElement.selector)
    ) {
      throw new Error(
        `Element already exists with selector "${newElement.selector}"`
      );
    }

    const elementsMap = new Map(this._elements());
    const elementsForType = elementsMap.get(elementType) || [];

    elementsMap.set(elementType, [...elementsForType, newElement]);

    this._elements.set(elementsMap);
  };

  public removeElement = (elementToRemove: IElementBase) => {
    const elementType = elementToRemove.type;

    const elementsMap = new Map(this._elements());
    const elementsForType = elementsMap.get(elementType) || [];

    const updatedElements = elementsForType.filter(
      (element) => element !== elementToRemove
    );
    elementsMap.set(elementType, updatedElements);

    this._elements.set(elementsMap);
  };

  public removeElementById = (id: string) => {
    const allElements = [...this._elements().values()].flat();
    const element = allElements.find((el) => el.id === id);
    if (!element) throw new Error(`Element not found with id "${id}"`);

    this.removeElement(element);
  };

  public clear(): void {
    this._elements.set(new Map<ElementTypeEnum, IElementBase[]>());
    this.className.set('');
    this.extendsClassName.set('');
    this.withMerge.set(false);
    this.prefixes.set([]);
  }
}
