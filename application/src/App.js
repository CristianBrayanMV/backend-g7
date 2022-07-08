import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import fondo from './img/form.webp';
import './App.css';


function App() {
  return (
    <div className='application'>
      <img src={fondo} alt="formulario" />
      <form>
        <h2>Registro</h2>
        <TextField
            id="outlined-text-input"
            label="Nombre"
            type="text"
            autoComplete="current-text"
          />
        <TextField
            id="outlined-lastname-input"
            label="Apellido"
            type="text"
            autoComplete="current-lastname"
          />
        <TextField
            id="outlined-email-input"
            label="Correo Electronico"
            type="email"
            autoComplete="current-email"
          />
        <TextField
            id="outlined-phone-input"
            label="Teléfono"
            type="phone"
            autoComplete="current-phone"
          />
        <TextField
            id="outlined-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
          />
          <h3>Zonas</h3>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="sp" control={<Radio />} label="Super Vip" />
            <FormControlLabel value="v" control={<Radio />} label="Vip" />
            <FormControlLabel value="g" control={<Radio />} label="General" />
          </RadioGroup>
          <TextField
            id="outlined-comment-input"
            label="Comentario"
            multiline
            maxRows={4}
            autoComplete="current-comment"
          />          
          <FormControlLabel control={<Checkbox defaultChecked />} label="Acepto los terminos y condiciones" />
          <hr />
          <div className="btn">
            <Button variant="contained" color="primary">
              Registrame
            </Button>

          </div>

          
      </form>
    </div>
  );
}

export default App;
