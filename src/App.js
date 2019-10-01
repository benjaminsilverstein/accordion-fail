import React, { Component } from 'react';
import Accordion from './state-drills'

const sections = [
  {title: 'Section 1', content: 'lorem ipsum dolor amet occupy green juice godard hashtag aesthetic meditation vaporware. Raclette yr you probably havent heard of them, tilde viral leggings copper mug aesthetic keytar actually'},
  {title: 'Section 2', content: 'before they sold out brooklyn banh mi flannel twee helvetica. Letterpress cold-pressed stumptown echo park freegan, fixie everyday carry beard woke photo booth ramps banjo mumblecore taiyaki'},
  {title: 'Section 3', content: 'Seitan scenester air plant put a bird on it leggings four loko hot chicken woke. Pitchfork asymmetrical messenger bag gluten-free kale chips everyday carry farm-to-table organic vexillologist'},
]

class App extends Component {
  state = {  }
  render() { 
    return (  
      <Accordion sectionInfo={sections} />
    );
  }
}
 
export default App;