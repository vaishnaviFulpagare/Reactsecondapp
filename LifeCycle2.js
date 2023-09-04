import React, { Component } from 'react'

export class LifeCycle2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Victor'
      }
      console.log("........LifeCycle2 constructor...........")
    }
    static getDerivedStateFromProps(props,state){
        console.log("...........Lifecycle2 getDerivedstatefrom props.......");
        return null;
    }
    componentDidMount(){
        console.log("........Lifecycle2 componentdidmount method........");
    }
    
    shouldComponentUpdate(){
         console.log("......Lifecycle2 shouldComponentUpdate method........");
         return true
    }

    getSnapshotBeforeUpdate(){
         console.log("......Lifecycle2 getSnapshotBeforeUpdate method.......");
         return null;
    }

    componentDidUpdate(){
         console.log('.......Lifecycle2 componentDidUpdate mehod.......');
    }


  render() {
    console.log("........Lifecycle2 render method........");
    return (
        
        <React.Fragment>
          <div>LifeCycle2</div>
          </React.Fragment>
      
      
    )
  }
}

export default LifeCycle2