import React, { Component } from 'react';
import './state-drills.css'
class Accordion extends Component {
    static defaultProps = {sectionInfo: [] }
    state = { currentButtonIndex: 0  }
    handleButtonClick(index) {
        this.setState({ currentButtonIndex: index })
      }
    render() { 
        const currentButton = this.props.sectionInfo[this.state.currentButtonIndex]
       const buttons = this.props.sectionInfo.map((section, index) => (<div className="container">
            <button key={index} className="button" onClick={() => this.handleButtonClick(index)}>{section.title}</button><div>{currentButton.content}</div></div>
        ))
        return (
           <div>
              {buttons}
              </div>
        )}}
 
export default Accordion;