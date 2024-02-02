import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  main {
    width: 100%;
    
    #discover {
      max-width: 160rem;
      margin: 0 auto;
    }
    
    #aboutUs {
      display: flex;
      gap: 5rem;
      
      max-width: 160rem;
      margin: 0 auto;
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

    #causes {
      background-color: ${({theme}) => theme.COLORS.GRAY_200};
      margin-top: 16rem;
      
      .causes-container {
        max-width: 160rem;
        margin: 0 auto;
        padding-block: 15rem;

        .causes-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          button {
            width: 20rem;
            margin-bottom: 6rem;
          }
        }
        .slider-cards {
          width: 100%;
          display: flex;
          gap: 3rem;
          overflow-x: hidden;
        }

        .slider-buttons {
          display: flex;
          width: 100%;
          justify-content: space-around;
         
          .btn-prev, .btn-next {
            margin-top: 5rem;
            background-color: white;
            height: 5rem;
            width: 5rem;
            border-radius: 50%;
            padding: 1rem;
            color: ${({theme}) => theme.COLORS.DARK};
            cursor: pointer;
          }
        }
      } 
      
    }
    
    
  }
  
`