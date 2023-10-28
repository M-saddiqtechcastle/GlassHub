import moment from "moment"
import axios from "axios"

async function processSync({
  userSessionToken,
  siteid,
  companyid,
  timeStamp,
  pollTime = 60,
  page = 5000,
  storeItem,
  storeObject,
  commitFunction,
}) {
  let now = parseInt(Date.now())
  let momentnow = moment(now)
  let nextrun = moment(parseInt(timeStamp)).add(pollTime, "seconds")

  if (!timeStamp || nextrun.isBefore(momentnow)) {
    let query = ``
    if (storeObject.siteLevel) {
      query = `${storeObject.tablePrefix}.siteid = ${siteid} `
    }

    if (storeObject.companyLevel) {
      if (query !== ``) {
        query += ` AND `
      }
      query = `${storeObject.tablePrefix}.companyid = ${companyid} `
    }

    if (timeStamp !== null && timeStamp !== "null") {
      if (query !== ``) {
        query += ` AND `
      }

      // if null get everything else get anything edited after last sync
      query += `${storeObject.tablePrefix}.modifieddatetime >= '${moment(
        parseInt(timeStamp)
      ).format(`YYYY-MM-DD HH:mm:ss`)}'`
    }

    // need to add paging function here
    page

    let APICall = {
      callmethod: storeObject.method,
      rp: 99999,
      token: userSessionToken,
      query: query,
      accesstype: 2,
    }
console.log('test')
    let res = await axios.post(storeObject.controller, APICall)

    if (res.data) {
      res.data.LastSyncTimeStamp = now
      commitFunction({
        data: res.data,
        store: `${storeObject.syncCommitFunctionName}`,
        storeItem: storeItem,
        storeObject: storeObject,
      })
    } else {
      console.log(res, storeItem)
    }
  }
}

async function processOutboundAPICall(APICall) {
  let res = await axios.post(APICall.url, APICall.data)
  console.log(res)
}

export default {
  processSync,
  processOutboundAPICall,
}
