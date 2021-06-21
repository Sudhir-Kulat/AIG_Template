import axios from 'axios'

const url = 'https://gorest.co.in/public-api/users'

export const fetch_users =()=> axios.get(url);

export const create_user=(newUser)=>{
    const token  ="9e99287bdd6384a489f60afe7af98550160f0e8cdfd45eb44dc665282be30b27"
    return axios.post( url, newUser, {headers: {'Authorization': 'Bearer '+token}}
    );
}