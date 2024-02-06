import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 1.5rem;
    
    align-items: center;
    .circle {
        width:6.4rem;
        height: 6.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: ${({theme}) => theme.COLORS.RED};
        border-radius: 50%;
    }

    .text {
        border-bottom: 1px solid #ccc;
        padding-bottom: 3.2rem;
        padding-top: 1.8rem;

        h4 {
        color: ${({theme}) => theme.COLORS.DARK};
    }

    p {
        font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
        color: ${({theme}) => theme.COLORS.GRAY_DARK};
        font-size: 2rem;
        line-height: 130%;
        font-weight: 400;
        
    }

    }
    
    

`
