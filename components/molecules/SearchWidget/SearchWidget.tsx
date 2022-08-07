import { styled } from '../../../styles/theme';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';
import useStore from '../../../state/store';
import React from 'react';

const WidgetContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0px 80px',
    gap: '24px',
});

export default function SearchWidget() {
    const { searchQuery, setSearchQuery } = useStore();

    const handleChange = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setSearchQuery((e.target as HTMLInputElement).value);
    };

    const disabled = searchQuery === '';

    return (
        <WidgetContainer>
            <Typography variant="h3" css={{ order: 0 }}>
                Search
            </Typography>
            <TextInput
                type="text"
                name="name"
                css={{ order: 1 }}
                value={searchQuery}
                onChange={handleChange}
            ></TextInput>
            <Button
                disabled={disabled}
                color={disabled ? 'disabled' : 'primary'}
                css={{ order: 2 }}
            >
                Submit
            </Button>
        </WidgetContainer>
    );
}
