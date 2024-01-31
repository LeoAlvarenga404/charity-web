import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .discover {
        width: 100%;
        display: flex;
        transform: translateY(-10rem);

      > div {
        width: 100%;
        background-color: ${({theme}) => theme.COLORS.BLUE};
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        h2 {
          color: ${({theme}) => theme.COLORS.DARK}
        }

        p {
          font-size: 2rem;
          font-family: ${({theme}) => theme.FAMILY.WORK_SANS};
          line-height: 130%;
          max-width: 30rem;
        }

        button {
          background-color: white;
          color: ${({theme}) => theme.COLORS.DARK};
          width: 15rem;
        }
      
        &:nth-child(2) {
          background-color: ${({theme}) => theme.COLORS.DARK};

        h2, p, a {
          color: white;
        }

        a {
          font-size: 1.8rem;
          font-family: ${({theme}) => theme.FAMILY.WORK_SANS};
          font-weight: 500;
          text-transform: uppercase;
        }

        
         
        }
      }

      img {
        width: 100%;
      }
      .content-discover {
        padding: 0 4rem;
      }

      
    }
`