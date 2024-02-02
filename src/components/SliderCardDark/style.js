import styled from "styled-components";


export const Container = styled.div`
  position: relative;
  width: 100%; 

  min-width: 38rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  
  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0,0,0,0.6);
    z-index: 6;
    
  }

  .content-img {
    filter: blur(.2rem);
    img {
    width: 100%;
    
    }

  }
  .promo {
    filter: blur(.2rem);
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
    filter: blur(.2rem);
    display: flex;
    flex-direction: column;
    padding: 3.4rem 3rem;
    gap: 3.6rem;
    color: ${({theme}) => theme.COLORS.DARK};

    .total-donation-text {
      filter: blur(.2rem);
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
      filter: blur(.2rem);
      width: 100%;
      max-width: 15rem;
      background-color: ${({theme}) => theme.COLORS.DARK};
    }
  }
  .add {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right:0;
    left: 0;
    bottom:0;
    top: 0;
   
    z-index: 98;

    .add-icon {
      margin-right: 2rem;
      a{
      padding: 3rem;
      background-color: ${({theme}) => theme.COLORS.DARK};
      color: white;
      border-radius: 50%;
      z-index: 1;
      font-size: 5rem;
      display: flex;
      justify-content: center;
      }
    }
  }
  
`