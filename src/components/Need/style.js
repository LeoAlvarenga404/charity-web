import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({theme}) => theme.COLORS.DARK};
  gap: 1.6rem;

  p {
    font-size: 2rem;
    max-width: 35rem;
    width: 100%;
    color: ${({theme}) => theme.COLORS.GRAY_DARK};
    font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
    font-weight: 400;
  }
`