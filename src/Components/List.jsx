import React from "react";
import Item from "./Item";

class List extends React.Component {
  render() {
    const { todoItem } = this.props;

    return (
      <ul>
        {todoItem.map(item => {
          return <Item todoItem={item} />;
        })}
      </ul>
    );
  }
}

export default List;
