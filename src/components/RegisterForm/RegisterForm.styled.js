import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Wrapper = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  margin-top: 100px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const SubmitButton = styled(Button)`
 margin-top: 30px;
`;

export const Title = styled.h2`
display: flex;
align-items: center;
  font-size: 30px;
  margin: 0 0 30px;
`;
