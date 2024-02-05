import styled from "styled-components";


export const Container = styled.div`
  width: 100%;

  .background {
    position: relative;
    color: white;
    text-align: center;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: ${({theme}) => theme.COLORS.RED};
      opacity: 0.9;
      position: absolute;
    }

    .content {
      position: absolute;
      z-index: 2;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: .5rem;
      

      span {
        font-size: 3.5rem;
        line-height: 108%;
        font-family: ${({theme}) => theme.FAMILY.FONT_SUE_ELLEN};

      }

      p {
        font-size: 2rem;
        font-family: ${({theme}) => theme.FAMILY.WORK_SANS};
        line-height: 130%;
        max-width: 77rem;
        
      }

      .button-input {
        display: flex;
        width: 100%;
        gap: 2rem;
        justify-content: center;
        margin-top: 2rem;
        input {
        width: 100%;
        max-width: 50rem;
        padding: 2.1rem 2.6rem;
        border-radius: 3.4rem;
        border: none;
        background: white;
        outline: none;
        
        &::placeholder {
          color: ${({theme}) => theme.COLORS.GRAY_DARK};
        }
      }

      button {
        background-color: ${({theme}) => theme.COLORS.DARK};
      }
      }

      
    }
  }
`