import React, { Component } from 'react';
import Loader from 'react-loader-spinner'


class Loading extends Component {


  render() {
   
  
     return (
      <Loader 
      type="ThreeDots"
      color="#00BFFF"
      height="100"	
      width="100"
   /> 

     )
  }
}


export default Loading;
