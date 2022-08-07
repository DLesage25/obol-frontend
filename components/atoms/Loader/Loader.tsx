import React from 'react';
import { keyframes } from '@stitches/react';
import { styled } from '../../../styles/theme';

const SpinnerContainer = styled('div', {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    height: '350px',
});

const rotate = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
});

const LoadingSpinner = styled('div', {
    width: '50px',
    height: '50px',
    border: '10px solid $secondary',
    borderTop: '10px solid $primary',
    borderRadius: '50%',
    animation: `${rotate} 1.5s linear infinite`,
});

export default function Loader() {
    return (
        <SpinnerContainer>
            <LoadingSpinner />
        </SpinnerContainer>
    );
}
