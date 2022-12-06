const ENDPOINT_TOKEN = 'https://api.kvikmyndir.is/authenticate';
const ENDPOINT_CINEMAS = 'https://api.kvikmyndir.is/theaters';
const ENDPOINT_MOVIES = 'https://api.kvikmyndir.is/movies?token=';
const ENDPOINT_UP_COMING = 'https://api.kvikmyndir.is/upcoming?token=';




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
    getCinemas: async () =>{
        let token = await dataService.getToken();
        const result = await fetch(ENDPOINT_CINEMAS, {
            method: 'GET',
            headers: {"x-access-token": token},
        });
        const json = await result.json()
        return json
    },
    getMovies: async () =>{
        let token = await dataService.getToken();
        const result = await fetch(ENDPOINT_MOVIES + token);
        const json = await result.json()
        return json
    },
    getMovies: async () =>{
        let token = await dataService.getToken();
        const result = await fetch(ENDPOINT_MOVIES + token);
        const json = await result.json()
        console.log('Movies Done')
        return json
    },
    getUpComing: async () =>{
        let token = await dataService.getToken();
        const result = await fetch(ENDPOINT_UP_COMING + token);
        const json = await result.json()
        return json
    }
};

export default dataService;

