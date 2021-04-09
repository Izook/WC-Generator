// Copyright (c) [year] Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html, css } from "lit-element";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * [namespace]-[name] provides users a way to ...
 *
 * @attr {String} cssClass - Applies designated CSS class to DOM element.
 */

// build the component class
class [Namespace][Name] extends LitElement {
  // constructor() {
  //   super();
  // }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      // ...super.properties,
      cssClass:   { type: String }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div class=${this.cssClass}>
        <slot></slot>
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("[namespace]-[name]")) {
  customElements.define("[namespace]-[name]", [Namespace][Name]);
}
