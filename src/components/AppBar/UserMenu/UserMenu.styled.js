import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 30px;
    color: #fff;
`

export const StyledButton = styled(Button)`
width: 100px;
height: 30px; 
margin-left: 20px;  
  background-color: #fff;
  color: #4169e1;
  &:hover {
    background-color: #fff;
  }
`;