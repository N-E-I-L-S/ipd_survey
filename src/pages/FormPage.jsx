import React from 'react'
import Form from '../components/Form'

export default function FormPage() {
    // const options =[ {
    //     value: 0,
    //     label: "I do not feel sad."
    //   },
    //   {
    //     value: 1, 
    //     label: "I feel sad"
    //   },
    //   {
    //     value: 2,
    //     label: "I am sad all the time and I can't snap out of it."
    //   },
    //   {
    //     value: 3,
    //     label: "I am so sad and unhappy that I can't stand it."
    //   }},
    //   {{

    //   }
    // ]
    const labels= [
        ["I do not feel sad.", "I feel sad", "I am sad all the time and I can't snap out of it.", "I am so sad and unhappy that I can't stand it."]
    ]
    console.log(labels[0])
  return (
    <div>
      {
        labels.map((label)=>{
          return(
            <Form label={label}/>
            )
        })
      }
    </div>
  )
}
