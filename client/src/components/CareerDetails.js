import React, { useEffect, useState } from 'react';
import { Drawer, Skeleton } from 'antd';
import useFetchData from './service';

const CareerDetails = ({ player, visible, onClose }) => {

    const [details, setDetails] = useState({});
    const [isLoading, output] = useFetchData('./' + player.replace(' ', '_') + '.json');
   onClose =() => visible(false);

    return (   

    
        <Drawer 
            destroyOnClose
            title={player}
            visible={visible}
            width={640}
            onClose={onClose}
        >
            <Skeleton active loading={isLoading} paragraph={{ rows: 4 }} >
                <div style={{ padding: 10, background:'#00001a',color:'white'}}>
                    <center><h4 style={{color:'#09d3ac'}}>Informations personnelles :</h4></center>
                    <p>MASSAR ou CNE : 15151515 </p>
                    <p>CIN: JI141425 </p>
                    <p>Adresse: N 100 lot ZAYTOUNE CHEMAIA </p>
                    <p>téléphone : 0600000125 </p>
                    <p>email: hafsa.elgarda@gmail.com</p>

                </div>
                  <br/>  

                <div style={{ padding: 10, background:'#00001a',color:'white'}}>
                    <center><h4 style={{color:'#09d3ac'}}>Informations des parents :</h4></center>
                    <p>Nom du pére : Ahmed el garda </p>
                    <p>Profession : Commerçant</p>
                    <p>Nom de la mére: Hakima EL karimi</p>
                    <p>Profession : Sans activitée </p>
                    <p>adresse des parents: N 200 Lot lamiaa SAFI</p>

                </div>

                <br/> 

                <div style={{ padding: 10, background:'#00001a',color:'white'}}>
                    <center><h4 style={{color:'#09d3ac'}}>Informations du baccalauréat :</h4></center>
                    <p>Type du bac: PC </p>
                    <p>Année du bac : 2015 </p>
                    <p>Mention du Bac: bien </p>
                    <p>Lycée du bac: alquods </p>
                   

                </div>

                
            </Skeleton>
        </Drawer>
      
    )
}

export default CareerDetails;