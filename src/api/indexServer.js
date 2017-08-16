import server from './server'

/**
 * 对应后端涉及到用户认证的 API
 */
class IndexService {

  geTurntable() {
    return server({
      url: 'turntable',
      method: 'get'
    })
  }

  signature(url) {
    return server({
      url: 'signature',
      method: 'post',
      body: {
        url: url
      }
    })
  }

}
export default new IndexService()
