import "./index.ts";

export default {
  title: "Button",
};

export const Default = () => ` <devopness-button>Default</devopness-button> `;
export const Borderless = () =>
  ` <devopness-button type="borderless">Borderless</devopness-button> `;
export const Auxiliary = () =>
  ` <devopness-button type="outlinedauxiliary">Auxiliary</devopness-button> `;
export const Secondary = () =>
  ` <devopness-button type="outlinedsecondary">Secondary</devopness-button> `;
  export const Medium = () =>
  ` <devopness-button size="medium">Medium</devopness-button> `;
export const Disabled = () =>
  ` <devopness-button disabled>Disabled</devopness-button> `;
export const NoMargin = () =>
  ` <devopness-button nomargin>No margin</devopness-button> `;
export const RevertOrientation = () =>
  ` <devopness-button revertorientation><span>Revert</span> orientation&nbsp;</devopness-button> `;
export const CustomColors = () =>
  ` <devopness-button color="green" bordercolor="black" backgroundcolor="yellow">Custom colors</devopness-button> `;
