# Conceptos Básicos de React

**Programación Imperactiva**: Es un paradigma de programación y viendolo desde lenguajes para hacer Front-end la programación imperactiva hace referencia a la modificación directa del DOM, en donde se debe indicar cada evento y realizar los cambios respectivos. Esta forma de programar se ha usado desde los inicios del desarrollo web, sin embargo para proyectos de gran escala se hace dificil de mantener el código y controlar todas las modificaciones que puede tener el DOM de una app. 


# General

React se basa en el paradigma de programación declarativa. React se encarga de modificar el DOM, a esto se le conoce como programación declarativa ya que el programador declara como quiere mostrar los datos en la pagina y React hace el resto del trabajo utilizando el State para controlar todo lo que se muestra en la pagina.

Los sitios en React se contruyen en componentes reutilizables, como si fueran piezas lego.

    - Existen sitios en donde los programadores pueden compartir los componentes para que se puedan reutilizar en diferentes proyectos.  
    
    * React bootstrap 
    * Ant design
    * Blueprint


# Componentes

Los componentes se crean basados en los datos del state.

Para definir un componente se hace usando JSX que corresponde a codigó similar a Javascript que siempre retorna código HTML.

![Definición basica de un componente en react!](/notes_imgs/component_definition.jpg "Estructura de un componente")


# Flujo unidireccional de información

- Interactuan el estado y los componentes
- Crean el virtualdom en javascript
- Valida que cambio en el DOM con el virtualdom y pinta los componentes

![porque react!](/notes_imgs/why-react.png "por qué react")

La información solo viaja hacia abajo en forma de arbol.

![flujo de los datos!](/notes_imgs/data-flow.png "Flujo de la información")


Se centra en UI el resto de los elementos es responsabilidad del desarrollador
- React native para desarrollar aplicaciones móviles
- React VR para desarrollar aplicaciones de VR
- React Electron para desarrollar aplicaciones desktop
- React Blessed para desarrollar aplicaciones de línea de comandos

Dos librerías:

- React core la librería base
- React DOM la librería que se encarga de interactuar con el DOM.


## Listado de palabras clave

- Declarative
- JSX
- Components
- State
- Props
- VirtualDOM

## Conceptos que debe tener un desarrollador React

1. Decidir que componentes tener
2. Decidir el estado y donde vive
3. Qué cambia cuando el estado cambia