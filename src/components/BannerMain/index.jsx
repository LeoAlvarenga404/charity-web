import { Container } from "./style"
import { Button } from "../Button"
export function BannerMain({ imagedobanner, subtitle, title, text, input, button }){
  return(
    <Container>
      <div className="background">
        <img src={imagedobanner} alt="img do banner" />
        <div className="content">
          <span>{subtitle}</span>
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="button-input">
            <input style={input} type="text" placeholder="Enter Your Email Address"/>
            <Button title={button}/>
          </div>
        </div>
      </div>
    </Container>
  )
}