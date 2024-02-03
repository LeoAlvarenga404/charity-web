import { Container } from "./style";
import { TextGroup } from '../../components/TextGroup'
import { Button } from '../Button'

import image1 from '../../assets/project-1.png'
import image2 from '../../assets/project-2.png'
import image3 from '../../assets/project-3.png'
import image4 from '../../assets/project-4.png'
import image5 from '../../assets/project-5.png'

import { Link } from "react-router-dom";


export function Project(){
  return(
    <Container>
      <div className="project-title">
        <TextGroup smallerTitle={'What we Did'} largerTitle={'Featured Projects'} largerTitleStyle={{color: 'white'}} text={'Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled  a type specimen book. '} textStyle={{color: 'white'}}/>
        <Link to={'/project'}><Button title={'More Project'}/></Link>
      </div>
      <div className="image-1">
        <img src={image1} alt="imagem" />
      </div>
      <div className="image-2">
        <img src={image2} alt="imagem" />
      </div>
      <div className="image-3">
        <img src={image3} alt="imagem" />
      </div>
      <div className="image-4">
        <img src={image4} alt="imagem" />
      </div>
      <div className="project-tags">
        <div className="tags">
        <div className="tag">
          <p>Education</p>
        </div>
        <div className="tag">
          <p>Health</p>
        </div>
        </div>
          <h3>More than One Life Changed</h3>
      </div>
      <div className="image-5">
        <img src={image5} alt="imagem" />
      </div>
      
    </Container>
  )
}