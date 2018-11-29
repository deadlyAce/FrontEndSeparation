import axios from 'axios';

let portService = {
  getMess: function() {
    let messUrl = '/api/mess';
    return axios.get(messUrl);
  }
};

export default portService;
