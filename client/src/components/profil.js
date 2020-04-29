import React, {Component, useState, state} from 'react';
import '../App.css';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import {MailOutlined, UserOutlined, ReloadOutlined,LogoutOutlined,ScheduleOutlined, FilePdfOutlined, SecurityScanTwoTone} from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Cricketer, ODICareer, Batting, Bowling, TestCareer } from './Cricketer';
import CareerDetails from './CareerDetails';
import user from './user.png';


const { Content } = Layout;
 var visible=true;


function profil () {
   


  
    return(

         <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 580}}>
            
            <Cricketer name='EL GARDA Hafsa' Filière='Génie informatique' avatarSrc={user}>
              <TestCareer CNE='15151515' >
                <Bowling Niveau='4 ème année' CIN='JI141425' />
              </TestCareer>
              <Button type='dashed' style={{float:'right', background:'#00001a',color:'white',margin:'15px 45px'}}> plus d'informations </Button>
            </Cricketer>
          </div>
          <CareerDetails player='EL GARDA HAFSA' visible={visible}/>
        </Content>
           
       
         );
        

        }



   



    export default profil;

