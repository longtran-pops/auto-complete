import React from 'react'
export default (props) => {
  return (
    <div onClick={(e) => props.onPress && props.onPress(e)}>{props.children}</div>
  )
}
