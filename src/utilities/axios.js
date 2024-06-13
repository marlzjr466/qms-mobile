import axios from 'axios'
import _ from 'lodash'

export default baseApi = url => {
  const instance = axios.create({
    baseURL: `http://${url}:8000`,
    timeout: 10000,
    headers: {}
  })

  const successResponse = response => {
    const status = _.get(response, 'status')
    const customMessage = `${_.toUpper(response.config.method)} ${response.config.url}`

    if (status !== 200) {
      throw new Error(`Client responded with a status: "${status}" on ${customMessage}`)
    }

    return response
  }

  const errorResponse = err => {
    throw new Error(err.response.data)
  }

  instance.interceptors.response.use(
    successResponse,
    errorResponse
  )

  return instance
}