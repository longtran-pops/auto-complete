import { PInput, PListItem, PList, PLoading } from '../elements'
import React from 'react'
export default (props) => {
  return (
    <div className="main">
      <PInput
        value={props.value}
        onChange={(val) => props.onChange && props.onChange(val)}
      ></PInput>
      {props.loading && <PLoading>Loading...</PLoading>}
      {props.suggestions && props.suggestions.length > 0 ? (
        <PList>
          {props.suggestions.map((item) => (
            <PListItem
              key={item}
              onPress={() => {
                props.onSelect && props.onSelect(item)
              }}
              terms={props.value}
            >
              {item}
            </PListItem>
          ))}
        </PList>
      ) : null}
    </div>
  )
}
