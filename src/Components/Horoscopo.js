import React, { useState, useEffect } from "react";
import horoscopo from "../Data/horoscopo.json";

function Horoscopo() {
    const [prediccion, setPrediccion] = useState([]);

    const sortearPrediccion = () => {
        let numero = Math.floor(Math.random() * horoscopo.length);
        setPrediccion(horoscopo[numero]);
    }

    useEffect(() => {
        sortearPrediccion();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="text-center">{prediccion.prediccion}</p>
                </div>
            </div>
        </div>
    );
}

export default Horoscopo;
