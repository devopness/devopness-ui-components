const template = document.createElement("template");
template.innerHTML = `
  <style>
    button {
    }
  </style>
  <button>
    <slot></slot>
  </button>
`;

class Button extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    if (!this.shadowRoot) return;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("devopness-button", Button);
