import React from "react";

function ToDoItem(props) { // Define the ToDoItem component as a function that takes a "props" object as an argument
    const complete = props.complete;  // get te "complete" from props
    const handleComplete = props.handleComplete;   // get the "handleComplete" from props

    // Create a checkbox and bind the "handleComplete" method to handle the "onChange" event
    const checkbox = React.createElement('input', { type: 'checkbox', checked: complete, onChange: handleComplete});
    console.log('complete:', complete); // Log the value of the "complete" prop to the console


    return React.createElement('li', null, checkbox, props.text) // Create an "li" element and return it and include the checkbox and items'text



}

export default ToDoItem;