import {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor() {
    super();
    
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
            <br/>
            Clicks {this.state.count}
          </p>
          <button
            onClick={() => {
              let nextCount = this.state.count + 1;
              this.setState((state,props)=>{
                // State para obtener el valor del estado actual y renderizar de acuerdo a eso
                // props es un objecto donde se le pueden pasar parametros a los componentes
                return {name: {firstName: 'Mauricio', lastName: 'Varon'}, count: nextCount};
              },
              // Callback para esperar a que el estado se actualice primero 
              // y realizar un accion posteriormente, ejecutar de manera sincrona.
              ()=>{console.log(this.state)}
              );
            }}
          >Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;

