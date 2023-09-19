import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//Esta página irá renderizar cada bebida individualmente

const Beer = () => {
    const [beer, setBeer] = useState([])
    const params = useParams();
    const navigate = useNavigate();


    const getBeer = async () => {

        //Você deve completar esta busca com o parâmetro necessário
        const res = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
        const data = await res.json()
        setBeer(data[0])
    }

    useEffect(
        () => {
            getBeer()
        }, []);



    return (
        <div>

            <div className='card'>
                <h2>Cerveja número: ?</h2>
                <img src={beer.image_url} alt="beer-detail" />
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
                <p>{beer.brewers_tips} </p>
            </div>
            <button>Voltar</button>
        </div>

    )
}

export default Beer