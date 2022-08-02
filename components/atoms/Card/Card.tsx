import Image from 'next/image';
import { styled } from '../../../styles/theme';
import { A, Typography } from '../Typography';

const CardContainer = styled('div', {
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
    width: '331px',
    height: '170px',
    flex: 'none',
    order: 1,
    flexGrow: 0,
    borderRadius: '0 0 12px 12px',
});

const ImageContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
    flexGrow: 1,
    position: 'relative',
    borderRadius: '12px 12px 0 0',
});

interface CardProps {
    imageSrc: string;
    children: React.ReactNode;
}

export default function Card({ imageSrc, children }: CardProps) {
    return (
        <CardContainer>
            <ImageContainer>
                <Image
                    src={imageSrc}
                    layout="fill"
                    height="222px"
                    alt={imageSrc}
                />
            </ImageContainer>
            <DetailContainer>{children}</DetailContainer>
        </CardContainer>
    );
}
