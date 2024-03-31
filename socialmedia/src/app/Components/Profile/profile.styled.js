import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

export const StyledProfileHeader = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
padding-top: 25px;
padding-left: 16px;
padding-right: 16px;
padding-bottom: 16px;
`;

export const StyledProfileAvatar = styled(Avatar)`
width: 65px !important;
height: 65px !important;
`;

export const StyledEditProfileButton = styled(Button)`
font-weight: bolder !important;
color: black !important;
text-transform: none !important;
`;

export const StyledUserInfoContainer = styled.section`
display: flex;
flex-direction: column;
align-items: stretch;
padding-left: 12px;
padding-right: 16px;
padding-bottom: 16px;
`;

export const StyledTopFriendsContainer = styled.section`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 20px;
`;

export const StyledTopFriendsHeader = styled.div`

`;