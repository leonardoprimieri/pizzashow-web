import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { GetManagedRestaurantResponse } from '@/api/get-managed-restaurant'
import { updateStoreProfileService } from '@/api/uodate-store-profile'
import { queryClient } from '@/lib/react-query'

import { Button } from '../ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import {
  StoreProfile,
  storeProfileSchema,
} from './validation/storeProfileValidation'

export const StoreProfileDialog = () => {
  const managedRestaurant =
    queryClient.getQueryData<GetManagedRestaurantResponse>([
      'managedRestaurant',
    ])

  const form = useForm<StoreProfile>({
    values: {
      description: managedRestaurant?.description ?? '',
      name: managedRestaurant?.name ?? '',
    },
    resolver: zodResolver(storeProfileSchema),
  })

  const { mutateAsync: updateStoreProfile } = useMutation({
    mutationFn: updateStoreProfileService,
    onSuccess: (_, { description, name }) => {
      if (managedRestaurant) {
        queryClient.setQueryData(['managedRestaurant'], {
          ...managedRestaurant,
          description,
          name,
        })
      }

      toast.success('Perfil atualizado com sucesso')
    },
    onError: () => {
      toast.error('Erro ao atualizar perfil')
    },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    await updateStoreProfile(values)
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da Loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <FormProvider {...form}>
        <form onSubmit={onSubmit}>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nome
              </Label>
              <Input
                {...form.register('name')}
                id="name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Descrição
              </Label>
              <Textarea
                {...form.register('description')}
                id="description"
                className="col-span-3 h-32"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost" type="button">
                Cancelar
              </Button>
            </DialogClose>
            <Button
              type="submit"
              variant="success"
              disabled={form.formState.isSubmitting}
            >
              Salvar
            </Button>
          </DialogFooter>
        </form>
      </FormProvider>
    </DialogContent>
  )
}
