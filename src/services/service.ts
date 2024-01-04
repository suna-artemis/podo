import axios from 'axios'
import { API_VERSION } from '../const'

const service = axios.create({
  baseURL: `https://6587f3d190fa4d3dabf946ee.mockapi.io/${API_VERSION}`,
})

export { service }
