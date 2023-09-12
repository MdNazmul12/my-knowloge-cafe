import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';
const Blog = ({blog,handleAddToBookmark,markAsReadTime}) => {
    const {title,cover,reading_time,author,author_img,posted_time,hashtags}=blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-2' src={cover} alt={`cover picture all the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                     <img className='w-14' src={author_img} alt="" />
                     <div className='ml-5'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_time}</p>
                     </div>
                </div>
                <div>
                     <span>{reading_time}min read</span>
                     <button onClick={()=>handleAddToBookmark(blog)} className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idex)=><span key={idex}><a href="">#{hash}</a></span>)
                }
            </p>
            <button
            onClick={()=>markAsReadTime(reading_time)}
            className='text-purple-400 underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    markAsReadTime:PropTypes.func
}
export default Blog;