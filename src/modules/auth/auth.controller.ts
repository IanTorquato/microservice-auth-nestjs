import { Controller, Logger, Post, Request, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './Local-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {
    // Empty
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth')
  async login(@Request() request) {
    return this.authService.login(request.user);
  }

  @MessagePattern({ role: 'auth', cmd: 'check' })
  async loggedIn(data) {
    try {
      const res = this.authService.validateToken(data.jwt);

      return res;
    } catch (error) {
      Logger.log(error);
      return false;
    }
  }
}
