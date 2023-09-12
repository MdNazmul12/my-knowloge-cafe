import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {title}= bookmark;
    return (
        <div className='bg-slate-200 m-4 rounded-xl'>
            <h3>{title}</h3>
        </div>
    );
};
Bookmark.prototype={
    bookmark:PropTypes.object
}
export default Bookmark;