import React from 'react'
import { PAutoComplete } from './components/widgets'
import searchService from './services/searchService'
import debounce from './util/debounce'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      results: [],
    }
  }

  updateKeyword(keyword) {
    return new Promise((resolve) => {
      this.setState(
        {
          keyword,
        },
        () => resolve(keyword)
      )
    })
  }

  updateResult(results) {
    return new Promise((resolve) => {
      this.setState(
        {
          results,
        },
        () => resolve()
      )
    })
  }

  //use debounce so it won't be call the Ajax if the user type too fast
  fetchList = debounce(async (keyword) => {
    const results = await searchService.cachedSearch(keyword);
    // Update suggestion list
    if (this.state.keyword === keyword) {
      this.updateResult(results)
    }
  }, 300)

  search = async (keyword) => {
    try {
      // Update keyword input
      this.updateKeyword(keyword)
      // Get all the items which start with `keyword`
      this.fetchList(keyword);

    } catch (err) {
      console.error(err)
    }
  }

  handleSelecItem = (e, data) => {
    this.updateKeyword(data) && this.updateResult([])
  }

  render() {
    return (
      <div className="container" style={{backgroundColor: '#f2f2f2'}}>
        <div className="App">
          <div className="m-auto auto-complete-container">
            <PAutoComplete
              value={this.state.keyword}
              suggestions={this.state.results}
              onChange={this.search}
              onSelect={this.handleSelecItem}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
