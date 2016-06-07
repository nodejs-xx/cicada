'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  name: 'cicada',
  prefix: 'ci_',
  encoding: 'utf8',
  nums_per_page: 10,
  cache: {
    on: true,
    type: '',
    timeout: 3600
  },
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '',
      user: 'root',
      pwd: ''
    },
    sqlite: {
      path: think.ROOT_PATH + '/sqlite'
    }
  }
};