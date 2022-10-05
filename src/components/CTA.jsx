import { Link } from 'react-router-dom'
import CV from '../assets/Resume.pdf'
import '../pages/home/home.css'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn' id='cv-btn'>Download CV</a>
        
        <Link to="/contact" className='btn btn-primary' id='cont-btn'>Contact Me</Link>
        <Link to="/about" className='btn btn-primary' id='about-btn'>Get To Know Me</Link>
        

    </div>
  )
}

export default CTA