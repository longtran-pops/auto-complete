import React from 'react'
import { PInput, PListItem, PList } from '../elements'
import styles from './PAutoComplete.module.css'

const getHighlightedText = (text, keywork) => {
  const parts = []
  const startIndex = text.toLocaleLowerCase().indexOf(keywork.toLocaleLowerCase())
  parts.push(text.slice(0, startIndex))
  parts.push(text.slice(startIndex, startIndex + keywork.length))
  parts.push(text.slice(startIndex + keywork.length))
  return (
    <>
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === keywork.toLowerCase()
              ? { fontWeight: 'bold' }
              : {}
          }
        >
          {part}
        </span>
      ))}
    </>
  )
}

export default (props) => {
  const searchBarStyles = !props.isLoading
    ? styles['search-bar']
    : `${styles['search-bar']} ${styles['search-bar-has-loader']}`

  return (
    <div className={styles['container']}>
      <div className={searchBarStyles}>
        <PInput
          value={props.value}
          onChange={(val) => props.onChange && props.onChange(val)}
          placeholder='Enter Search keyword'
        ></PInput>
        {props.isLoading && <div className={styles['loader']} />}
      </div>
      {!props.isLoading && props.suggestions && props.suggestions.length > 0 ? (
        <PList>
          {props.suggestions.map((item) => (
            <PListItem
              key={item}
              onPress={() => {
                props.onSelect && props.onSelect(item)
              }}
            >
              {getHighlightedText(item, props.value)}
            </PListItem>
          ))}
        </PList>
      ) : null}
    </div>
  )
}
