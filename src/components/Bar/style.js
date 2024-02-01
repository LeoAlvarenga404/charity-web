import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: .6rem;
  background-color: #C5CECC;
  border-radius: 4rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 60%;
    height: .6rem;
    background-color: ${({theme}) => theme.COLORS.RED};
    border-radius: 4rem;
}
`