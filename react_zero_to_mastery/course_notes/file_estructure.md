# Estructura de archivos

## Estructura básica

La estructura básica es:

- package.json: Paquetes requeridos
    - React
    - React-dom
    - React-scripts para facilitar el proceso de desarrollo de aplicaciones
        - Start para iniciar la aplicación, toma todos los archivos de src y los empaqueta en un ambiente local de desarrollo
        - Build, construye la aplicación para despliegue optimizando todo el código que se encuentra dentro de la app.
        - Test, llama las pruebas para la verificación del código
        - Eject: Para hacerlo compatible con diferentes versiones de navegadores si se requiere tener un control total:
            - Utiliza babel para transformar el código en un javascript entendible para un navegador de cierta antiguedad
            - Webpack, hace el código más pequeño e eficiente de manera que por ejemplo crea chunks que sean más pequeños y que representan un pedazo del código
- index.js: Es el archivo por donde siempre inicia la aplicación react
    - Contiene las librerias mínimas que son react para la app completa y react-dom para interactuar con el DOM para aplicaciones web
    - Importa App que es la aplicación
    - Se encarga de hacer el render utilizando App que representa la aplicación
    - Utiliza strictmode con el objetivo de no utilizar código deprecado
    - Indica que elemento del html será la base la app
- Index.html: Representa la base de la aplicación react
    - Tiene como mínimo un div que presenta donde pintar el componente principal
        
        ```
        <div id="root"></div>
        ```
        
- App.test.js: Representa las pruebas de la app
- setup.test.js: Prepara las pruebas
- favicon: Representa el icono de la página
- logo*: Representa los logos
- Manifest.json: Se utiliza para PWA
- robot.txt: Para el rank de crawls

Iniciar la aplicación react:

```
yarn start
```

## App

Representa la aplicación principal:

- App.js, utiliza el css, el log y tiene el JSX que renderiza la primera página.
- App.css, estilos que aplican sobre la App
- logo.svg, representa el logo que se mostrará en el componente

Componente: Es un código que genera una porción de código que retorna su representación visual