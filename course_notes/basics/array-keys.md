# Arreglos y Keys

En los componentes cuando son múltiples elementos será necesario tener un modelo y para poder diferenciar los cambios con una llave que permita identificarlo.


```JavaScript
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: 1,
          name: 'Linda',
        },
        {
          id: 2,
          name: 'Frank',
        },
        {
          id: 3,
          name: 'Jackie',
        },
        {
          id: 4,
          name: 'Andrei',
        }
      ]
    };
  }
//function App() {
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster)=>{
            return <h1 key={monster.id}>{monster.name}</h1>;
          })
        }
      </div>
    );
  }
}

export default App;
```

El map transforma en varios h1 con la llave del id y el contenido que es el nombre.
