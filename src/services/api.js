import axios from 'axios';

const api = axios.create({    
  baseURL: 'http://10.0.2.2:8080',
 //  baseURL: 'https://y4tny8add8.execute-api.us-east-1.amazonaws.com/Prod/users',
   headers: {
    'x-api-key' : 'U8eT4hjyLA9GmWdyhKTO0a5Z2c9OzNWaa1flYJMj'
  }
});

export { api };