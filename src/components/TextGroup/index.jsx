import { Container } from "./style";

export function TextGroup({smallerTitle, largerTitle, text, secondText}){
  return(
    <Container>
        <span>{smallerTitle}</span>
        <h1>{largerTitle}</h1>
        <div className="texts-group">
          <p>{text}</p>
          <p>{secondText}</p>
         
        </div>
    </Container>
  )
}