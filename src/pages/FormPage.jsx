import React from 'react'
import Form from '../components/Form'

export default function FormPage() {
    const labels= [
        ["I do not feel sad.", "I feel sad", "I am sad all the time and I can't snap out of it.", "I am so sad and unhappy that I can't stand it."],

    ]
    console.log(labels[0])
  return (
    <div>
      {
        labels.map((label, index)=>{
          return(
            <Form label={label} index={index+1}/>
            )
        })
      }
    </div>
  )
}
