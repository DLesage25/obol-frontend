import { styled } from '../../styles/theme';

const StyledButton = styled('button', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '12px 24px',
    gap: '10px',
    borderRadius: '8px',
    backdropFilter: 'blur(4px)',
    width: '101px',
    height: '48px',
    fontWeight: '$2',
    lineHeight: '24px',
    variants: {
        color: {
            primary: {
                background: '$primary',
                borderWidth: 0,
                color: '$textDark',
                '&:hover': {
                    backgroundColor: '$secondary',
                    color: '$textBlue',
                },
            },
            disabled: {
                color: '$background4',
            },
        },
    },
});

export default StyledButton;
