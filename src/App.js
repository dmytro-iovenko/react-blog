import React, { Component } from 'react';
import './App.css';
import BlogPosts from './BlogPosts';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  setPosts = (newPost) => {
    this.setState({ 
      posts: [...this.state.posts, newPost]
    });
  }


  render() {
    return (
      <div className="App">
        <BlogPosts posts={this.state.posts} setPosts={this.setPosts}/>
      </div>
    );
  }
}


export default App;
