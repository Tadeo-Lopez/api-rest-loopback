import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'ApiRestDatasourceMongodb',
  connector: 'mongodb',
  url: 'mongodb+srv://tadeomat1:8OWj4JXvisTKqJ9P@clusterapirest.qxqpi.mongodb.net/',
  host: '',
  port: 27017,
  user: '',
  password: '',
  database: 'ApiRestDatabase',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ApiRestDatasourceMongodbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'ApiRestDatasourceMongodb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.ApiRestDatasourceMongodb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
