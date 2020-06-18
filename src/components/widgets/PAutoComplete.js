/* eslint-disable react-hooks/exhaustive-deps */
import { PInput, PListItem, PList } from '../elements'
import React, { useCallback } from 'react'

const MemoizeItem = React.memo(({ data, handlePress, keyword }) => {
  const highlightText = data.slice(0, keyword.length);
  const nonHighlighText = data.slice(keyword.length)
  return (
    <PListItem
      onPress={handlePress}
      dataCallback={data}
    >
      <span className="font-weight-bold">{highlightText}</span>{nonHighlighText}
    </PListItem>
  )
})

const MemoizeList = React.memo(({keyword, onSelect, suggestions }) => {

  const handlePress = useCallback((e, dataCallback) => {
    onSelect && onSelect(e, dataCallback)
  }, [])

  return (
    <PList>

      {/* filter one more time in FE, in case the result from the previous AJAX still exist in the UI and the user typing too fast*/}
      {/* so it will give better UX for the user as they see the list change accordingly immediately*/}
      {/* when the AJAX return, it will update the latest search result */}
      {/* maybe consider to use useMemo if the filter is too slow in future */}
      {suggestions.filter((item) => {
        return item.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase())
      }).map((item) => (
        <MemoizeItem key={item} keyword={keyword} handlePress={handlePress} data={item}></MemoizeItem>
      ))}
    </PList>
  )
})

export default (props) => {
  return (
    <div>
      <PInput
        value={props.value}
        onChange={(val) => props.onChange && props.onChange(val)}
      ></PInput>
      {props.suggestions && props.suggestions.length > 0 ? (
        <MemoizeList keyword={props.value} suggestions={props.suggestions} onSelect={props.onSelect}></MemoizeList>
      ) : null}
    </div>
  )
}
