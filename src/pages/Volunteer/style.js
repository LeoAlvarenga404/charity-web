import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100%;

  main {
    width: 100%;
    max-width: 160rem;
    margin: 10rem auto;

    .help-container {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      

      .content-1 {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 3rem;
        :nth-child(1) {
          
        }

        :nth-child(2){
          width: 100%;
        }

        img {
          width: 100%;
          
        }
        button {
          max-width: 25rem;
          margin-top: 3rem;
          background-color: ${({theme}) => theme.COLORS.DARK};
        }
      }

      .content-2 {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
      }
    }

  }

  .container-volunteer {
      background-color: #F1EEEC;
      padding-block: 10rem;
      .volunteer {
        
        width: 100%;
        max-width: 160rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        gap: 3rem;
        .content-1 {
          .lists {
            margin-top: 4rem;
          }
          button {
            background-color: white;
            color: ${({theme}) => theme.COLORS.DARK};
            margin-left: 5rem;
            margin-top: 2.4rem;
          }
          }

        .content-2 {
          width: 100%;
          display: flex;
          justify-content: end;
          
        }
        }
      }
`