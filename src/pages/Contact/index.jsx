import { HeaderContact } from '../../components/HeaderContact'
import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Container } from "./style"
import image from '../../assets/bg-contact.png'
import { Footer } from '../../components/Footer';
import { TextGroup } from '../../components/TextGroup'

import { InstagramIcon } from '../../components/instagram'
import { FacebookIcon } from '../../components/facebook'
import { TwitterLogo } from '../../components/twitter'
import { PinterestIcon } from '../../components/pinterest'

import { Form } from '../../components/Form'

export function Contact(){
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <Banner imageSrc={image} smallerTitle={'Contact'} largerTitle={'Get in Touch'}/>
      <main>
        <div className="content-1">
          <TextGroup smallerTitle={'Contact'} largerTitle={'Get in Touch With Us'} text={'Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book. '}/>
          <div className="message">
            <div className="message-icon">
              <svg width="40" height="29" viewBox="0 0 40 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="1.5" width="36.2903" height="26" stroke="#FF6D6D" stroke-width="3"/>
            <path d="M2.8064 2.8064L19.4601 17.7741L36.4838 2.8064" stroke="#FF6D6D" stroke-width="3"/>
              </svg>
            </div>
            <div className="text">
              <h4>Message</h4>
              <p>support@walfare.com</p>
            </div>
          </div>
          <div className="message">
            <div className="message-icon">
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.9076 29.4257C34.5715 28.0796 31.3356 26.1152 29.7656 25.3235C27.7211 24.2937 27.5528 24.2096 25.9458 25.4034C24.8739 26.2001 24.1612 26.9119 22.9068 26.6444C21.6523 26.3768 18.9263 24.8683 16.5393 22.4891C14.1523 20.1099 12.5563 17.305 12.2879 16.0548C12.0195 14.8046 12.7431 14.1004 13.5323 13.0261C14.6445 11.5117 14.5604 11.2593 13.6097 9.21493C12.8684 7.62486 10.8466 4.41946 9.49538 3.0902C8.04991 1.66249 8.04991 1.91488 7.11852 2.30189C6.36025 2.6209 5.6328 3.00868 4.94527 3.46037C3.59908 4.35468 2.85194 5.09756 2.32946 6.21398C1.80697 7.3304 1.57223 9.94771 4.27049 14.8492C6.96875 19.7507 8.86183 22.2569 12.7801 26.164C16.6983 30.071 19.7113 32.1718 24.1158 34.6418C29.5645 37.6933 31.6545 37.0985 32.7743 36.5769C33.8942 36.0552 34.6405 35.3149 35.5365 33.9688C35.9894 33.2825 36.3781 32.5559 36.6976 31.7982C37.0855 30.8703 37.3379 30.8703 35.9076 29.4257Z" stroke="#FF6D6D" stroke-width="3" stroke-miterlimit="10"/>
            </svg>

            </div>
            <div className="text">
              <h4>Contact Us</h4>
              <p>+01 (000) 265 458</p>
            </div>
          </div>
          <div>
            <h4>Follow us on social media</h4>
            <p>Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis.</p>
          </div>
          <div className="social-media">
            <InstagramIcon color={'#2E4049'}/>
            <FacebookIcon color={'#2E4049'}/>
            <TwitterLogo color={'#2E4049'}/>
            <PinterestIcon color={'#2E4049'}/>
          </div>
        </div>
        <div className="content-2">
          <Form
          containerStyle={{border: '1px solid #ccc', maxWidth: '90rem'}}
          firstInput={'Enter Your Name*'}
          secondInput={'Phone Number*'}
          thirdInput={'Email Address*'}
          fourInputStyle={{display: 'none'}}
          textarea={'Your Message*'}
          button={'Submit'}
          buttonStyle={{background: '#2E4049'}}
          />
        </div>
      </main>
      <Footer/>
    </Container>
  )
}