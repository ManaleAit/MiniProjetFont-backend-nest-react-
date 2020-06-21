import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import '../App.css';

export default class InscriptionInaccessiblePage1 extends React.Component{
  
    

  render() {
  return (
    <div>
     
          <img  src={require('../images/inaccessible.png')} style={{width:100,height:100,height:80,marginLeft:-200,marginTop:200}}/>
          <p style={{color:'red', width:'50%',marginLeft:300,marginTop:120}} > L'Inscription et la re-inscription n'est pas accessible pour le mement</p>
     
  
    </div>
  );
}

}

