import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 160rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 3rem;

  > div {
    display: flex;
    align-items: center;
    

    nav {
      display: flex;
      
      ul {
        display: flex;
        
        
        li {
        display: flex;  
        text-decoration: none;
        font-size: 1.6rem;
        font-weight: 500;
        padding-inline:2rem;
        border-right: 1px solid #ccc;
        
         a{
          text-decoration: none;
          color: #2E4049;
         }

        &:hover {
          transform: scale(1.01);
          color: black;
        }

        &:nth-child(5){
          border: none;
        }

        }

        

        .dropdown {
          position: relative;
          z-index: 1;
          
          .dropbtn{
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          &:has(.dropbtn:hover) .dropdown-content {
            display: flex;
          }

          .dropdown-content {
            top: 2rem;
            display: none;
            flex-direction: column;
            background-color: white;
            position: absolute;
            z-index: 2;
            
            
            right: .8rem;
            
            
            &:hover{
              display: flex;
            }

            a {
              padding: 1rem;
              text-align: center;
              &:hover{
                background-color: #FAFAFA;
                
                
              }
            }
            
          }
          
        }
      }
    }
  }
`