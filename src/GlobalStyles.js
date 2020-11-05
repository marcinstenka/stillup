import { createGlobalStyle } from 'styled-components';
import IntervogueSoftRegular from './fonts/IntervogueSoftRegular.otf';
import IntervogueSoftBold from './fonts/IntervogueSoftBold.otf';
import IntervogueSoftUltra from './fonts/IntervogueSoftUltra.otf';
import TheBoldFont from './fonts/theboldfont.ttf';
const GlobalStyle = createGlobalStyle`
        @font-face{
            font-family: 'Intervogue soft ultra';
            src: url(${IntervogueSoftUltra}) format('opentype');
        };
        @font-face{
            font-family: 'Intervogue soft bold';
            src: url(${IntervogueSoftBold}) format('opentype');
        };
        @font-face{
            font-family: 'Intervogue soft regular';
            src: url(${IntervogueSoftRegular}) format('opentype');
        };
        @font-face{
            font-family: 'the bold font';
            src: url(${TheBoldFont}) format('truetype');
        };
    `
    ;
export default GlobalStyle;