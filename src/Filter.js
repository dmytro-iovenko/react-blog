import React, { Component } from 'react';
import Form from './Form';
import Post from './Post';

class Filter extends Component {
    constructor() {
        super()
        this.state = {
            filter: ''
        }
    }
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {
        const posts = this.props.posts;

        const filteredPosts = (this.state.filter !== '') ? posts.filter(post => post.title.toLowerCase().includes(this.state.filter.toLowerCase())) : posts;

        return (
            <div className='filter'>
                <input
                    className='form-input'
                    type='text'
                    id='filter'
                    placeholder='Filter by Title'
                    onChange={this.handleChange}
                    value={this.state.filter}
                />
                <Form setPosts={this.props.setPosts} />
                <div className='content'>
                    {filteredPosts.map((post, index) => <Post post={post} key={index} />)}
                </div>
            </div>
        );
    }
}

export default Filter;