import './possibilty.css'
import img1 from '../../assets/possibility.png'
const Possibility = () => {
    return ( 
        <div className='possibility'id='possibility'>
            <div className='possibility-image'>
                <img src={img1} alt='image'/>
            </div>
            <div className='possibility-content'>
                <h4>Request Early Access to Get Started</h4>
                <h1 className='grad-text'>The possibilities are beyond our imagination</h1>
                <p>It is extremely rewarding to put that idea into reality and deliver what the client envisioned. We love seeing the client’s face when they see the finished product.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
     );
}
 
export default Possibility;