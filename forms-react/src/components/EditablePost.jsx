import{ Component } from 'react';

export default class EditablePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: props.author,
            location: props.location,
            content: props.content
        }
    }

    // Event handlers to capture the value passed in the child component to send it to parent component
    handleAuthorChange = (event) => {
        this.setState({
            author: event.target.value
        })
    }

    handleLocationChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }

    handleContentChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    render(){
        return(
            <div className='EditablePost'>
                {/** Editable author field */}
                <label htmlFor='authorField'>Author: </label>
                <input type='text' name='authorField' id='authorField' value={this.state.author} onChange={this.handleAuthorChange}/>

                {/** Editable location field */}
                <label htmlFor='locationField'>Location: </label>
                <input type='text' name='locationField' id='locationField' value={this.state.location} onChange={this.handleLocationChange}/>
                
                {/** Editable content field*/}
                <label htmlFor='contentField'>Author: </label>
                <input type='text' name='contentField' id='contentField' value={this.state.content} onChange={this.handleContentChange} />
            </div>
        )
    }
}