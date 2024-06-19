import styled from "styled-components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";

export const StyledHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding-left: 12px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    background-color: #f5f5f5;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledMenuItem = styled(MenuItem)`
    color: #333;
  font-size: 16px;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const StyledHeaderAvatar = styled(Avatar)`
   cursor: pointer;
  width: 40px;
  height: 40px;
  &:hover {
    border: 2px solid #ccc;
  }
`;
