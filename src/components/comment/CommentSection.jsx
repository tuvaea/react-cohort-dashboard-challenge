

// Fetch comments per post
//Pass to commentlist
//Then map and pass to commentlistitem
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { CommentsList } from "./CommentList";
import { CommentForm } from "./CommentForm";

export function CommentSection({post}) {
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const response = await fetch(
          `https://boolean-uk-api-server.fly.dev/tuvaea/post/${post.id}/comment`
        );
        const data = await response.json();
        //console.log(data);
        setComments(data);
      }
    
      useEffect(() => {
        fetchComments();
      }, []);


    return (
        <Container className="p-0 m-0">
            <Row className="p-0 m-0">
                <CommentsList comments={comments}/>
            </Row>
            <Row className="p-0 m-0">
                <CommentForm post={post}/>
            </Row>
        </Container>
        
    )
}

CommentSection.propTypes = {
    post: PropTypes.object.isRequired,
  };