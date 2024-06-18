import styled from 'styled-components';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export const StyledCardContainer = styled.section`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`;

export const StyledCard = styled(Card)`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
height: auto;
padding: 28px;

`;

export const StyledCardContent = styled(CardContent)`
padding-top: 15px;
margin-bottom: 10px;
font-size: 16px;
font-weight: bolder;
`;

export const StyledLogout = styled(Button)`
width: 228px;
border-radius: 51px;
background-color: #35A7FF;
margin-bottom: 10px;
color: white;
`;

export const StyledCancel = styled(StyledLogout)`
border: solid 1px black;
background-color: transparent;
color: black;
`;