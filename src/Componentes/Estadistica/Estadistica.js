import "./Estadistica.css";
import React, {useState, useEffect} from "react";
import axios from "axios";

const Estadistica=() =>{
const [numClases, setNumClases] = useState(0)
const [rango, setRango] = useState(0)
const [amplitud, setAmplitud] = useState(0)
const [planta,setPlanta] = useState([])
const [tabla, setTabla] = useState([])

useEffect(()=>{
    var logaritmo=0, k=0, rango =0, amplitud = 0 ;
    var arrDatos = []
    var tabla = [{
        num_clase: 0,
        lim_inf : 0,
        lim_sup : 0,
        frec : 0,
        frec_rel: 0,
        frec_acu:0,
        mar_clase:0,
        frec_com:0,
        lim_inf_exa:0,
        lim_sup_exa:0
    }]
    
    const getPlanta =async () =>{
const data = await axios.get("http://192.168.0.29:3002/api/suelo")
for (let x = 0; x < data.data.length ; x++) {
    arrDatos[x] = data.data[x].humSuelo;
 }
 arrDatos.sort()
 console.log(arrDatos)
//Cantidad de clases
logaritmo = Math.log10(arrDatos.length)
k = Math.round( 1+3.322*logaritmo)
setNumClases(k)
//Calculo del rango
rango = arrDatos[0] - arrDatos[arrDatos.length-1]
setRango(rango)
//Calculo de la amplitud
amplitud =Math.round( (rango/k)+1)
setAmplitud(amplitud)
let container = arrDatos[0]

//Crear tabla
for (var x = 0; x < k ; x++) {
    let fila={
        num_clase: x,
        lim_inf : container,
        lim_sup : container +(amplitud-1),
        frec : 0,
        frec_rel: 0,
        frec_acu:0,
        mar_clase:0,
        frec_com:0,
        lim_inf_exa:0,
        lim_sup_exa:0
    } 
    container = fila.lim_inf
    tabla.push(fila)
 }
 console.log(tabla)
 setTabla(tabla)
    }
    getPlanta()
},[])

    return(
        <div> 
            <p>numero de clases: {numClases}</p>
            <p>rango de la clase: {rango}</p>
            <p>amplitud de clases: {amplitud}</p>
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

export default Estadistica;