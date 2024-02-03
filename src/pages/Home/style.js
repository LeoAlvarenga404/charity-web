import styled from "styled-components";




export const Container = styled.div`
  width: 100%;

  main {
    width: 100%;
    
    #discover {
      max-width: 160rem;
      margin: 0 auto;
    }
    
    #aboutUs {
      display: flex;
      gap: 5rem;
      
      max-width: 160rem;
      margin: 3rem auto 0;
      
      .about-us {
      div {
        margin-bottom: 2rem;
      }
    }
      .donation {
        width: 100%;
        padding: 5.7rem 4rem;
        background-color: ${({theme}) => theme.COLORS.GRAY_300};
        display: flex;
        flex-direction: column;
        gap: 4rem;
        .content-verify {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.6rem;
          .verify {
            display: flex;
            align-items: center;
            gap: 1.4rem;
            p {
              font-size: 2rem;
              font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
              color: ${({theme}) => theme.COLORS.GRAY_DARK};
              font-weight: 500;
            }
          }
        }

        .total-donation {
          display: flex;
          flex-direction: column;
          gap: 2.8rem;
          color: ${({theme}) => theme.COLORS.DARK};
          .total-donation-text {
            display: flex;
            justify-content: space-between;


          }
        }

        button {
          color: ${({theme}) => theme.COLORS.DARK};
          background-color: white;
          max-width: 20rem;
        }
      }

    }

    #causes {
      background-color: ${({theme}) => theme.COLORS.GRAY_200};
      margin-top: 16rem;
      
      .causes-container {
        max-width: 160rem;
        margin: 0 auto;
        padding-block: 15rem;

        .causes-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          button {
            width: 20rem;
            margin-bottom: 6rem;
          }
        }
        .slider-cards {
          width: 100%;
          display: flex;
          gap: 3rem;
          overflow-x: hidden;
        }

        .slider-buttons {
          display: flex;
          width: 100%;
          justify-content: space-around;
         
          .btn-prev, .btn-next {
            margin-top: 5rem;
            background-color: white;
            height: 5rem;
            width: 5rem;
            border-radius: 50%;
            padding: 1rem;
            color: ${({theme}) => theme.COLORS.DARK};
            cursor: pointer;
          }
        }
      } 
      
    }
    
    #volunteer {
      width: 100%;
      background: #2E4049;


      .container-volunteer{
        max-width: 160rem;
        margin: 0 auto;
        padding-block: 11rem;
        display: flex;
        gap: 10rem;
        
        .content-1 {
          display: flex;
          flex-direction: column;
           
          img {
            width: 100%;
          }

          button {
            max-width: 20rem;
            margin-top: 3rem;
          }
        }
        
      }
    }

    #need {
      max-width: 160rem;
      margin: 0 auto;
      padding: 6.6rem 0 15rem 0;

      .container {

        .content {
          margin-top: 6rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 5rem;
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

    #events {
      width: 100%;
      max-width: 160rem;
      margin: 0 auto;
      margin-block: 12rem;

      .events-container {
        .events-title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          
         width: 20rem;
        }
        }

        .events-content {
          display: flex;
          justify-content: space-between;
          gap: 5rem;

         .content-1{
          .locate {
            display: flex;
            align-items: center;
            width: 100%;
            max-width: 50rem;
            gap: 2rem;
            background-color: ${({theme}) => theme.COLORS.GRAY_200};
            padding: 1.8rem;
            margin-top: 3rem;
            span {
              font-size: 1.8rem;
              font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
              font-weight: 500;
              text-transform: uppercase;
              color: ${({theme}) => theme.COLORS.DARK}
              
            }
            
            svg {
              font-size: 3rem;
              color: ${({theme}) => theme.COLORS.RED}
            }
          }
         } 
          

        .content-2 {
          display: flex;
          flex-direction: column;

          

          .container {
            display: flex;
            gap: 2rem;
            border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_DARK};
            padding-block: 3rem;

            &:nth-child(1) {
            padding-top: 0;
            }

            &:nth-child(3) {
            border: 0;
            }
            

            p {
              font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
              color: ${({theme}) => theme.COLORS.GRAY_DARK};
              font-size: 2rem;
              line-height: 130%;
              font-weight: 400;
              
              
            }

            span {
              font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
              color: ${({theme}) => theme.COLORS.RED};
              font-size: 2rem;
              font-weight: 500;
              line-height: 130%;
            }

          h4 {
            color: ${({theme}) => theme.COLORS.DARK};
          }

            .calendary {
            background-color: ${({theme}) => theme.COLORS.DARK};
            height: 13rem;
            width: 12rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            h1,h4 {
              color: white
            }
          }

          .calendary-text {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          }

          
        }
        }
        

      }
    }
  }
  
`