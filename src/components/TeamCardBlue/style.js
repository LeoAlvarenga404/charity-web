import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BLUE};
  color: ${({theme}) => theme.COLORS.DARK};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    padding: 1.8rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.COLORS.DARK};
    width: 8.2rem;
    height: 8.2rem;
  }


  p {
    font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
    font-weight: 400;
    font-size: 2rem;
    line-height: 130%;
  }

  button {
    background-color: ${({theme}) => theme.COLORS.DARK};
    color: white;
    max-width: 25rem;
    margin-top: 3rem;
  }
`