import { styled } from '../../styles/theme';

const WidgetContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    width: '395px',
    height: '426px',
    backgroundColor: '$background4',
    borderRadius: '12px',
});

const DetailContainer = styled('div', {
    backgroundColor: '$background3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '32px',
    gap: '32px',
    width: '395px',
    height: '204px',
    flex: 'none',
    order: 1,
    flexGrow: 0,
});

export default function PokemonCard() {
    return (
        <WidgetContainer>
            <DetailContainer>data</DetailContainer>
        </WidgetContainer>
    );
}
