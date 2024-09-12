# Основной функционал

## Основное поле ввода элементов (inputElementsField)

Возможность в текстовое поле ввести JSON формата

```tsx
const elements = {
  Buttons: {
    getSubmitButton: () => new ButtonElement(cy.get("[data-testid=SELECTOR]")),
  },
  Fields: {
    getQuantityField: () => new FieldElement(cy.get("[data-testid=SELECTOR2]")),
  },
};
```

или один элемент

```tsx
    getSubmitButton: () => new ButtonElement(cy.get("[data-testid=SELECTOR]")),
```

## Основное поле вывода

Содержит поле ввода имени компонента, поле ввода базового компонента, чекбокс mergeElements и поле вывода информации

Отображает page

### Элементы

```tsx
const elements = {
  Buttons: {},
  Fields: {},
  ...etc,
};
```

### Название класса, экстенды и мерджи, если нужны

Без эстендов и мерджей

```tsx
export class CLASS_NAME {
  protected Elements = elements;
```

С экстендом без мерджей

```tsx
export class CLASS_NAME extends BASE_CLASS_NAME {
  protected Elements = elements;
```

С экстендом и мерджем

```tsx
export class CLASS_NAME extends BASE_CLASS_NAME {
  protected Elements = mergeElements(
    this.Elements,
    elements
  ) as BASE_CLASS_NAME["Elements"] & typeof elements;
```

### Дополнительные классы внутри задаются в поле extraClasses

```tsx
public EXTRA_CLASS_NAME = new BASE_EXTRA_CLASS_NAME
```

### Методы класса

```tsx
/* #region  Methods*/
METHODS;
/* #endregion */
```

## Поле ввода extraClasses

Принимает код, формата

```tsx
public EXTRA_CLASS_NAME = new BASE_EXTRA_CLASS_NAME
```

## Кнопка "Добавить" (addElementsButton)

При нажатии обрабатывает из информацию inputElementsField

Проверяет введённую информацию на соответствие формата элемента или множества элементов, выдавать ошибку при несоответствии

Если это один элемент, добавляет этот элемент в грид элементов

Если это JSON нужного формата, добавляет все элементы в грид элементов

## Грид элементов (addedElementsWrapper)

В грид добавляются элементы при нажатии addElementsButton

Тип элемента определяется по ELEMENT_TYPE в `new ELEMENT_TYPE(cy.get('[data-testid=SELECTOR]'))`

Наименование элемента определяется по ELEMENT_NAME в `getELEMENT_NAME: () =>`

Рядом с каждым элементов в гриде есть кнопка удаления этого элемента,
а так же кнопки на ряд свойств в зависимости от типа элемента.

Состояние свойства (вкл/выкл) определяет стиль кнопки свойства

Для кнопок генерировать

```tsx
    /* #region REGION_NAME */
  public readonly PREFIX_ELEMENT_NAMEButton_POSTFIX = () => {
    this.Elements.Buttons.getELEMENT_NAMEButton().METHOD_NAME();
    return this;
  };
    /* #endregion */
```

Для полей генерировать `ELEMENT_NAMEField`

Для Input полей генерировать `ELEMENT_NAMEInputField` , в том числе для файлов

В таблице + по дефолту включено, - нет метода, пробел есть метод

| Method                 | Button | Field | InputField | InputFile | Region Name                | Prefix   | Postfix          |
| ---------------------- | ------ | ----- | ---------- | --------- | -------------------------- | -------- | ---------------- |
| click                  | +      |       |            |           | Click button               | click    |
| validateIsVisible      |        |       |            |           | Validate is visible        | validate | IsVisible        |
| validateTitle          |        |       |            |           | Validate title             | validate | Title            |
| validateExists         | +      | +     | +          | +         | Validate exists            | validate | Exists           |
| validateNotExist       | +      | +     | +          | +         | Validate not exist         | validate | NotExist         |
| validateHaveText       | +      | +     |            |           | Validate have text         | validate | HaveText         |
| validateContains       |        | +     |            |           | Validate contains          | validate | Contains         |
| validateIsDisabled     |        |       |            |           | Validate is disabled       | validate | IsDisabled       |
| validateNotDisabled    |        |       |            |           | Validate not disabled      | validate | NotDisabled      |
| validateHasAttribute   |        |       |            |           | Validate has attribute     | validate | HasAttribute     |
| validateValue          | -      |       | -          | -         | Validate value             | validate | Value            |
| typeWithoutClear       | -      | -     |            | -         | Type into field            | typeInto | WithClear        |
| invokeValue            | -      | -     |            | -         | Invoke value               | invoke   | Value            |
| invokeValueAndInputOne | -      | -     |            | -         | Invoke value and input one | invoke   | ValueAndInputOne |
| deleteLastSymbol       | -      | -     |            | -         | Delete last symbol         | delete   | LastSymbol       |
| validateEmpty          | -      | -     |            | -         | Validate is empty          | validate | IsEmpty          |
| typeAndCheckValue      | -      | -     |            | -         | Type and check value       | type     | AndCheckValue    |
| uploadFile             | -      | -     | -          | +         | Upload file                | upload   |
