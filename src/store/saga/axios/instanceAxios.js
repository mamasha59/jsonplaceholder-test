import axios from "axios";

export const postsProject = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
  });