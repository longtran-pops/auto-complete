import React from 'react'

export default (props) => {
  const getValue = (e) => (e.target || e.currentTarget || {}).value
  return (
    <input
      value={props.value}
      onChange={(e) => props.onChange(getValue(e))}
    ></input>
  )
}
