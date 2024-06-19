import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from "@mui/material/Avatar";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const StyledNavContainer = styled.footer`
display: flex;
align-items: center;
justify-content: space-around;
padding-left: 12px;
padding-right: 12px;
position: fixed;
bottom: 0;
z-index: 1;
text-align: center;
background-color: white;
width: 100%;
height: 80px;
border-top: 1px solid #e1e8ed;
`;

export const StyledSpan = styled.span`
display: block;
color: black;
`;

export const StyledIconsContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const StyledHomeIcon = styled(HomeIcon)`
font-size: 27px !important;
color: black;
`;

export const StyledSearchIcon = styled(SearchIcon)`
font-size: 27px !important;
color: black;
`;

export const StyledPersonIcon = styled(PersonIcon)`
font-size: 27px !important;
color: black;
`;

export const StyledChatBubbleOutlineIcon = styled(ChatBubbleOutlineIcon)`
font-size: 27px !important;
color: black;
`;

export const StyledAvatarIcon = styled(Avatar)`
font-size: 27px !important;
`;
