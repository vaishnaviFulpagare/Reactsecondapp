import React from 'react'
// import myStyle from './Styles/myStyle.css'

import './myStyle.css'

function Stylesheet(props) {
  let className = props.primary ? 'primary': " ";
  return ( 
    <>
    {/* <div>Stylesheet</div> */}
    <h1 className= {className}>Hello world..!</h1>
    {/* <h1 style = {myStyle.primary}>Hello world..!</h1> */}
    </>
  )
}

export default Stylesheet
