import React, { PureComponent } from "react";
import { debounce } from "../../utils";

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { keyword: this.props.value };
    this.onChangeDebounced = debounce(800, this.props.onChange);
  }

  handleOnChange = (keyword) => {
    this.setState({ keyword }, () => this.onChangeDebounced(keyword));
  };

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ keyword: this.props.value });
    }
  }

  render() {
    const { keyword } = this.state;
    return (
      <input
        value={keyword}
        onChange={(e) => this.handleOnChange(e.currentTarget.value)}
      />
    );
  }
}
