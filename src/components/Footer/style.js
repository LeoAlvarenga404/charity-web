import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.DARK};
  
  .container {
    max-width: 160rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-block: 10rem;
    color: white;
    
     p {
      font-size: 2rem;
      line-height: 130%;
      font-weight: 400;
      font-family: ${({theme})=> theme.FAMILY.FONT_WORK_SANS};
      
    }
    .content-1 {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      .text {
        max-width: 45rem;
     
      }

      .social-media {
        display: flex;
        gap: 1.5rem;
        
        .icon {
          padding: 2rem;
          background-color: #384C56;
          border-radius: 50%;
        }
      }
      
    }

    .content-2 {
      padding: 5.6rem 4.9rem;
      background-color: #384C56;
      display: flex;
      gap: 7rem;
      display: flex;
      flex-wrap: wrap;
      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;


      a  {
        font-size: 2rem;
        line-height: 130%;
        font-weight: 400;
        font-family: ${({theme})=> theme.FAMILY.FONT_WORK_SANS};
        text-decoration: none;
        color: white;
        
        &:hover{
          color: ${({theme})=> theme.COLORS.RED };
        }
        
  }
      }

      h4 {
        margin-bottom: 2rem;
      }
    }
  }

  .footer {
    width: 100%;
    text-align: center;
    border-top: 1px solid #354C56;
    padding: 2rem;
    span {
      color: #FAFAFA;
      font-size: 1.8rem;
      
    }
  }
`