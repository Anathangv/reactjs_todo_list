import React, { Component } from "react";
import "./itemToDo.css";

class ItemToDo extends Component {
  render() {
    return (
      <div className="taskItem" key={this.props.id}>
        <p>
          <input
            type="text"
            onChange={(e) => this.props.onchange(e.target.value, this.props.id)}
            value={this.props.task}
          />
          <span>
            <button
              className="btnDel"
              onClick={() => this.props.onDelete(this.props.id)}
            >
              Del
            </button>
          </span>
        </p>
      </div>
    );
  }
}

export default ItemToDo;
