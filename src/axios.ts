import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/utils'

const createInstance = (): AxiosInstance => {
  const context = new Axios()

  // Here this instance is a request function in Axios, and it bind to the context instance
  const instance = Axios.prototype.request.bind(context)

  // Here we copy all prototype function from the context to the instance, so this instance would have all the functions in the context instance
  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
