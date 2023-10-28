import axios from "axios"

export default class {
  constructor({ endpoint, storename, primaryKey }) {
    this.state = {
      pageMode: "view",
      endpoint: endpoint,
      storename: storename,
      primaryKey: primaryKey,
      currentRecord: {},
      data: {},
      errors: {},
      total: 0,
      callmethod: "getdata",
      rp: 12,
      token: null,
      query: "",
      queryparams: "",
      page: 1,
      sortname: "", // field to sort on
      sortorder: "", // ASC / DESC
      datainrows: true, // data in row rows not cell field
      gridid: "",
      instance: "",
      columns: [],
      pageView: "list",
    }
    this.getters = {
      getByid: (state) => (id) =>
        state[this.storename].find((o) => o.id === id),
      getData: (state) => state.data,
      getPage: (state) => state.page,
      getTotal: (state) => state.total,
      getColumns: (state) => state.columns,
      getPageMode: (state) => state.pageMode,
      getCurrentRecord: (state) => state.currentRecord,
      getErrors: (state) => state.errors,
      getPageView: (state) => state.pageView,
    }
    this.actions = {
      async importjson(context) {
        let APICall = {
          callmethod: "importjsonfile",
          token: this.getters["userSession/getUserSessionToken"],
        }

        let res = await axios.post(context.state.endpoint, APICall)
        return res.data
      },
      async exportjson(context) {
        let APICall = {
          callmethod: "exportjsonfile",
          token: this.getters["userSession/getUserSessionToken"],
        }
        let res = await axios.post(context.state.endpoint, APICall)
        return res.data
      },
      async fetch(context, payload) {
        let APICall = {
          callmethod: "getdata",
          rp: 10,
          token: this.getters["userSession/getUserSessionToken"],
          query: "",
          queryparams: [],
          page: 1,
          sortname: "", // field to sort on
          sortorder: "", // ASC / DESC
          datainrows: true, // data in row rows not cell field
          gridid: "",
          instance: "",
        }

        const res = await axios.post(context.state.endpoint, {
          ...APICall,
          ...payload,
        })

        this.commit(`${context.state.storename}/storedata`, res.data.rows)
        this.commit(`${context.state.storename}/storepage`, res.data.page)
        this.commit(`${context.state.storename}/storetotal`, res.data.total)
        return res
      },
      async FetchById(context, id) {
        let APICall = {
          callmethod: "getrecordbyID",
          id: id,
          token: this.getters["userSession/getUserSessionToken"],
        }

        let res = await axios.post(context.state.endpoint, APICall)

        if (typeof res.data === "string") console.log("fetch error" + res.data)

        context.commit("setCurrentRecord", res.data)
        return res.data
      },
      async Fetchjsgriduserfields(context, payload) {
        let APICall = {
          callmethod: "getfieldlistjsgrid",
          token: this.getters["userSession/getUserSessionToken"],
          datainrows: true, // data in row rows not cell field
          gridid: "",
          instance: 0,
        }

        const res = await axios.post(context.state.endpoint, {
          ...APICall,
          ...payload,
        })

        if (typeof res.data === "string")
          console.log("fetch Fetchjsgriduserfields" + res.data)

        this.commit(
          `${context.state.storename}/storejsgriduserfields`,
          res.data
        )

        return res
      },
      async add(context, payload) {
        let APICall = {
          callmethod: "addrecord",
          token: this.getters["userSession/getUserSessionToken"],
          dataval: JSON.stringify(payload),
        }

        const res = await axios.post(context.state.endpoint, { ...APICall })
        context.commit("setCurrentRecord", res.data.dataset)
        context.commit("setErrors", res.data.errors)
        return res.data
      },
      async update(context, payload) {
        let APICall = {
          callmethod: "editrecord",
          token: this.getters["userSession/getUserSessionToken"],
          dataval: JSON.stringify(payload),
        }

        const res = await axios.post(context.state.endpoint, { ...APICall })

        context.commit("setCurrentRecord", res.data.dataset)
        context.commit("setErrors", res.data.errors)
        return res.data
      },
      async delete(context, payload) {
        let APICall = {
          callmethod: "deleterecord",
          token: this.getters["userSession/getUserSessionToken"],
          id: 0,
        }

        const res = await axios.post(context.state.endpoint, {
          ...APICall,
          ...payload,
        })

        let returnValue = {
          data: res.data,
          success: res.data.errors.length === 0,
        }

        return returnValue
      },
    }
    this.mutations = {
      storedata(state, data) {
        state.data = data
      },
      storepage(state, page) {
        state.page = page
      },
      storetotal(state, total) {
        state.total = total
      },
      storejsgriduserfields(state, columns) {
        state.columns = columns
      },
      setPageMode(state, mode) {
        state.pageMode = mode
      },
      setCurrentRecord(state, currentRecord) {
        state.currentRecord = currentRecord
      },
      setErrors(state, errors) {
        state.errors = errors
      },
      setPageView(state, view) {
        state.pageView = view
      },
    }
  }
}
