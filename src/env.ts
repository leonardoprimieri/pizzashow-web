import z from 'zod'

const envSchema = z.object({
  VITE_PORT: z.string().default('3000'),
  VITE_API_URL: z.string().url(),
})

export const env = envSchema.parse(import.meta.env)
