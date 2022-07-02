# issue

## npm ERR! RequestError: read ETIMEDOUT

```bash

apple:bec zebra$ npm i
npm ERR! code 1
npm ERR! path /Users/zebra/huibunny/bec/node_modules/electron
npm ERR! command failed
npm ERR! command sh -c node install.js
npm ERR! RequestError: read ETIMEDOUT
npm ERR!     at ClientRequest.<anonymous> (/Users/zebra/huibunny/bec/node_modules/got/source/request-as-event-emitter.js:178:14)
npm ERR!     at Object.onceWrapper (node:events:642:26)
npm ERR!     at ClientRequest.emit (node:events:539:35)
npm ERR!     at ClientRequest.origin.emit (/Users/zebra/huibunny/bec/node_modules/@szmarczak/http-timer/source/index.js:37:11)
npm ERR!     at TLSSocket.socketErrorListener (node:_http_client:454:9)
npm ERR!     at TLSSocket.emit (node:events:527:28)
npm ERR!     at emitErrorNT (node:internal/streams/destroy:164:8)
npm ERR!     at emitErrorCloseNT (node:internal/streams/destroy:129:3)
npm ERR!     at processTicksAndRejections (node:internal/process/task_queues:83:21)

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/zebra/.npm/_logs/2022-07-02T03_12_52_714Z-debug-0.log


$ nrm ls

  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

apple:bec zebra$ nrm use taobao


   Registry has been set to: https://registry.npmmirror.com/

apple:bec zebra$ npm i

added 91 packages in 29m

```

## electron: --openssl-legacy-provider is not allowed in NODE_OPTIONS
apple:bec zebra$ echo $NODE_OPTIONS
--openssl-legacy-provider
apple:bec zebra$ unset NODE_OPTIONS
apple:bec zebra$ echo $NODE_OPTIONS

### reference

* [Problem : node: --openssl-legacy-provider is not allowed in NODE_OPTIONS](https://www.reddit.com/r/node/comments/setruh/problem_node_openssllegacyprovider_is_not_allowed/)
