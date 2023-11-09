import React from 'react'

function Input({id,title,type,name,changeData,error}) {
  return (
    <div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input type={type} className="form-control" id={id} name={name} onChange={changeData}/>
   {error[name]&&<p className='text-danger'>{error[name]}</p>}
  </div>
  )
}

export default Input