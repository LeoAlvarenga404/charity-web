import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 120rem;
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
      
      a {
        color: #2E4049;
        text-decoration: none;
        font-size: 1.6rem;
        font-weight: 500;
        padding-inline:2rem;
        border-right: 1px solid #ccc;
        
        &:hover {
          transform: scale(1.01);
          color: black;
        }

        &:nth-child(5){
          border: none;
        }
      }
    }
  }
`