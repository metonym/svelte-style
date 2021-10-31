export class Style {
  node = null;
  enabled = true;
  initialStyle = null;
  newStyle = "";

  /**
   * @param {HTMLElement} node
   * @param {boolean} enabled
   * @param {string} newStyle
   */
  constructor(node, enabled, newStyle) {
    this.node = node;
    this.enabled = enabled !== false;
    this.newStyle = newStyle;
    this.initialStyle = this.node.getAttribute("style");
    this._updateStyle(this.enabled);
  }

  /** @public */
  init = () => ({
    update: this._updateStyle,
  });

  /** @private */
  _updateStyle = (enabled) => {
    if (enabled) {
      this.node.setAttribute("style", this.newStyle);
    } else {
      this.node.removeAttribute("style");

      if (this.initialStyle != null) {
        this.node.setAttribute("style", this.initialStyle);
      }
    }
  };
}
