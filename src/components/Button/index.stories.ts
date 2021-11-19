import { html } from "lit-html";

import "./index.ts";

interface ButtonArgs {
  click: {
    action: string;
  };
}

export default {
  title: "Button",
  argTypes: { click: { action: "click" } } as ButtonArgs,
};

export const Default = (args: ButtonArgs) =>
  html` <devopness-button @click="${args.click}">Default</devopness-button> `;
export const Borderless = (args: ButtonArgs) =>
  html`
    <devopness-button type="borderless" @click="${args.click}"
      >Borderless</devopness-button
    >
  `;
export const Auxiliary = (args: ButtonArgs) =>
  html`
    <devopness-button type="outlinedauxiliary" @click="${args.click}"
      >Auxiliary</devopness-button
    >
  `;
export const Secondary = (args: ButtonArgs) =>
  html`
    <devopness-button type="outlinedsecondary" @click="${args.click}"
      >Secondary</devopness-button
    >
  `;
export const Medium = (args: ButtonArgs) =>
  html`
    <devopness-button size="medium" @click="${args.click}"
      >Medium</devopness-button
    >
  `;
export const Disabled = (args: ButtonArgs) =>
  html`
    <devopness-button disabled @click="${args.click}"
      >Disabled</devopness-button
    >
  `;
export const NoMargin = (args: ButtonArgs) =>
  html`
    <devopness-button nomargin @click="${args.click}"
      >No margin</devopness-button
    >
  `;
export const RevertOrientation = (args: ButtonArgs) =>
  html`
    <devopness-button revertorientation @click="${args.click}"
      ><span>Revert</span> orientation&nbsp;</devopness-button
    >
  `;
export const CustomColors = (args: ButtonArgs) =>
  html`
    <devopness-button
      color="green"
      bordercolor="black"
      backgroundcolor="yellow"
      @click="${args.click}"
      >Custom colors</devopness-button
    >
  `;
