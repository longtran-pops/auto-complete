import React from 'react'
import debounce from 'lodash/debounce'

// API
import FakeSearchAPI from './fake-api/search'

// COMPONENT
import { PAutoComplete } from './components/widgets'

// STYLE
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      keyword: '',
      results: [],
    }
  }

  updateKeyword = (keyword) => this.setState({keyword})

  updateResult = (results) => this.setState({results})

  search = debounce(async () => {    
    // Get all the items which start with `keyword`

    const results = await FakeSearchAPI.search(this.state.keyword)

    // Update suggestion list

    if (results && Array.isArray(results)) {
      this.updateResult(results)
    }
  }, 500)
  
  render() {
    const {keyword, results} = this.state
    return (
      <PAutoComplete
        value={keyword}
        suggestions={results}
        onChange={(val) => {
          this.updateKeyword(val)
          this.search()
        }}
        onSelect={(val) => {
          this.updateKeyword(val)
          this.updateResult([])
        }}
      />
    )
  }
}

export default App
