import "./CommentSection.css";
import Comment from "./Comment";
function CommentSection()
{
    function submitComment()
    {}
    return(
        <>
        <div className="commentsection">
            <Comment/>
            <input type="text" className="inputComment" placeholder="Enter Comment"></input>
            <button className="submitComment" onClick={submitComment}>Send</button>
        </div>

        </>
    )
}
export default CommentSection;