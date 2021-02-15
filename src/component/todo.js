import React, { Component } from "react";
import uuid from "uuid";
import "./CSS/todo.css";

class Todo extends Component {
 //    liiist = useState()
  constructor(props) {
    super(props);

    this.taskname = React.createRef();
    this.taskdescription = React.createRef();
    this.state = {
      list: [],
    };
  }

  addTask = () => {
    const Items = {
      id: uuid.v1,
      taskname: this.taskname.current.value,
      taskdescription: this.taskdescription.current.value,
      Date: new Date().toUTCString(),
    };

    if (localStorage.getItem("list") == null) {
      const list = [];
      list.push(Items);
      localStorage.setItem("list", JSON.stringify(list));
    } else {
      const list = JSON.parse(localStorage.getItem("list"));
      list.push(Items);
      localStorage.setItem("list", JSON.stringify(list));
    }
    this.setState({
      list: JSON.parse(localStorage.getItem("list")),
    });
  };

  gettasklist =() => {
    const list = window.localStorage.getItem("list");
  
    const parsedList = JSON.parse(list);
    if (list == null) {
      return false;
    } else {
      this.setState({
        list: parsedList,
      });
      console.log(this.state.list);
    }
  }
componentDidMount(){
   this.gettasklist();
}



  deleteItem = (event) => {

    
    let index = event.target.getAttribute("data-key");
    let listValue = JSON.parse(localStorage.getItem("list"));
    listValue.splice(index, 1);
    this.setState({ list: listValue });
    localStorage.setItem("list", JSON.stringify(listValue));
  };

  render() {
    return (
      <div className="main-container">
      
        <div className="container">
          <input
            type="text"
            placeholder="Add Task"
            ref={this.taskname}
          ></input>
          <input
            type="text"
            placeholder="Add Task Description"
            ref={this.taskdescription}
          ></input>
          <button onClick={this.addTask} className="button">
            Add
          </button>
         
       <div className = "viewtable">
       
          <table className="table">
              <thead>
                <tr>
                  
                  <th scope="col">Task</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {this.state.list.map((item, key) => {
               return (
                  <tr key={item.id}>
                   
                    <td scope="col">{item.taskname}</td>
                    <td scope="col">{item.taskdescription}</td>
                    <td>
                    <button
                    className="button"
                    type="button"
                    value="delete"
                    data-key={key}
                    onClick={this.deleteItem}
                  >
                    Delete
                  </button>
                    </td>
                  </tr>
                )})}
              </tbody>
            </table>
       
            </div>
        </div>
      </div>
    );
  }
}

export default Todo;
