import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
  <div>
  <header className="main-header">
    
    <a href="" className="logo">
       <span className="logo-mini"><b>ENSA</b>S</span>
       <span className="logo-lg"><b>Plateforme</b>ENSAS</span>
    </a>
    
    <nav className="navbar navbar-static-top">
    
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
         
          {/* Notifications */}
          <li className="dropdown notifications-menu">
            <a href="fake_url" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-bell-o" />
              <span className="label label-warning">0</span>
            </a>
            <ul className="dropdown-menu">
              <li className="header">You don't have any notification</li>
              <li>
                {/* inner menu: contains the actual data */}
                <ul className="menu">
                </ul>
              </li>
              <li className="footer"><a href="fake_url">View all notifications</a></li>
            </ul>
          </li>
          
          
            
             
          {/* Control Sidebar Toggle Button */}
          <li>
            <a href="fake_url"  alt="logout" data-toggle="control-sidebar"><i className="glyphicon glyphicon-off" /></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</div>

        )
    }
}
