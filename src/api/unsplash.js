import axios from 'axios';

// Create a new instance of axios with a custom config
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 681e2f5134297cd742a890f3fff16ff77b5089490a714d08b513a83fddb25399'
  }
});
