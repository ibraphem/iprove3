import styled from "styled-components";

export const StyledServiceWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.innerbg};
  padding: 40px;
  border-radius: 10px;

  img {
      height: 200px;
      width: auto;
      margin-bottom: 10px;
  }
  }
`;
export const StyledServiceContainer = styled.section`
background-color: ${({ theme }) => theme.colors.themebg};

h2 {
    color: ${({ theme }) => theme.colors.textColor};
  }
}
`;
