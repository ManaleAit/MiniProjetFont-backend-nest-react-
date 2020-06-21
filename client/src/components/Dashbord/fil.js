import React, { Component } from 'react';
import './fil.css';

export default class fil extends Component {
    render() {
        return (


            <div className='hei'>
            <div className="content-wrapper">
           
            <section className="content-header">
            <h1  style={{marginLeft:300,color:'#054663'}}>Choix de filière est ouvert pour cycle préparatoire 2</h1>
              <ol className="breadcrumb">
               <li className="active">Filière</li>
              </ol>
            </section>

       <div className="box box-info">

  <form className="form-horizontal">

    <div className="box-body"   style={{marginLeft:150}}>
    <div className="form-group">
        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Classement</label>
        <div className="col-sm-10">
         <input  type="text"  className="form-control"  placeholder="classement"/>
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label">Choix1</label>
        <div className="col-sm-10">
          <select className="form-control" id="choix1">
          <option value="" selected>le premier choix</option>
          <option value="Génie info">Génie info</option>
          <option value="GTR">GTR</option>
          <option value="GPMC">GPMC</option>
          <option value="Génie indus">Génie indus</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword3" className="col-sm-2 control-label">choix2</label>
        <div className="col-sm-10">
        <select className="form-control" id="choix2">
          <option value="" selected>le deuxième choix</option>
          <option value="Génie info">Génie info</option>
          <option value="GTR">GTR</option>
          <option value="GPMC">GPMC</option>
          <option value="Génie indus">Génie indus</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="inputPassword3" className="col-sm-2 control-label">choix3</label>
        <div className="col-sm-10">
        <select className="form-control" id="choix3">
          <option value="" selected>le dernier choix</option>
          <option value="Génie info">Génie info</option>
          <option value="GTR">GTR</option>
          <option value="GPMC">GPMC</option>
          <option value="Génie indus">Génie indus</option>
          </select>
        </div>
      </div>

    </div>
 
    <div className="box-footer">
      <button type="reset" className="btn btn-default text-white  bg-primary">Annuler</button>
      <button type="submit" className="btn btn-info pull-right  bg-primary" >Envoyer</button>
    </div>
    
  </form>
</div>
</div>
</div>

          
        )
    }
}
