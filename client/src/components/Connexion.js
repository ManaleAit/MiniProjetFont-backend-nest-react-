import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import {Redirect} from "react-router-dom";
import Axios from "axios";
export default class Connexion extends React.Component{

    constructor(){
        super()
        let loggedIn = false
       
        const token = localStorage.getItem("token")
        if(token) loggedIn = true

        this.state = {
            massar: "",
            email:"",
            password: "",
            loggedIn,
            error: ""
        }
        this.onChange =  this.onChange.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
    }

    
    onChange(ev){
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    responseGoogle = (res) => {
        console.log(res.profileObj.email);
        const student=Axios.get("http://localhost:4000/etuds/getbyemail/"+res.profileObj.email).then(
            resp=>{
                console.log(resp);
                this.setState({
                 massar: resp.data.massar,
                 email:resp.data.email,
                 password: resp.data.password,
                })
                this.formSubmit();
            }
        );
        
       }
 
    async formSubmit(ev){
        localStorage.setItem("massar",this.state.massar)
        if(ev){
            ev.preventDefault()
        }
        
        const {massar,email, password} = this.state
        try {
            const token = await Axios.post("http://localhost:4000/etuds/signin", {massar, email,password})
            localStorage.setItem("token", token)
            localStorage.setItem("nbVisite","0")
            
            this.setState({
                loggedIn: true
              
            })

            
        } catch (err) {
            this.setState({
                error: err.message
            })

            

            
        }

         if(this.state.loggedIn === false){
             alert('le mot de passe est incorrect');
             
         }
        

    }

  

    render() {
        if(this.state.loggedIn === true){
           // localStorage.setItem("massar",this.state.massar)
            return <Redirect to="/App2" />
      
        }
        return (
          
            <div className="register-photo" style ={{backgroundColor:'white'}}>
               
            <div className="form-container"  >
                

                <img src={require('../images/index.jpg')} class="logo"/>
               <div class="sizeDIV">
                <form onSubmit={this.formSubmit}   >
                    <h2 className="text-center"><strong  style={{color:'#054663'}}>Se connecter</strong></h2>
                    <div className="form-group">
                    <input type="text" placeholder="massar" value={this.state.massar} onChange={this.onChange} name="massar"   className="form-control" /><br></br>                    </div>
                    <div className="form-group">
                    <input type="text" placeholder="email" value={this.state.email} onChange={this.onChange} name="email"   className="form-control"/><br></br>
                    </div>
                    <div className="form-group">
                    <input type="password" placeholder="password" value={this.state.password} onChange={this.onChange} name="password"  className="form-control" />
                    </div>
                 

             
                <br></br><input type="submit"   value="Connexion"  className="btn  btn-dark btn-block "  style={{backgroundColor:'#054663'}}  />
              
                    <br></br>
                    <div style={{marginLeft:50}}>
                    <GoogleLogin
                     clientId="455721042123-9trboheb9utib5npgb42eruv5h7qt2cf.apps.googleusercontent.com"
                     buttonText="Connect with google"
                     onSuccess={this.responseGoogle}
                     onFailure={this.responseGoogle}
                     signedIn={true}
                     cookiePolicy={'single_host_origin'}
                     />
                 
                    </div>
                   
                    <a className="already" style={{marginTop:20}} href="/inscription"> vous avez pas de compte? Inscrivez-vous ici</a>
                </form>
                </div>
            </div>
           
        
            </div>

           

        
        )
    }
}
