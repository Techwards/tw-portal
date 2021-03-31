import { auth } from 'express-openid-connect';

const configureAuth0 = (app) =>{
    console.log('configureAuth0: ');
    app.use(
        auth({
            routes: {
                // Override the default login route to use your own login route as shown below
                login: false,
                // Pass a custom path to redirect users to a different
                // path after logout.
            },
            issuerBaseURL: process.env.ISSUER_BASE_URL,
            baseURL: process.env.BASE_URL,
            clientID: process.env.CLIENT_ID,
            secret: process.env.SECRET,
            // idpLogout: true,
            authRequired: false,
            auth0Logout: true,
        })
    );
}

export {
    configureAuth0
}