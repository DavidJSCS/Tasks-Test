module.exports = {
  name: 'ApiRoutes',
  
  register: async (server, options) => {
    server.route({
    method: 'GET',
    path: '/',
    options: {
        handler: async (req, h) => {
 
            let obj = {
                message: 'Hello world',
            } 
            return obj;
        }
    }
});
  }
}