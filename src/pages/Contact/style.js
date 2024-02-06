import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100%;

  main {
    width: 100%;
    max-width: 160rem;
    margin: 15rem auto;
    display: flex;
    gap: 5rem;
    justify-content: center;
    h4 {
      color: ${({theme}) => theme.COLORS.DARK};
    }

        
    p {
        font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
        color: ${({theme}) => theme.COLORS.GRAY_DARK};
        font-size: 2rem;
        line-height: 130%;
        font-weight: 400;
      }
    .content-1 {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    
      .message {
        display: flex;
        align-items: center;
        
        gap: 2rem;
        .message-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 8rem;
          height: 8rem;
          background-color: #F2F2F2;
        }
      }
      .social-media {
        display: flex;
        gap: 2.4rem;
        svg {
          width: 3rem;
          height: 3rem;
        }
      }

    
    }
    .content-2 {
      width: 100%;

      
    }
  }
`