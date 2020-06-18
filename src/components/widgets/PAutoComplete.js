import { PInput, PListItem, PList } from '../elements'
import './PAutoComplete.css'
import React from 'react'

const formatItem = (search, item) => {
    if(item.length>0) {
        if(search.length>0) {
            let substr1 = item.substring(0, search.length);
            let substr2 = item.substring(search.length, item.length);
            return(
                <span>
                    <span className='keySearch'>{substr1}</span>
                    <span>{substr2}</span>
                </span>
            );
        }
    }
    return item;
}

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
              {formatItem(props.value, item)}
            </PListItem>
          ))}
        </PList>
      ) : null}
    </div>
  )
}
