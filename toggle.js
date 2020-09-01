import React,{Component} from 'react'

class Toggle extends Component {
  constructor(props){
    super(props)
    this.state = {
      isToggleOn: true
    }
      // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState((state)=>{
      const obj = {isToggleOn:!state.isToggleOn}
      return obj
    })
  }
  render(){
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}
export default Toggle