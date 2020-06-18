import React from 'react'
import styles from './PListItem.module.css'
export default (props) => {
  return (
    <p
      className={styles['item']}
      onClick={(e) => props.onPress && props.onPress(e)}
    >
      {props.children}
    </p>
  )
}
