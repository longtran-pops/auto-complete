import { PInput, PListItem, PList } from '../elements'
import './PAutoComplete.css'
import React from 'react'

export default (props) => {
  return (
    <div className='PAutoCompleteWrapper'>
      <PInput
        value={props.value}
        onChange={(val) => props.onChange && props.onChange(val)}
      ></PInput>
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
  )
}
