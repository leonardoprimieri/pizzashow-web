import { httpClient } from '@/lib/http-client'

type UpdateStoreProfileBody = {
  name: string
  description: string
}

export const updateStoreProfileService = async ({
  description,
  name,
}: UpdateStoreProfileBody) => {
  await httpClient.put('/profile', { name, description })
}
