import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: '',
            username: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.setPosts(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='' id='title' value={this.state.title} onChange={this.handleChange} />
                    <textarea placeholder='' id='body' value={this.state.body} onChange={this.handleChange} />
                    <input type='text' placeholder='' id='username' value={this.state.username} onChange={this.handleChange} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}
export default Form;