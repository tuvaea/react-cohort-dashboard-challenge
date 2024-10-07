import { Card, Container, Row } from "react-bootstrap";
import { PostAuthorSection } from "./PostAuthorSection";
import { CommentSection } from "../comment/CommentSection";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ContactContext } from "../../App";


export function PostView(){

    const {id} = useParams();
    const { posts } = useContext(ContactContext);

    if(!posts) {
        return "Loading...";
    }
    console.log(id);
    console.log(posts);
    const post = posts.find((c) => c.id === parseInt(id));
    if (!post) {
        return "Loading..";
    }
    

    return(
        <Card className="post-card post-card-single">
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
    )
}