import axios from 'axios';

const API_KEY = '35924349-e744a5a24a3ba0b665be73a1d';
const URL = 'https://pixabay.com/api/';

const handleSearchHits = async request => {
  const result = await axios.get(URL, {
    params: {
      key: API_KEY,
      q: request,
      page: 1,
      per_page: 12,
    },
  });
  if (result.status === 200) {
    return result;
  }
  return Promise.reject(
    new Error(`${request} Wrong request!! Nothing was found on your request. `)
  );
};

export default handleSearchHits;
