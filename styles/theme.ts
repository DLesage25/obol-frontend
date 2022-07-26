import { createStitches } from '@stitches/react';

export const { styled, css, theme } = createStitches({
    prefix: 'obol',
    theme: {
        colors: {
            primary: '#2FE4AB',
            secondary: '#82EDCC',
            background1: '#091011',
            background2: '#111F22',
            background3: '#182D32',
            background4: '#243D42',
            lightBlue: '#243D42',
            textLight: '#D9EEF3',
            textBody: '#9CC2C9',
            textMuted: '#475E64',
            textBlue: '#045062',
            textDark: '#091011',
        },
        fontSizes: {
            1: '16px',
            2: '18px',
            3: '28px',
            4: '32px',
        },
        fonts: {
            default: 'DM Sans',
        },
        fontWeights: {
            1: '500',
            2: '700',
        },
        borderWidths: {
            1: '2px',
        },
        borderStyles: {
            1: 'solid #243D42',
        },
    },
});
