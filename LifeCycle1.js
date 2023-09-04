import React, { Component } from 'react'
import LifeCycle2 from './LifeCycle2';

export class LifeCycle1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Victor'
      }
      console.log("LifeCycle1 constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("Lifecycle1 getDerivedstatefrom props");
        return null;
    }
    componentDidMount(){
        console.log("Lifecycle1 componentdidmount method");
       
    }

    shouldComponentUpdate(){
        console.log("Lifecycle1 shouldComponentUpdate method");
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log("Lifecycle1 getSnapshotBeforeUpdate method");
        return null;
    }

    componentDidUpdate(){
        console.log('Lifecycle1 componentDidUpdate mehod');
    }
     
    chnageState =()=>{
     this.setState =({
      name: 'John Doe'
     })
      
  }
  render() {
    console.log("Lifecycle1 render method");
    return (
        <>
          <div>LifeCycle1</div>
          <button type='button' onClick={this.chnageState}>Updation</button>
          <LifeCycle2/>
      </>
    )
  }
}

export default LifeCycle1
