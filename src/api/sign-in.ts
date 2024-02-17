import { httpClient } from '@/lib/http-client'

export type SignInBody = {
  email: string
}

export const signIn = async ({ email }: SignInBody) => {
  await httpClient.post('/authenticate', {
    email,
  })
}
