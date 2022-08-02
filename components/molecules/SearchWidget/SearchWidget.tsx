import { styled } from '../../../styles/theme';
import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';
import { Typography } from '../../atoms/Typography';

const WidgetContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0px 80px',
    gap: '24px',
});

export default function SearchWidget() {
    return (
        <WidgetContainer>
            <Typography component="h3" css={{ order: 0 }}>
                Search
            </Typography>
            <TextInput type="text" name="name" css={{ order: 1 }}></TextInput>
            <Button color="primary" css={{ order: 2 }}>
                Submit
            </Button>
        </WidgetContainer>
    );
}
