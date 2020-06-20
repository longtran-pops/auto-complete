import React, {useCallback} from 'react'

import styles from './PListItem.module.scss'

export default ({ onSelect, children, originalSuggestion }) => {
  const handleClick = useCallback(() => onSelect(originalSuggestion), [onSelect, originalSuggestion])

  return <div className={styles.root} onClick={handleClick}>{children}</div>
}
