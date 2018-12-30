export const ServicoController = {
  index: async (req, h) => {
    return h.response({"Mensagem":"Teste"})
  },
  create: async (req, h) => {
    return h.response({"sucesso":"Serviço cadastrado cokm sucesso!"});
  }
}
