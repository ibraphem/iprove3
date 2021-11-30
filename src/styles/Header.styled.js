import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.hea} !important;
  button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #f2f2f2;
  }
  ul {
    color: blue;
  }
`;

export const StyledHeader1 = styled.header`
  background-color: #000 !important;
  span {
    color: ${({ theme }) => theme.colors.textColor};
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const StyledHeader2 = styled.span`
  &:hover {
    color: blue;
  }
`;
