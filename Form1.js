import React, { Component } from 'react'

export class Form1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         UserName:'',
         Comment:'',
         Graduation:'BE'
      }
    }
    handlerUserName =(event)=>{
        this.setState({
            UserName: event.target.value
        })
    }
    handlerComment =(event)=>{
        this.setState({
            Comment:event.target.value
        })
    }
    handlerGrade=(event)=>{
        this.setState({
            Graduation:event.target.value
        })
    }
    handlerSubmit=(event)=>{
        alert(`${this.state.UserName}.${this.state.Comment}.${this.state.Graduation}`)
        event.preventDefault()
    }

  render() {
    return (
      <>
      <form onSubmit={this.handlerSubmit}>
      <div>Form1</div>
      <div>
      <label>UserName ::</label>
      <input type="text" value={this.state.UserName} onChange={ this.handlerUserName}/>
      </div><br></br>
      
      <div>
      <label>Text area</label>
      <textarea type="" value={this.state.Comment} onChange={this.handlerComment}></textarea>
      </div><br></br><br></br>

      <div>
        <label>Graduation</label>
        <select value={this.state.Graduation} onChange={this.handlerGrade}>
            <option value='BE'>BE</option>
            <option value='BTech'>BTech</option>
            <option value='ME'>ME</option>
            <option value='MTech'>MTech</option>
            <option value="BCA">BCA</option>

        </select>
        </div><br></br><br></br>
        <div>
        <button type='submit'>Submit</button>
        </div>
        </form>
      </>

    )
  }
}

export default Form1
