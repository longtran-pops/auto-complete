import React, { PureComponent } from "react";
import { PInput, PListItem, PList } from "../elements";
import { Divider } from "../elements/Divider";

export default class extends PureComponent {
  render() {
    const { value, onChange, onSelect, results, isLoading } = this.props;
    return (
      <div className="wrapper-container-input">
        <PInput value={value} onChange={onChange} />
        {isLoading && <p className="item-result">{`loading...`}</p>}
        {results === null ? null : results && results.length > 0 ? (
          <PList>
            {results.map((item, index) => (
              <React.Fragment key={item}>
                <PListItem
                  value={value}
                  onPress={() => {
                    onSelect && onSelect(item);
                  }}
                >
                  {item}
                </PListItem>
                {results.length - 1 > index && <Divider />}
              </React.Fragment>
            ))}
          </PList>
        ) : (
          <p className="item-result">{`No Data`}</p>
        )}
      </div>
    );
  }
}
