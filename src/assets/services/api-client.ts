import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/x',
    params:{
        key:'25a9d3f8fe8249bbb61e71dcd4660bc0'
    }
});