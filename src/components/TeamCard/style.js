import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  width: 100%;

  img {
    width: 100%;
  }
  h6 {
    color: ${({theme}) => theme.COLORS.DARK};
  }
  .social-media {
    display: flex;
    gap: 1.8rem;
  }
`