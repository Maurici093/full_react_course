# Componentes clases

En react es posible realizar el desarrollo utlizando ya sea clases y su versión más moderna que son los hooks.

En react se realiza un cambio sobre los componentes basado en el state (shallow merge) para que react pueda determinar los cambios a realizar, esto hace que al realizar la impresión del objeto state este siempre se ve antes de realizar el cambio.

Para realizar el desarrollo por componentes se debe tener en cuenta:

- Extender el Component
- Colocar el state en el constructor en forma de objeto

```javascript
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor() {
    super();
    
    this.state = {
      count: 1,
      name: 'Bryam',
      company: 'B&M Corporarion',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}, I work at {this.state.company}
          </p>
          <button>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
```

Para reaccionar a los eventos se utilizan métodos como onClick que deben utilizar el método setState para cambiar el estado, igualmente se debe utilizar {this.state.<propiedad>} con el fin de enlazarlo y que se actualice adecuadamente.

Cuando se tienen objetos es importante tener en cuenta las características y atributos internos ya que el renderiza de acuerdo con los cambios que observa sobre el modelo, ejemplo se incluye el nombre y apellido por separado.

```JavaScript
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      name: { firstname: 'Juan', lastname: 'Perez' },
      company: 'JP corporation'
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstname} {this.state.name.lastname}, I work at {this.state.company}
            <br/>
            Clicks {this.state.count}
          </p>
          <button onClick={()=>{
            let nextCount = this.state.count + 1;
            this.setState({name: {firstname:'Jorge',lastname:'Dominguez'}, count: nextCount})
            console.log(this.state);
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
```

Si se quiere realizar alguna acción posterior a la actualización se deben utilizar callbacks en el método setState:

```JavaScript
render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstname} {this.state.name.lastname}, I work at {this.state.company}
            <br/>
            Clicks {this.state.count}
          </p>
          <button onClick={()=>{
            let nextCount = this.state.count + 1;
            this.setState((state,props)=>{
              // State para ver el estado actual y renderizar de acuerdo con eso
              // props que son las propiedades del componente
              return {name: {firstname:'Jorge',lastname:'Dominguez'}, count: nextCount}
            },
            // Callback cuando se ha actualizado completamente 
            ()=>{console.log(this.state)})
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
```
