import { HeaderContact } from '../../components/HeaderContact'
import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Container } from "./style"
import image from '../../assets/events.png'

import { Event } from '../../components/Event'

import event1 from '../../assets/event1.png'
import event2 from '../../assets/event2.png'
import event3 from '../../assets/event3.png'
import event4 from '../../assets/event4.png'
import event5 from '../../assets/event5.png'
import event6 from '../../assets/event6.png'



import { Footer } from '../../components/Footer';

export function Events(){
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <Banner imageSrc={image} smallerTitle={'Donation'} largerTitle={'Our Events'}/>
      <main>
        <Event imageEvent={event1} day={'18'} month={'June'}/>
        <Event imageEvent={event2} day={'21'} month={'June'} calendaryStyle={{background: '#2E4049'}}/>
        <Event imageEvent={event3} day={'28'} month={'June'} calendaryStyle={{background: '#2E4049'}}/>
        <Event imageEvent={event4} day={'09'} month={'July'} calendaryStyle={{background: '#2E4049'}}/>
        <Event imageEvent={event5} day={'23'} month={'July'} calendaryStyle={{background: '#2E4049'}}/>
        <Event imageEvent={event6} day={'02'} month={'August'} calendaryStyle={{background: '#2E4049'}}/>
      </main>
      <Footer/>
    </Container>
  )
}