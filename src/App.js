
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <input></input>
    </div>
  );
}

class BuyList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List {this.props.name}</h1>
        <ol>
          <li>Twitter</li>
          <li>instagram</li>
          <li>YouTube</li>
        </ol>
      </div>
    );
  }
}

export default BuyList;