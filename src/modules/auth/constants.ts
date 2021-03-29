import { ConfigService } from '@nestjs/config';

const jwtSecret = new ConfigService().get<string>('JWT_SECRET');
const jwtExpiresIn = new ConfigService().get<string>('JWT_EXPIRES_IN');

export { jwtSecret, jwtExpiresIn };
