import styled from "styled-components";


export const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;

    &::before {
      content: "";
      width: 100%;
      background: linear-gradient(110deg, #111, transparent);
      position: absolute;
      height: 100%;
    }
  img {
    width: 100%;
  }

  .banner-text-container {
    width: 100%;
    max-width: 160rem;
    margin: 0 auto;
    .banner-text {
    position: absolute;
    top: 30%;
    color: white;
    max-width: 90rem;
    span {
      font-size: 5rem;
      font-weight: 400;
      font-family: ${({theme}) => theme.FAMILY.FONT_SUE_ELLEN};
      line-height: 108%;


    }
    h1 {
      font-size: 9rem;
      font-weight: 800;
      line-height: 108%;
    }
  }

  .styleBanner {
      display: flex;
      align-items: center;
      margin-top: 1rem;
    .circle {
      width: 2.4rem;
      height: 2.4rem;
      background-color: white;
      border-radius: 50%;
    }
    .line {
      width: 100%;
      max-width:30rem;
      height: .1rem;
      background-color: white;
    }

    .content {
        
      > p {
        font-size: 1.6rem;
        font-weight: 500;
        font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
        letter-spacing: .4rem;
        padding: .6rem 1.8rem;
        border-radius: 1.8rem;
        border: .2rem solid white;
        text-transform: uppercase;
      }
    }

  }

  .banner-buttons {
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
    
    :nth-child(2) {
      background-color: white;
      color: ${({theme}) => theme.COLORS.DARK};
      
    }
  }
}
`