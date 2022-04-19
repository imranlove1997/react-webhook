import React from "react";
import Loader from '../loader';

class Following extends React.Component {
    constructor(props) {
        super(props);
    }
    state ={
        following: null
    }
    componentDidMount() {
        fetch(`https://api.github.com/users/imranlove1997/following`).then(res => res.json()).then(following  => {
            this.setState({ following  });
        })
    }
    render() {
        const { following  } = this.state;
        if(!following ) {
            return <Loader size={40} />;
        }
        if(!following.length) {
        return <h2>{this.props.username}</h2>
    }
        return (
            <>
            <h2>Following</h2>
        <ul>
        {
            following .map(follow => (
                <li key={follow.id}><img src={follow.avatar_url} alt={follow.name} /></li>
            ))
        }
        </ul>
        </>
        )
    }
}

export default Following;