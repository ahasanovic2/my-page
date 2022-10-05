import {Link} from 'react-router-dom'
import Image from '../images/me.jpg'
import CTA from '../components/CTA'
import '../pages/home/home.css'


const MainHeader = () => {
  return (
    <header className="main__header">
          <h4>Hi I'm</h4>
          <h2>Ahmedin Hasanović</h2>
          <h5 className='text-light'>BSc in Computer Science</h5>
          <CTA/>
    </header>
  )
}

export default MainHeader