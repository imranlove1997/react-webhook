import React from 'react';
import Follower from './Follower';
import Following from './Following';
// import Search from './Search';

class App extends React.Component {
    state = {
        username: '',
    }
    handleChange = (e) => {
        this.setState({ username: e.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ username: event.target.elements.username.value })
    }
    render() {
        return (
            <>
           <form onSubmit={this.handleSubmit}> 
            <input type='text' onChange={this.handleChange} name='username' placeholder='Enter a username' />
            </form>
            <Follower username={this.state.username} />
            <Following username={this.state.username} />
            </>
        )
    }
}

export default App;