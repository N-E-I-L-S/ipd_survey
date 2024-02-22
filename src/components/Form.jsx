import React, { useState } from 'react'

export default function Form({label, index}) {
    console.log({label})
    const [response , setResponse] = useState([[]])
    function handleClick(optionindex){
      console.log(optionindex)
      console.log(index)
    }
  return (
    <div>
        <div>
            options:
            {
              label.map((i, optionindex)=>{
                return(
                  <div className="">
                  <input type="radio" value={optionindex} name={index}  /> {i}
                  </div>
                // <div className="" onClick={()=>handleClick(optionindex)}>
                //   {i}
                // </div>
                )
              })
            }
            {/* {labels} */}
        </div>
    </div>
  )
}
