import styled from "styled-components";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

export const StyledHomeContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
row-gap: 10px;
padding: 2%;
padding-bottom: 100px;
`;

export const StyledCard = styled(Card)`
width: 95% !important;
@media screen and (min-width: 768px) {
    width: 60% !important;
}
@media screen and (min-width: 1640px) {
    width: 40% !important;
}
`;

export const StyledCardContent = styled(CardContent)`

`;

export const StyledCardHeader = styled(CardHeader)`
padding-bottom: 5px !important;
`;

export const StyledAvatar = styled(Avatar)`

`;

export const StyledCardActions = styled(CardActions)`

`;