import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

export const StyledNavContainer = styled.footer`
display: flex;
align-items: center;
justify-content: space-around;
padding-left: 12px;
padding-right: 12px;
padding-bottom: 40px;
padding-top: 40px;
position: fixed;
bottom: 0;
z-index: 1;
text-align: center;
background-color: white;
width: 100%;
height: 50px;
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
width: 46px;
height: 40px;
color: black;
`;

export const StyledSearchIcon = styled(SearchIcon)`
width: 46px;
height: 40px;
color: black;
`;

export const StyledPersonIcon = styled(PersonIcon)`
width: 46px;
height: 40px;
color: black;
`;