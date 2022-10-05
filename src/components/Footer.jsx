import { Link } from "react-router-dom"
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import '../pages/home/home.css'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipsicing elit. qui tenetur harum pariatur!
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'><FaFacebook/></a>
                    <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                    <a href="https://github.com/ahasanovic2" target="_blank" rel='noreferrer noopener'><AiOutlineGithub/></a>
                    <a href="mailto:hasanovicahmedin6@gmail.com" target="_blank" rel='noreferrer noopener'><AiOutlineMail/></a>
                </div>
            </article>
            <article>
                <h4>
                    Permalinks
                </h4>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>Ahmedin Hasanović, 2022 &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer