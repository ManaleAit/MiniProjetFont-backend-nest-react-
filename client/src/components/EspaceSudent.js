import React, { useState ,Component } from 'react';
import '../App.css';
import { HashRouter as Router, Route,Redirect, Link, NavLink } from 'react-router-dom';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import {MailOutlined, UserOutlined, ReloadOutlined,LogoutOutlined,ScheduleOutlined, FilePdfOutlined} from '@ant-design/icons';
import  choixInacessible     from './choixInaccessible';
import  InscriptionInaccessible  from './InscriptionInaccessible';
import profil from './profil';
import school from './school';
import choixfil from './choix';
import Logout from './Logout';

import {Checkout2} from './Re-Inscription/Checkout'

const { Header, Footer, Sider, Content } = Layout;

const nowDate = Date.now();
const  dateInsc = new Date('2020-05-20');
const  dateChoix = new Date('2020-05-20');
export default   class EspaceSudent  extends Component {

  constructor(){
    super()
    let loggedIn = false
    
    const token = localStorage.getItem("token")
    if(token) loggedIn = true
    this.logout = this.logout.bind(this)
    this.state= {
   loggedIn
    }
}
    logout(){
        this.setState({
            loggedIn: false
        })
    }
    render(){

        if(this.state.loggedIn === false){
            return <Redirect to="/logout" />
        }
  return (
    <Router basename="/">
    <div  className="Menu">
    <Layout>
    
            <Sider>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
             
            >
            <Menu.Item key='Dashboard' >
              Dashboard of   {localStorage.getItem("massar")}
            </Menu.Item>

              <Menu.Item key='school' >
                
                <span>
                <MailOutlined />
                <span> <Link to="school"  > About School </Link></span>
                </span>
             
            
            </Menu.Item>



              <Menu.Item key='Profil' >
                
                  <span>
                    <UserOutlined />
                    <span> <Link to="prfl" >View profil </Link></span>
                  </span>
               
              
              </Menu.Item>

              <Menu.Item key='inscription' >
                
                  <span>
                  <ReloadOutlined /> 
                    <span> <Link to="/reinscription">Ré-Inscription </Link></span>
                  </span>
               
              
              </Menu.Item>

              <Menu.Item key='reçu' >
                
                 <span>
                    <FilePdfOutlined />
                    <span> <Link to="">Télécharger le reçu </Link></span>
                    </span>
              </Menu.Item>

             
              <Menu.Item key='filière' >
                
              <span>
                    <ScheduleOutlined />
                    <span> <Link to="choix"> Choix De Filières </Link></span>
              </span>
             </Menu.Item>


             <Menu.Item key='logout' >
                
             <span>
                    <LogoutOutlined />
                    
                    <span> <Link onClick={this.logout}>Déconnexion </Link></span>
                  </span>
             </Menu.Item>
              
            </Menu>
          </Sider>

          
          <Layout>
     
            {nowDate <dateInsc
                    &&
              <div className="App"><Route path="/reinscription" component={Checkout2}></Route> </div>
            }
              {nowDate >dateInsc
                    &&
              
          
              <Route path="/reinscription" component={InscriptionInaccessible}></Route>

              }      
              <Route path="/prfl" component={profil}></Route>
              <Route path="/school" component={school}></Route> 



              {nowDate <dateChoix
                    &&
              
              <Route path="/choix" component={choixfil}></Route> 


              
              }

             {nowDate >dateChoix
                    &&
              
          
              <Route path="/choix" component={choixInacessible}></Route>

              }           
              <Route path="/logout" component={Logout}></Route> 
         
          
     
          
          </Layout>
    </Layout>

      <Footer style={{ textAlign: 'center'}}>ENSAS Etudiant Dashboard</Footer>
    </div>
           
    </Router>
  );

             }
            }