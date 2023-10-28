import Worker from 'worker-loader!./worker'
import * as Comlink from 'comlink'

const worker = Comlink.wrap(new Worker())

export const processSync = worker.processSync
export const processOutBoundTransaction = worker.processOutBoundTransaction