import { httpClient } from '@/lib/http-client'

export type SignInBody = {
  email: string
}

export const signIn = async ({ email }: SignInBody) => {
  const response = await httpClient.post('/authenticate', {
    email,
  })

  return response.data
}
