import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import styled from 'styled-components'

import { hot } from 'react-hot-loader/root'
import Tree from '../commons/components/tree/index.jsx'

class Root extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <div style={{ position: "absolute", top: 0, height: 0, width: "100%", height: '100%', border:0, margin:0, padding:0 }}>
                <div style={{ position: "absolute", top: 0, height: 0, width: "100px", height: '100%', zIndex: 999, border:0, margin:0, padding:0  }}>
                    <Tree 
                        cellRenderer={ (data) => { return data.name } }
                        data={
                            [{ isLeaf: false, name: "Foo", 
                                child: [
                                    { name:"Leaf A", isLeaf: true }, 
                                    { name: "Leaf B", isLeaf: false, 
                                        child: [
                                            { name:"Leaf AA", isLeaf: true }, 
                                            { name: "Leaf CCCCC", isLeaf: true }
                                        ]
                                    },
                                    { name: "Leaf B", isLeaf: true },
                                ]}]
                            } />
                </div>
                <iframe src="/editor" 
                    style={{ position: "absolute", top: 0, height: 0, width: "100%", height: '100%', zIndex: 1, border:0, margin:0, padding:0, backgroundColor: "#F8F9F9" }}>
                </iframe>
            </div>
        ) 
    }
}

export default hot(Root)