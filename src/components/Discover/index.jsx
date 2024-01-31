import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import discoverVideo from '../../assets/discover-video.png'
import { Container } from './style'
export function Discover(){
  return(
    <Container>
    <div className="discover">
    <div className="content-discover">
      <h2>Educational</h2>
      <p>Below Poverty Line is enchmark used by the government of India  economic disadvantage.</p>
      <Button title={'Discover'}/>
    </div>
    <div className="content-discover">
      <h2>Become a Volunteer</h2>
      <p>Below Poverty Line is enchmark used by the government.</p>
      <Link to="/team">Join organization</Link>
    </div>
    <img src={discoverVideo} alt="" />
  </div>
  </Container>
  )
}