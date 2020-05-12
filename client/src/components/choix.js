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

export default class choix extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
   
    note:0,
    classement:0,

  
    choixFilere1:0,

    choixFilere2:0,

    choixFilere3:0,
    
    choixFilere4:0

    }
    }

    submit(){
      const massar=localStorage.getItem("massar");
      let data=this.state;
      fetch('http://localhost:4000/etuds/'+massar+'/update', {
        method: 'PUT',
        headers:
        {
         "Content-Type":"application/json",
         "Accept":"application/json",

        },
        body:JSON.stringify(data)

    
    });
      alert(('votre demande est bien envoyer'));
  
  }


  render() {
  return (
    <div>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size:60 ,
        }}
        
   
      >

            <h5 style={{margin:'50px 340px',color:'#00001a',marginLeft:'450px'}}>Formulaire de Choix De Filière :</h5>

        <Form.Item label="La Note :">
         <Input type="text"  placeholder="Votre  note"  value={this.state.note}   onChange={(data)=>{this.setState({note:data.target.value})}} />
        </Form.Item>
        <Form.Item label="Le classement :">
         <Input type="text"  placeholder="Votre  classement"    value={this.state.classement}   onChange={(data)=>{this.setState({classement:data.target.value})}} />
        </Form.Item>
        <Form.Item label="Choix 1 :">
          
    
          <select name="type_bac" className="form-control" value={this.state.choixFilere1}   onChange={(data)=>{this.setState({choixFilere1:data.target.value})}}>
                        <option value="0">---Le premier choix---</option>
                        <option value="1">Génie Informatique</option>
                        <option  value="2">Génie Industriel</option>
                        <option value="3">GPMC</option>
                        <option value="4">Reseau Telecom </option>
          </select>

        </Form.Item>

        <Form.Item label="Choix 2 :">
        <select name="type_bac" className="form-control" value={this.state.choixFilere2}   onChange={(data)=>{this.setState({choixFilere2:data.target.value})}}>
                        <option value="0">---Le deuxiem choix---</option>
                        <option value="1">Génie Informatique</option>
                        <option  value="2">Génie Industriel</option>
                        <option value="3">GPMC</option>
                        <option value="4">Reseau Telecom </option>
          </select>
        </Form.Item>

        <Form.Item label="Choix 3 :">
        <select name="type_bac" className="form-control" value={this.state.choixFilere3}   onChange={(data)=>{this.setState({choixFilere3:data.target.value})}}>
                        <option value="0">---Le troisieme choix---</option>
                        <option value="1">Génie Informatique</option>
                        <option  value="2">Génie Industriel</option>
                        <option value="3">GPMC</option>
                        <option value="4">Reseau Telecom </option>
          </select>
        </Form.Item>


        <Form.Item label="Choix 4 :">
        <select name="type_bac" className="form-control" value={this.state.choixFilere4}   onChange={(data)=>{this.setState({choixFilere4:data.target.value})}}>
                        <option value="0">---Le quatrieme choix---</option>
                        <option value="1">Génie Informatique</option>
                        <option  value="2">Génie Industriel</option>
                        <option value="3">GPMC</option>
                        <option value="4">Reseau Telecom </option>
          </select>
        </Form.Item>

        

        
        
       
        <Form.Item label="">
          <Button type='dashed' style={{float:'right', background:'#00001a',color:'white',margin:'10px 2px', width:'50%'}}   onClick={()=>{this.submit()}}>Valider votre choix</Button>
        </Form.Item>
    
      </Form>
    </div>
  );
}

}

