import React, { Component } from 'react';

class Post extends Component {


    render() {
        const { post } = this.props;
        return (
            <div className='card'>
                <div className='card-body'>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
                <div className='card-footer'>
                    <h5>{post.username}</h5>
                    <small>{post.timestamp}</small>
                </div>
            </div>
        );
    }
}
export default Post;