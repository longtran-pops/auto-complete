import React, { useState, useEffect } from 'react'
import { PInput, PListItem, PList, PLoading, PNoData } from '../elements'

export default (props) => {
  const {
    value = '',
    width,
    size,
    suggestions = [],
    loading,
    onChange = () => null,
    onSelect = () => null
  } = props

  const [interalValue, setInternalValue] = useState(value)
  const [interalSuggestions, setInternalSuggestions] = useState(suggestions)
  const [showSuggestions, setShowsuggestions] = useState(false)
  const [isNoData, setIsNoData] = useState(false)

  // emit event onChange and show list with value
  const onChangeInternal = val => {
    setInternalValue(val)
    onChange(val)
    setShowsuggestions(!!val)
    if(!val){
      setIsNoData(false)
      setInternalSuggestions([])
    }
  }

  // set select item and emit event onSelect
  const onSelectInternal = item => {
    setInternalValue(item)
    setShowsuggestions(false)
    setInternalSuggestions([])
    onSelect(item)
  }

  useEffect(() => {
    const noData = suggestions.length === 0 && !!interalValue
    setIsNoData(noData)
    setInternalSuggestions(suggestions)
  }, [suggestions]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      <PInput
        value={interalValue}
        width={width}
        size={size}
        onChange={(val) => onChangeInternal(val)}
      ></PInput>
      {loading && <PList>
        <PLoading />
      </PList>}
      {!loading && <React.Fragment>
        {showSuggestions && interalSuggestions.length > 0 && <PList>
          {interalSuggestions.map((item) => (
            <PListItem
              key={item}
              onPress={() => onSelectInternal(item)}
            >
              {item}
            </PListItem>
          ))}
        </PList>}
        {isNoData && <PList><PNoData /> </PList>}
      </React.Fragment>}
    </React.Fragment>
  )
}
