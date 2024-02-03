import { Container } from "./style";
import svg from '../../assets/hand.svg';
import { Button } from "../Button";
import { Link } from "react-router-dom";
export function TeamCardBlue(){
  return(
    <Container>
      <img src={svg} alt="hand icon" />
      <h5>Become<br/> a Volunteer</h5>
      <p>Centuries but also the leap  electtypesetting, remaining </p>
      <Link to={'/volunteer'}><Button title={'Join us Today'}/></Link>
    </Container>

  )
}