import { Container } from "./style";

export function Banner({ imageSrc, smallerTitle, largerTitle}){
  return(
    <Container>
      
        <img src={imageSrc} alt="Imagem de uma pessoa carente" />
        <div className="banner-text-container">
          <div className="banner-text">
            <span>{smallerTitle}</span>
            <h1>{largerTitle}</h1>
          </div>
        </div>
    </Container>
  )
}