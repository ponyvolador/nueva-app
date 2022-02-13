
import  React, {useState} from 'react';
import './App.css';
import imagen from "./tech-data-logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap';

function App () {
  const [dropdown, setDropdown,]=useState(false);

  const  abrirCerrarDropdown=()=>{
setDropdown(!dropdown);
}
return (
<div className= "fondo" >
 <Dropdown  isOpen={dropdown}  toggle={abrirCerrarDropdown}>
<DropdownToggle>
  Menu 
</DropdownToggle>
<DropdownMenu>
   <DropdownItem> Dcomuments</DropdownItem>
   <DropdownItem> Trainings</DropdownItem>
   <DropdownItem> Reports</DropdownItem>
   <DropdownItem> Search</DropdownItem>
</DropdownMenu>

</Dropdown>

<h1> QMS TECH DATA</h1>
<img src={imagen} className= "im"/>
<br/>
</div>

);
}
export  default App;

