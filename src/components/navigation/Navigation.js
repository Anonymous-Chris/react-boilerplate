import React from 'react';
import {Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import logo from '../../imgs/chris.png';
class Navigation extends React.Component{

    render(){
        return(
        <div className="row header pl-3">
            <div className="" style={{display:'inherit'}}><img src={logo} alt="logo" className="home_logo" onClick={()=>{document.location.href="/"}}></img>
            <h4 className="text-left pt-3">Test</h4>
            </div>

            <Navbar className="navigation ml-3 pt-3">
            <NavLink className="ml-1" to="/home"  activeStyle={{ color: '#rgb(40, 139, 226)' }}>Home</NavLink>   
            <NavLink className="nav ml-1" to="/home1"  activeStyle={{ color: '#rgb(40, 139, 226)' }}>Home 1</NavLink> 
            </Navbar>

        </div>
        );
    }
}
 
export default Navigation;

