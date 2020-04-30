import React from "react"; 
import styled from "styled-components"; 
import Dropdown from "react-bootstrap/Dropdown"; 

function DropDownA() { 

    return(
    <PlayeraArea className="PlayA-Area">
    <Dropdown>
        <Dropdown.Toggle variant="success" id="player-A">
            Pick Player A 
    </Dropdown.Toggle>
    <Dropdown.Menu className="playerA-dropdown">
    <Dropdown.Item href="#"> Tom Brady </Dropdown.Item>
    <Dropdown.Item href="#"> Aaron Donald </Dropdown.Item>
    <Dropdown.Item href="#"> Drew Brees </Dropdown.Item>
    <Dropdown.Item href="#"> Khalil Mack </Dropdown.Item>
    </Dropdown.Menu>          
    </Dropdown>
    </PlayeraArea> 
    ); 
}


const PlayeraArea = styled.div`
padding: 5rem; 
`

const PlayerbArea = styled.div`
padding: 5rem; 
`

export default DropDownA; 


