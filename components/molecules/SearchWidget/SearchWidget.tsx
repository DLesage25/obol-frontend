import { styled } from '../../../styles/theme';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';

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
            <Typography variant="h3" css={{ order: 0 }}>
                Search
            </Typography>
            <TextInput type="text" name="name" css={{ order: 1 }}></TextInput>
            <Button color="primary" css={{ order: 2 }}>
                Submit
            </Button>
        </WidgetContainer>
    );
}
