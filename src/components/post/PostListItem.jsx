import PropTypes from "prop-types";
import { Card, Container, Row } from "react-bootstrap";
import '../dashboard/Dashboard.css'
import { PostAuthorSection } from "./PostAuthorSection";
import { CommentSection } from "../comment/CommentSection";



export function PostListItem ({post}) {
    return(
        <li>
            <Card className="post-card">
                <Container className="post-separator m-0 p-0">
                    <Row className="align-items-center p-0 m-0 ">
                        <PostAuthorSection post={post}/>
                    </Row>
                    <Row className="m-0 p-0">
                        <h3 className="post-content mb-4 mt-3">{post.content}</h3>
                    </Row>
                </Container>
                <Container className="m-0 p-0">
                    <CommentSection post={post}/>
                </Container>
            </Card>
        </li>
    )
}

PostListItem.propTypes = {
    post: PropTypes.object.isRequired,
  };