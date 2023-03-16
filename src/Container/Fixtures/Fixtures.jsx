import { Features } from '../../Component/inde';
import './fixtures.css'
const Fixtures = () => {
    const data=[
        {
            title:'improving end distrust instantly',
            text:'Consumers are increasingly demanding healthier ingredients in cakes, bread and pastries. Successful operators will, therefore, need to offer a greater variety of whole-grain, all-natural or bromate/gluten-free products to capitalize on these trends',
        },{
            title:'Become the tended active',
            text:'It is extremely rewarding to put that idea into reality and deliver what the client envisioned. We love seeing the client’s face when they see the finished product.',
        },{
            title:'Message or am nothing',
            text:'Artificial intelligence (AI) makes it possible for machines to use experience for learning, adjust to new inputs and perform human-like tasks. Artificial intelligence is generally divided into two types – narrow (or weak) AI and general AI, also known as AGI or strong AI.',
        },{
            title:'Really boy law county',
            text:'We are the first ICT and Computer training center in Abuja Nigeria that has a unique students portal where videos are uploaded after each day'
        }
    ]
    return ( 
        <div className='fixtures' id='fixtures'>
            <div className='fixtures-header'>
                <h1 className='grad-text'>The Future is Now and you just Need To Realize it.Step into Future Today & Make it Happen</h1>
                <p>Request Early Access to Get Started</p>           
            </div>
            <div className='fixtures-container'>
                {data.map((user,idx)=>
                   (<Features title={user.title} text={user.text} key={user.title+idx}/>)
                )}
            </div>
        </div>
     );
}
 
export default Fixtures;