import './App.css'
import React, { useState } from 'react'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import { Routes, Route } from 'react-router-dom'
import Error404 from './components/Error404/Error404'
import Form from './components/Form/Form'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Favorites from './components/Favorites/Favorites'

function App () {

const location = useLocation();

const [characters, setCharacters] = useState([]);

const navigate = useNavigate();

const [access, setAcces] = useState(false);

const username1 = "sckarlet015@gmail.com"
const password1 = "Eric123"

function login(userData) {
  if(userData.username === username1 && userData.password === password1){
    setAcces(true);
    alert("Iniciando sesion, aceptar para entrar...")
    navigate("/Home");
  } else {
    alert("El usuario no existe")
  }
}

const onSearch = (character) => {
  if(character === characters.map(ele => ele.id)){
    window.alert("El personaje ya existe")
  } else {
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }
}

const onClose = (id) => {
  setCharacters(characters.filter(ele => ele.id !== id))
}

useEffect(() => {
  !access && navigate('/');
}, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>
       <div>
       <h1>Rick and Morty by Eric Ramirez</h1>
        {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
        <Routes>
          <Route exact path='/' element={<Form login={login}/>}/>
          <Route path='/Home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/detail/:detailId' element={<Detail/>}/>
          <Route path='*' element={<Error404/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
