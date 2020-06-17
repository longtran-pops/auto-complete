import React from 'react'
export default (props) => {
  return (
    <p onClick={(e) => props.onPress && props.onPress(e)}>
      <strong>{props.text.highlighted}</strong>
      {props.text.normal}
    </p>
  )
}
