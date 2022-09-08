# ComponentDidMount

En el ciclo de vida de React se pueden utilizar funciones que permiten controlar ciertos momentos uno de ellos es componentDidMount que permite realizar acciones posterior a que el componente se monte.

En el caso particular se utilizará para conectarse a un API externo y traer la data:


```javascript
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=>this.setState(
          ()=> {
            return {monsters: users}
          },
          ()=> {
            console.log(this.state)
          })
      )
  }
```

Se debe tener en cuenta que 404 no genera un reject en la promesa e igualmente que en modo estricto el llama dos veces la función.

Si se quiere controlar el 404 se debe hacer a través del status o del response y realizar el tratamiento adecuado.

```javascript
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users1')
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
            return {monsters: users}
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
```

