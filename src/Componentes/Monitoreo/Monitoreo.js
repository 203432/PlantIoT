import { useNavigate, } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./Monitoreo.css"
import Datmon from "../Datmon/Datmon";

function Monitoreo() {       

    const [planta,setPlanta] = useState([])

    useEffect(()=>{
        const getPlanta = () =>{
    fetch('http://192.168.0.25:3002/api/planta')
    .then(res => res.json())
    .then(res => setPlanta(res))
        }
        getPlanta()
    },[])
  return (
    <div> 
        <Datmon {...planta[planta.length-1]}/>

</div>
  );


}


export default Monitoreo;