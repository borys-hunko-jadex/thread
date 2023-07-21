import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();

const configService = new ConfigService();
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.getOrThrow('DB_HOST'),
  username: configService.getOrThrow('DB_USERNAME'),
  password: configService.getOrThrow('DB_PASSWORD'),
  database: configService.getOrThrow('DB_DATABASE_NAME'),
  migrationsTableName: 'typeorm_migrations',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
};

console.log('datasource-options1', dataSourceOptions);

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
