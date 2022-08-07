import { styled } from '../../../styles/theme';

export const OuterContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
});

export const InnerContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '32px',
    padding: '0px, 80px',
});
