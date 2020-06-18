import React from 'react'
export default (props) => {
  return (
    <div className="p-list-item" onClick={(e) => props.onPress && props.onPress(e, props.dataCallback)}>{props.children}</div>
  )
}
