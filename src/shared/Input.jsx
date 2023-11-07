import React from 'react'

function Input({id,title,type,name,changeData}) {
  return (
    <div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input type={type} className="form-control" id={id} name={name} onChange={changeData}/>
  </div>
  )
}

export default Input