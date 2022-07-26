import { styled } from '../../styles/theme';

const TextInput = styled('input', {
    background: '$background2',
    color: '$textLight',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '12px 16px',
    gap: '4px',
    border: '2px solid #243D42',
    borderRadius: '4px',
    flex: 'none',
    order: 1,
    flexGrow: 0,
    width: '635px',
    height: '48px',
});

export default function TestInput() {
    return <TextInput type="text" name="name"></TextInput>;
}
