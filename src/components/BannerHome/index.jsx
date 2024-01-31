import { Container } from "./style";
import { Button } from "../Button";

export function BannerHome({ imageSrc, smallerTitle, largerTitle}){
  return(
    <Container>
        <img src={imageSrc} alt="" />
        <div className="banner-text-container">
          <div className="banner-text">
            <span>{smallerTitle}</span>
            <h1>{largerTitle}</h1>
          <div className="styleBanner">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="content"><p>Bellow Poverty Line</p></div>
          </div>
          <div className="banner-buttons">
            <Button title={'donate'}/>
            <Button title={'discover'}/>
          </div>
          </div>
        </div>
    </Container>
  )
}