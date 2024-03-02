import { httpClient } from '@/lib/http-client'

export const signOutService = async () => {
  await httpClient.post('/sign-out')
}
