import React from 'react'
import FakeSearchAPI from './fake-api/search'
import { PAutoComplete } from './components/widgets'
import Cache from './cache'
import './App.css'

const AVERAGE_TYPING_DELAY = 300

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      results: [],
      isLoading: false,
    }
    this.timer = null
    this.searchingCache = new Cache({})
  }
  updateKeyword(keyword) {
    this.setState({
      keyword,
    })
  }
  updateResult(results) {
    this.setState({
      results,
    })
  }
  updateLoadingState(isLoading) {
    this.setState({
      isLoading,
    })
  }

  getDataFromCache(keyword) {
    return this.searchingCache.getData(keyword)
  }

  async loadData(keyword) {
    // Get all the items which start with `keyword`
    const results = await FakeSearchAPI.search(keyword)

    //update cache
    this.searchingCache.setData(keyword, results)

    return results
  }

  async getSearchResult(keyword) {
    let result = this.getDataFromCache(keyword)
    if (result) {
      this.loadData(keyword)
    } else {
      try {
        this.updateLoadingState(true)
        result = await this.loadData(keyword)
      } catch (error) {
        console.log(error)
      } finally {
        this.updateLoadingState(false)
      }
    }
    
    if (keyword === this.state.keyword) {
      this.updateResult(result)
    }
  }

  search(keyword) {
    clearTimeout(this.timer)

    // Update keyword input
    this.updateKeyword(keyword)

    if (!keyword) {
      this.updateLoadingState(false)
      this.updateResult([])
    } else { 
      this.timer = setTimeout(
        () => this.getSearchResult(keyword),
        AVERAGE_TYPING_DELAY
      )
    }
  }

  render() {
    return (
      <div className='App'>
        <PAutoComplete
          isLoading={this.state.isLoading}
          value={this.state.keyword}
          suggestions={this.state.results}
          onChange={(val) => this.search(val)}
          onSelect={(item) => {
            this.updateKeyword(item)
            this.updateResult([])
          }}
        />
      </div>
    )
  }
}

export default App
