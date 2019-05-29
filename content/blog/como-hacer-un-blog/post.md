---
title: Crear un blog con Gatsby y Github Pages
date: 2019-05-25T22:00:00.000Z
description: ¿Siempre quisiste crear tu propio blog con React pero sin volverte loco por el hosting, ni el SEO, ni la compatibilidad? Aprendé cómo hacer un blog con Gatsby y hostearlo en github en una tarde.
---
Gatsby es un framework basado en React para desarrollar sitios web y aplicaciones mucho mas fácil y rápidamente. Si ya sabés React y siempre quisite tener un blog, podés hacerlo con Gatsby en menos de una hora. Gatsby también usa GraphQL para modelado y manejo de datos, pero para esta guía no hace falta que sepas lo que es.

## Instalar las herramientas de CLI de Gatsby

Las herramientas de CLI de Gatsby nos permiten crear nuevos proyectos y facilitan el desarrollo rápido de los mismos. La instalamos como dependencia global, usando npm, como cualquier otra dependencia de JavaScript.
```bash
$ npm i -g gatsby-cli
# Alternativamente, con yarn
$ yarn global add gatsby-cli
```
<small>Se puede usar tanto yarn como npm. A partir de acá voy a asumir que si usas Yarn, ya sabés cómo se usa, así que no voy a poner mas instrucciones.</small>

## Crear un proyecto vainilla

Habiendo instalado las herramientas de CLI, ya podemos crear un nuevo proyecto básico de gatsby. Para hacer esto llamamos al ejecutable de gatsby con el argumento `new` y el nombre de nuestro proyecto.
```bash
$ gatsby new blog
```

La primera vez que corramos este comando nos va a preguntar si preferimos yarn o npm, y luego descarga e instala todas las dependencias usando el administrador de paquetes que elijamos. Recordemos al terminar de instalar, de movernos al directorio de nuestro proyecto con:
```bash
$ cd blog
```

Desde acá estamos listos para desarrollar. Podemos levantar nuestro servidor de desarrollo con:
```bash
$ gatsby develop
```

Este comando abre un servidor de desarrollo con nuestra página en `http://localhost:8000`, y su esquema de GraphQL en `http://localhost:8000/___graphql`.

<br/>

## Crear un proyecto con un starter

Aunque Gatsby nos facilita el uso de muchas tecnologías, no es lo mas práctico arrancar con un proyecto en blanco. Es por esto que existen proyectos públicos, precreados, llamados **starters**, que nos proveen un entorno un poco más desarrollado, con algunas funcionalidades ya implementadas.

