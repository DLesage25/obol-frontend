import Button from '../Button';
import TextInput from '../TextInput';
import { H3 } from '../Typography';

export default function SearchWidget() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                padding: '0px 80px',
                gap: '24px',
            }}
        >
            <H3>Search</H3>
            <TextInput type="text" name="name" css={{ order: 1 }}></TextInput>
            <Button color="primary" css={{ order: 2 }}>
                Submit
            </Button>
        </div>
    );
}
