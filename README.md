Proyecto creado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts

En el directorio del proyecto, puedes ejecutar:

### `npm start`

### `npm test`

### `npm run build`

### `npm run eject`

**Nota: Una vez ejecutado `eject`, no podrás volver atrás**


## Librerías adicionales

Además de las librerías requeridas se han utilizado otras para mejorar la experiencia

### axios

Librería utilizada para realizar las peticiones al API REST

### sweetalert2

Utilizada para mostrar alertas personalizadas 

### react-loader-spinner

Librería para mostrar loadings en los procesos asíncronos


## NOTAS

He intentado mezclar diferentes formas de hacer las cosas para demostrar el conocimiento de las mismas,
Por ejemplo, algunos de los estilos comunes están ficheros .scss y otros en ficheros de styled-components, los estilos específicos de cada componente se han creado mediante styled-component en el propio componente. 

He mezclado la utilización de Material UI con fragmentos desarrollados con flexbox, además he creado un componente para añadir imágenes con efecto parallax con la finalidad de hacer la prueba más atractiva visualmente.

La única parte en la que he utilizado Redux es en el inicio de sesión del usuario.

Adicionalmente he creado la sección equipos, que consume los datos del api "elenasport", he creado esta sección para poner en práctica el sistema de columnas de Material UI, así como otros componentes como los Card.

El código está cubierto con test básicos, que comprueban que el renderizado de los componentes es correcto.

Se ha añadido la librería husky para comprobar el "lint" antes de hacer un commit