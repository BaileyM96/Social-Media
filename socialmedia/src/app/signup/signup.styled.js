import styled  from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 50vh;
color: black;
`;
export const StyledHeaderContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 20px;
`;

export const StyledHeader = styled.h2`
color: black;
`;

export const StyledTextField = styled(TextField)`
padding: 12px;
color: black;
`;

export const StyledButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;

export const StyledButton = styled(Button)`

`;