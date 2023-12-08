import './Footer.css'
import facebookIcon from '../../assets/facebook.jpeg'
import instagramIcon from '../../assets/instagram.jpeg'
import tweeterIcon from '../../assets/tweeter.png'

function Footer({className}) {
    return (
        <footer className="footer" >
            <span className='footer-text'>
                &#169; 2023 F. Jarilla
            </span>
            <span className='footer-social'>
                <a href='https://facebook.com' >
                    <img src={ facebookIcon } alt='facebook' />
                </a>
                <a href='https://instagram.com' >  
                    <img src={ instagramIcon } alt='tweeter' />
                </a>
                <a href='https://tweeter.com' > 
                    <img src={tweeterIcon } alt='instagram' />
                </a>
            </span>
        </footer>
    )
}

export default Footer