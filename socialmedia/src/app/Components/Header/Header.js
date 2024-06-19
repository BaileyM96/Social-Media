import { useState } from "react";
import { StyledHeaderContainer, StyledMenu, StyledMenuItem, StyledHeaderAvatar } from "./Header.styled";
import Logout from "@/app/logout/page";
import { useRouter } from "next/navigation";

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    const router = useRouter();

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        console.log("menu opened");
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        console.log("menu closed");
    };

    const handleLogout = () => {
        console.log("Logged out");
        router.push('/logout');
        handleMenuClose();
    };

    return (
        <>
            <StyledHeaderContainer>
                <StyledHeaderAvatar onClick={handleMenuOpen} />
                <StyledMenu
                    id="account-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <StyledMenuItem onClick={handleLogout}>Logout</StyledMenuItem>
                </StyledMenu>
            </StyledHeaderContainer>
        </>
    );
}
