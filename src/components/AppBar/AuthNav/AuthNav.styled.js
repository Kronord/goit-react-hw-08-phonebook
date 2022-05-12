import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  margin-right: 20px;
`;

export const BorderLink = styled(NavLink)`
  text-decoration: none;
  padding: 8px;
  border-radius: 15px;
  color: #fff;
  font-size: 25px;
  border: 2px solid #fff;
`;

export const Box = styled.div`
  margin-right: 30px;
`