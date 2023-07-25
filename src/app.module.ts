import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appDataSourceOptions } from '../datasource';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...appDataSourceOptions,
    }),
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
