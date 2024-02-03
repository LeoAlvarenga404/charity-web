import { Container } from "./style"

export function Need({image, title}){
  return(
    <Container>
      <img src={image} alt="imagem" />
      <h5>{title}</h5>
      <p>Centuries but also the leap into electronic typesetting, remaining specimen book.</p>
    </Container>
  )
}