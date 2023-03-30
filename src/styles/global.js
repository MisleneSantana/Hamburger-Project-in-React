import { createGlobalStyle } from "styled-components"; //CSS aplicado em todos os pontos da aplicação

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Inter', sans-serif;
    width: 99vw;
    overflow-x: hidden;
}

:root {
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    --grey-100: #333333;
    --grey-50: #828282;
    --grey-30: #BDBDBD;
    --grey-20: #E0E0E0;
    --grey-0: #F5F5F5;
    --white: #F8F9FA;
    --white-default: #FFFFFF;
    --black--fonts: #333333;
    --feedback-negative: #E60000;
    --feedback-warning: #FFCD07;
    --feedback-success: #168821;
    --feedback-information: #155BCB;

    /* Fonts */
    --text-12: 0.75rem;
    --text-14: 0.875rem;
    --text-default: 1rem;
    --text-18:1.125rem;
    --text-20: 1.25rem;
    --text-22: 1.375rem;
    --text-24: 1.5rem;
    --text-26: 1.625rem
    --text-32: 2rem;

    /* Border-radius */
    --border-radius: 4px;

    /* Inputs, Buttons */
    --button-width: 6.625rem;
    --button-height: 2.5rem;
    --buttonSmall-width: 0.5081rem;
    --buttonSmall-height: 8.125rem;
    --input-width:23.875rem;
    --input-height: 3.75rem;
    --card-width:18.75rem;
    --card-height: 21.625rem;
}

::-webkit-scrollbar {
    height: 3px;
    width: 3px;
}

::-webkit-scrollbar-track {
    // background: var(--color-primary);
}

::-webkit-scrollbar-thumb {
    background: var(--color-primary-50);
}

::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary-50);
}
`;
