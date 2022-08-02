import Card from '../../atoms/Card';
import Typography from '../../atoms/Typography';

interface PokemonCardProps {
    imageSrc: string;
    title: string;
    detail: string;
    link: string;
}

export default function PokemonCard({
    imageSrc,
    title,
    detail,
    link,
}: PokemonCardProps) {
    return (
        <Card imageSrc={imageSrc}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="p">{detail}</Typography>
            <Typography variant="a" href={link}>
                Details →
            </Typography>
        </Card>
    );
}
