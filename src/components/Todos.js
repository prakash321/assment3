import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
export class Todos extends Component {
  render(props) {
    const myData = this.props.data;
    const isChecked = this.props.isChecked;
    const id = this.props.id;
    console.log("status", isChecked);
    return Object.keys(myData).map(id => (
      <>
        <TodoItem
          key={id}
          onChangeHandle={this.props.onChangeHandle}
          names={myData[id]}
          id={id}
          isChecked={this.props.isChecked}
        />
      </>
    ));
  }
}
Todos.propTypes = {
  id: PropTypes.array.isRequired,
  names: PropTypes.array.isRequired,
  isChecked: PropTypes.bool
};

export default Todos;
