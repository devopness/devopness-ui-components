import { tokens } from "../../tokens/index";

const template = document.createElement("template");

template.innerHTML = `
  <style>
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: ${tokens.height.button.large};
      line-height: 1;
      font-family: ${tokens.font.family.base};
      font-size: 13px;
      text-transform: uppercase;
      cursor: pointer;
      padding: 5px 15px;
      margin: 0 15px;
      border: 1px;
      border-radius: 25px;
      border-width: ${tokens.width.border.button.large};
      border-style: ${tokens.style.border.button.default};
      border-color: ${tokens.color.border.button.default};
      color: ${tokens.color.text.button.default};
      background-color: ${tokens.color.background.button.default};
      transition: filter 0.3s;
      user-select: none;
    }

    :host([size="medium"]) button {
      height: ${tokens.height.button.medium};
      border-width: ${tokens.width.border.button.medium};
    }

    :host([type="borderless"]) button {
      border-style: ${tokens.style.border.button.borderless};
      border-color: ${tokens.color.border.button.borderless};
      color: ${tokens.color.text.button.borderless};
      background-color: ${tokens.color.background.button.borderless};
    }

    :host([type="outlinedsecondary"]) button {
      border-color: ${tokens.color.border.button.outlinedSecondary};
      color: ${tokens.color.text.button.outlinedSecondary};
      background-color: ${tokens.color.background.button.outlinedSecondary};
    }

    :host([type="outlinedauxiliary"]) button {
      border-color: ${tokens.color.border.button.outlinedAuxiliary};
      color: ${tokens.color.text.button.outlinedAuxiliary};
      background-color: ${tokens.color.background.button.outlinedAuxiliary};
    }

    :host([revertorientation]) button {
      flex-direction: row-reverse;
    }

    :host([nomargin]) button {
      margin: 0;
    }

    :host([disabled]) button {
      opacity: 0.5;
      cursor: initial;
      cursor: not-allowed;
    }

    :host(:not([disabled]):hover) button {
      filter: brightness(75%);
    }
  </style>

  <button>
    <slot></slot>
  </button>
`;

class Button extends HTMLElement {
  _color = "";
  _backgroundColor = "";
  _borderColor = "";

  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["color", "backgroundcolor", "bordercolor"];
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });

    if (!this.shadowRoot) return;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.color = this.getAttribute("color") || "";
    this.backgroundColor = this.getAttribute("backgroundcolor") || "";
    this.borderColor = this.getAttribute("bordercolor") || "";
  }

  attributeChangedCallback(attr: string, oldValue: string, newValue: string) {
    const attribute = attr.toLowerCase();

    if (attribute === "color") {
      this.color = newValue;
    } else if (attribute === "backgroundcolor") {
      this.backgroundColor = newValue;
    } else if (attribute === "bordercolor") {
      this.borderColor = newValue;
    }
  }

  set color(value) {
    this._color = value;

    const button = this.shadowRoot && this.shadowRoot.querySelector("button");
    if (button) button.style.color = value;
  }

  get color() {
    return this._color;
  }

  set backgroundColor(value) {
    this._backgroundColor = value;

    const button = this.shadowRoot && this.shadowRoot.querySelector("button");
    if (button) button.style.backgroundColor = value;
  }

  get backgroundColor() {
    return this._color;
  }

  set borderColor(value) {
    this._borderColor = value;

    const button = this.shadowRoot && this.shadowRoot.querySelector("button");
    if (button) button.style.borderColor = value;
  }

  get borderColor() {
    return this._color;
  }
}

customElements.define("devopness-button", Button);
