import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
export class Fb extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoggedin : false
    }
  }
  responseFacebook=(response)=>{
    console.log(response);
    this.setState({
      isLoggedin : true
    })
  }
  render() {
    return (
      this.state.isLoggedin ? 'Home' : 
      (<div>
        <FacebookLogin
    appId="1193468328058792"
    autoLoad={true}
    fields="name,email,picture"
    // onClick={componentClicked}
    callback={this.responseFacebook} />
      </div>)
    )
  }
}

export default Fb