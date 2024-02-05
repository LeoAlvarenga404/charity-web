import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100%;

  main {
    max-width: 160rem;
    margin: 0 auto;
    padding-block: 14rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }
`