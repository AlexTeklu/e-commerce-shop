import axios from 'axios';


const BASE_URL = "http://localhost:5151/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJfaWQiOiI2MmEzNWI2OGFiOGIxMzUyMDc3NjEwOTEiLCJ1c2VybmFtZSI6IkFsZXhhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicGFzc3dvcmQiOiJVMkZzZEdWa1gxOWtSSDEyT1FzcXRYOHlFVVhWNUFkdmJIVCtvbkRRSVRnPSIsImlzQWRtaW4iOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDIyLTA2LTEwVDE0OjU1OjM2LjIxM1oiLCJ1cGRhdGVkQXQiOiIyMDIyLTA2LTEwVDE0OjU1OjM2LjIxM1oiLCJfX3YiOjB9LCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjU0ODcyOTQzLCJleHAiOjE2NTUxMzIxNDN9.C0dZUuELutsv5XyRbtrMano9nonOhg0yOpIZ4LkXYpA"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});;