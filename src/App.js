import React from 'react'
import {debounce} from './helpers'

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
      loading: false,
    }
  }

  updateKeyword = (keyword) => this.setState({keyword})

  updateResult = (results) => this.setState({results})

  search = debounce(async () => {    
    // Get all the items which start with `keyword`

    if (this.state.loading) {
      return
    }

    this.setState({ loading: true })

    const results = await FakeSearchAPI.search(this.state.keyword)

    this.setState({ loading: false })

    // Update suggestion list

    if (results && Array.isArray(results)) {
      this.updateResult(results)
    } else {
      console.error('Something wrong.')
    }
  }, 500)
  
  render() {
    const {loading, keyword, results} = this.state
    return (
      <PAutoComplete
        loading={loading}
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
