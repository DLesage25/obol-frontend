export default function isBottom(ref: React.RefObject<HTMLDivElement>) {
    if (!ref.current) {
        return false;
    }
    return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
}
