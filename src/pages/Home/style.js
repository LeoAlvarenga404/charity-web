import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  main {
    width: 100%;
    max-width: 160rem;
    margin: 0 auto;
    padding-bottom: 4rem;
    
    #aboutUs {
      display: flex;
      gap: 5rem;
      .about-us {
      div {
        margin-bottom: 2rem;
      }
    }
      .donation {
        width: 100%;
        padding: 5.7rem 4rem;
        background-color: ${({theme}) => theme.COLORS.GRAY_300};
        display: flex;
        flex-direction: column;
        gap: 4rem;
        .content-verify {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.6rem;
          .verify {
            display: flex;
            align-items: center;
            gap: 1.4rem;
            p {
              font-size: 2rem;
              font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
              color: ${({theme}) => theme.COLORS.GRAY_DARK};
              font-weight: 500;
            }
          }
        }

        .total-donation {
          display: flex;
          flex-direction: column;
          gap: 2.8rem;
          color: ${({theme}) => theme.COLORS.DARK};
          .total-donation-text {
            display: flex;
            justify-content: space-between;


          }
        }

        button {
          color: ${({theme}) => theme.COLORS.DARK};
          background-color: white;
          max-width: 20rem;
        }
      }

    }
      
    
  }
  
`