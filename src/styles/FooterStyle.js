import styled from "styled-components";

export const StyledFooter = styled.footer`
  p {
    color: #fff;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  span {
    color: #fff;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
