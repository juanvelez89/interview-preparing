
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/result"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 719, hash: 'aa34e4cd585b70807fe14fbb8444ce014ea8829dabce272886774abd4f0ace12', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: 'b0a5fde61abaab8a307471f7e4f49502042e4bab07ec788b4620fd3a1cedf8a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'result/index.html': {size: 31247, hash: '3ad846e7dd1c0750be3217cdff8e287308fd56c15cf958a63103e20ae505ecfd', text: () => import('./assets-chunks/result_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31247, hash: '23a0b8b3c0e5308e3159229b52e1457baa5e60479e2d212537c2f814d256ab1c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JKH6L5QN.css': {size: 1790, hash: 'vRtH/koN4iY', text: () => import('./assets-chunks/styles-JKH6L5QN_css.mjs').then(m => m.default)}
  },
};
