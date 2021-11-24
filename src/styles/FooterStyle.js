import styled from "styled-components";

export const StyledFooter = styled.footer`
  backgroundImage: 'url(${({ theme }) => theme.colors.footer})';
  h1{
      color: ${({ theme }) => theme.colors.textColor};
  }
  }
`;
