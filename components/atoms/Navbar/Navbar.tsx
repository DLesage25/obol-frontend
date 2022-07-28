import Image from 'next/image';
import { styled } from '../../styles/theme';
import { H4 } from '../Typography';
import { InnerNavStyles, LogoSectionStyles, OuterNavStyles } from './NavStyles';

const OuterNav = styled('div', OuterNavStyles);
const InnerNav = styled('div', InnerNavStyles);
const LogoSection = styled('div', LogoSectionStyles);

export default function Navbar() {
    return (
        <OuterNav>
            <InnerNav>
                <LogoSection>
                    <Image
                        src="/logo.png"
                        height="24px"
                        width="108px"
                        alt="logo"
                    />
                    <H4>Pokemon List</H4>
                </LogoSection>
            </InnerNav>
        </OuterNav>
    );
}