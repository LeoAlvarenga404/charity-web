import { Container } from "./style";

import { FacebookIcon } from '../../components/facebook'
import { InstagramIcon } from '../../components/instagram'
import { TwitterLogo } from '../../components/twitter'
import {  PinterestIcon} from '../../components/pinterest'

export function TeamCard({image, name}){
  return(
    <Container>
      <img src={image} alt="imagem do time"/>
      <h6>{name}</h6>
      <div className="social-media">
        <InstagramIcon color={'#2E4049'}/>
        <FacebookIcon color={'#2E4049'}/>
        <TwitterLogo color={'#2E4049'}/>
        <PinterestIcon color={'#2E4049'}/>
        </div>
    </Container>
  )
}