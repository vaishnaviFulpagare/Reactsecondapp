import React, {PureComponent } from 'react'

 class Purecomp extends PureComponent {
  render() {
    console.log("This is purecomponent")
    return (
      <>
      {/* <div>Purecomponent</div> */}
      <h1>This is Purecomp.....My name is{this.props.name}</h1>
      </>
    )
  }
}

export default Purecomp
