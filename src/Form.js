import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: '',
            username: '',
            timestamp: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = event => {
        this.state.timestamp = new Date().toLocaleString();
        event.preventDefault();
        this.props.setPosts(this.state);
        this.setState({
            title: '',
            body: '',
            username: '',
            timestamp: ''
        })

    }

    render() {
        return (
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <input id='title' type="text" className="form-input" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
                    <input id='username' type="text" className="form-input" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                    <textarea maxLength='500' id='body' className="form-input" placeholder="Post" value={this.state.body} onChange={this.handleChange} />
                    <input type="submit" value="SUBMIT" />
                </form>
            </div>
        );
    }
}
export default Form;