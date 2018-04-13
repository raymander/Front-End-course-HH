import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', date: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  addTodo = (event) => {
    event.preventDefault();
    const strDate = this.state.date.getDate() + "." + (this.state.date.getMonth()+1) + "." + this.state.date.getFullYear(); 
    const newTodo =  {description: this.state.description, date: strDate};
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  
  dateChanged = (event, date) => { 
      this.setState({date: date}); 
}

  
  render() {
      
      const columns = [{ 
          Header: 'Date', 
          accessor: 'date' 
      }, { 
          Header: 'Description', 
          accessor: 'description', 
      }]

      
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
          <form>
            Description:<br/>
            <TextField type="text" hintText="Description" name="description" onChange={this.inputChanged} value={this.state.description}/><br/>
             Date:<br/>
            <DatePicker name="date" hintText="Duedate" onChange={this.dateChanged} value={this.state.date}/> 
            <RaisedButton onClick={this.addTodo} primary={true} label="Add"/>

          </form>
        </div>
        <div>
        
        <ReactTable data={this.state.todos}    
        columns={columns} 
        sortable='true'
        filterable='true'
        defaultPageSize='10' /> 

        </div>          
      </div>    
    );
  }
}

export default App;
