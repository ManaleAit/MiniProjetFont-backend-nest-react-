import React ,{Component } from "react";
import {Route,Redirect} from "react-router-dom";


 class Logout extends Component{

    constructor(){
        super()
        // token remove
        localStorage.removeItem("token")
        localStorage.removeItem("massar")

        localStorage.removeItem("formassar");
        localStorage.removeItem("lastname_fr");

        localStorage.removeItem("fil");

        localStorage.removeItem("fill"); 

        localStorage.removeItem("cin"); 

        localStorage.removeItem("email"); 

        localStorage.removeItem("address"); 

 localStorage.removeItem("telephone"); 

 localStorage.removeItem("nom_Prenom_Pere"); 

 localStorage.removeItem("profession_Pere"); 

 localStorage.removeItem("nom_Prenom_mere"); 

 localStorage.removeItem("profession_mere");  
 
 localStorage.removeItem("adresse_parent"); 

 localStorage.removeItem("type_Bac");  

 localStorage.removeItem("annee_Bac");  

 localStorage.removeItem("mention");

 localStorage.removeItem("lycee"); 

 localStorage.removeItem("niveau"); 

    }

   
    render(){
        
        return <Redirect to="/connexion" />
    }
}

export default  Logout;