import React from "react";

class Item extends React.Component {
  state = {
    clicked: false
  };
  handleClick = event => {
    this.setState(currentState => {
      return { clicked: !currentState.clicked };
    });
  };
  render() {
    let style = {
      textDecoration: this.state.clicked ? "line-through" : "none"
    };
    const { todoItem } = this.props;

    return (
      <li style={style} onClick={this.handleClick}>
        {todoItem}
      </li>
    );
  }
}

export default Item;
