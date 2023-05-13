import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/utils/utils';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username, password) {
    try {
      const user = await this.usersService.findOne(username, true);
      if (!user || !(await comparePassword(password, user.password))) {
        throw new UnauthorizedException();
      }
      const payload = { username: user.username };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (e) {
      console.log('error', e);
    }
  }
}
