import React, { useMemo } from 'react'

import { PInput, PListItem, PList } from '../elements'
import styles from './PAutoComplete.module.scss'

const PAutoComplete = ({
  value,
  suggestions,
  onChange,
  onSelect,
  isLoading,
}) => {
  const highlightedSuggestions = useMemo(() => suggestions.map((suggestion) => {
    const index = suggestion.indexOf(value)
    
    if (index === -1) return null

    return (
      <>
        {suggestion.substring(0, index)}<span className={styles.highlight}>{value}</span>{suggestion.substring(index + value.length)}
      </>
    )
  }), [suggestions, value])

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

        {suggestions.length > 0 && (
          <PList>
            {highlightedSuggestions.map((item, index) => {
              if (!item) return null

              return (
                <PListItem
                  key={suggestions[index]}
                  {...{ onSelect }}
                  originalSuggestion={suggestions[index]}
                >
                  {item}
                </PListItem>
              )
            })}
          </PList>
        )}
      </div>
    </div>
  )
}

PAutoComplete.defaultProps = {
  suggestions: [],
}

export default PAutoComplete
