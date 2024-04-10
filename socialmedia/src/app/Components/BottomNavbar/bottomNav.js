//Need to be able to link to different parts of the app
//The icons need to be clicable
  //The icons are to be Home, search, and profile for right now
import Link from 'next/link';
import { StyledHomeIcon, StyledNavContainer, StyledPersonIcon, StyledSearchIcon } from './bottomNav.styled';

export default function BottomNav() {
    return (
        <>
        <StyledNavContainer>
            {/* <StyledHomeIcon><Link href="/home"></Link></StyledHomeIcon>
            <StyledSearchIcon />
            <StyledPersonIcon><Link href="/Components/Profile"></Link></StyledPersonIcon> */}
            <Link href="/home"><StyledHomeIcon /></Link>
            <Link href="/search"><StyledSearchIcon /></Link>
            <Link href="/Components/Profile"><StyledPersonIcon /></Link>
        </StyledNavContainer>
        </>
    )
}