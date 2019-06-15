import React from 'react';
import Axios from 'axios';
import Student from './student';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      students: [],
      store: [],
      targetName: "",
      targetTag: "",
    }
  }

  componentDidMount(){
    Axios.get("https://www.hatchways.io/api/assessment/students")
    .then((data)=>{
      this.setState({
        students: data.data.students,
        store: data.data.students,
      })
    })
  }

  searchByName(e){
    const targetName = e.target.value.toLowerCase();
    this.setState({
      targetName,
    }, ()=> {this.filter()})
  }

  searchByTag(e){
    const targetTag = e.target.value.toLowerCase();
    this.setState({
      targetTag,
    }, ()=> {this.filter()})
  }

  filter(){
    const { store, targetName, targetTag } = this.state;
    const filteredByName = store.filter((student) => (student.firstName + student.lastName).toLowerCase().includes(targetName));
    if(!targetTag.length || !filteredByName.length){
      this.setState({
        students: filteredByName
      })
    }else {
      let students = [];
      for(let i=0; i < filteredByName.length; i += 1){
        if(filteredByName[i].tags){
          for(let tag of filteredByName[i].tags){
            if(tag.includes(targetTag)){
              students.push(filteredByName[i])
              continue
            }
          }
        }
        if(i === filteredByName.length - 1){
          this.setState({
            students
          })
        }
      }
    }

  }

  addTags(tag, id){
    const { store } = this.state;
    store[id-1]["tags"] = store[id-1]["tags"] ? store[id-1]["tags"] : [];
    store[id-1]["tags"].push(tag);
    this.setState({
      store
    })
  }

  render(){
    const { students } = this.state;
    return(
      <div id="background">
        <div id="board">
          <input 
            type="text" 
            className="search"
            placeholder="Search by name" 
            onChange={this.searchByName.bind(this)}></input>
          <input 
            type="text" 
            className="search"
            placeholder="Search by tags" 
            onChange={this.searchByTag.bind(this)}></input>
          {students.map((student) => 
            <Student 
              data={student} 
              key={student.id}
              addTags={this.addTags.bind(this)}
            />)}
        </div>
      </div>
    )
  }
}

export default App;