import { BaseEntity, DeepPartial, FindOneOptions, FindOptionsWhere, In, Repository } from 'typeorm';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { BaseInterfaceRepository } from '@app/common/base/base.interface';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseAbstractRepository<T extends BaseEntity> implements BaseInterfaceRepository<T> {
  private entity: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  public async update(condition: FindOptionsWhere<T>, partialEntity: QueryDeepPartialEntity<T>) {
    return await this.entity.update(condition, partialEntity);
  }

  public async delete(condition: FindOptionsWhere<T>) {
    return await this.entity.delete(condition);
  }

  public async save(data: DeepPartial<T>): Promise<T> {
    return await this.entity.save(data);
  }

  public async saveMany(data: DeepPartial<T>[]): Promise<T[]> {
    return this.entity.save(data);
  }

  public create(data: DeepPartial<T>): T {
    return this.entity.create(data);
  }

  public createMany(data: DeepPartial<T>[]): T[] {
    return this.entity.create(data);
  }

  public async findOneById(data: FindOptionsWhere<T>): Promise<T> {
    return await this.entity.findOneBy(data);
  }

  public async findByCondition(filterCondition: FindOneOptions<T>): Promise<T> {
    return await this.entity.findOne(filterCondition);
  }

  public async findWithRelations(relations: FindManyOptions<T>): Promise<T[]> {
    return await this.entity.find(relations);
  }

  public async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return await this.entity.find(options);
  }

  public async remove(data: T): Promise<T> {
    return await this.entity.remove(data);
  }

  public async preload(entityLike: DeepPartial<T>): Promise<T> {
    return await this.entity.preload(entityLike);
  }

  public async findOne(options: FindOneOptions<T>): Promise<T> {
    return this.entity.findOne(options);
  }
}
