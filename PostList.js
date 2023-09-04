import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           Post:[],
           errorMsg:''
        }
        
      }
      componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
          this.setState({posts : response.data})
            // console.log(Response);
        })
        .catch(error =>{
            // console.log(error);
            this.setState({errorMsg:"Error while fetching data"})
        })
      }
  
  render() {
    const {posts,errorMsg} = this.state
    return (
      <div>PostList
        {
             posts?posts.map(Post =>
             <h4 key={Post.id}>{Post.title}</h4>) :null 
        }
        {
               errorMsg?<h2>{errorMsg}</h2>:null
        }
        
      </div>
     
    )
  }
}

export default PostList
