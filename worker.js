import * as Comlink from "comlink";
import syncfunctions from "./src/common/syncfunctions";
import Localbase from "localbase";

const workerFunctions = {
  processSync(input, statusUpdate, dataCommit) {
    statusUpdate({ loading: input.loading, percent: 0, text: "Starting Sync" });

    let storeList = JSON.parse(input.syncStoreListJSON);
    let totalStoresToSync = Object.keys(storeList).length
    let counter = 0;

    Object.entries(storeList).forEach((entry) => {
      counter++
      let [storeItem, storeObject] = entry;
      let percent = Math.round((counter / totalStoresToSync) * 100);
      
      statusUpdate({
        loading: input.loading,
        percent: percent,
        text: `Syncing ${storeItem}`,
      });

      syncfunctions.processSync({
        userSessionToken: input.userSessionToken,
        siteid: input.userSessionSiteid,
        companyid: input.userSessionCompanyid,
        timeStamp: input.arrSyncTimes[storeItem],
        commitFunction: dataCommit,
        storeItem: storeItem,
        storeObject: storeObject,
        pollTime: input.pollTime,
        page: input.page
      });
    });
    
    return true;
  },
  async processOutBoundTransaction(statusUpdate, dataCommit){

    statusUpdate(true) // processing outbound message

    let db = new Localbase("db");
    db.config.debug = false
    let cachedData = await db.collection("APICallCache").get()

    cachedData.forEach((cachedRecord)=>{
      let processCachedRecord = cachedRecord
      // sort callbacks
      processCachedRecord.success = (data)=>{
        dataCommit({data: data, store: cachedRecord.successAction})
      }

      processCachedRecord.error = (data)=>{
        dataCommit({data: data, store: cachedRecord.errorAction})
      }
      syncfunctions.processOutboundAPICall(processCachedRecord)
    })

    db.collection("APICallCache").delete()

    setTimeout(() => {
      statusUpdate(false) 
    }, 1000);
  },
};

Comlink.expose(workerFunctions);
