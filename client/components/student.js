import React from 'react';
import Grades from './grades';

class Student extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }

  hideHandle(){
    const { display } = this.state;
    this.setState({
      display: !display
    })
  }

  render(){
    const {pic,firstName, lastName, email, company, skill, grades, id} = this.props.data;
    let { tags } = this.props.data;
    tags = tags ? tags : [];
    const { addTags } = this.props;
    const { display } = this.state;
    const average = grades.reduce((prev, curr) => Number(prev) + Number(curr)) / grades.length;
    return(
      <div className="student" style={{ height: display ? "auto" : "25vh" }}>
        <img src={pic}/>
        <div className="studentInfo">
          <h1>{firstName} {lastName}</h1>
          <p>Email: {email}</p>
          <p>Company: {company}</p>
          <p>Skill: {skill}</p>
          <p>Average: {average}</p>
          <Grades 
            grades={grades}
            display={display} 
            addTags={addTags}
            num={id}
            tags={tags}
          />
        </div>
        <button className="hide" onClick={this.hideHandle.bind(this)}>{display ? "-" : "+"}</button>
      </div>
    )
  }
}

export default Student;