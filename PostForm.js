import React, { Component } from 'react'
import { Axios } from 'axios'
export class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:" ",
         title:' ',
         body:" "
      }
    }
    changehandler=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
      
    }
    submithandler=(e)=>{
      e.preventDefault()
      console.log(this.state)
    
    Axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(Response =>{
      console.log(Response);
    })
    .catch(error =>{
      console.log('something went wrong here');
    })
  }
  render() {
    const{userId,title,body}=this.state
    return (
        <>
      <div>PostForm </div>
      <form onSubmit={this.submithandler}>
        <div>
            <label>UserName::</label>
            <input type='text' name='userId' value={userId} onChange={this.changehandler}/>
        </div>
        <div>
            <label>Title::</label>
            <input type='text' name='title' value={title} onChange={this.changehandler}/>
        </div>
        <div>
            <label>Body::</label>
            <input type='text' name='body' value={body} onChange={this.changehandler}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
      </>
    )
  }
}

export default PostForm
