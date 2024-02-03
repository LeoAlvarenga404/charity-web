import styled from "styled-components";



export const Container = styled.div`
  width: 100%;
  max-width: 260rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
  'title title img1 img2'
  'img3 img4 tags img5';
  .project-title {
    background-color: ${({theme}) => theme.COLORS.DARK};
    padding: 8rem 10rem;
    grid-area: title;
    }

  .project-tags {
    background-color: ${({theme}) => theme.COLORS.RED};
    padding: 4rem;
  
    display: flex;
    flex-direction: column;
    justify-content: end;
    grid-area: tags;

    .tags {
      display: flex;
      gap: .8rem;
    }

    .tag {
      background-color: #E85353;
      border-radius: 5rem;
      padding: .6rem 2rem;

      p {
        color: white;
        line-height: 130%;
        font-family: ${({theme}) => theme.FAMILY.FONT_WORK_SANS};
        font-weight: 400;
        font-size: 2rem;
      }
    }

    h3 {
      color: white;
      font-size: 3rem;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`