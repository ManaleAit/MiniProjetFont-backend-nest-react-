import React, { Component } from 'react';
import user from './user.png';
import { HashRouter as Router, Route, Link, NavLink,Redirect } from 'react-router-dom';
import Logout from './Logout';
import {Checkout2} from '../Re-Inscription/Checkout'
import Axios from "axios";
export default class Menu extends Component {

  constructor(){
    super()

    let loggedIn = false
    
    const token = localStorage.getItem("token")
    if(token) loggedIn = true
    this.logout = this.logout.bind(this)
    this.state= {
   loggedIn
    }
    let tmp=0;
 
    
}


    logout(){
        this.setState({
            loggedIn: false
        })
       
    }

    async componentDidMount(){
    
    
      const massar = localStorage.getItem('massar');
      const res1 = await Axios.get('http://localhost:4000/etuds/' + massar);
    
      const idfil = res1.data.id_filiere;
    
      const formassar = res1.data.massar;
      localStorage.setItem('formassar', formassar);
      const lastname_fr = res1.data.lastname_fr;
      localStorage.setItem('lastname_fr', lastname_fr);
      const firstname_fr = res1.data.firstname_fr;
      localStorage.setItem('firstname_fr', firstname_fr);
      const cin = res1.data.cin;
      localStorage.setItem('cin', cin);
      const nationalite = res1.data.nationalite;
    localStorage.setItem('nationalite', nationalite);
     const email = res1.data.email;
      localStorage.setItem('email', email);
      this.state.photo = res1.data.photo;
      localStorage.setItem('photo', res1.data.photo);
      const address = res1.data.address;
      localStorage.setItem('address', address);
      const diplomePrecedent = res1.data.address;
      localStorage.setItem('diplomePrecedent',diplomePrecedent);
      
      const adresse_parent = res1.data.adresse_parent;
      localStorage.setItem('adresse_parent', adresse_parent);
    
      const telephone = res1.data.telephone;
      localStorage.setItem('telephone', telephone);
      const nom_Prenom_Pere = res1.data.nom_Prenom_Pere;
      localStorage.setItem('nom_Prenom_Pere', nom_Prenom_Pere);
      const profession_Pere = res1.data.profession_Pere;
      localStorage.setItem('profession_Pere', profession_Pere);
      const nom_Prenom_mere = res1.data.nom_Prenom_mere;
      localStorage.setItem('nom_Prenom_mere', nom_Prenom_mere);
      const profession_mere = res1.data.profession_mere;
      localStorage.setItem('profession_mere', profession_mere);
      const type_Bac = res1.data.type_Bac;
      localStorage.setItem('type_Bac', type_Bac);
      const annee_Bac = res1.data.annee_Bac;
      localStorage.setItem('annee_Bac', annee_Bac);
      const mention = res1.data.mention;
      localStorage.setItem('mention', mention);
      const lycee = res1.data.lycee;
      localStorage.setItem('lycee', lycee);
     const academie= res1.data.academie;
      localStorage.setItem('academie', academie);
      const niveau = res1.data.niveau;
      
      localStorage.setItem('niveau', niveau);
      const confirmEmail= res1.data.confirmEmail;
      localStorage.setItem('confirmEmail',confirmEmail);
      const res2 = await Axios.get('http://localhost:4000/filieres/' + idfil);
    
      const fill = res2.data.nom_filiere;
      localStorage.setItem('fill', fill);
    
    
    }
  
    render() {
    
     
      if(this.state.loggedIn === false){
        return <Redirect to="/logout" />
    }
        return (
<div>
<Router basename="/">
  <aside className="main-sidebar" style={{marginTop:56,backgroundColor:'#272341',height:840}}>
    
    <section className="sidebar" style={{height:840}}>
    
      <div className="user-panel"  style={{marginTop:-40}}>
        <div className="pull-left image">
          <img src={require(`@../../../uploads/${localStorage.getItem('photo')}`)} style={{borderRadius:20,height:50,width:60}}alt="User" />
        </div>
   
        <div className="pull-left info">
        <p style={{color:'white'}}>{localStorage.getItem('lastname_fr')}  {localStorage.getItem('firstname_fr')}</p>
      
          <a href="#" style={{marginBottom:10}}><i className="fa fa-circle text-success" /><span className='text-white'>Online</span> </a>
        </div>
      </div>



      {/* search form */}
      <br></br>
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
          <span className="input-group-btn"  >
            <button type="submit" name="search" id="search-btn" className="btn btn-flat" style={{backgroundColor:'#054663'}}>
              <i className="fa fa-search  text-white" />
            </button>
          </span>
        </div>
      </form>
      {/* /.search form */}




     
      <ul className="sidebar-menu " data-widget="tree">
        <li className="header   text-success ">Bienvenue dans votre espace</li>
        <li className="active treeview menu-open">
          <a href="#" className="text-white">
            <i className="fa fa-dashboard  text-white" /> <span >Dashboard</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="#/school"  className="text-primary"><i className="fa fa-circle-o  text-primary" /> Alerts et informations</a></li>
            
          </ul>

        </li>
        
        <li className="treeview" >
          <a href="#" className="text-white" >
            <i className="fa fa-user  text-white" /> <span>Voir mon profil</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="#/profil"  className="text-primary" ><i className="fa fa-circle-o  text-primary" />  mes informations</a></li>
            
          </ul>
        </li>


       
      
        <li className="treeview">
          <a href="#"  className="text-white">
            <i className="fa fa-table text-white" />
            <span>Ré-Inscription</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
           
          </a>

          <ul className="treeview-menu">
            <li><a href="#/Checkout2" className="text-primary"><i className="fa fa-circle-o text-primary" /> Inscription</a></li>
            
          </ul>
        </li>

        <li className="treeview">
          <a href="#" className="text-white">
            <i className="fa fa-edit text-white"  /> <span>Choix de filière</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>

          <ul className="treeview-menu">
            <li><a href="#/fil" className="text-primary"><i className="fa fa-circle-o text-primary" /> Remplir le formulaire</a></li>
            
          </ul>
        </li>

       
        <li className="treeview">
        <a href="#" className="text-white">
        <i className="fa fa-calendar text-white" /><span >Calendar </span>
        <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
        </a>
        <ul className="treeview-menu">
            <li><a href="#/calend" className="text-primary"><i className="fa fa-circle-o text-primary" /> Afficher le calendrier</a></li>
            
          </ul>
        
        </li>
      
       

        <li className="treeview">
          <a href="#" onClick={this.logout} className="text-white">
            <i className="glyphicon glyphicon-off text-white" /> <span>Déconnexion</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>

          <ul className="treeview-menu">
            <li><a href="#"  onClick={this.logout} className="text-primary"><i className="fa fa-circle-o  text-primary"  /> Se déconnecter</a></li>
            
          </ul>
        </li>
       
   
                 
      </ul>
    </section>
  
  </aside>
  </Router>
</div>

        )
    }
}
