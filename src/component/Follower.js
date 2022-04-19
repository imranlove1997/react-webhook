import React from "react";
import Loader from '../loader';

class Follower extends React.Component {
    constructor(props) {
        super(props);
    }
    state ={
        followers: null,
    }
    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.username}/followers`).then(res => res.json()).then(followers => {
            this.setState({ followers });
        })
    }
    render() {
        const { followers } = this.state;
        if(!followers) {
            return <Loader size={40} />;
        }
        if(!followers.length) {
            return <h2>{this.props.username}</h2>
        }
        return (
            <>
            <h2>Follower</h2>
        <ul>
        {
            followers.map(follower => (
                <li key={follower.id}><img src={follower.avatar_url} alt={follower.name} /></li>
                ))
            }
        </ul>
            </>
        )
    }
}

export default Follower;