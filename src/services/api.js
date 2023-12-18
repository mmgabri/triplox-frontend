import axios from 'axios';

const api = axios.create({    
 //baseURL: 'http://10.0.2.2:80',
   baseURL: 'https://4ee7gfkq42.execute-api.us-east-1.amazonaws.com/dev',
   headers: {
    'x-api-key' : 'o7AwEAkgXH9WL667E4Y4LLrpPPC67UV4S5UdqXP4'
  }
});

export { api };