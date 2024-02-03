import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  img {
    width: 100%;
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
    color: ${({theme}) => theme.COLORS.DARK};
    font-size: 2rem;
    font-weight: 500;
    line-height: 130%;
  }

  svg {
    font-size: 2.4rem;
    color: ${({theme}) => theme.COLORS.RED};
  }

  h4 {
    color: ${({theme}) => theme.COLORS.DARK};
    
  }

  .info {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK};
    .time {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  .calendary {
    position: absolute;
    top: 0;
    background-color: ${({theme}) => theme.COLORS.RED};
    height: 12rem;
    width: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1,h4 {
      color: white
    }
  }


`