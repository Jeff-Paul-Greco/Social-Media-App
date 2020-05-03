import React from "react";
import { Col, Row, Container } from "../Grid";
import Post from "../Post";

function PostsContainer() {
    return (
        <Container>
            <Post />
            <Post />
        </Container>
    );
}

export default PostsContainer;