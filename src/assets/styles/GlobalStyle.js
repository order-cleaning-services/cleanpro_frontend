import { createGlobalStyle } from 'styled-components'
import NunitoBlack from '../fonts/Nunito-Black.ttf'
import NunitoBold from '../fonts/Nunito-Bold.ttf'
import NunitoExtraBold from '../fonts/Nunito-ExtraBold.ttf'
import NunitoSemiBold from '../fonts/Nunito-SemiBold.ttf'
import NunitoLight from '../fonts/Nunito-Light.ttf'
import NunitoExtraLight from '../fonts/Nunito-ExtraLight.ttf'
import NunitoMedium from '../fonts/Nunito-Medium.ttf'
import NunitoRegular from '../fonts/Nunito-Regular.ttf'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Nunito';
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    src: url(${NunitoRegular}) format('ttf');
  }

  @font-face {
    font-family: 'Nunito';
    font-display: swap;
    font-style: normal;
    font-weight: 700;
    src: url(${NunitoBold}) format('ttf');
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 400;
    margin: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    text-size-adjust: 100%;
    font-size: 62.5%;
  }

  main {
    display: block;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b, strong {
    font-weight: bolder;
  }

  code, kbd, samp {
    font-family: monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  textarea {
    overflow: auto;
  }

  button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  input, textarea {
    overflow: visible;
  }

  input, input:focus, textarea, textarea:focus {
    box-sizing: border-box;
    outline: thin;
  }

  button {
    cursor: pointer;
    overflow: visible;
  }

  button, select {
    text-transform: none;
  }

  button, [type="button"], [type="reset"], [type="submit"] {
    appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  [type="checkbox"], [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    appearance: none;
  }

  ::-webkit-file-upload-button {
    appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`
