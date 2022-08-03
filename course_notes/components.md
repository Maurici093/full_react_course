# Componentes

Para la creación de componentes se crea un archivo JSX normalmente en una carpeta componentes.

Un componente debe tener características de:

- Reutilizable
- Tiene un conjunto de propiedades que se le incluyen y se acceden a través de this.props
- Los componentes se actualizan si cambian las propiedades.
- El componente debe devolver un único elemento.
- No deben utilizar palabras que lo relacionen con los conceptos de negocio.

Ejemplo del CardList Component:

```javascript
import { Component } from "react";

class CardList extends Component {

  render() {
    console.log('Render CardList');
    console.log(this.props);
    const { data } = this.props;
    return (
      <div>
        {
        data.map((elem)=>{
            return <div key={elem.id}>
              <h1>{elem.name}</h1>
              </div>;
          })
        }
      </div>
    );
  }
}

export default CardList;
```

Para el caso de componentes que requieren acciones como por ejemplo el searchbox es posible incluir un handler que actúe sobre otro componente padre.

Se recomienda utilizar la palabra handler para diferenciar que corresponden a métodos externos.


```javascript
import { Component } from "react";

class SearchBox extends Component {

  render() {
    console.log('Render SearchBox');
    console.log(this.props);

    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <div>
        <input className={className} 
					type='search' 
					placeholder={placeholder} 
					onChange={onChangeHandler}/>
      </div>
    );
  }
}

export default SearchBox;
```
**Para utilizar los componentes se importan en el componente base:**

```javascript
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
...
  render() {
    console.log('render');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} 
           placeholder='Search monster'
           className='search-box'/>
        <CardList data={filteredMonsters} />
      </div>
    );
  }
```