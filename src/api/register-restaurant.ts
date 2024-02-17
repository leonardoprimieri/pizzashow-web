import { httpClient } from '@/lib/http-client'

export type RegisterRestaurantBody = {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export const registerRestaurant = async ({
  email,
  managerName,
  phone,
  restaurantName,
}: RegisterRestaurantBody) => {
  await httpClient.post('/restaurants', {
    email,
    managerName,
    phone,
    restaurantName,
  })
}
