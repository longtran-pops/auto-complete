import { PInput, PListItem, PList } from '../elements'
import React from 'react'
import {capitalizeFirstLetter} from '../../helpers'

export default (props) => {
  return (
    <div
      className="auto-complete"
    >
      <PInput
        value={props.value}
        onChange={(val) => props.onChange && props.onChange(val)}
      ></PInput>
      {props.suggestions && props.suggestions.length > 0 ? (
        <PList>
          {
            props.loading && <p>Loading...</p>
          }
          {!props.loading && props.suggestions.map((item) => (
            <PListItem
              key={item}
              onPress={() => {
                props.onSelect && props.onSelect(item)
              }}
            >
              <strong>{props.value}</strong>
              {item.replace(capitalizeFirstLetter(props.value), '')}
            </PListItem>
          ))}
        </PList>
      ) : (
        props.loading && <PList><p>Loading...</p></PList>
      )}
    </div>
  )
}
