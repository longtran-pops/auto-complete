import React, { useState } from 'react'

import FakeSearchAPI from './fake-api/search'
import { PAutoComplete } from './components/widgets'
import { debounce } from './utils'
import './App.css'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState([])

  const search = debounce(async (keyword) => {
    if(!keyword) return;
    setLoading(true)

    // call api
    try {
      const result = await FakeSearchAPI.search(keyword)
      setSuggestions(result)
    } catch(e) {
      setSuggestions([])
      console.error(e)
    }
    setLoading(false)
  }, 500)


  const selectItem = item => {
    console.log('item select here', item)
  }

  return (
    <div className="app-seach">
      <PAutoComplete
        width="100%"
        loading={loading}
        suggestions={suggestions}
        onChange={val => search(val)}
        onSelect={item => selectItem(item)}
      />
    </div>
  )
}

export default App
