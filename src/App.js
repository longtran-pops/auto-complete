import React from 'react'
import FakeSearchAPI from './fake-api/search'
import { PAutoComplete } from './components/widgets'
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

  async loadData(keyword) {
    try {
      this.updateLoadingState(true)
      // Get all the items which start with `keyword`
      const results = await FakeSearchAPI.search(keyword)
      // Update suggestion list
      if (this.state.keyword === keyword) {
        this.updateResult(results)
      }
    } catch (err) {
      console.error(err)
    } finally {
      this.updateLoadingState(false)
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
        () => this.loadData(keyword),
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
