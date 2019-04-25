import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

class TreeNode extends React.Component {
    constructor(props) {
        super(props)
        this.state = { expanded: false }
    }

    handleClick = (event) => {
        event.preventDefault();        
        if(!this.props.isLeaf) this.setState({ ...this.state, expanded: !this.state.expanded })
    }

    renderItem = (data) => {
        if(this.props.cellRenderer) return this.props.cellRenderer(data)
        return data.name
    }

    

    render() {
        let className = this.props.isLeaf ? 'tree-node-content-leaf' : 'tree-node-content-expandible'
        if(!this.props.isLeaf) {
            className += this.state.expanded ? ' tree-node-content-expandible__expanded' : ' tree-node-content-expandible__collapsed'
        }

        return (
            <li className='tree-node'>
                <div className={ 'tree-node-content ' +  className }>
                    <div className='tree-node-content-cell'>
                        <span className='tree-node-content-cell-expander' onClick={this.handleClick}></span>
                        <span>{this.renderItem(this.props.data)}</span>
                    </div>
                    {   
                        !this.props.isLeaf && (<Tree data={this.props.data.child} className='tree-node-content-subtree' cellRenderer={this.props.cellRenderer} />)
                    } 
                </div>                    
             </li>
        )
    }
}

class Tree extends React.Component {
    render() {
        const className = "tree " + (this.props.className ? this.props.className : "");
        return (
            <ul className={className}>
                {
                    this.props.data.map((node, index) => {
                        return (
                            <TreeNode name="ThisIsATree" key={index} isLeaf={node.isLeaf} data={node} cellRenderer={this.props.cellRenderer} />
                        )
                    })
                }
            </ul>
        )
    }
}


Tree.propTypes = {
    cellRenderer: /* Custom Cell Component Rendered inside TreeNode */ PropTypes.elementType
}

export default Tree