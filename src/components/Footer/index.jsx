import { Container } from "./style"
import { Logo } from '../../components/logo'
import { FacebookIcon } from '../../components/facebook'
import { InstagramIcon } from '../../components/instagram'
import { TwitterLogo } from '../../components/twitter'
import {  PinterestIcon} from '../../components/pinterest'
import { Link } from "react-router-dom"
export function Footer(){
  return(
   <Container>
     <div className="container">
       <div className="content-1">
       <Logo color={'#ffffff'}/>
         <p className="text">Care about people to transforming their lives and exudes a positives Impressiono believe. fundraising NGO organizations.</p>
         <div className="social-media">
            <div className="icon">
           <InstagramIcon className="icon" color={'#FFF'}/>
           </div>
            <div className="icon">  
           <FacebookIcon className="icon" color={'#FFF'}/>
            </div>
            <div className="icon">
           <TwitterLogo className="icon" color={'#FFF'}/>
           </div>
            <div className="icon">
           <PinterestIcon className="icon" color={'#FFF'}/>
           </div>
         </div> 
       </div>
       <div className="content-2">
        <ul>
          <h4>Get Involved</h4>
          <Link to="/about">About Us</Link>
          <Link to="/volunteer">Volunteer</Link>
          <Link to="/causes">Causes</Link>
          <Link to="/project">Projects</Link>
          <Link to="/team">Team</Link>
        </ul>
        <ul>
          <h4>Utility</h4>
          <Link to="https://www.figma.com/file/WmxgoXJyaG9vbateJzt7Nw/Charity-Webflow-Website-Template-(Community)?type=design&node-id=1-4&mode=design&t=EV29QSvvyaq6ssSs-0" target="_blank">Style Guild</Link>
          <Link to="https://www.figma.com/file/WmxgoXJyaG9vbateJzt7Nw/Charity-Webflow-Website-Template-(Community)?type=design&node-id=1-4&mode=design&t=EV29QSvvyaq6ssSs-0" target="_blank">Licenses</Link>
          <Link to="https://www.figma.com/file/WmxgoXJyaG9vbateJzt7Nw/Charity-Webflow-Website-Template-(Community)?type=design&node-id=1-4&mode=design&t=EV29QSvvyaq6ssSs-0" target="_blank">Reference</Link>
          <Link to="https://www.figma.com/file/WmxgoXJyaG9vbateJzt7Nw/Charity-Webflow-Website-Template-(Community)?type=design&node-id=1-4&mode=design&t=EV29QSvvyaq6ssSs-0" target="_blank">Credits</Link>
          <Link to="https://www.figma.com/file/WmxgoXJyaG9vbateJzt7Nw/Charity-Webflow-Website-Template-(Community)?type=design&node-id=1-4&mode=design&t=EV29QSvvyaq6ssSs-0" target="_blank">More content</Link>
        </ul>
        <ul>
          <h4>Contact</h4>
          <p>660 Broklyn Street,<br/> 88 New York</p>
          <br/>
          <br/>
          <p>help Need@walfare.com</p>
          <p>222 888 0000</p>
        </ul>
       </div>
     </div>
     <div className="footer">
      <span>Copyright © Walfare | Designed by VictorFlow Templates - Powered by Webflow</span>
     </div>
   </Container>
  )
}

