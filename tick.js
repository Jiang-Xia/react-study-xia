import React, { Component } from 'react';

// 函数写法

function tick(){
  const props = {}
  props.date = new Date().toLocaleTimeString()
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is { props.date}.</h2>
    </div>
  );
  setInterval(()=>{
     props.date = new Date().toLocaleTimeString()
    //  console.log(props.date)
  }, 1000);
  return element
}

export default tick