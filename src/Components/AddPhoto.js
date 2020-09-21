import React, {Component} from 'react';

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        if(imageLink && description) {
            const newPhoto = {
                id: Number(new Date()),
                description: description, 
                url: imageLink
            };
            this.props.onAddNewPhoto(newPhoto);
        } 
    }

    render() {
        return (
        <div> 
            <h1> This is the page where we can add photo </h1>

            <form className="form" onSubmit={this.handleSubmit}> 
                <input type='text' placeholder='link' name='link' />
                <input type='text' placeholder='description' name='description'/>
                <button> Post </button>
            </form>
        </div>
        )
    }
}

export default AddPhoto