// A basic button tag and could be decorated by style function

import React, { Component } from 'react'


const Button = ({
    ...props
  }) => {
    const sx = {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'bold',
      textDecoration: 'none',
      display: 'inline-block',
      margin: 0,
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      border: 0,
      color: 'white',
      backgroundColor: 'blue',
      WebkitAppearance: 'none',
      MozAppearance: 'none'
    }
  
    return (
      <button {...props} style={sx} />
    )
  }
  
export default Button