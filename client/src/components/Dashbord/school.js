import React, { Component } from 'react';
import ensa1 from './ensa1.jpg';
import ensa2 from './ensa2.png';
import univer from './univer.png';
import './school.css'

export default class school extends Component {
    render() {
        return (
    <div>
   <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <h1> Informations Importantes</h1>
    <ol className="breadcrumb">
      <li className="active">Important!</li>
    </ol>
  </section>
  {/* Main content */}
  <section className="content">
   
    <div className="row">
      <div className="col-md-6">
        <div className="box box-default">
          <div className="box-header with-border">
            <i className="fa fa-warning" />
            <h3 className="box-title">Alerts</h3>
          </div>
          {/* /.box-header */}
          <div className="box-body">

          <div className="alert alert-success alert-dismissible">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
              <h4><i className="icon fa fa-check" /> Information</h4>
               C'est l'espace étudiant pour l'Ecole Nationale des Sciences appliquées de Safi ou 
               vous faites la ré-inscription dans chaque début d'année
            </div>
            <div className="alert alert-danger alert-dismissible">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
              <h4><i className="icon fa fa-ban" /> Alert!</h4>
              veillez respecter le délai de ré-inscription, et n'oubliez pas de télécharger votre reçu à la fin.
            </div>
            <div className="alert alert-info alert-dismissible">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
              <h4><i className="icon fa fa-info" /> Information</h4>
              Les étudiants de CP2 doivent remplir leur choix de filières.
            </div>
            <div className="alert alert-warning alert-dismissible">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
              <h4><i className="icon fa fa-warning" /> Alert!</h4>
              veillez respecter le délai pour remplir votre choix de filière.
            </div>
           
          </div>
          {/* /.box-body */}
        </div>
        {/* /.box */}
      </div>
      {/* /.col */}

      
      <div className="col-md-6">
         
        <div className="box box-solid">
          <div className="box-header with-border">
            <h3 className="box-title">ENSA SAFI</h3>
          </div>

          <div class="heig">
          {/* /.box-header */}
          <div className="box-body">
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                <li data-target="#carousel-example-generic" data-slide-to={1} className />
                <li data-target="#carousel-example-generic" data-slide-to={2} className />
              </ol>
              <div className="carousel-inner">

                 <div className="item active">
                    <div className="imgg">
                  <img src={ensa2}  alt="Second slide" height="345px" width="100%" /> </div>
                  <div className="carousel-caption">
                    ENSA SAFI
                  </div>
                </div>
                
              </div>
              <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                <span className="fa fa-angle-left" />
              </a>
              <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                <span className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    </div>
  </section>

</div>
 
           </div>
        )
    }
}
