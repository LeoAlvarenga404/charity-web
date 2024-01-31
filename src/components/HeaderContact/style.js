import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BLUE};
  padding-inline: 2rem;
  .header {
    width: 100%;
    max-width: 160rem;
    
    margin: 0 auto;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    .contact {
      display: flex;
      gap: 4.5rem;
      align-items: center;
      padding-block: 2.5rem;
      > div {
        display: flex;
        align-items: center;
        gap: .7rem;

        a {
          font-size: 1.8rem;
          text-decoration: none;
          font-weight: 400;
          color: #126360;
          font-size: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
        }
      }
    }

    .social-media {
      display: flex;
      align-items: center;
      gap: 1.7rem;
      padding-block: 2.5rem;
      padding-inline: 3.8rem;
      background-color: #4BC9C4;
      cursor: pointer;
    }
  }
`