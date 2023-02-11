import React, {useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";


export default function Detail(){

    const [character, setCharacter] = React.useState({});
    const { detailId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
                setCharacter(char) 
              } else {
                window.alert("No hay personajes con ese ID");
              }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, []);

      const backToHome = () => {
        navigate('/Home')
      }

    return(
        <div>
            <button onClick={backToHome}>Back</button>
            <br/>
            <img src={character.image} alt={character.name}/>
            <h3>Nombre: {character.name}</h3>
            <h3>Estado: {character.status}</h3>
            <h3>Especie: {character.species}</h3>
            <h3>Genero: {character.gender}</h3>
            <h3>Origen: {character.origin}</h3>
            <h3>Ubicación: {character.location}</h3>
        </div>
    )
}