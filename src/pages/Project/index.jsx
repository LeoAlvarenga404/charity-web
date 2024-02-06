import { HeaderContact } from '../../components/HeaderContact'
import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Container } from "./style"
import image from '../../assets/project.png'
import { Footer } from '../../components/Footer';

import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import project5 from '../../assets/project5.png'
import project6 from '../../assets/project6.png'
import project7 from '../../assets/project7.png'
import project8 from '../../assets/project8.png'



export function Project(){
  return (
    <Container>
      <HeaderContact/>
      <Header/>
      <Banner imageSrc={image} smallerTitle={'Donation...'} largerTitle={'Meet Charity Projects'}/>
      <main>
        <img src={project1} alt="imagem de um projeto" />
        <img src={project2} alt="imagem de um projeto" />
        <img src={project3} alt="imagem de um projeto" />
        <img src={project4} alt="imagem de um projeto" />
        <img src={project5} alt="imagem de um projeto" />
        <div className="red-square">
          <h5>More than One Life Changed</h5>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30.0989" cy="30.4233" r="29.5" fill="#EE4E4E"/>
          <path d="M41.277 38.8154L36.5164 34.0548C37.6626 32.529 38.2813 30.6718 38.2792 28.7635C38.2792 23.8891 34.3135 19.9233 29.439 19.9233C24.5646 19.9233 20.5989 23.8891 20.5989 28.7635C20.5989 33.6379 24.5646 37.6037 29.439 37.6037C31.3474 37.6057 33.2046 36.987 34.7304 35.8409L39.491 40.6015C39.732 40.8169 40.0463 40.9319 40.3694 40.9228C40.6925 40.9138 40.9998 40.7814 41.2284 40.5529C41.4569 40.3243 41.5893 40.0169 41.5984 39.6938C41.6074 39.3707 41.4924 39.0564 41.277 38.8154ZM23.1246 28.7635C23.1246 27.5146 23.495 26.2938 24.1888 25.2554C24.8826 24.217 25.8688 23.4077 27.0226 22.9298C28.1764 22.4518 29.446 22.3268 30.6709 22.5704C31.8958 22.8141 33.0209 23.4155 33.904 24.2985C34.7871 25.1816 35.3885 26.3067 35.6321 27.5316C35.8757 28.7565 35.7507 30.0261 35.2728 31.1799C34.7949 32.3337 33.9855 33.3199 32.9471 34.0137C31.9087 34.7076 30.6879 35.0779 29.439 35.0779C27.765 35.0759 26.16 34.41 24.9763 33.2262C23.7926 32.0425 23.1266 30.4376 23.1246 28.7635Z" fill="white"/>
          <path d="M29.5989 32.4433C29.3789 32.4433 29.2089 32.3833 29.0889 32.2633C28.9689 32.1333 28.9089 31.9583 28.9089 31.7383V29.2783H26.4939C26.2839 29.2783 26.1189 29.2233 25.9989 29.1133C25.8789 28.9933 25.8189 28.8283 25.8189 28.6183C25.8189 28.4083 25.8789 28.2483 25.9989 28.1383C26.1189 28.0183 26.2839 27.9583 26.4939 27.9583H28.9089V25.5733C28.9089 25.3533 28.9689 25.1833 29.0889 25.0633C29.2089 24.9433 29.3839 24.8833 29.6139 24.8833C29.8339 24.8833 29.9989 24.9433 30.1089 25.0633C30.2289 25.1833 30.2889 25.3533 30.2889 25.5733V27.9583H32.7039C32.9239 27.9583 33.0889 28.0183 33.1989 28.1383C33.3189 28.2483 33.3789 28.4083 33.3789 28.6183C33.3789 28.8283 33.3189 28.9933 33.1989 29.1133C33.0889 29.2233 32.9239 29.2783 32.7039 29.2783H30.2889V31.7383C30.2889 31.9583 30.2289 32.1333 30.1089 32.2633C29.9989 32.3833 29.8289 32.4433 29.5989 32.4433Z" fill="white"/>
          </svg>
        </div>
        <img src={project6} alt="imagem de um projeto" />
        <img src={project7} alt="imagem de um projeto" />
        <img src={project8} alt="imagem de um projeto" />
      </main>
      <Footer/>
    </Container>
  )
}