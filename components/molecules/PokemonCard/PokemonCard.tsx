import { Pokemon } from '../../../types/pokemon.type';
import Card from '../../atoms/Card';
import Skeleton from '../../atoms/Skeleton';
import Typography from '../../atoms/Typography';

interface PokemonCardProps {
    title: string;
    imageSrc?: string;
    profile?: Pokemon;
    link?: string;
}

export default function PokemonCard({
    imageSrc,
    title,
    profile,
    link,
}: PokemonCardProps) {
    const detail =
        profile &&
        `Base experience: ${profile.base_experience} \n Height: ${profile.height} | Weight: ${profile.weight}`;
    return (
        <Card
            imageSrc={
                imageSrc ||
                'https://www.quizexpo.com/wp-content/uploads/2019/09/1-1.jpg'
            }
        >
            <Typography variant="h5">{title}</Typography>
            {detail ? (
                <Typography variant="p" css={{ whiteSpace: 'pre-line' }}>
                    {detail}
                </Typography>
            ) : (
                <Skeleton height={160} width="100%" />
            )}
            {link ? (
                <Typography variant="a" href={link} target="_blank">
                    Details →
                </Typography>
            ) : (
                <Skeleton height={160} width="100%" />
            )}
        </Card>
    );
}
