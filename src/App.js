import React from 'react'
import FakeSearchAPI from './fake-api/search'
import { PAutoComplete } from './components/widgets'
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
  async search(keyword) {
    try {
      // Update keyword input
      this.updateKeyword(keyword)
      // Get all the items which start with `keyword`
      const results = await FakeSearchAPI.search(keyword)
      // Update suggestion list
      this.updateResult(results)
    } catch (err) {
      console.error(err)
    }
  }
  render() {
    return (
      <div className="wrapper">
        <PAutoComplete
            value={this.state.keyword}
            suggestions={this.state.results}
            onChange={(val) => this.search(val)}
            onSelect={(item) => this.updateKeyword(item) && this.updateResult([])}
        />
      </div>
    )
  }
}

export default App
