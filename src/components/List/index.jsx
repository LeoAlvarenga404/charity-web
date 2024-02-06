import { Container } from "./style"



export function List({number, title, style}){
  return(
    <Container>
      <h4 className="circle">{number}</h4>
      <div className="text" style={style}>
        <h4>{title}</h4>
        <p>Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.</p>
      </div>
    </Container>    
  )
}