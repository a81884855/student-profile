import React from 'react';
import Grades from './grades';
import { Container, Button } from 'react-bootstrap';

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
      <Container className="student" style={{ width: display ? "100%" : "99%"}}>
        <img src={pic} />
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
        <Button 
          variant="info"
          className="text-center"
          onClick={this.hideHandle.bind(this)}
          >{display ? "-" : "+"}</Button>
    </Container>
    )
  }
}

export default Student;