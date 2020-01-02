import React, { Component } from 'react';
import { render } from 'react-dom';

import Hello from './Hello';
import CustomModal from './Components/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="container">
        <div className='main'>
          <Hello name={this.state.name} />
          <CustomModal/>
        </div>
        <div className='printable'>Some static content</div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
