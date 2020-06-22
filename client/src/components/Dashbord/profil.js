import React, { Component } from 'react'

export default class profil extends Component {
   
    render() {
     
        return (
 
  <div className="content-wrapper" style={{'min-Height': 8000}}>
  <div>
  <section className="content-header">
    <h1  style={{color:'#054663'}}> Mon profil</h1>
    <ol className="breadcrumb">
      <li className="active">Mes informations !</li>
    </ol>
  </section>
  <br/>
    {/* Main content */}
    <section className="content">
      <div className="row">
        <div className="col-md-6">
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Informations personnelles</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td> <span className="badge bg-yellow">Code MASSAR</span></td>
                    <td>  {localStorage.getItem('massar')}</td>
                    
                  </tr>
                  <tr>
                    <td> <span className="badge bg-yellow">CIN</span></td>
                    <td>  {localStorage.getItem('cin')}</td>
                    
                  </tr>
                  <tr>
                    <td><span className="badge bg-yellow">Nom et prénom</span></td>
                    <td>  {localStorage.getItem('lastname_fr')}    {localStorage.getItem('firstname_fr')}</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-yellow">Adresse</span></td>
                    <td>  {localStorage.getItem('address')}</td>
                  </tr>
                  <tr>
                     <td><span className="badge bg-yellow">nationalite</span></td>
                    <td>  {localStorage.getItem('nationalite')}</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-yellow">Téléphone</span></td>
                    <td>  {localStorage.getItem('telephone')}</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-yellow">academie</span></td>
                    <td>  {localStorage.getItem('academie')}</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-yellow">Email</span></td>
                    <td>  {localStorage.getItem('email')}</td>
                  </tr>

                </tbody></table>
            </div>
           
          </div>

          {/* /.box */}   
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Diplome obtenu</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body no-padding">
              <table className="table table-condensed">
             
                <tbody>
                  <tr>
                    <td><span className="badge badge-danger">Type du diplome</span></td>
                    <td>{localStorage.getItem('diplomePrecedent')}</td>
                    </tr>
               
                  <tr>
                    <td><span className="badge badge-danger">Mention</span></td>
                    <td>{localStorage.getItem('mention')}</td>
                    </tr>
                    <tr>
                    <td><span className="badge badge-danger">Etablissment</span></td>
                    <td>  {localStorage.getItem('etablissement')}</td>
                  </tr>

                </tbody></table>
            </div>
            
          </div>
        </div>


        <div className="col-md-6">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Informations des parents</h3>
              
            </div>
            {/* /.box-header */}
            <div className="box-body no-padding">
              <table className="table">
                <tbody>
                  <tr>
                    <td><span className="badge bg-blue">Nom du pére</span></td>
                    <td> {localStorage.getItem('nom_Prenom_Pere')}</td>
                    </tr>

                    <tr>
                    <td><span className="badge bg-blue">Profession du pére</span></td>
                    <td> {localStorage.getItem('profession_Pere')}</td>
                    </tr>
                    

                    <tr>
                    <td><span className="badge bg-blue">Nom de la mère</span></td>
                    <td> {localStorage.getItem('nom_Prenom_mere')}</td>
                    </tr>

                    
                    <tr>
                    <td><span className="badge bg-blue">Profession de la mère</span></td>
                    <td> {localStorage.getItem('profession_mere')}</td>
                    </tr>

                    
                    <tr>
                    <td><span className="badge bg-blue">Adresse des parents</span></td>
                    <td> {localStorage.getItem('adresse_parent')}</td>
                    </tr>
                  
                 
                </tbody></table>
            </div>
            {/* /.box-body */}
          </div>
          {/* /.box */}

          <div className="box">
            <div className="box-header">
              <h3 className="box-title">baccalauréat</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body no-padding">
              <table className="table table-condensed">
                <tbody>
                  <tr>
                    <td><span className="badge bg-green">Type du bac</span></td>
                    <td>  {localStorage.getItem('type_Bac')}</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-green">Année du bac</span></td>
                    <td>  {localStorage.getItem('annee_Bac')}</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-green">Mention du bac</span></td>
                    <td>  {localStorage.getItem('mention')}</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-green"> Lycée du bac</span></td>
                    <td>  { localStorage.getItem("lycee")}</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-green"> Année du Bac</span></td>
                    <td>  { localStorage.getItem("annee_Bac")}</td>
                  </tr>
                
                </tbody></table>
            </div>
          </div>
     
          
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Filiere</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body no-padding">
              <table className="table table-condensed">
             
                <tbody>
                  <tr>
                    <td><span className="badge badge-secondary">nom filiere</span></td>
                    <td>{localStorage.getItem('fill')}</td>
                    </tr>
               
                 </tbody></table>
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
