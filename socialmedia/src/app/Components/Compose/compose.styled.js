import styled from "styled-components";
import TextField  from "@mui/material/TextField";
import Button from '@mui/material/Button';

export const StyledComposeContainer = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
align-items: center;
padding-top: 4px;
`;

export const StyledComposeField = styled(TextField)`
width: 75vw;
`;


export const ComposeHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-left: 16px;
padding-right: 16px;
align-items: center;
height: 53px;
`;

export const StyledButton = styled(Button)`
border-bottom-left-radius: 9999px;
    border-bottom-right-radius: 9999px;
    border-top-left-radius: 9999px;
    border-top-right-radius: 9999px;
`;

export const StyledSkeletonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;