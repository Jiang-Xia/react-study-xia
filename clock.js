import React, { Component } from 'react';

class clock extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
  }
  // 组件已经被渲染到 DOM 中
  componentDidMount() {
    this.timerId = setInterval(()=>{
      this.tick()
    },1000)
  }
  // 组件被卸载
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick(){
    this.setState({
      date:new Date()
    })
  }
  render(){
    return (
       <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
export default clock