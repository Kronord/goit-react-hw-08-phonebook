import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Item = styled.li`
  display: flex;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  color: #4169e1;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  &:last-child {
    margin-bottom: 0;
  }
`

export const Text = styled.p`
  width: 200px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 200px;
`;

export const StyledButton = styled(Button)`
  margin-left: auto;
`