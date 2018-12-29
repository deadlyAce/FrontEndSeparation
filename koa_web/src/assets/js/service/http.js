import axios from 'axios';

let portService = {
  getMess: function() {
    let messUrl = '/api/users';
    return axios.get(messUrl);
  }
};

export default portService;
