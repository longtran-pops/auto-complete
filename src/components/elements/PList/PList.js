import React from 'react'

import styles from './PList.module.scss'

export default (props) => {
  return <div className={styles.root}>{props.children}</div>
}
