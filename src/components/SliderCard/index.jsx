import { Container } from "./style";
import { Bar } from "../Bar";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export function SliderCard({imageSrc, promo, title, raised, goal }){
  return(
    <Container>
      <div className="content-img">
      <img src={imageSrc} alt="imagem card" />
      </div>
      <h4 className="promo">{promo}</h4>
      <div className="content-title">
        <h4>{title}</h4>
            <div className="total-donation-text">
            <Bar/>
            <div>
              <h6>{raised}</h6>
              <h6>{goal}</h6>
              </div>
            </div>
      <Link to="/causes"><Button title={"Donate"}/></Link>
      </div>
    </Container>
  )
}

