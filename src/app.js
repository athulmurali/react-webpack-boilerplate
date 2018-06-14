// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import "../styles/styles.scss"

console.log('App.js is running');

class HelloApp extends React.Component {

    state = {
        options     :  [],
        pickDisabled : false,
        selectedOption: undefined
    };

    componentDidMount(){
        console.log("Component Mounted");
    }
    componentDidUpdate(){
        console.log("Component Updated");
    }



    render()
    {
        return <div>
               <h1>Hola!</h1>
            </div>;
    }


}



var appRoot = document.getElementById('app');
ReactDOM.render(<HelloApp/>,appRoot);
// ReactDOM.render(<Layout> <p>This is inline p tag content</p></Layout>,appRoot);
