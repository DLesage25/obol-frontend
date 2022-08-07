import ContentLoader from 'react-content-loader';

export default function Skeleton({
    width,
    height,
}: {
    width: number | string;
    height: number | string;
}) {
    return (
        <ContentLoader
            speed={2}
            width={width}
            height={height}
            backgroundColor="#111F22"
            foregroundColor="#243D42"
        >
            <rect x="48" y="8" rx="3" ry="3" width="240" height="8" />
        </ContentLoader>
    );
}
