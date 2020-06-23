import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Connexion  from "./components/Connexion";
import {BrowserRouter as Router,Route,Switch }from 'react-router-dom';
import RegistrationForm  from "./components/RegistrationForm";
import StudentDashboard from "./components/StudentDashboard";
import {Link} from "react-router-dom";
import Logout from './components/Dashbord/Logout';
import EspaceSudent from './components/EspaceSudent';
import App2 from './components/Dashbord/App2';
import profil from './components/profil';
import school from './components/school';
import choix from './components/choix';
import  reinscriptionForm  from './components/reinscriptionForm';
import  choixInacessible     from './components/choixInaccessible';
import  InscriptionInaccessible from './components/InscriptionInaccessible';
import  InscriptionInaccessiblePage1 from './components/InscriptionInaccessiblePage1';
import {Checkout} from './components/Inscription/Checkout'
import {Checkout2} from './components/Re-Inscription/Checkout'
const nowDate = Date.now();
const  dateInsc = new Date('2020-07-20');
function App() {
  return (


  
    <div >
<Router>
  
  <div >
    <nav className="navbar navbar-dark navbar-expand-md "  style={{backgroundColor:'#054663'}}>
      <div className="container">

    <span > <img src={require('./images/wlogo.png')}  style={{width:60 ,marginLeft:-150}} /><span className="text-white" style={{marginLeft:50}}  >

Fix: (+212)656200007</span> <span  className="text-white" style={{marginLeft:50}}>Email : ensasafi@gmail.com</span></span>
  
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
             <Link className="btn  action-button text-white" to={"/Connexion"}>Se Connecter</Link>
            </li>
            <li className="nav-item">
              <Link className="btn  action-button text-white" to={"/inscription"}>Inscription-En ligne</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
      
    <Switch>
    {nowDate <dateInsc
                    &&
      <Route exact path="/inscription" render={()=>(
             <div className="StepForm">
           
               <Checkout></Checkout>
           </div>
        
        )}>

      </Route>
    }
    {nowDate >dateInsc
                    &&
              
          
              <Route path="/inscription" component={InscriptionInaccessiblePage1}></Route>

              }   
   
     
      <Route path="/dash" component={StudentDashboard}></Route>
 
   
    </Switch>
 
    <Switch>
   
      <Route path= "/logout" component={Logout} ></Route>

    </Switch>
    <Switch>
   
    <Route path="/connexion" component={Connexion}></Route>

    </Switch>
    <Switch>
   
   <Route path="/EspaceSudent" component={EspaceSudent}></Route>

   </Switch>
   <Switch>
   
   <Route path="/profil" component={profil}></Route>

   </Switch>
   <Switch>
   
   <Route path="/school" component={school}></Route>

   </Switch>
   <Switch>
   
   <Route path="/choix" component={choix}></Route>

   </Switch>


   <Switch>
  
   <Route path="/reinscriptionForm" component={Checkout2}></Route>
 
   </Switch>
   <Switch>
   
   <Route path="/choixInacessible" component={choixInacessible}></Route>

   </Switch>

   <Switch>
   
   <Route path="/App2" component={App2}></Route>

   </Switch>
   <Switch>
   
   <Route path="/InscriptionInaccessible" component={InscriptionInaccessible}></Route>

   </Switch>
   </div>
    </Router>

    </div>
   


    
  );
}


export default App;
