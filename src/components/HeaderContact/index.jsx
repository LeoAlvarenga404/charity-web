import { Container } from "./style";
import call from '../../assets/call.svg'
import mail from '../../assets/mail.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import pinterest from '../../assets/pinterest.svg'

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
        <img src={instagram} alt="imagem socialmedia" />
        <img src={facebook} alt="imagem socialmedia" />
        <img src={twitter} alt="imagem socialmedia" />
        <img src={pinterest} alt="imagem socialmedia" />
        </div>
      </div>
    </Container>
  )
}