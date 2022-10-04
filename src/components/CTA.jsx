import { Link } from 'react-router-dom'
import CV from '../assets/Resume.pdf'
import '../pages/home/home.css'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <Link to="/about" className='btn btn-primary'>Get To Know Me</Link>
    </div>
  )
}

export default CTA