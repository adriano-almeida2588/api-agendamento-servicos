'use strict';

import { Servico } from "../models/servicos"

export const ServicoController = {
  index: async (req, h) => {
    const servicos = await Servico.where({}).fetch({})
    return h.response({"servicos": servicos})
  },
  create: async (req, h) => {
    try {
      const retornoServico = await new Servico({descricao: "Hidratação capilar"}).save(null, {method: 'insert'})
      return h.response({"servico": retornoServico});
      
    } catch (error) {
      console.error(error.message);
            
    }
  }
}
