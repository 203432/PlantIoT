import "./Datos.css";
import React, {useState, useEffect} from "react";
const Datos=() =>{
    
const [planta,setPlanta] = useState([

])

useEffect(()=>{
    const getPlanta = () =>{
fetch('http://192.168.0.27:3002/api/planta')
.then(res => res.json())
.then(res => setPlanta(res))
    }
    getPlanta()
},[])

    return(
        <div>
            <table className="table">
                <thead>
                        <tr>
                                <th>Id</th>
                                <th>humedad</th>
                                <th>temperatura</th>
                                <th>capacidadTanque</th>
                                <th>humSuelo</th>
                                <th>statusBomba</th>
                                <th>fecha</th>
                        </tr>
                </thead>
                <tbody>
                    {planta.map(planta => (
                    <tr key={planta.idPlanta}>
                    <th>{planta.idPlanta}</th>
                    <th>{planta.humedad}</th>
                    <th>{planta.temperatura}</th>
                    <th>{planta.capacidadTanque}</th>
                    <th>{planta.humSuelo}</th>
                    <th>{planta.statusBomba}</th>
                    <th>{planta.fecha}</th>
                    </tr>
                    ))}
                </tbody>

            </table>
            
        </div>
    );
};

export default Datos;