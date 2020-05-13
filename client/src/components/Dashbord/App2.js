import React, { Component } from 'react'

import Footer from './Footer'
import Menu from './Menu'
import Content from './Content'
import Axios from "axios";

export default class App2 extends Component {
  constructor(){
    super()
  //  window.setTimeout('location.reload()', 3000);
 // window.location.reload(true);
	

  }

  render() {


    if(localStorage.getItem('nbVisite')==="0"){
      localStorage.setItem("nbVisite","1")
      window.location.reload(true);

    }
    return (
      <div>
   
        <Menu/>

        <Content/>
        
        <Footer/>

        
      </div>
    )
  }
}
