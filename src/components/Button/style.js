import styled from "styled-components";

export const Container = styled.button`
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
  &:hover {
    transform: scale(1.05);
  }
  
`
