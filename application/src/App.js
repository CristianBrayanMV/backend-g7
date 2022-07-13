import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import fondo from './img/form.webp';
import { useState } from 'react';
import './App.css';


function App() {
 
  const [input, setInput] = useState({
    name:'',
    lastName:'',
    email:'',
    phone:'',
    password:'',
    comment:'',
    zone:'g',
    aceptTerm:true
  })
  const [check, setCheck] = useState(false)
  const handleChange = ({target}) =>{
    setInput({
      ...input,
      [target.name]:target.value
    });
  }

  const handleChangeChecks = ({target}) =>{
    setCheck(!check)
  }

  const sendForm = (e) => {
    e.preventDefault();
    console.log({...input, aceptTerm: check})
  }

  return (
    <div className='application'>
      <img src={fondo} alt="formulario" />
      <form onSubmit={sendForm}>
        <h2>Registro</h2>
        <TextField
            id="outlined-text-input"
            label="Nombre"
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            autoComplete="current-text"
          />
        <TextField
            id="outlined-lastname-input"
            label="Apellido"
            type="text"
            name="lastName"
            value={input.lastName}
            onChange={handleChange}
            autoComplete="current-lastname"
          />
        <TextField
            id="outlined-email-input"
            label="Correo Electronico"
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            autoComplete="current-email"
          />
        <TextField
            id="outlined-phone-input"
            label="Teléfono"
            type="phone"
            name="phone"
            value={input.phone}
            onChange={handleChange}
            autoComplete="current-phone"
          />
        <TextField
            id="outlined-password-input"
            label="Contraseña"
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
          <h3>Zonas</h3>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="sp"
            name="radio-buttons-group"
          >
            <FormControlLabel value="sp"
                              name="zone"
                              onChange={handleChange}
                             control={<Radio />} label="Super Vip" />
            <FormControlLabel value="v" 
                              name="zone"
                              onChange={handleChange}
                              control={<Radio />} label="Vip" />
            <FormControlLabel value="g" 
                              name="zone"
                              onChange={handleChange}
                              control={<Radio />} label="General" />
          </RadioGroup>
          <TextField
            id="outlined-comment-input"
            label="Comentario"
            multiline
            maxRows={4}
            name="comment"
            value={input.comment}
            onChange={handleChange}
            autoComplete="current-comment"
          />          
          <FormControlLabel control={<Checkbox  
                                  checked={check}
                                  onClick={handleChangeChecks} />} label="Acepto los terminos y condiciones" />
          <hr />
          <div className="btn">
            <Button variant="contained" color="primary" type="submit">
              Registrame
            </Button>

          </div>

          
      </form>
    </div>
  );
}

export default App;
