import { Component } from 'react';
import ReadOnlyPost from './ReadOnlyPost';
import EditablePost from './EditablePost';

export default class PostContainer extends Component {
    constructor() {
        super();

        // initialise the component's variables
        this.state = {
            isEditing: false,
            author: "",
            dateCreated: Date.now(),
            location: "",
            content: "",
            lastUpdate: Date.now()
        }
    }

    toggleEditMode = () => {
        this.setState(
            {
                isEditing: !this.state.isEditing
            }
        )
    }

    // Parent component creates a function to update state 
    // This function is passed as prop to child component
    updatePostData = (newAuthor, newLocation, newContent) => {
        this.setState({
            author: newAuthor,
            lastUpdated: Date.now(),
            location: newLocation,
            content: newContent
        })
    }

    // Ternary operator to check a condition
    render() {
        return (
            <>
                <button onClick={this.toggleEditMode}>Toggle Edit Mode</button>
                {
                    this.state.isEditing ?
                        <EditablePost
                            // Pass all of them using props, one at a time 
                            author={this.state.author}
                            dateCreated={this.state.dateCreated}
                            location={this.state.location}
                            content={this.state.content}
                            lastUpdated={this.state.lastUpdated}
                            // Passing the function as a prop
                            updateData={this.updatePostData}

                            // Could pass the entire state variables in one go
                            parentState={this.state}
                        /> :
                        <ReadOnlyPost
                            // Pass all of them using props, one at a time 
                            author={this.state.author}
                            dateCreated={this.state.dateCreated}
                            location={this.state.location}
                            content={this.state.content}
                            lastUpdated={this.state.lastUpdated}

                            // Could pass the entire state variables in one go
                            parentState={this.state}
                        />
                }
            </>
        )
    }
}
