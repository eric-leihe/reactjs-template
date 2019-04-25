import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { hot } from 'react-hot-loader/root'
// import Tree from '../commons/components/tree/index.jsx'
import Button from '../commons/components/button/index.jsx'

function buttonClicked(event) {
    console.log("Button clicked: ", event.currentTarget);
}

class Root extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ margin: "0 auto", textAlign:"center" }}>
                <Button onClick={buttonClicked}>Click me</Button>
            </div>
        ) 
    }
}

export default hot(Root)