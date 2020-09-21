import React, {Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Photowall extends Component {
    render () {
        return (
            <div> 
                <Link to='/AddPhoto'>Click Me!</Link>
                {/* <a onClick={this.props.onNavigate} href='#AddPhoto'> Click Me! </a> */}
                {/* <button className='addIcon' onClick={this.props.onNavigate}> + </button> */}
                <div className='photoWall'>
                    {this.props.posts
                    .sort(function(postX, postY) {
                        return postY.id - postX.id})
                    .map((post, index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto} />)}
                </div>
            </div>
        )
    }
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photowall