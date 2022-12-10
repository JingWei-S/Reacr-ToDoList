import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component{  // Defind a new class called ToDoList
    constructor(props){
        super(props);

        this.state = {
            items: [],   // empty array
            inputValue: ''  // The value of the text input field will be stored in a state variable called "inputValue"
        };

        this.handleComplete = this.handleComplete.bind(this);
    }

    handleComplete(index) {   // handle the checkbox with handleComplete
        this.setState(prevState => {
            const items = [...prevState.items];   // create a shallow copy of "items" array
            const item = items[index];  // get the item using index
            item.complete = !item.complete;  // toggle the "complete" prop
            
            if (item.complete) {
                items.splice(index, 1);   // remove the item 
                items.push({text: item.text, complete: item.complete});
                console.log('complete:', item.complete);
            }
            console.log(items);
            return { items };
        });

    }
    

    handleSubmit(event) {
        event.preventDefault();
        // Add the new item to the "items" array and reset the "inputValue" state variable
        this.setState(prevState => ({
            items: [...prevState.items, { text: prevState.inputValue, complete: false }],
            inputValue: ''
          }));
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        })
    }

    

    render() {
        return React.createElement('form', { className: 'spotify-form', onSubmit: this.handleSubmit.bind(this)},
            // Create a "form" element and bind the "handleSubmit" method as the "onSubmit" event handler
            React.createElement('input', { type: 'text', value: this.state.inputValue,
        onChange: this.handleChange.bind(this) }), // Create a text input field and bind the "handleChange" method as the "onChange" event handler
            React.createElement('input', {className: 'spotify-button', type: 'submit', value: 'Add Your To-do!'}),
            React.createElement('ul', {style: {
                listStyleType: 'none'
              }},   // create a ul element to hold the list of items
                this.state.items.map((item, index) => {  // Use the "map" method to create a new array of "ToDoItem" components
                    return React.createElement(ToDoItem, { key: index,
                        text: item.text,
                        complete: item.complete, handleComplete: this.handleComplete.bind(this, index)});
                    // Bind the "handleComplete" method and pass the index of the item as an argument

                })
            )

        );
    }


}

export default ToDoList;  // export the ToDoList component so it can be used in other parts of the app
