import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100%;

  .container {
    width: 100%;
    max-width: 160rem;
    margin: 0 auto;

    .hero {
        margin-block: 10rem;
      .hero-container {
        display: flex;
        gap: 3rem;
        padding-bottom: 10rem;
        justify-content: space-between;

        p {
          max-width: 80rem;
        }
        .content-1 {
          position: relative;
          width: 100%;
          max-width: 60rem;
          img {
            width: 100%;
          }
          .phrase {
            display: flex;
            align-items: center;
            gap: 2rem;
            padding: 5.5rem;
            position: absolute;
            bottom: -10rem;
            left: -4rem;
            background-color: ${({theme}) => theme.COLORS.DARK};
            color: white;

            h5 {
              max-width: 25rem;
            }
          }
        }
        .content-2 {
          display: flex;
          flex-direction: column;
          justify-content: center;
         

          span {
            display: inline-block;
          }
    
          .green  {
            font-size: 2rem;
            padding: 2rem;
            color: #538582;
            background-color: #DEF1F0;
            max-width: 50rem;
          }

          button {
            max-width: 20rem;
            background-color: ${({theme}) => theme.COLORS.DARK};
            margin-top: 2rem;
            
          }
        }

      }
    }

    .marcas {
      display: flex;
      justify-content: space-between;
      padding-block: 5rem;
      border-block: 1px solid #CCC;

      
    }

    .content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
      margin-top: 10rem;
      margin-bottom: 20rem;
        .goal {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap:2rem;
          

          .tag {
            background-color: ${({theme}) => theme.COLORS.GRAY_300};
            display: flex;
            align-items: center;
            gap: 1rem;
            border-radius: 4.5rem;
            padding: 1.5rem;
            max-width: 40rem;
            font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
            color: ${({theme}) => theme.COLORS.GRAY_DARK};
            font-size: 2rem;
            line-height: 130%;
          }
        }
        
        p {
          font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
          color: ${({theme}) => theme.COLORS.GRAY_DARK};
          font-size: 2rem;
          line-height: 130%;
          font-weight:400;
        }
      
      }

      .mission {
        position: relative;
        .mission-text {
          position: absolute;
          bottom: -20%;
          left: 4rem;
          width: 40rem;
          padding: 4rem 5rem;
          display: flex;
          flex-direction: column;
          color: ${({theme}) => theme.COLORS.DARK};
          background-color: ${({theme}) => theme.COLORS.BLUE};
          h1 {
            font-size: 8rem;
          }
          p {
          font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
          
          font-size: 2rem;
          line-height: 130%;
          font-weight:400;
        }
        }
      }
    }

  }


  #team {
      padding-block: 15rem;
      background-color: #F1EEEC;
      .team-container {
        width: 100%;
        max-width: 160rem;
        margin: 0 auto;
        .team-cards {
          display: flex;
          gap: 2.3rem;
        }
      }
    }
`