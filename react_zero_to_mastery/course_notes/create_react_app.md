## Elementos básicos

Para crear una aplicación react:

```bash
npx create-react-app monsters-rolodex
```

NPM puede instalar globalmente create-react-app o un paquete:

```bash
npm i -g cowsay
```

NPM list obtiene el listado, por ejemplo sobre el proyecto monsters-rolodex:

```bash
npm list
```

El resultado:

```
monsters-rolodex@0.1.0 /home/jquiroga/proyectos/react/react-zero-to-mastery/monsters-rolodex
├── @testing-library/jest-dom@5.16.4
├── @testing-library/react@13.3.0
├── @testing-library/user-event@13.5.0
├── react-dom@18.2.0
├── react-scripts@5.0.1
├── react@18.2.0
└── web-vitals@2.1.4
```

Con npm list -g se puede saber donde se encuentra instalado un paquete global:

```bash
npm list -g cowsay
```

El resultado:

```
/home/jquiroga/.asdf/installs/nodejs/16.13.1/.npm/lib
└── cowsay@1.5.0
```

Con npm uninstall -g se puede eliminar un paquete global:

```bash
npm uninstall -g cowsay
```

NPX descarga y ejecuta el paquete de forma inmediata:

```bash
npx cowsay hello
```

El resultado:

```
Need to install the following packages:
  cowsay
Ok to proceed? (y) 
 _______
< hello >
 -------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

NPX no instala los paquetes sino que los borra inmediatamente y siempre la última versión.