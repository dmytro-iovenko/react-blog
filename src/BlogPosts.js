import React, { Component } from "react";
import Filter from "./Filter";


class BlogPosts extends Component {
    render() {
        return (
            <div>
                <Filter posts={this.props.posts} setPosts={this.props.setPosts}/>
            </div>
        );
    }
}
export default BlogPosts;