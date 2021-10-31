export class Style {
  node: HTMLElement;
  enabled: boolean;
  initialStyle: null | string;
  newStyle: string;

  constructor(node: HTMLElement, enabled: boolean, newStyle: string);

  public init(): {
    update: (enabled?: boolean) => void;
  };

  private _updateStyle(enabled?: boolean): void;
}

export type UseStyleType = (
  node: HTMLElement,
  enabled?: boolean
) => {
  update: (enabled?: boolean) => void;
};
