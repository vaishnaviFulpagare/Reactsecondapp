import React, { useState ,useEffect} from 'react'

function CountApp(){
   const [count,setcount] = useState(0)
    
   const useDocumentTitle =title =>{
    useEffect(()=>{
        document.title =`User Clicked ${count} Times`
        },[title])
   }
   
   useDocumentTitle(`User Clicked ${count} Times`)
  return (
    <>
      
       <div>CountApp</div>
       <h4>User clicked on a Button for{count} times</h4>
       <button type='button' onClick={()=>setcount(count+1)}>count{count}</button>
    </>
  )

  }
export default CountApp
