import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';

export const SearchHeader = styled.header`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 10px;
`;

export const StyledHeaderItems = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
max-width: 600px; 
padding: 0 20px;
`;

export const SearchWrapper = styled.div`
display: flex;
    align-items: center;
    background-color: rgba(239, 243, 244, 1);
    border-radius: 25px;
    padding: 5px 10px;
    width: 100%;
    max-width: 400px; 
`;

export const StyledSearchIcon = styled(SearchIcon)`
margin-right: 10px;
`;

export const StyledInputBase = styled.input`
background-color: transparent;
border: none;
color: black;
width: 100%;
font-size: 16px;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #888;
    }
`;

