import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Welcome from './welcome';
import Tick from './tick';
import Comment from './comment';
import Clock from './clock';
import Toggle from './toggle';
import LoginControl  from './loginControl ';

/* 
   react hook
 */
import Hook  from './hook ';


import './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      comment:{
        name:'xia',avatarUrl:''
      }
    };
  }

  render() {
    return (
      <div>
        <h1>============~hook~==============</h1>
        <Hook />
        <h1>============~hook~==============</h1>
        <br/>
        <br/>
        <br/>
        <Welcome name={this.state.name} />
        <Welcome name="Sara" />
        <h3>==========================</h3>
        <Tick/>
        <Comment author={this.state.comment} 
        text='hello react' date='2020-09-01'/>
        <p>
        <h3>==========================</h3>
        <Clock/>
        <h3>==========================</h3>
        <Clock/>
        <h3>==========================</h3>
        <Toggle />
        <h3>==========================</h3>
         <LoginControl />
        <h3>==========================</h3>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
