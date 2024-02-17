import { httpClient } from '@/lib/axios'

export type SignInBody = {
  email: string
}

export const signIn = async ({ email }: SignInBody) => {
  await httpClient.post('/authenticate', {
    email,
  })
}
