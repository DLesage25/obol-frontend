import { CSS } from '@stitches/react';
import { ComponentType } from 'react';
import { styled } from '../../../styles/theme';

const TypographyStyles = {
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
        fontWeight: '$1',
        lineHeight: '28px',
    },
    a: {
        color: '$primary',
        fontSize: '$1',
        fontWeight: '$1',
        lineHeight: '24px',
        textDecoration: 'none',
        '&:hover': {
            color: '$secondary',
        },
    },
};

const VARIANTS = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    p: 'p',
    a: 'a',
};

interface TypographyProps {
    variant: keyof typeof VARIANTS;
    children: React.ReactNode;
    css?: CSS<any>;
    href?: string;
    target: string;
}

/**
 * Typography component I made as an example.
 *
 * I opted for instatiating elements over mimicking them using variants
 * because having every text element default to p tags would really
 * hammer SEO. I also used this for A tags which is non-ideal but
 * y'know - it's a start!
 *
 * @param variant - the JSX element to be instantiated
 * @param children - text to be rendered
 * @param css - additional CSS needed at the time of instantiation
 * @param props - additional props to be added to the elemennt
 * @returns - JSX element with styles
 */
const Typography = ({ variant, children, css, ...props }: TypographyProps) => {
    const Component = variant ? VARIANTS[variant] : 'p';

    const Comp = styled(Component as unknown as ComponentType<any>, {
        ...TypographyStyles[Component as keyof typeof TypographyStyles],
        ...css,
    });

    return <Comp {...props}>{children}</Comp>;
};

export default Typography;
