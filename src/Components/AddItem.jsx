import React from "react";

class AddItem extends React.Component {
  state = {
    ItemInput: ""
  };

  render() {
    const { ItemInput } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="ItemInput">
          todoItem:
          <input
            onChange={this.handleChange}
            name="ItemInput"
            value={ItemInput}
            id="ItemInput"
          />
        </label>
        <button>Add new Item</button>
      </form>
    );
  }
  handleChange = event => {
    this.setState({ ItemInput: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { ItemInput } = this.state;
    this.props.AddItem(ItemInput);
    this.setState({ ItemInput: "" });
  };
}

export default AddItem;
