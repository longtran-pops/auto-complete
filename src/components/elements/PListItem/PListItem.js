import React, {useCallback} from 'react'

import styles from './PListItem.module.scss'

export default ({ onSelect, children }) => {
  const handleClick = useCallback(() => onSelect(children), [children, onSelect])

  return <div className={styles.root} onClick={handleClick}>{children}</div>
}
