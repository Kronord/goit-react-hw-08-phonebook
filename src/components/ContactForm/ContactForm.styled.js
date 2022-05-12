import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

export const StyledButton = styled(Button)`
  position: fixed;
  left: 94%;
  top: 85%;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Form = styled.form`
  display: flex;
  position: relative;
  width: 400px;
  flex-direction: column;
  align-self: center;
  align-items: center;
`;

export const Input = styled(TextField)`
  width: 350px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 30px;
`;

export const Title = styled.p`
text-align: center;
text-transform: uppercase;
  margin: 0 0 18px;
  font-size: 20px;
  color: #4169e1;
`;

export const Image = styled.img`
    display: block;
    margin: auto;
    width: 300px;
    height: 300px;
`
