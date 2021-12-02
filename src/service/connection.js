import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `Bearer 9a4c685e6fca0347ca0775119e9c47b6ba00e49096ba99ffcf6a41fe06e6f001`;
// base url
const $axios = axios.create({
  baseURL: 'https://api.sesametime.com/schedule/v1/work-entries'
})

export default {
    $axios: $axios
};