import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  max-width: 55rem;
  background-color: white;
  padding: 5.3rem 5.6rem;
  display: flex;
  flex-direction: column;


  h5 {
    color: ${({theme}) => theme.COLORS.DARK};
  }

  span {
    color: ${({theme}) => theme.COLORS.RED};
    font-size: 2rem;
    font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
    padding-block: 2rem;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    input, textarea {
      background-color: #f5f5f5;
      padding: 2.4rem 2.2rem;
      border: none;
      font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
      font-size: 1.8rem;
      outline: none;
  }

  textarea {
    resize: none;
    height: 15rem;
  }
  
}
  button {
    background-color: #FF6D6D;
    padding: 2.2rem 3.6rem;
    border-radius: 3.4rem;
    border: none;
    text-transform: uppercase;
    color: white;
    font-size: 1.6rem;
    font-weight: 500;
    font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
    cursor: pointer;
    transition: transform .4s ease-in-out;
    margin-top: 2rem;
    max-width: 20rem;
    &:hover {
      transform: scale(1.05);
  }
}
`