import { Article } from '../../Component/inde';
import './post.css'
import {blog1,blog2,blog3,blog4,blog5} from './Post'
const Post = () => {
    const current=new Date()
    const date=`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    return ( 
        <div className='post'id='post'>
            <div className='post-header'>
                <h1 className='grad-text'>Alot is happening, and We are blogging about it.</h1>
            </div>
            <div className='post-container'>
                <div className='group-A'>
                    <Article imgUrl={blog1} dat={date} title={'AITECH and Machine learning is the future.let us explore how it'}/>
                </div>
                <div className='group-B'>
                <Article imgUrl={blog2} dat={date} title={'AITECH and Machine learning is the future.let us explore how it'} />
                <Article imgUrl={blog3} dat={date} title={'AITECH and Machine learning is the future.let us explore how it'}/>
                <Article imgUrl={blog4} dat={date} title={'AITECH and Machine learning is the future.let us explore how it'}/>
                <Article imgUrl={blog5} dat={date} title={'AITECH and Machine learning is the future.let us explore how it'}/>
                </div>
            </div>
        </div>
     );
}
 
export default Post;