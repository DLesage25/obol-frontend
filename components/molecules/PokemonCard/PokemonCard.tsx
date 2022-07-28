import Card from '../../atoms/Card';
import { A, Typography } from '../../atoms/Typography';

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
            <Typography component="h5">{title}</Typography>
            <Typography component="p">{detail}</Typography>
            <A href={link}>Details →</A>
        </Card>
    );
}
