import axios from 'axios'

export default (params) => {
  const url = 'https://www.reddit.com/r/aww/hot.json'

  return axios.get(url, { params })
  .then((response) => Promise.resolve(response.data.data))
    .catch((error) => Promise.reject(error))
}
