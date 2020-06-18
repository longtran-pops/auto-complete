import React from 'react'
import styles from './PInput.module.css'

export default (props) => {
  const getValue = (e) => (e.target || e.currentTarget || {}).value
  return (
    <input
      value={props.value}
      onChange={(e) => props.onChange(getValue(e))}
      className={styles['input']}
      placeholder={props.placeholder || ''}
    ></input>
  )
}
