#### Ejemplo configuración de redux en create-react-app

Proyecto creado con yarn `yarn create react-app app-name`

#### Añadiendo redux

- Instalar **redux** con yarn: `yarn add redux`
- Crear documento **store.js** donde configuraremos nuestro estado global. (ver `src/store.js`)
- Crear el **reducer** raiz, es recomendable crear una carpeta para los reducers de la aplicación. (ver `src/reducers/index.js`)
- Creamos nuestro primer **reducer**, en este caso manejara el estado de la interfaz, nos permitira saber si hay algo ejecutandose por debajo, super util cuando esperamos respuesta del servidor por ejemplo. (ver `src/reducers/loading.js`)
- Crearemos ahora las acciones que modificaran el estado de nuestra aplicación.(ver `src/actions/loader.js`)
- Crearemos un componente para ejecutar y conectar nuestro estado global. (ver `src/components/Example.js`)

#### Tomar en cuenta

Para poder conectar nuestros componentes con el **store** de **redux** es necesario instalar la libreria **react-redux**, esta tiene 2 componentes especiales, las cuales son:

- **Provider**: Este es un componente que provee el store a los componentes de tu aplicación, es por ello que tiene que implementarse como componente raiz de la aplicación. (ver `src/index.js`)

- **connect**: Es una función que toma dos parametros, el primero es una función que de formato al estado global (mapStateToProps), el segundo también es una función que proporciona los **ActionCreators** al componente (mapDispatchToProps). (ver `src/components/Example.jsx`)

#### Aprovechar el poder de redux

Al ser capaz de aplicar **middlewares**, tenemos la posibilidad de jugar con el estado de la aplicación desde que se despacha una acción hasta que se modifica el estado.

Esto nos puede facilitar el hacer debug de nuestra aplicación, modificar las peticiones al servidor, despachar acciones desde las mismas acciones, persistir el estado de la aplicación.

Entre los middleware más usados estan:

- **redux-thunk**: Permite tener disponible tanto el despachador de redux como su estado mismo.
- **redux-persist**: Permite tener el estado global de redux persistido en el localStorage, sessionStorage o el fileSystem de tu dispositivo.
- **redux-dev-tools**: Permite tener disponible en el navegador una interfaz para navegar y ver el estado de la aplicación.
- **raven-js** Permite notificar y llevar registro de los errores de la aplicación.

Puedes también crear tus propios middlewares, entre los mas utiles se encuentran poder asignar el token de autenticación de una sesión en cada acción que haga una petición a un servidor.

Ejecutar acciones como cargar un loader cada vez que se haga una petición y espera la respuesta de una ejecución asincrona.
