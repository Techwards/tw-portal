import ApiService from '../ApiService/index'
export const userAuthenticationService = (
    function (){
        let isAuthenticated = false

        function login (cb, payload) {
            // code for login
            const url = '/login'
            
            ApiService.get(url, payload).then(res=> {
                isAuthenticated = true;
                cb()
            })
        }
        
        // function signin(cb) {
        //     isAuthenticated = true;
        //     setTimeout(cb, 100); // fake async
        // }

        function signout(cb) {
            isAuthenticated = false;
            setTimeout(cb, 100);
        }

        return {
            // signin,
            isAuthenticated,
            signout,
            login
        }
    }
)()
