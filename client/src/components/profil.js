import React, { Component, useState, state } from 'react';
import '../App.css';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import {
  MailOutlined,
  UserOutlined,
  ReloadOutlined,
  LogoutOutlined,
  ScheduleOutlined,
  FilePdfOutlined,
  SecurityScanTwoTone,
} from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import {
  Cricketer,
  ODICareer,
  Batting,
  Bowling,
  TestCareer,
} from './Cricketer';

import Axios from 'axios';

import { Drawer, Skeleton } from 'antd';

export default class profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: 'default_user.jpg',
    };
  }
  async componentDidMount() {
    const massar = localStorage.getItem('massar');
    const res1 = await Axios.get('http://localhost:4000/etuds/' + massar);

    const idfil = res1.data.id_filiere;

    const formassar = res1.data.massar;
    localStorage.setItem('formassar', formassar);
    const lastname_fr = res1.data.lastname_fr;
    localStorage.setItem('lastname_fr', lastname_fr);
const nationalite = res1.data.nationalite;
    localStorage.setItem('nationalite', nationalite);

    const cin = res1.data.cin;
    localStorage.setItem('cin', cin);
    const email = res1.data.email;
    localStorage.setItem('email', email);
    this.state.photo = res1.data.photo;
    localStorage.setItem('photo', res1.data.photo);
    const address = res1.data.address;
    localStorage.setItem('address', address);
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
    const adresse_parent = res1.data.adresse_parent;
    localStorage.setItem('adresse_parent', adresse_parent);
    const type_Bac = res1.data.type_Bac;
    localStorage.setItem('type_Bac', type_Bac);
    const annee_Bac = res1.data.annee_Bac;
    localStorage.setItem('annee_Bac', annee_Bac);
    const mention = res1.data.mention;
    localStorage.setItem('mention', mention);
    const lycee = res1.data.lycee;
    localStorage.setItem('lycee', lycee);
    const niveau = res1.data.niveau;
    localStorage.setItem('niveau', niveau);
const confirmEmail= res1.data.confirmEmail;
localStorage.setItem('confirmEmail',confirmEmail);
    const res2 = await Axios.get('http://localhost:4000/filieres/' + idfil);

    const fill = res2.data.nom_filiere;
    localStorage.setItem('fill', fill);

    //
  }

  render() {
    const { Content } = Layout;
    var visible = true;

    return (
      <div>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <Cricketer
              name={localStorage.getItem('lastname_fr')}
              Filière={localStorage.getItem('fill')}
              avatarSrc={require(`@../../../uploads/${this.state.photo}`)}
            >
              <TestCareer CNE={localStorage.getItem('formassar')}>
                <Bowling
                  Niveau={localStorage.getItem('niveau')}
                  CIN={localStorage.getItem('cin')}
                />
              </TestCareer>
            </Cricketer>
          </div>
        </Content>

        <div style={{ width: 600, marginLeft: 600, background: '#fff' }}>
          <div style={{ padding: 10, background: '#00001a', color: 'white' }}>
            <center>
              <h4 style={{ color: '#09d3ac' }}>Informations personnelles :</h4>
            </center>
            <p>MASSAR ou CNE : {localStorage.getItem('formassar')} </p>
            <p>CIN: {localStorage.getItem('cin')} </p>
            <p>Adresse:{localStorage.getItem('address')} </p>
            <p>téléphone : {localStorage.getItem('telephone')} </p>
            <p>email:{localStorage.getItem('email')} </p>
          </div>
          <br />

          <div style={{ padding: 10, background: '#00001a', color: 'white' }}>
            <center>
              <h4 style={{ color: '#09d3ac' }}>Informations des parents :</h4>
            </center>
            <p>Nom du pére : {localStorage.getItem('nom_Prenom_Pere')} </p>
            <p>Profession : {localStorage.getItem('profession_Pere')}</p>
            <p>Nom de la mére: {localStorage.getItem('nom_Prenom_mere')} </p>
            <p>Profession : {localStorage.getItem('profession_mere')} </p>
            <p>adresse des parents: {localStorage.getItem('adresse_parent')}</p>
          </div>

          <br />

          <div style={{ padding: 10, background: '#00001a', color: 'white' }}>
            <center>
              <h4 style={{ color: '#09d3ac' }}>
                Informations du baccalauréat :
              </h4>
            </center>
            <p>Type du bac: {localStorage.getItem('type_Bac')} </p>
            <p>Année du bac : {localStorage.getItem('annee_Bac')} </p>
            <p>Mention du Bac: {localStorage.getItem('mention')} </p>
            <p>Lycée du bac: {localStorage.getItem('lycee')} </p>
          </div>
        </div>
      </div>
    );
  }
}
