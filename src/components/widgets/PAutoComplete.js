import React from 'react'

import { PInput, PListItem, PList } from '../elements'
import styles from './PAutoComplete.module.scss'

export default ({
  value,
  suggestions,
  onChange,
  onSelect,
  isLoading,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.innerWrapper}>
        <PInput
          {...{
            value,
            onChange,
            isLoading,
          }}
        />

        {suggestions && suggestions.length > 0 && (
          <PList>
            {suggestions.map((item) => (
              <PListItem
                key={item}
                {...{ onSelect }}
              >
                {item}
              </PListItem>
            ))}
          </PList>
        )}
      </div>
    </div>
  )
}
