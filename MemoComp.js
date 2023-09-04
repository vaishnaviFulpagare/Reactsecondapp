import React from 'react'

function MemoComp({name}) {
    console.log("This is memocomponent working")
  return (
    <>
    <div>
        {name}
    </div>
    </>
  )
}

export default React.memo(MemoComp)

