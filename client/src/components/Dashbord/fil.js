import React, { Component } from 'react';
import './fil.css';

export default class fil extends Component {
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
      alert(('votre demande est bien envoyée'));
  
  }




    render() {
        return (


            <div className='hei'>
            <div className="content-wrapper">
           
            <section className="content-header">
    <h1  style={{color:'#054663'}}> Choix de filière :</h1>
    <ol className="breadcrumb">
      <li className="active">Ouvert pour les 2ème année cycle préparatoire!</li>
    </ol>
  </section>

       <div className="box box-info">

  <form className="form-horizontal">

    <div className="box-body"   style={{marginLeft:150}}>

   
    <div className="form-group">
        <label htmlFor="La Note" className="col-sm-2 control-label">La Note :</label>
        <div className="col-sm-10">
         <input  type="text"  className="form-control"  placeholder="Votre note"  value={this.state.note} onChange={(data)=>{this.setState({note:data.target.value})}}/>
        </div>
      </div>



    <div className="form-group">
        <label htmlFor="Classement" className="col-sm-2 control-label">Classement :</label>
        <div className="col-sm-10">
         <input  type="text"  className="form-control"  placeholder="Votre classement" value={this.state.classement}  onChange={(data)=>{this.setState({classement:data.target.value})}}/>
        </div>
      </div>


      <div className="form-group">
        <label className="col-sm-2 control-label">Choix1</label>
        <div className="col-sm-10">
          <select className="form-control" id="choix1" value={this.state.choixFilere1} onChange={(data)=>{this.setState({choixFilere1:data.target.value})}}>
          <option value="0" selected>le premier choix</option>
          <option value="1">Génie Informatique</option>
          <option value="2">Génie Industriel</option>
          <option value="3">GPMC</option>
          <option value="4">Reseau Telecom</option>
          </select>
        </div>
      </div>


      <div className="form-group">
        <label className="col-sm-2 control-label">Choix2 :</label>
        <div className="col-sm-10">
        <select className="form-control" id="choix2" value={this.state.choixFilere2}   onChange={(data)=>{this.setState({choixFilere2:data.target.value})}}>
        <option value="0" selected>le deuxième choix</option>
          <option value="1">Génie Informatique</option>
          <option value="2">Génie Industriel</option>
          <option value="3">GPMC</option>
          <option value="4">Reseau Telecom</option>
          </select>
        </div>
      </div>


      <div className="form-group">
        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Choix3 :</label>
        <div className="col-sm-10">
        <select className="form-control" id="choix3"  value={this.state.choixFilere3}   onChange={(data)=>{this.setState({choixFilere3:data.target.value})}}>
          <option value="0" selected>le troisième choix</option>
          <option value="1">Génie Informatique</option>
          <option value="2">Génie Industriel</option>
          <option value="3">GPMC</option>
          <option value="4">Reseau Telecom</option>
          </select>
        </div>
      </div>



      <div className="form-group">
        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Choix4 :</label>
        <div className="col-sm-10">
        <select className="form-control" id="choix4"  value={this.state.choixFilere4}   onChange={(data)=>{this.setState({choixFilere4:data.target.value})}}>
          <option value="0" selected>le dernier choix</option>
          <option value="1">Génie Informatique</option>
          <option value="2">Génie Industriel</option>
          <option value="3">GPMC</option>
          <option value="4">Reseau Telecom</option>
          </select>
        </div>
      </div>



    </div>
 
    <div className="box-footer">
      <button type="reset" className="btn btn-default text-white  bg-primary">Annuler</button>
      <button type='dashed' className="btn btn-info pull-right  bg-primary" onClick={()=>{this.submit()}}>Envoyer</button>
    </div>
    
  </form>
</div>
</div>
</div>

          
        )
    }
}