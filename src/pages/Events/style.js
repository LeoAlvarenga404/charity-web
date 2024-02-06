import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100%;

  main {
    width: 100%;
    max-width: 160rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
    margin-block: 10rem;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
   }
`