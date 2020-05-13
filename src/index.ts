import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'

const axios = (config: AxiosRequestConfig) => {
  processConfig(config)
  xhr(config)
}

const processConfig = (config: AxiosRequestConfig): void => {
  config.url = transformUrl(config)
}

const transformUrl = (config: AxiosRequestConfig): string => {
  const { url, params } = config
  return buildURL(url, params)
}

export default axios
