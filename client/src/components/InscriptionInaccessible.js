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

export default class InscriptionInaccessible extends React.Component{
  
    

  render() {
  return (
    <div>
     
          <img  src={require('../images/inaccessible.png')} style={{width:100,height:100,marginLeft:550,marginTop:300}}/>
          <p style={{color:'red', width:'50%',marginLeft:450,marginTop:220}} > L'Inscription et la re-inscription n'est pas accessible pour le mement</p>
     
  
    </div>
  );
}

}

