import React from "react";
import ItemToDo from "./components/itemToDo";
import "./App.css";

class App extends React.Component {
  state = {
    task: "",
    taskList: [],
  };

  updateTaskDescription = (event) => {
    this.setState({ task: event.target.value });
  };

  addTask = () => {
    if (this.state.task) {
      const newTask = this.state.task;
      const newTaskList = [...this.state.taskList, newTask];

      this.setState({
        taskList: newTaskList,
        task: "",
      });
    }
  };

  onKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      this.addTask();
    }
  };

  //this part is diferent from the study version, but it works well
  deleteTask = (taskId) => {
    const taskList = this.state.taskList.filter(
      (task, index) => index !== taskId
    );
    this.setState({ taskList: taskList });
  };

  //this part is diferent from the study version, but it works well
  updateTask = (value, id) => {
    let list = [...this.state.taskList];
    list[id] = value;
    this.setState({ taskList: list });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>TO DO LIST</h1>
          <input
            className="inputTask"
            type="text"
            id="taskDescription"
            value={this.state.task}
            placeholder="Type here your task"
            onChange={this.updateTaskDescription}
            onKeyDown={this.onKeyDownHandler}
          />
          <button className="btnAdd" onClick={this.addTask}>
            Add
          </button>
          {this.state.taskList.map((item, index) => (
            <ItemToDo
              className="itemTask"
              key={index}
              task={item}
              id={index}
              onDelete={this.deleteTask}
              onchange={this.updateTask}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
