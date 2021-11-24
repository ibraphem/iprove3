import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.themebg} !important;
  span {
    color: ${({ theme }) => theme.colors.textColor};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  } 
  button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #f2f2f2;
  }
  i {
    color: ${({ theme }) => theme.colors.secondary};
  }
  }
`;

export const StyledHeader1 = styled.header`
  background-color: ${({ theme }) => theme.colors.themebg};
  span {
    color: ${({ theme }) => theme.colors.textColor};
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    } 
  }
  }
`;
