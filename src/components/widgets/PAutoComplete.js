import { PInput, PListItem, PList } from '../elements'
import React from 'react'

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

export default (props) => {
  return (
    <div
      className="auto-complete"
    >
      <PInput
        disabled={props.loading}
        value={props.value}
        onChange={(val) => props.onChange && props.onChange(val)}
      ></PInput>
      {props.suggestions && props.suggestions.length > 0 ? (
        <PList>
          {!props.loading && props.suggestions.map((item) => (
            <PListItem
              key={item}
              onPress={() => {
                props.onSelect && props.onSelect(item)
              }}
              text={{
                highlighted: props.value,
                normal: item.replace(capitalizeFirstLetter(props.value), ''),
              }}
            />
          ))}
        </PList>
      ) : (
        props.loading && <PList><p>Loading...</p></PList>
      )}
    </div>
  )
}
