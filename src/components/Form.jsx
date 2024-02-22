import React, { useState } from 'react'

export default function Form({label}) {
    const values = [0, 1, 2, 3];
    console.log({label})
    const [response , setResponse] = useState([[]])
    function handleClick(index){
      console.log(index)
    }
  return (
    <div>
        <div>
            options:
            {
              label.map((i, index)=>{
                return(
                <div className="" onClick={()=>handleClick(index)}>
                  {i}
                </div>
                )
              })
            }
            {/* {labels} */}
        </div>
    </div>
  )
}
