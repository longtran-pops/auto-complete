import React from 'react'
export default (props) => {
  return (
    <p onClick={(e) => props.onPress && props.onPress(e)}>{props.children}</p>
  )
}
