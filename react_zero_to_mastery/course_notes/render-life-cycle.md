# Render Lifecycle

El ciclo de vida del componente se debe tener en cuenta lo siguiente:

- Constructor normalmente se inicia el state
- Posteriormente se ejecuta el render
- Se ejecuta componentDidMount
- Si el anterior genera un cambio en el estado genera el llamado a render nuevamente

Es importante entender que:

- El input indicará la data a buscar
- Se requiere un dato adicional que guardar en el estado para saber que carga
- El input al cambiar genera un evento donde particularmente es importante el target
- Las acciones sobre el estado o arreglo deben hacerse sobre uno diferente no cambiando el estado.
- Se recomienza utilizar instrucciones como filter para realizar operaciones de búsqueda
- Las operaciones deben colocarse a nivel del componente para optimizar
- Se puede utilizar destruct para realizar mejoras en el código evitando el uso de this o this.state
  

```JavaScript
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
        if (!response.ok) {
          console.log(response);
          const err = new Error("Not 2xx response");
          err.response = response;
          throw err;
        } else {
          return response.json();
        }
      })
      .then(users=>this.setState(
          ()=> {
            return {monsters: users }
          },
          ()=> {
            console.log(this.state)
          })
      )
      .catch( error=>{
        // Debido al strict mode es llamado dos veces
        console.log(error.message );
      })
  }

  onSearchChange = (event)=>{
    console.log(event);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState({ searchField } );
  }

  render() {
    console.log('render');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange}/>
        {
          filteredMonsters.map((monster)=>{
            return <div key={monster.id}>
              <h1>{monster.name}</h1>
              </div>;
          })
        }
      </div>
    );
  }
}
```