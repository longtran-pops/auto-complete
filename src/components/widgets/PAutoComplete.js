import React from 'react'

import { PInput, PListItem, PList } from '../elements'
import styles from './PAutoComplete.module.scss'

export default (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.innerWrapper}>
        <PInput
          value={props.value}
          onChange={(val) => props.onChange && props.onChange(val)}
        />

        {props.suggestions && props.suggestions.length > 0 ? (
          <PList>
            {props.suggestions.map((item) => (
              <PListItem
                key={item}
                onPress={() => {
                  props.onSelect && props.onSelect(item)
                }}
              >
                {item}
              </PListItem>
            ))}
          </PList>
        ) : null}
      </div>
    </div>
  )
}
