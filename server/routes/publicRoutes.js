export const publicRoutes = (app) => {

    app.get('/login', (req, res) => {
        console.log('res.oidc:---------- ', res.oidc.user);
        // new User({googleId: res.oidc.user.profile.id})
        res.oidc.login({ returnTo: '/' })
    });
    
    app.get('/', (req, res, next )=>{
        console.log('party-------------')
        if (req.oidc.isAuthenticated()) {
            // console.log('req.oidc.user: ', req.oidc.user);
            res.send(JSON.stringify(req.oidc.user))
            return
        }
        res.send('logged out')
    
        // res.oidc.login({ returnTo: '/login' })
    })
}
