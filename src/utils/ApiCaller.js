import axios from 'axios'

const ApiCaller = (url,method,data,host=process.env.REACT_APP_TODO_API) => {
  return axios(
    {
        url:`${host}${url}`,method,data
    }
  )
}

export default ApiCaller
