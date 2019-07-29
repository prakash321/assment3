import React, { Component } from "react";
import Todos from "./components/Todos";
import Data from "./components/Data";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isChecked: false
    };
  }
  componentDidMount() {
    this.setState({ data: Data });
  }

  onChangeHandle = (id, isChecked, e) => {
    this.setState({ isChecked: e.target.checked });
    // console.log("checked status", this.state.isChecked);
    // console.log("anoterh value of ischecked", isChecked);
  };
  render() {
    return (
    <>
        {/* {Object.keys(Data).map(id => {
          return //console.log(Data[id]);
        })} */}
        <h1>App</h1>
        <Todos
          data={this.state.data}
          isChecked={this.state.isChecked}
          onChangeHandle={this.onChangeHandle}
        />
      </>
    );
  }
}

export default App;
