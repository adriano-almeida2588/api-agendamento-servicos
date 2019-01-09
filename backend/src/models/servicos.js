import { Bookshelf } from "../database";
import { Profissional } from "../models/profissional"

class Servico extends Bookshelf.Model {
    get tableName(){
        return 'servicos'
    }
    get profissional() {
        return this.belongsTo(Profissional)
    }
}

export default Bookshelf.model('Servico', Servico)