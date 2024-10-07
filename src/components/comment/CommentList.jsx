// get comments list
import '../dashboard/Dashboard.css'
import { CommentListItem } from './CommentListItem';
import PropTypes from "prop-types";





export function CommentsList({comments}) {

    return(
        <ul className="ul">
            {comments.map(( comment, index ) => (
                <CommentListItem  key={index} comment={comment} />
            ))}
        </ul>
    )

}

CommentsList.propTypes = {
    comments: PropTypes.array.isRequired,
  };