import { httpClient } from '@/lib/http-client'

export type GetManagedRestaurantResponse = {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export const getManagedRestaurant = async () => {
  const response = await httpClient.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )
  return response.data
}
