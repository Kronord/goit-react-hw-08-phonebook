import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4169E1;
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    color: #fff;
    font-size: 25px;
    margin-right: 20px;
`

export const BorderLink = styled(NavLink)`
  text-decoration: none;
  padding: 8px;
  border-radius: 15px;
  color: #fff;
  font-size: 25px;
  margin-right: 20px;
  border: 2px solid #fff;
`;
