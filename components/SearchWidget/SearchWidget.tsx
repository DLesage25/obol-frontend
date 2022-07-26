import { styled } from '../../styles/theme';
import Button from '../Button';
import TextInput from '../TextInput';
import { H3 } from '../Typography';

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
            <H3 css={{ order: 0 }}>Search</H3>
            <TextInput type="text" name="name" css={{ order: 1 }}></TextInput>
            <Button color="primary" css={{ order: 2 }}>
                Submit
            </Button>
        </WidgetContainer>
    );
}
