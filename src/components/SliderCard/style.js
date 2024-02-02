import styled from "styled-components";


export const Container = styled.div`
  position: relative;
  width: 100%; 
  
  min-width: 38rem;
  background-color: white;
  display: flex;
  flex-direction: column;

  .content-img {
    
    img {
    width: 100%;
    aspect-ratio: 1/1;
    }

  }
  .promo {
    position: absolute;
    top: 3rem;
    left: 3rem;
    background-color: white;
    color: ${({theme}) => theme.COLORS.RED};
    display: inline-block;
    padding: .8rem 1.3rem;
    text-align: center;
    font-weight: 800;
  }

  .content-title {
    display: flex;
    flex-direction: column;
    padding: 3.4rem 3rem;
    gap: 3.6rem;
    color: ${({theme}) => theme.COLORS.DARK};

    .total-donation-text {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      > div {
        display: flex;
        justify-content: space-between;

        :nth-child(2) {
          color: ${({theme}) => theme.COLORS.RED};
        }
      }
    }

    button {
      width: 100%;
      max-width: 15rem;
      background-color: ${({theme}) => theme.COLORS.DARK};
    }
  }
  
`