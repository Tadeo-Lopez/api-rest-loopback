import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Facultad extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  ID?: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Facultad>) {
    super(data);
  }
}

export interface FacultadRelations {
  // describe navigational properties here
}

export type FacultadWithRelations = Facultad & FacultadRelations;
