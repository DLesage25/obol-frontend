import { styled } from '../../../styles/theme';

const A = styled('a', {
    color: '$primary',
    fontSize: '$1',
    fontWeight: '$1',
    lineHeight: '24px',
    textDecoration: 'none',
    '&:hover': {
        color: '$secondary',
    },
});

const Typography = styled('p', {
    variants: {
        component: {
            p: {
                color: '$textBody',
                fontSize: '$1',
                fontWeight: '$1',
                lineHeight: '24px',
            },
            h3: {
                color: '$textLight',
                fontSize: '$4',
                fontWeight: '$1',
                lineHeight: '48px',
            },
            h4: {
                color: '$textMuted',
                fontSize: '$3',
                fontWeight: '$2',
                lineHeight: '24px',
            },
            h5: {
                color: '$textLight',
                fontSize: '$2',
                fontWeight: '$2',
                lineHeight: '28px',
            },
        },
    },
    defaultVariants: {
        component: 'p',
    },
});

export { Typography, A };
