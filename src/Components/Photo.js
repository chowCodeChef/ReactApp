import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Photo extends Component {
    render() {
        const photo = this.props.post;
        return <figure className = 'figure'> 
            <img className="photo" src={photo.url} alt={photo.description} />
            <figcaption> <p> {photo.description} </p> </figcaption>
            <div className='button-container'>
            <button onClick={() => {
                this.props.onRemovePhoto(photo)
            }}> Remove </button>
            </div>
        </figure>
    }

}

Photo.propTypes = {
    post: PropTypes.object.isRequired, 
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photo