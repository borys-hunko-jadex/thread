import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from './profile.entity';
import { PROFILE_REPOSITORY } from './interfaces/profile.repository.interface';
import { ProfileRepository } from './profile.repository';
import { PROFILE_SERVICE } from './interfaces/profile.service.intreface';
import ProfileService from './profile.service';
import ProfileController from './profile.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity])],
  providers: [
    {
      provide: PROFILE_REPOSITORY,
      useClass: ProfileRepository,
    },
    {
      provide: PROFILE_SERVICE,
      useClass: ProfileService,
    },
  ],
  exports: [
    {
      provide: PROFILE_SERVICE,
      useClass: ProfileService,
    },
  ],
  controllers: [ProfileController],
})
export class ProfileModule {}
