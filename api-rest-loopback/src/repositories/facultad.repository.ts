import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ApiRestDatasourceMongodbDataSource} from '../datasources';
import {Facultad, FacultadRelations} from '../models';

export class FacultadRepository extends DefaultCrudRepository<
  Facultad,
  typeof Facultad.prototype.ID,
  FacultadRelations
> {
  constructor(
    @inject('datasources.ApiRestDatasourceMongodb') dataSource: ApiRestDatasourceMongodbDataSource,
  ) {
    super(Facultad, dataSource);
  }
}
