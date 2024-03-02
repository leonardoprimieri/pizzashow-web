import { z } from 'zod'

export const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
})

export type StoreProfile = z.infer<typeof storeProfileSchema>
