import axios from 'axios'

const url = 'https://gorest.co.in/public-api/users';

export const fetch_users =()=> axios.get(url);