export class Style {
  node: HTMLElement;
  enabled: boolean;
  cached: null | string;
  styles: string;

  constructor(node: HTMLElement, enabled: boolean, styles: string);

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
