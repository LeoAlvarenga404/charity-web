import styled from "styled-components";

export const Container = styled.div`
 
    button {
    background-color: ${({theme}) => theme.COLORS.GRAY_300};
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 4.5rem;
    padding: 1.5rem;
    border: none;

  
    font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
    color: ${({theme}) => theme.COLORS.GRAY_DARK};
    font-size: 2rem;
    line-height: 130%;
    }
 
`
