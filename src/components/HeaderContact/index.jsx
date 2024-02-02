import { Container } from "./style";
import call from '../../assets/call.svg'
import mail from '../../assets/mail.svg'

import { FacebookIcon } from '../../components/facebook'
import { InstagramIcon } from '../../components/instagram'
import { TwitterLogo } from '../../components/twitter'
import {  PinterestIcon} from '../../components/pinterest'


export function HeaderContact(){
  return(
    <Container>
      <div className="header">
        <div className="contact">
        <div>
          <img src={call} alt="imagem de um telefone" />
          <a href="#">+01 569 896 654</a>
        </div>
        <div>
          <img src={mail} alt="imagem de um email" />
          <a href="#">info@charity.com</a>
        </div>
        </div>
        <div className="social-media">
        <InstagramIcon color={'#126360'}/>
        <FacebookIcon color={'#126360'}/>
        <TwitterLogo color={'#126360'}/>
        <PinterestIcon color={'#126360'}/>
        </div>
      </div>
    </Container>
  )
}