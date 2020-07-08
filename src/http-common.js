import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://intense-falls-34397.herokuapp.com:3333',
  headers: {
    'Content-type': 'application/json',
  },
});
