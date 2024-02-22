import React, { useState } from 'react'

export default function Form({ label, index,  onOptionClick }) {

  function handleClick(optionindex) {
      onOptionClick(optionindex);
  }
  return (
    <div>
      <div>
        Section {index}:
        <div className="p-4">
          {
            label.map((i, optionindex) => {
              return (
                <div key={optionindex} className="">
                  <input type="radio" value={optionindex} name={index} onChange={() => handleClick(optionindex)}/> {i}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
