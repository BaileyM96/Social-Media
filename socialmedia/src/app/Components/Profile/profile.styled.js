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
grid-template-columns: auto 1fr;
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
`;

export const UserName = styled.span`
font-weight: bold;
`;

export const StyledPostTime = styled.span`
color: #657786;
`;

export const PostText = styled.p`
  margin: 0;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  color: #657786;
`;
