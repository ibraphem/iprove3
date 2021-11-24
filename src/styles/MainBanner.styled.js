import styled from "styled-components";

export const StyledMainBanner = styled.div`
  backgroundImage: 'url(${({ theme }) => theme.colors.mbbg})';
  h1{
      color: ${({ theme }) => theme.colors.textColor};
  }
  }
`;
