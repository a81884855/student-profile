import React from 'react';
import { Row, Button } from 'react-bootstrap';

class Grades extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }

  handleKeyPress(e){
    const { addTags } = this.props;
    const { value, id } = e.target;
    if(e.key === "Enter" && value.length > 0 ){
      addTags(value, id)
      e.target.value = "";
    }
  }

  render(){
    const { grades, display, num } = this.props;
    const { tags } = this.props;
    const tagsBar = tags.map((tag, index)=> 
      <Button 
        className="tag" 
        key={index}
        variant="success"
        >
        {tag}
      </Button>);
    const grade = grades.map((grade,index)=> 
    <p key={index}>Test{index+1}: <span id="grade">{grade}%</span></p>)
    const gradeStyle = {
      display: display ? "block": "none",
    }
    return(
      <div className="grades" style={gradeStyle}>
        { grade } 
        <Row className="tagsBar">
          {tagsBar}
        </Row>
        <input 
          id={num}
          className="addTags"
          type="text" 
          placeholder="Add a tag" 
          onKeyPress={this.handleKeyPress.bind(this)}
        ></input>
      </div>
    )
  }
}

export default Grades;