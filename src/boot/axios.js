import { boot } from 'quasar/wrappers'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://locadora-ryan-back.altislabtech.com.br',
  headers: { "Content-Type": "application/json" }
})
export default boot(({ app }) => {
  app.config.globalProperties.$api = api
  app.provide('api', api)
})

export { api }
