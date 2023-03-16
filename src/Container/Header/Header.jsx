import './header.css'
import people from './../../assets/people.png'
import Image from './../../assets/ai.png'
const Header = () => {
    return ( 
        <div className="Header" id="home">
            <div className="header-content">
                <h1 id='ho'className="grad-text">Let's Build Something Amazing with AI TECH</h1>
                <p id='po'>A.I. Tech is a highly dynamic and innovative company that designs and manufactures Artificial 
                Intelligence enterprise solutions in the field of Smart Video</p>
                <div className="content-input">
                    <input type='email'placeholder="Your email address"/>
                    <button type='button'>Get started</button>
                </div>
                <div className="content-people">
                    <img src={people} alt ='people'/>
                    <p>1750 people requested access to visit in last 24 hours</p>
                </div>
            </div>
            <div className='image-Ai'>
                <img src={Image} alt='image'/>
            </div>
        </div>
     );
}
 
export default Header;
