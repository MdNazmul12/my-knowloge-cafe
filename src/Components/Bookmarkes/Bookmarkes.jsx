import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div>
                <h2 className="text-4xl">Reading Time:{readingTime}</h2>
            </div>
            <h2>BookMarks:{bookmarks.length}</h2>  
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }   
        </div>
    );
};
Bookmarks.prototype={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;