import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();

const configService = new ConfigService();
export const appDataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.getOrThrow('DB_HOST'),
  username: configService.getOrThrow('DB_USERNAME'),
  password: configService.getOrThrow('DB_PASSWORD'),
  database: configService.getOrThrow('DB_DATABASE_NAME'),
  migrationsTableName: 'typeorm_migrations',
  entities: [__dirname + '/**/*.entity.js'],
  migrations: [__dirname + '/migrations/*.js'],
  synchronize: false,
};

const migrationsDataSourceOptions: DataSourceOptions = {
  ...appDataSourceOptions,
  host: configService.getOrThrow('DB_HOST_EXPOSED'),
  port: configService.getOrThrow('DB_PORT_EXPOSED'),
};

console.log(
  'datasource-options',
  appDataSourceOptions,
  migrationsDataSourceOptions,
);

const dataSource = new DataSource(migrationsDataSourceOptions);

export default dataSource;
