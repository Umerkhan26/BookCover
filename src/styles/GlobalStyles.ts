import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Archeron Font */
  @font-face {
    font-family: 'ArcheronProBook';
    src: url('/src/assets/fonts/Archeron/Archeron Pro Book.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  /* Konnect Fonts */
  @font-face {
    font-family: 'KonnectBlack';
    src: url('/src/assets/fonts/Konnect/KonnectBlack.otf') format('opentype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'KonnectBold';
    src: url('/src/assets/fonts/Konnect/KonnectBold.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'KonnectItalic';
    src: url('/src/assets/fonts/Konnect/KonnectItalic.otf') format('opentype');
    font-weight: normal;
    font-style: italic;
  }
@font-face {
    font-family: 'KonnectLight';
    src: url('/src/assets/fonts/Konnect/KonnectLight.otf') format('opentype');
    font-weight: normal;
    font-style: italic;
  }

  /* Add other @font-face rules for the rest of the Konnect font variations */

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.main}, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default GlobalStyle;
