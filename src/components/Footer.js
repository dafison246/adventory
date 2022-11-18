import React from 'react'
import { AiOutlineArrowRight,AiOutlineTwitter,AiFillFacebook,AiFillInstagram} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="content">
                <div className="about-adv">
                    <h2>About Adventor</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, in deleniti quos ullam aliquam officia rem minima. Minus, cumque saepe.</p>
                </div>
                <div className="quick">
                    <h2>Quick Menu</h2>
                    <div className="quick-container">
                        <ul className="first">
                            <li>Home</li>
                            <li>Stories</li>
                            <li>Trending Stories</li>
                            <li>Popular Stories</li>
                        </ul>
                        <ul className="second">
                            <li>Sign Up</li>
                            <li>Log In</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="subscribe">
                    <h4>Subscrbe to our newsletter</h4>
                    <input type="text" placeholder="Email address"/>
                    <div className="icon">
                        <p className="sub">Subscribe </p> 
                        <p className="right"><AiOutlineArrowRight /></p>
                    </div>

                </div>
            </div>
            <hr />
           <div className="bottom">
                <div className="policy">
                    <p>Terms and Policy</p>
                </div>
                <div className="social-media">
                    <a href="#"><AiOutlineTwitter /></a>
                    <a href="#"><AiFillFacebook /></a>
                    <a href="#"><AiFillInstagram /></a>
                </div>
           </div>
        </div>
    </footer>
  )
}
