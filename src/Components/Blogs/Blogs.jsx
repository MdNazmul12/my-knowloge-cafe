import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from 'prop-types'

const Blogs = ({handleAddToBookmark,markAsReadTime}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl">Blog:{blogs.length}</h2>
           {
             blogs.map(blog=><Blog key={blog.id}
                 blog={blog}
                 handleAddToBookmark={handleAddToBookmark}
                 markAsReadTime={markAsReadTime}
                 ></Blog>)
           }
        </div>
    );
};
Blogs.propTypes={
    handleAddToBookmark:propTypes.func,
    markAsReadTime:propTypes.func
}
export default Blogs;