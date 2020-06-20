import React, { Component } from "react";
import FakeSearchAPI from "../../fake-api/search";
import PAutoComplete from "../widgets/PAutoComplete";
import "./../../App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.keyword = "";
    this.results = [];
    this.isSelected = false;
    this.state = {
      results: null,
      isLoading: false,
    };
  }

  handleFilterResult = (keyword) => {
    return this.results.filter((item) =>
      item.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase())
    );
  };

  getSearch = async () => {
    try {
      const { keyword } = this;
      if (
        this.results.length > 0 &&
        this.handleFilterResult(keyword).length > 0
      ) {
        this.updateResult(this.handleFilterResult(keyword));
      } else {
        this.updateResult(null);
      }
      const results = await FakeSearchAPI.search(keyword);
      this.results = [...new Set([...this.results, ...results])];
      !this.isSelected && this.updateResult(this.handleFilterResult(keyword));
      this.setState({ isLoading: false });
    } catch (err) {
      console.error(err);
    }
  };

  updateResult(results) {
    this.setState({
      results,
    });
  }

  updateKeyword(keyword) {
    this.isSelected = false;
    this.keyword = keyword;
  }

  handleOnChange = (keyword) => {
    this.updateKeyword(keyword);
    if (keyword.trim() !== "") {
      this.setState({ isLoading: true }, () => this.getSearch());
    } else {
      this.updateResult(null);
    }
  };

  render() {
    const { results, isLoading } = this.state;
    return (
      <PAutoComplete
        isLoading={isLoading}
        value={this.keyword}
        results={results}
        onChange={this.handleOnChange}
        onSelect={(item) => {
          this.updateKeyword(item);
          this.isSelected = true;
          this.updateResult(null);
        }}
      />
    );
  }
}
