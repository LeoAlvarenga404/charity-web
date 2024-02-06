import { Container } from "./style";
import { LuClock3 } from "react-icons/lu";
export function Event({imageEvent, day, month, calendaryStyle}){
  return(
    <Container>
      <img src={imageEvent} alt="evento"/>
      <div className="info">
        <div className="organized">
          <p>Organized By: <span>Nattasha</span></p>
        </div>
        <div className="time">
          <LuClock3/>
          <span>10:00 AM - 18:00 PM, EVERYDAY</span>
        </div>
      </div>
      <h4>Education for Poor Children</h4>
      <p>There are many varieations of passages of injected Lorem Ipsum available,but the majority have.</p>
      <div className="calendary" style={calendaryStyle}>
        <h1>{day}</h1>
        <h4>{month}</h4>
      </div>
    </Container>
  )
}