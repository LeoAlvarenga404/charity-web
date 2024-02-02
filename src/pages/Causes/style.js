import styled from "styled-components";

export const Container = styled.div`
  main {
      background-color: ${({theme}) => theme.COLORS.GRAY_200};
      padding-block: 16rem;
    .content {
      max-width: 160rem;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
    }
  }
`