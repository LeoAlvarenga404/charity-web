import styled from "styled-components";


export const Container = styled.div`
  width: 100%;

  main {
    width: 100%;
    max-width: 160rem;
    margin: 0 auto;
    height: 100%;
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-block: 10rem;
    img {
      width: 100%;
    }

    .red-square {
      background-color: ${({theme}) => theme.COLORS.RED};
      position: relative;
      color: white;
      display: flex;
      align-items: end;
      padding: 2rem;

      h5 {
        font-size: 5rem;
      }

      svg {
        position: absolute;
        right: 2rem;
        top: 2rem;
      }
    }


  }
`