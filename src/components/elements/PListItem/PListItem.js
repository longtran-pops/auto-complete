import React, {useCallback} from 'react'

import styles from './PListItem.module.scss'

export default ({ onPress, children }) => {
  const handleClick = useCallback((e) => {
    onPress && onPress(e)
  }, [onPress])

  return (
    <div className={styles.root} onClick={handleClick}>{children}</div>
  )
}
