import React from 'react';

class Grades extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }

  handleKeyPress(e){
    const { addTags, tags } = this.props;
    const { value, id } = e.target;
    if(e.key === "Enter" && value.length > 0 ){
      addTags(value, id)
      tags.push(value)
      this.setState({
        tags,
      })
      e.target.value = "";
    }
  }

  render(){
    const { grades, display, num } = this.props;
    const { tags } = this.props;
    const tagsBar = tags.map((tag, index)=> <div className="tag" key={index}>{tag}</div>);
    const grade = grades.map((grade,index)=> 
    <p key={index}>Test{index+1}: <span id="grade">{grade}%</span></p>)
    const gradeStyle = {
      display: display ? "block": "none",
    }
    return(
      <div className="grades" style={gradeStyle}>
        { grade } 
        <div className="tagsBar">
          { tagsBar }
        </div>
        <input 
          className="addTags"
          id={num}
          type="text" 
          placeholder="Add a tag" 
          onKeyPress={this.handleKeyPress.bind(this)}
        ></input>
      </div>
    )
  }
}

export default Grades;