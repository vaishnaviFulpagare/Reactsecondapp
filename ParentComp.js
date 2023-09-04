import React, { Component } from 'react'
// import Regcomp from './Regcomp'
import Purecomp from './Purecomp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"John"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
               name :"John"
            })
        },5000)
    }


  render() {
    
    console.log(".........parent component......")
    return (
        <>
             <h1> This is ParentComp....</h1>
             {/* <Regcomp name={this.state.name}/> */}
            <Purecomp name={this.state.name}/>
             <MemoComp name={this.state.name}/>
        </>
    )
  }
}

export default ParentComp
