import { Card, Col, Row } from "react-bootstrap";
import '../dashboard/Dashboard.css'
import { useContext } from "react";
import { ContactContext } from "../../App";
import PropTypes from "prop-types";
import { ProfileIcon } from "../header/ProfileIcon";
import { Link } from "react-router-dom";



export function CommentListItem({comment}) {
    const { contacts } = useContext(ContactContext);

    if (!contacts || contacts.length === 0) {
        return <div>Loading contacts...</div>;
    }

    if (!contacts || !comment) {
        return "Loading contacts or comments...";
    }


    const currentContact = contacts.find((c) => c.id === comment.contactId);

    if (!currentContact) {
        return "Loading currentcontact...";
    }

    return(
        <li className="comment-item">
            <Row className="m-0 p-0">
                <Col xs="auto" className="p-0 m-0">
                    <ProfileIcon contactId={comment.contactId}/>
                </Col>
                <Col xs="auto">
                    <Card className="comment-card">
                    <Link to={`/account/${currentContact.id}`} className="profile-link">
                        <h3 className="mb-1 comment-author-name">{currentContact.firstName} {currentContact.lastName}</h3>
                    </Link>
                    <p className="mb-0 post-content">{comment.content}</p>
                    </Card>
                </Col>
            </Row>

        </li>
    )
}

CommentListItem.propTypes = {
    comment: PropTypes.object.isRequired,
  };