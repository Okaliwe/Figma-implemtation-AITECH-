import './Article.css'
const Article = ({imgUrl,dat,title}) => {
    return ( 
        <div className='Article'>
            <div className='Article-image'>
                <img src={imgUrl} alt='post-image'/>
            </div>
            <div className='Article-content'>
                <div>
                    <p>{dat}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read full article</p>
            </div>
        </div>
     );
}
 
export default Article;