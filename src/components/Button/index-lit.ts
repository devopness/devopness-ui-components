import { LitElement, css, html, unsafeCSS } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { customElement, property } from "lit/decorators.js";

import { tokens } from "../../tokens/index";

@customElement("devopness-button")
class DevopnessButton extends LitElement {
  @property() color?: string = "";
  @property() backgroundColor?: string = "";
  @property() borderColor?: string = "";

  static styles = css`
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: ${unsafeCSS(tokens.height.button.large)};
      line-height: 1;
      font-family: ${unsafeCSS(tokens.font.family.base)};
      font-size: 13px;
      text-transform: uppercase;
      cursor: pointer;
      padding: 5px 15px;
      margin: 0 15px;
      border: 1px;
      border-radius: 25px;
      border-width: ${unsafeCSS(tokens.width.border.button.large)};
      border-style: ${unsafeCSS(tokens.style.border.button.default)};
      border-color: ${unsafeCSS(tokens.color.border.button.default)};
      color: ${unsafeCSS(tokens.color.text.button.default)};
      background-color: ${unsafeCSS(tokens.color.background.button.default)};
      transition: filter 0.3s;
      user-select: none;
    }

    :host([size="medium"]) button {
      height: ${unsafeCSS(tokens.height.button.medium)};
      border-width: ${unsafeCSS(tokens.width.border.button.medium)};
    }

    :host([type="borderless"]) button {
      border-style: ${unsafeCSS(tokens.style.border.button.borderless)};
      border-color: ${unsafeCSS(tokens.color.border.button.borderless)};
      color: ${unsafeCSS(tokens.color.text.button.borderless)};
      background-color: ${unsafeCSS(tokens.color.background.button.borderless)};
    }

    :host([type="outlinedsecondary"]) button {
      border-color: ${unsafeCSS(tokens.color.border.button.outlinedSecondary)};
      color: ${unsafeCSS(tokens.color.text.button.outlinedSecondary)};
      background-color: ${unsafeCSS(
        tokens.color.background.button.outlinedSecondary
      )};
    }

    :host([type="outlinedauxiliary"]) button {
      border-color: ${unsafeCSS(tokens.color.border.button.outlinedAuxiliary)};
      color: ${unsafeCSS(tokens.color.text.button.outlinedAuxiliary)};
      background-color: ${unsafeCSS(
        tokens.color.background.button.outlinedAuxiliary
      )};
    }

    :host([revertorientation]) button {
      flex-direction: row-reverse;
    }

    :host([nomargin]) button {
      margin: 0;
    }

    :host([disabled=""]) button,
    :host([disabled="disabled"]) button {
      opacity: 0.5;
      cursor: initial;
      cursor: not-allowed;
    }

    :host(:not([disabled=""]):not([disabled="disabled"]):hover) button {
      filter: brightness(75%);
    }
  `;

  connectedCallback() {
    super.connectedCallback();

    this.shadowRoot?.addEventListener(
      "click",
      (event) => {
        if (this.disabled) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      },
      true
    );
  }

  render() {
    const styles = {
      color: this.color,
      backgroundColor: this.backgroundColor,
      borderColor: this.borderColor,
    };

    return html`
      <button style=${styleMap(styles)}>
        <slot></slot>
      </button>
    `;
  }

  get disabled() {
    return (
      this.getAttribute("disabled") === "" ||
      this.getAttribute("disabled")?.toLocaleLowerCase() === "disabled"
    );
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "devopness-button": any;
    }
  }
}
