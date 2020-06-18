import React from 'react'
import styles from './PList.module.css'

export default (props) => {
  return <div className={styles['container']}>{props.children}</div>
};
