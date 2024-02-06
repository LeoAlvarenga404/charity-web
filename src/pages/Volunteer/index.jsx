import { HeaderContact } from '../../components/HeaderContact'
import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Container } from "./style"
import image from '../../assets/volunteer.png'
import { Footer } from '../../components/Footer';
import { TextGroup } from '../../components/TextGroup'
import { Button } from '../../components/Button'
import volunteer1 from '../../assets/volunteer1.png'
import volunteer2 from '../../assets/volunteer2.png'

import { List } from '../../components/List'
import { Form } from '../../components/Form'

export function Volunteer(){
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <Banner imageSrc={image} smallerTitle={'Need Your Heartful Help...'} largerTitle={'Become a Volunteer'}/>
      <main>
        <div className="help-container">

          <div className="content-1">
            <div>
            <TextGroup smallerTitle={'Help First'} largerTitle={'Lets help together'} text={'Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book. '} secondText={'It has survived not only five centuries, but also the leap into electronic typesetting, remaining when an unknown printer took a galley of type and scrambled it to make a type specimen book. essentially.'}/>
            <Button title={'Call: +000 365 698'}/>
            </div>
            <div>
              <img src={volunteer1} alt="imagem de um médico" />
            </div>
          </div>
          <div className="content-1 content-2">
            <div>
            <TextGroup largerTitle={'More People More impact'} text={'Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book. '}/>
            </div>
            <div>
              <img src={volunteer2} alt="imagem de uma mãe" />
            </div>
          </div>
        </div>
      </main>
        <div className="container-volunteer">
          <div className="volunteer">
          <div className="content-1">
          <TextGroup smallerTitle={'Help First'} largerTitle={'Lets help together'} text={'Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book. '} secondText={'Bring to the table win-win survival strategies to proactive domination.  is on the runway heading towards a streamlined cloud solution. User gener eal-time will have multiple touch points for offshoring.'}/>
          <div className="lists">
            <List number={'01'} title={'Create a personal profile'}/>
            <List number={'02'} title={'Add your organization'}/>
            <List number={'03'} title={'Add volunteer opportunities'}/>
            <List number={'04'} title={'You are ready to recruit!'} style={{border: 'none'}}/>
            <Button title={'Get started'}/>
          </div>
          </div>
          <div className="content-2">
            <Form
             title={'Complete the Form'}
             subtitle={'Fill Form and Beacame Volonteer'}
             firstInput={'Enter Your Name*'}
             secondInput={'Phone Number*'}
             thirdInput={'Email Address*'}
             fourInput={'Address*'}
             textarea={'About Occupation*'}
             button={'Submit'}
             buttonStyle={{background: '#384C56'}}
             />
          </div>
          </div>
          
        </div>
      <Footer/>
    </Container>
  )
}