import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    /* TO AVOID EXPLICIT BINDING 
    - define property set to an arrow function allowing us to bind the value of this to the component
    - properties are bound to the instance
    - arrow functions have no implicit 'this' so no 
    need to explicitly bind to the component instance
    */
    goToStore = (event) => {
        // 1. stop the form from submitting 
        event.preventDefault();
        // 2. get the text from the input
        console.log(this.myInput);
        
        // 3. change the page to '/store/input-text'
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;