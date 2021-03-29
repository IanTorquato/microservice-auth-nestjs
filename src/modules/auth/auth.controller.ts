import { Controller, Post, Request, UseGuards } from '@nestjs/common';

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
}
