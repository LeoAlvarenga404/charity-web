import styled from "styled-components";


export const Container = styled.div`
    position: relative;
    width: 100%;
    

  img {
    width: 100%;
  }

  .banner-text-container {
    width: 100%;
    max-width: 120rem;
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
}
`