import React, { Component } from "react";
import Post from './Post';
import Form from "./Form";


class BlogPosts extends Component {
    render() {

        const posts = this.props.posts;

        return (
            <div>
                <Form setPosts={this.props.setPosts}/>
                {posts.map((post, index) => <Post post={post} key={index} />)}
            </div>
        );
    }
}
export default BlogPosts;