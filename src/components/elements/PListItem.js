import React, { PureComponent } from "react";

const regExpHighLightKeyword = ({ value, item }) => {
  const regTerm = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    __html: item.replace(new RegExp("(" + regTerm + ")", "i"), "<b>$1</b>"),
  };
};

export default class extends PureComponent {
  render() {
    const { onPress, value, children } = this.props;
    return (
      <p
        className="item-result"
        onClick={(e) => onPress && onPress(e)}
        dangerouslySetInnerHTML={regExpHighLightKeyword({
          value,
          item: children,
        })}
      />
    );
  }
}
