import React from 'react'

export default (props) => {
  const { onPress, children } = props
  return (
    <p className="auto-complete__item" onClick={(e) => onPress(e)}>{children}</p>
  )
}
