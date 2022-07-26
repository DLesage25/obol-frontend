import { globalCss } from '@stitches/react';
import { theme } from './theme';

const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        fontFamily: theme.fonts.default,
        backgroundColor: theme.colors.background2,
    },
});

export default globalStyles;
