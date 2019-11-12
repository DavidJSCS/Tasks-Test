const Hapi = require('@hapi/hapi');
const routes = require("./routes"); 

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  app: {}
});

const initServer = async () => {
  try {
    await server.register(routes);
    await server.start();
    console.log(`Servidor corriendo en: ${server.info.uri}`);
  } catch (error) {
    console.log('Error al iniciar el servidor Hapi');
  }
};
initServer();