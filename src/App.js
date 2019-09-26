import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import List from "./Components/List";
import AddItem from "./Components/AddItem";

class App extends React.Component {
  state = {
    todoItems: ["dfvsdfv", "asewfasedf", "sdfvs"]
  };
  addNewItem = newItem => {
    this.setState(currentState => {
      return { todoItems: [...currentState.todoItems, newItem] };
    });
  };
  render() {
    return (
      <main>
        <Header />
        <List todoItem={this.state.todoItems} />
        <AddItem AddItem={this.addNewItem} />
      </main>
    );
  }
}

export default App;
