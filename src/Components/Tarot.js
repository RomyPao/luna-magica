import React, { useState, useEffect, Fragment } from 'react';

function Tarot() {
    const [showTarot, setShowTarot] = useState(false)
    const [loading, setLoading] = useState(false)

    const [prediccionPasado, setPrediccionPasado] = useState([]);
    const [prediccionPresente, setPrediccionPresente] = useState([]);
    const [prediccionFuturo, setPrediccionFuturo] = useState([]);

    const sortearPrediccion = async () => {
        const URL = `https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3`;
        fetch(URL).then(response => response.json())
            .then(data => {
                setPrediccionPasado(data.cards[0]);
                setPrediccionPresente(data.cards[1]);
                setPrediccionFuturo(data.cards[2]);
            })
            .catch(error => console.log(error));
    }

    const tarotToggle = () => {
        setLoading(true)
        setTimeout(function () {
            setShowTarot(!showTarot)
            sortearPrediccion()
            setLoading(false)
        }, 3000)
    }

    useEffect(() => {
        tarotToggle();
    }, []);

    return (
        <div className='container' >
            {loading ? <div className='spinner'>
            </div> : null}
            {showTarot ?
                <Fragment>
                    <div className='row'>
                        <div className='card'>
                            <h2 className='text-center mt-3 tarot-subtitle'>Pasado</h2>
                            <h5 className="text-subtitle">{prediccionPasado.name}</h5>
                            <p><b>Upright:</b> {prediccionPasado.meaning_up}</p>
                            <p><b>Reversed:</b> {prediccionPasado.meaning_rev}</p>
                            <p><b>Descendant:</b> {prediccionPasado.desc}</p>
                        </div>
                        <div className='card mt-2'>
                            <h2 className='text-center mt-3 tarot-subtitle'>Presente</h2>
                            <h5 className='text-subtitle' >{prediccionPresente.name}</h5>
                            <p><b>Upright:</b> {prediccionPresente.meaning_up}</p>
                            <p><b>Reversed:</b>  {prediccionPresente.meaning_rev}</p>
                            <p><b>Descendant:</b> {prediccionPresente.desc}</p>
                        </div>
                        <div className='card mt-2'>
                            <h2 className='text-center mt-3 tarot-subtitle'>Futuro</h2>
                            <h5 className="text-subtitle">{prediccionFuturo.name}</h5>
                            <p><b>Upright:</b> {prediccionFuturo.meaning_up}</p>
                            <p><b>Reversed:</b>  {prediccionFuturo.meaning_rev}</p>
                            <p><b>Descendant:</b> {prediccionFuturo.desc}</p>
                        </div>
                    </div>
                </Fragment> : null}
        </div>
    );
}

export default Tarot;