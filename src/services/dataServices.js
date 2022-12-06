const ENDPOINT_TOKEN = 'https://api.kvikmyndir.is/authenticate';
const ENDPOINT_CINEMAS = 'https://api.kvikmyndir.is/cinemas?token=';


const dataService = {
    getToken: async () =>{
        const result = await fetch(ENDPOINT_TOKEN, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: "haraldur21",
                password: "Password"
            })
        });
        const json = await result.json()

    
        return json.token
        
    },
    getCinemas: async (token) =>{
        console.log('Get Cinemas')
        console.log(token)
        const result = await fetch(ENDPOINT_CINEMAS + token, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        const json = await result.json()
        console.log('Cinemas', json)
        return json
    }
};

export default dataService;

