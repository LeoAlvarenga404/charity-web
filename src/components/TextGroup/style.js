import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
      font-family: ${({theme}) => theme.FAMILY.FONT_SUE_ELLEN};
      color: ${({theme}) => theme.COLORS.RED};
      font-size:3.5rem;
      line-height: 108%;
    }

    h1 {
      width: 100%;
      max-width: 33rem;
      color: ${({theme}) => theme.COLORS.DARK};
    }

    .texts-group {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      p {
      font-size: 2rem;
      line-height: 130%;
     
      font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
      color: ${({theme}) => theme.COLORS.GRAY_DARK};
    }
    }

    
  

`