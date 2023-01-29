import React from "react";
import validation from "./validation";
import "./Form.module.css"

export default function Form(props){

    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({username: '', password: ''});

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    } 

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrors(
            validation({
                ...userData,
                [e.target.name]: e.target.value
            })
        )
    }

    return(
        <div>
            <form onSubmit={handleLoginSubmit}>
                <label>Correo:
                    <input 
                        name="username" 
                        type="text" 
                        value={userData.username}
                        onChange={handleInputChange}
                        className={errors.username && 'warning'}
                        />
                        <p className="danger">{errors.username}</p>
                </label>

                <label>Contraseña:
                    <input 
                        name="password" 
                        type="password" 
                        value={userData.password}
                        onChange={handleInputChange}
                        className={errors.password && 'warning'}
                    />
                    <p className="danger">{errors.password}</p>
                </label>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}