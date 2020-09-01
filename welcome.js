import React, { Component } from 'react';

// 函数写法

function Welcome(props){
  return <h1>Hello, function {props.name}</h1>
}


// es6 写法

// class Welcome extends Component{
//   render(){
//     return <h1>Hello, class {this.props.name}</h1>
//   }
// }

export default Welcome