

export default function validation(userData){
const errors = {};

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassRage = /^(?=.\w*\d)\S{6,10}$/;

if(!userData.username){
    errors.username = "No puede quedar vacio"
}
if(!regexEmail.test(userData.username)){
    errors.username = "Debe de ser un correo valido"
}
if(userData.username.length > 35){
    errors.username = "No puede sar mayor de 35 caracteres"
}

if(!regexPassRage.test(userData.password)){
    errors.password = "Debe tener entre 6 y 10 caracteres"
}
return errors;
}