import React, { Component } from "react";
import PropTypes from "prop-types";
export class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccC dotted",
      textDecoration: this.props.isChecked ? "line-through" : "none"
    };
  };
  // checkHandle(e) {
  //   this.setState({ isChecked: e.target.checked });
  //   console.log("check value", this.state.isChecked);
  // }

  render() {
    const { id, name, isChecked } = this.props;


    return (
      <div>
        {/* <p>{this.props.id}</p> */}
        <p style={this.getStyle()}>
          <input
            type="checkbox"
            onChange={this.props.onChangeHandle.bind(this, id, isChecked)}
          />
          {/* {console.log(id)} */}
          {"   "}
          {this.props.names}
          {console.log("this is value of ischecked", isChecked)}
        </p>
        {id}
      </div>
    );
  }
}
TodoItem.propTypes = {
  id: PropTypes.string,
  names: PropTypes.string,
  isChecked: PropTypes.bool
};

export default TodoItem;
