import React from "react";

const Datmon = ({ idPlanta='-', statusBomba='-', fecha='-', temperatura='-', humedad='-', capacidadTanque='-', humSuelo='-' }) => {
    return (
    <div>
        <div className="grids">
            <div>
            <p> <b>Humedad: </b> {humedad}%</p>
            <p><b>Temperatura:</b> {temperatura}°C</p>
            </div>
            <div>
            <p><b>Capacidad del tanque:</b>: {capacidadTanque}%</p>
            <p><b>humedad del suelo:{humSuelo}</b>%</p>
            </div>



        </div>
        <p><b>Estado de la bomba:</b>{statusBomba} <br/>
            <b>fecha y hora:</b> {fecha}</p>
        </div>
    )
}

export default Datmon;