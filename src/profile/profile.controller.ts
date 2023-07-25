import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import IProfileService, {
  PROFILE_SERVICE,
} from './interfaces/profile.service.intreface';
import TransformResponse from '../commons/decorators/TransformResponse';
import { ProfileResponseDto } from './dto/profile.response.dto';
import { SignupRequestDto } from './dto/signup.request.dto';

@Controller('/v1/profile')
export default class ProfileController {
  constructor(
    @Inject(PROFILE_SERVICE)
    private profileService: IProfileService,
  ) {}

  @Get('/:login')
  @TransformResponse(ProfileResponseDto)
  getByLogin(@Param('login') login: string) {
    return this.profileService.findByLogin(login);
  }

  @Post()
  @TransformResponse(ProfileResponseDto)
  create(@Body() createProfileRequestDto: SignupRequestDto) {
    return this.profileService.create(createProfileRequestDto);
  }
}
