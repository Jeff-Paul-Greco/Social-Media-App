import React, { Component } from 'react';
import './App.css';

import { Col, Row, Container } from "./components/Grid";
import Navbar from "./components/Navbar";
import PostsContainer from "./components/PostsContainer"


class App extends Component {
  render() {
    return (

      <div>
        <Navbar />
        <Container>
          <PostsContainer />
        </Container>
      </div>

    );
  }
}

export default App;
