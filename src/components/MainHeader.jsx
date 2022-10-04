import {Link} from 'react-router-dom'
import Image from '../images/me.jpg'
import CTA from '../components/CTA'
import '../pages/home/home.css'


const MainHeader = () => {
  return (
    <header className="main__header">
        <div className="main__header-center">
          <h4>Hi I'm</h4>
          <h2>Ahmedin Hasanović</h2>
          <h5 className='text-light'>Developer</h5>
          <CTA/>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
    </header>
  )
}

export default MainHeader