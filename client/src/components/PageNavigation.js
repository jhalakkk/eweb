import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 3.2rem;
    text-decoration: none; /* Remove underline from links */
    margin-right: 1rem; /* Space between links */

    &.active {
      font-weight: bold; /* Bold for active link */
      color: ${({ theme }) => theme.colors.primary}; /* Use theme color for active link */
    }
  }
`;

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
    </Wrapper>
  );
};

export default PageNavigation;
