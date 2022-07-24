import React from "react";
const Datmon = ({ idPlanta='-', statusBomba='-', fecha='-', temperatura='-', humedad='-', capacidadTanque='-', humSuelo='-' }) => {
    return (
        <div>
            <h1>{idPlanta}</h1>
            <h1>{humedad}</h1>
            <h1>{temperatura}</h1>
            <h1>{capacidadTanque}</h1>
            <h1>{humSuelo}</h1>
            <h1>{statusBomba}</h1>
            <h1>{fecha}</h1>
        </div>
    )
}

export default Datmon;