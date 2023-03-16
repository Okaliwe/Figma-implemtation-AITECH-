import { Features } from '../../Component/inde';
import './Project.css'
const Project = () => {
    return ( 
        <div className='project' id='project'>
          <div className='feature'>
            <Features title='What is AITECH' text='We are expert in implementing leading edge artificial intelligence solutions including data science, RPA, NLP, machine learning, deep learning.'/>
          </div>
          <div className='feature-header'>
            <h1 className='grad-text'>The possibilities are beyond your imagination</h1>
            <p>Explore the Library</p>
          </div>
          <div className='project-container'>
            <Features title='chatBoxs' text='Artificial Intelligence Technologies AITECH'/>
            <Features title='Knowledgebase' text='AI has become a catchall term for applications that perform complex tasks that once required human input'/>
            <Features title='Education'text='The term is often used interchangeably with its subfields, which include machine learning (ML) and deep learning'/>
          </div>
        </div>
     );
}
 
export default Project;