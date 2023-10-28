import Localbase from "localbase"

export default class {
  constructor({ endpoint, storename, primaryKey }) {
    endpoint
    storename
    primaryKey
    this.state = {}
    this.getters = {}
    this.actions = {
      async findCachedByid(context, id) {
        context
        let db = new Localbase("db")
        db.config.debug = false
        let record = await db
          .collection(storename)
          .limit(1)
          .doc({ [primaryKey]: id })
          .get()
        return record
      },
      async findCachedByfilter(context, filter) {
        context
        let db = new Localbase("db")
        db.config.debug = false
        let record = await db
          .collection(storename)
          .limit(1)
          .doc(filter)
          .get()
        return record
      },
    }
    this.mutations = {
      
    }
  }
}
