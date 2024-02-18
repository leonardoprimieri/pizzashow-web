import axios from 'axios'

import { env } from '@/env'

export const httpClient = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

if (env.VITE_ENABLE_API_DELAY) {
  httpClient.interceptors.response.use(
    (response) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(response)
        }, 1000)
      }),
  )
}
