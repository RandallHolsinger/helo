import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

function Nav(props) {
    console.log(props.location)
    
        if(props.location.pathname !== '/'){
    return (
        <div>
            <h1>Nav</h1>
            <Link to='/dashboard'>
            <button>Home</button>
            </Link>
            <Link to='/post/post:postid'>
            <button>New Post</button>
            </Link>
            <Link to='/'>
            <button>Log Out</button>
            </Link>
        </div>
    )  
        }
        return null
}

const mapStateToProps = ({username, profile_pic}) => {
    return {
        username,
        profile_pic
    } 
}

export default connect(mapStateToProps)(Nav)

