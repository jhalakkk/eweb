import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: ${({ theme }) => theme.colors.black}; /* Black background */
  color: ${({ theme }) => theme.colors.white}; /* White text for contrast */
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray}; /* Dark gray on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white}; /* White link color */
    font-size: 1.8rem;
  }
`;
