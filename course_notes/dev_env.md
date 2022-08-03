# Ambiente desarrollo

Para el ambiente de desarrolo mínimo:

1. Visual studio code
2. Terminal
3. NVM para el manejo de versiones de node

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Verificar la instalación:
```bash
command -v nvm
```

Instalar nodejs
    
```bash
nvm install 18.4.0
```

Utilizar la versión de Nodejs
    
```bash
nvm use 18.4.0
```

Utilizar un manejador de paquetes como yarn o npm, yarn se creó por Facebook cuando tenía problemas npm.
    
Para instalar:

```bash
corepack enable
```

## NPM vs yarn

Install dependencies from package.json: `npm install` == `yarn`

Install a package and add to package.json: `npm install package --save` == `yarn add package`

Install a devDependency to package.json: `npm install package --save-dev` == `yarn add package --dev`

Remove a dependency from package.json: `npm uninstall package --save` == `yarn remove package`

Upgrade a package to its latest version: `npm update --save` == `yarn upgrade`

Install a package globally: `npm install package -g` == `yarn global add package`

## Font

Operator Mono Lig

Instalar snazzy operator