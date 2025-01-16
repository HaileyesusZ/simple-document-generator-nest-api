import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import axios from 'axios';
import { NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(next: NextFunction) {
    try {
      const response = await axios.post(
        'https://util.devi.tools/api/v2/authenticate',
        {
          email: 'sampleemail@gmail.com',
          password: 'password123',
        },
      );

      if (response.status === 200) {
        return next();
      }

      throw new UnauthorizedException('Invalid email or password');
    } catch (error) {
      console.error('Authentication error:', error.message);
      throw new UnauthorizedException('Authentication failed');
    }
  }
}
