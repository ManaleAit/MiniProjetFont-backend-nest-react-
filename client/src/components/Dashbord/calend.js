import React, { Component} from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './calend.css';


export default class calend extends Component {
    render() {
        return (
          <div className='hei'>
            <div className="content-wrapper">
           
            <section className="content-header">
            <h1>Calendrier</h1>
              <ol className="breadcrumb">
               <li className="active" >Calendrier</li>
              </ol>
            </section>
  
  
            <div>
             <Calendar  className="Calendrier" /> </div>
        
           </div>
           </div>
        
           
        )
    }
}
