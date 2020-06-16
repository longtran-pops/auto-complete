import React from 'react'

const HEIGHT = {
  small: '32px',
  medium: '40px',
  large: '52px'
}

const FONT_SIZE = {
  small: '14px',
  medium: '16px',
  large: '18px'
}

export default (props) => {
  const { value, width, size, onChange } = props
  const getValue = (e) => (e.target || e.currentTarget || {}).value

  const style = {
    width,
    height: HEIGHT[size] || HEIGHT.medium,
    fontSize :FONT_SIZE[size] || FONT_SIZE.medium
  }

  return (
    <input
      style={style}
      value={value}
      onChange={(e) => onChange(getValue(e))}
    ></input>
  )
}
