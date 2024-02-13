import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export const OrderTableRow = () => {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search size={16} />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        #123456789
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Leonardo Merlo Primieri</TableCell>
      <TableCell className="font-medium">R$ 149,99</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight size={16} className="mr-2" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X size={16} className="mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
