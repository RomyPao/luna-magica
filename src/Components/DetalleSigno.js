import React, { useState, useEffect } from "react";
import zodiaco from "../Data/zodiaco";

function DetalleSigno(props) {
  const [caractSigno, setCaracSigno] = useState([]);
  const urlImgs = "./img/"

  useEffect(() => {
    setCaracSigno(zodiaco[props.signo[0]]);
  }, [props.signo]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">{caractSigno.signo}</h1>
          <img
            src={urlImgs + caractSigno.imagen}
            alt={caractSigno.signo}
            className="img-fluid mx-auto d-block"
          />
          <p className="text-center">{caractSigno.caracteristicas}</p>
        </div>
      </div>
    </div>
  );
}

export default DetalleSigno;
