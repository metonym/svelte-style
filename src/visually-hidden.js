import { Style } from "./Style";

/**
 * Hide content without breaking screen readers
 * https://a11yproject.com/posts/how-to-hide-content/
 */
const styles = `
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
`;

/**
 * Visually hide an HTML element
 * @param {HTMLElement} node
 * @param {boolean} [enabled]
 */
export const visuallyHidden = (node, enabled) => new Style(node, enabled, styles).init();
