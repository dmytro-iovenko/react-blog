import React, { Component } from 'react';
import './App.css';
import BlogPosts from './BlogPosts';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  setPosts(post) {
    this.setState({ 
      posts: [...this.state.posts, post]
    });
  }


  render() {
    return (
      <div className="App">
        {/* <button onClick={()=>this.setPosts({title: 'sdf', body: 'sdf', username: 'sdfs'})}>Click me</button> */}
        <BlogPosts posts={this.state.posts} />
      </div>
    );
  }
}


export default App;
