import React, { Component } from "react";


class Home extends Component {
  constructor(props) {
    super(props);
    // console.log( localStorage.getItem('list') );
    //  let tasklist = [];
    this.tasklist = JSON.parse(localStorage.getItem("list"));
    this.setState(this.tasklist);
  }


  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Task No.</th>
              <th scope="col">Task</th>
              <th scope="col">Description</th>
             
            </tr>
          </thead>
          <tbody>
            {this.tasklist.map((item, index) => (
              <tr key={index}>
                <td scope="col"> {index}</td>
                <td scope="col">{item.taskname}</td>
                <td scope="col">{item.taskdescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
