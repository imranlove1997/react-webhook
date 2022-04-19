import React from 'react';

class Search extends React.Component {
    state = {
        username: '',
    }
    handleChange = (e) => {
        this.setState({ username: e.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ username: this.state.username })
    }
    render() {
        const { username } = this.state;
        return (
            <>
            <form onSubmit={this.handleSubmit}> 
            <input type='text' value={username} onChange={this.handleChange} name='search' placeholder='Enter a username' />
            </form>
            <h2>{username}</h2>
            </>
        )
    }
}

export default Search