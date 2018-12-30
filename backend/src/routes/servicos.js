import { ServicoController } from '../controllers/servicos_controller'
exports.servicos = [
  {
    path:'/api/servicos',
    method:'GET',
    handler: ServicoController.index
  },
  {
    path:'/api/servicos/create',
    method: 'POST',
    handler: ServicoController.create
  }
]
