import React from 'react';
import estudiante from '../IMG/estudiantes.png'

class Landing extends React.Component{
    handleChange=e=>{
        console.log({value:e.target.value});
    };

    render(){
        return(<body>
            <header>
              <nav>
                  <div className = "UTB">MARVEL ESTUDIOS </div>
                  <ul>
                      <li>Inicio</li>
                      <li>Acerca de</li>
                      <li>Estatus</li>
                      <li>Contactar</li>
                  </ul>
    
                  <div className = "limpio"></div>
    
              </nav>
              <div className = "contenido">
                  <h4>UNIVERSO DE MARVEL!</h4>
                  <h1>BIENVENIDOS TODOS!</h1>
                  <p>Marvel está obsequiando figuras de acción de nuestro personaje iconico
                      DEADPOOL! <br></br>
                      Las entregas de estas figuras de acción son limitadas y son de 
                      coleccionador. <br></br><br></br> ¿Que esperas? no te quedes sin la tuya!!! <br></br>
                      Registrate para que seas uno de los ganadores y afortunados. Todos los derechos reservados.
                  </p>
              
              </div>
    
              <div className = "estudiante">
                  <img src = {estudiante} alt = ""></img>
              </div>
    
              <div class="form-style-6">
                  <h1>Contactanos</h1>
                  <form>
                  <input type="text" name="field1" placeholder="Your Name" />
                  <input type="email" name="field2" placeholder="Email Address" />
                  <textarea name="field3" placeholder="Type your Message"></textarea>
                  <input type="submit" value="Send" />
                  </form>
              </div>
    
          </header>
        </body>
        )
    }

}

export default Landing;