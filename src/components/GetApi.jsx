import React, {useState, useEffect} from "react";

import axios from 'axios';
import '../App.css';

const Api = () =>{
    const[post, setPost] = useState([]); //useState é um hook
    const[loading, setLoading] = useState(true);

    //escutar a api e copiar dentro de POST
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/photos/')
        .then(response => {
            setPost(response.data);
            setLoading(false); // trocar o estado do carregamento para False
        })
        .catch(
            error => console.error("Erro na busca!", error)
        )
    }, []);

    if(loading) return <p>Lendo Arquivo...</p>;

    return(
        <div>
            <h1>
                Dados
            </h1>
            <div>
                {post.map(post => (
                        <div className="teste" key={post.id}>
                        <h2>{post.title}</h2>
                        <img src={post.thumbnailUrl} alt="" />
                        </div>
                ))}
            </div>
        </div>
    )
}
export default Api;