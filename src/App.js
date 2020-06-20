import React from 'react'

import FakeSearchAPI from './fake-api/search'
import { PAutoComplete } from './components/widgets'
import './App.css'
import { debounce } from './helpers'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      keyword: '',
      results: [],
      lastRequestTimestamp: 0,
    }
  }

  updateKeyword = (keyword, triggerSearch = true) => this.setState({ keyword }, () => {
    this.setState((prevState) => ({
      ...prevState,
      lastRequestTimestamp: prevState.lastRequestTimestamp + 1,
    }), () => {
      if (triggerSearch) this.search(this.state.lastRequestTimestamp)
    })
  })

  updateResult = (results) => this.setState({ results })

  search = debounce(async (requestTimestamp) => {
    try {
      // Set loading state
      this.setState({ isLoading: true })

      const results = await FakeSearchAPI.search(this.state.keyword)

      if (requestTimestamp === this.state.lastRequestTimestamp) {
        this.updateResult(results)
      }
    } catch (err) {
      console.error(err)
    } finally {
      this.setState({ isLoading: false })
    }
  }, 200)

  handleChange = (keyword) => {
    // Update keyword input
    this.updateKeyword(keyword)
  }

  render() {
    const {
      keyword,
      results,
      isLoading
    } = this.state

    return (
      <PAutoComplete
        value={keyword}
        suggestions={results}
        onChange={this.handleChange}
        onSelect={(item) => {
          this.updateKeyword(item, false)

          this.updateResult([])
        }}
        {...{ isLoading }}
      />
    )
  }
}

export default App
