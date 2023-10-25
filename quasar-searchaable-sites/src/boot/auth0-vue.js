import { boot } from 'quasar/wrappers';
import { createAuth0 } from '@auth0/auth0-vue';

const auth0 = createAuth0({
  domain: "dev-773yov6wmoip81dg.us.auth0.com",//import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: "TIxHPjUVxfNssqZO9HwgyOn1GZ26OVAw",//import.meta.env.VITE_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: "http://localhost:9000"//import.meta.env.VITE_AUTH0_CALLBACK_URL,
    },
});

export default boot(({ app }) => {
  app.use(auth0);
});

export { auth0 };
