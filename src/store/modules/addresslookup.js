import axios from "axios"

const state = {
  apiKey: "Daalo7dqZEWCNDiczweU8w26218",
  mapsAPIKey: "AIzaSyD4AAjdYLB2aCkum1MDJMgliqw70j6MNms",
  searchAddress: {
    postcode: "",
    line1: "",
  },
  lookupAddressList: [],
  lookupError: {},
  selectedAddress:{},
}

const getters = {
  getLookupAddressList: (state) => state.lookupAddressList,
  getAPIkey: (state) => state.apiKey,
  getMapsAPIKey: (state)=> state.mapsAPIKey,
  getLookupError: (state) => state.lookupError,
  getSelectedAddress: (state) => state.selectedAddress,
}

const actions = {
  async lookupAddresses(context, { postcode }) {
    context.commit("setLookupError", {})
    axios
      .get(
        `https://api.getaddress.io/find/${postcode}?api-key=${context.getters.getAPIkey}&expand=true`
      ,{
        withCredentials: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
      })
      .then(function (response) {
        console.log(response)
        let addresses = response.data.addresses.map((address)=>{

          address.postcode = response.data.postcode
          address.longitude = response.data.longitude
          address.latitude = response.data.latitude
          address.addressline1 = address.line_1,
          address.addressline2 = address.line_2,
          address.addresstown = address.town_or_city
          address.addresscounty = address.county
          address.addresscountry = address.country
          address.addresspostcode = response.data.postcode
          address.addresslat = response.data.latitude
          address.addresslong = response.data.longitude
          return address
        })
        context.commit("setLookupAddressList", addresses)
      })
      .catch(function (error) {
        error
        context.commit("setLookupError", {postcode:"Error Postcode search failed"})
      })
  },
}

const mutations = {
    setLookupAddressList(state, payload){
        state.lookupAddressList  = payload
    },
    setLookupError(state, error){
        state.lookupError = error
    },
    setSelectedAddress(state, selectedAddress){
      state.selectedAddress = selectedAddress
    }
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
}
