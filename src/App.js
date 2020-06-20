import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from './actions/items';

class App extends Component {

  handleOnClick = (event) => {
    // this.props.store.dispatch(addItem());
    this.props.addItem()
  }

  render() {
    debugger
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };


// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };

// pass in an obj as 2nd arg - contain kv pair for each action creator
// export default connect(mapStateToProps, { addItem })(App);
export default connect(state => ({ items: state.items }), { addItem })(App);