[Hay una lista de starters](https://www.gatsbyjs.org/starters/?v=2) en la cual podemos buscar distintos proyectos 

Para crear un proyecto basado en un starter simplemente agregamos la URL del starter como argumento cuando lo creamos, por ejemplo:
```bash
$ gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog
```

Con este starter tenemos preparado un blog básico con Gatsby!

## Cambiar el contenido de nuestro blog

En la raíz del proyecto hay un archivo llamado `gatsby-config.js`. Este archivo contiene la configuración de nuestros plugins de Gatsby, junto con algunos atributos que se utilizan en el blog.
<br/><br/>

Por ejemplo, dentro de `siteMetadata` viven varias variables de configuración de nuestro blog. Pueden cambiar estas variables y ver en tiempo real como cambia el blog. Por ejemplo, para mi blog, podría quedar algo así...

*blog-post.js*
```js
module.exports = {
    siteMetadata: {
        title: `JS y React en Español`,
        author: `Cristian Soria`,
        description: `Un espacio para aprender JS y React`,
        siteUrl: `soriac.github.io`,
        social: { }
    },
    // el resto de los exports...
}
```
<small>Asegurate de que los 5 campos tengan algún valor! Si borrás un campo por completo, se rompen los otros 4. Si no tenés nada que poner, podés poner un string o un objeto vacío...</small>

<br/>

Dentro de la carpeta `content` vive todo el contenido de nuestro blog. Por ahora nos vamos a enfocar en la carpeta `assets`, que contiene la foto del autor del blog. Simplemente cambiamos el archivo `profile-pic.jpg` por nuestra foto.

<br/>

También nos gustaría cambiar el texto del bio del autor. Dentro de `src/components/bio` se encuentra el componente que renderiza la bio del autor. Hagamos que diga algo sobre nosotros...

*src/components/bio*
```js
return (
    // ...el resto del componente
    <p>
        Escrito por <strong>{author}</strong>, desde Buenos Aires, Argentina.
        Trabajo en Buenos Aires como full-stack dev y dando talleres de React.
    </p>

)
```
<small> Este componente utiliza un `StaticQuery` de GraphQL para pedir los datos estáticos del blog, y de ahí obtiene el nombre del autor (en la variable `author`). Con GraphQL podemos elejir exactamente que datos necesitamos para nuestra página, que es súper práctico! Si querés investigar un poco más, recomiendo [los tutoriales oficiales de GraphQL](https://graphql.org/learn/), y que [intentes cambiar el componente StaticQuery por el hook useStaticQuery](https://www.gatsbyjs.org/tutorial/part-four/#use-a-staticquery).</small>

## Agregar publicaciones

Para escribir y agregar publicaciones vamos a estar usando el lenguaje de marcado **Markdown**. Probablemente lo usaste o lo viste en Github, ya que todos los README.md están escritos de esta manera.

<br/>

Les dejo un excelente recurso para tener a mano cuando escribimos Markdown, [La Markdown Cheatsheet de Adam Pritchard](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

<br/>

Para agregar un post simplemente creamos una carpeta dentro de `/content/blog`, y ponemos el archivo de Markdown de nuestro post dentro de la misma.

## Estilo global

Existen muchas formas de aplicar estilos a un proyecto de Gatsby, pero el mas sencillo es con un .css global. Para lograr esto debemos crear una carpeta con el nombre `styles` dentro de `src`. Dentro de esta carpeta creamos el archivo `global.css`, y ponemos nuestras reglas de css.

<br/>

Para que estas reglas se apliquen a nuestra página, debemos editar el archivo `gatsby-browser.js`, agregando al final:

*gatsby-browser.js*
```js
import "./src/styles/global.css"
```

## Publicar en Github Pages

Una vez que estamos contentos con nuestro blog, podemos publicarlo en Github para que todos lo puedan leer. La primera vez que hacemos esto hay algunos pasos a seguir.

### Pasos previos

Primero, si estas en windows, vas a tener que configurar el ayudante de credenciales de git. Esto se hace con: 
```bash
$ git config --global credential.helper wincred
```

Luego, tenemos que crear un repositorio en github que tenga el siguiente nombre:
```
<username>.github.io
```
Donde \<username\> es tu usuario de github.

<br/>

Una vez que hayamos creado el repositorio podemos agregar el remote, con 
```bash
$ git remote add origin https://github.com/<username>/<username>.github.io.git
```

También debemos instalar `gh-pages`. Este es un paquete que se encarga de convertir y subir los archivos correctamente a nuestro repo.
```bash
$ npm install gh-pages --save-dev
```
<small>Cuando configuré mi blog, me tiraba un error que resolví corriendo `npm install`. Creo que al agregar dependencias de desarrollo con --save-dev no hizo correctamente el install. Si no te anda el deploy, probá eso!</small>

<br/>

Finalmente, vamos a modificar nuestro `package.json`, para agregar el comando que nos permite armar y subir nuestra página. 
*package.json*
```json
    "scripts": {
        "deploy": "gatsby build && gh-pages -d public -b master",
        "build": "gatsby build",
        "develop": "gatsby develop",
        "format": "prettier --write src/**/*.{js,jsx}",
        "start": "npm run develop",
        "serve": "gatsby serve"
    }
```

### Publicando
Una vez que hicimos todos los pasos previos, podemos publicar nuestro blog cada vez que hacemos un cambio con el simple comando `deploy`. Esto va a publicar nuestro blog en la url que te había contado: https://<username\>.github.io
```bash
$ npm run deploy
```

Felicitaciones! Ya podes compartirle tu blog a todos tus amigos y familiares, y molestarlos cada vez que hagas un post.

[Podés encontrar el código fuente de mi blog en Github](https://github.com/soriac), y podés usarlo para lo que quieras. Yo le hice varias modificaciones más de las que hablé en este post, y seguramente le voy a hacer muchas otras cuando tenga más tiempo.