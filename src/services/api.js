import axios from 'axios';

const api = axios.create({    
 //baseURL: 'http://10.0.2.2:80',
 //baseURL: 'https://4ee7gfkq42.execute-api.us-east-1.amazonaws.com/dev',
   baseURL: 'https://ofwh9a16k1.execute-api.us-east-1.amazonaws.com/Prod',
   headers: {
    'x-api-key' : ''
  }
});

export { api };