import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

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
border-bottom: 1px solid #e1e8ed;
`;

export const StyledTopFriendsContainer = styled.section`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 20px;
padding-bottom: 16px;
border-bottom: 1px solid #e1e8ed;
`;

export const StyledTopFriendsHeader = styled.div`
padding-left: 16px;
padding-bottom: 12px;
padding-top: 12px;
`;

export const StyledPostsContainer = styled.section`
display: grid;
gap: 10px;
padding: 10px;
border-bottom: 1px solid #e1e8ed;
`;

export const PostHeaderContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const PostHeader = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 5px;
align-items: center;
`;

export const UserName = styled.span`
font-weight: bold;
color: #0f1419;
padding-right: 46%;
`;

export const StyledPostTime = styled.span`
color: #657786;
font-size: 14px;
`;

export const PostText = styled.p`
  color: #0f1419;
  margin-left: 16%;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
  color: #657786;
  margin-right: 40%;
  align-items: center;
`;

export const StyledProfile = styled.div`
margin-bottom: 25%;
`;

export const StyledMainHome = styled.div`
padding-bottom: 100px;
`;

export const StyledSpan = styled.span`
display: flex;
justify-content: center;
text-align: center;
align-items: center;
`;

export const StyledSpanLikes = styled.span`
padding-left: 4px;
font-size: 14px;
`;

export const StyledLikes = styled(FavoriteBorderIcon)`
font-size: 18px !important;
`;

export const StyledComments = styled(ChatBubbleOutlineIcon)`
font-size: 18px !important;
`;
