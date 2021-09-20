import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './api/user/user.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

const configService = new ConfigService();
@Module({
  imports: [
    MongooseModule.forRoot(configService.get('MONGO_URL')),
    UserModule,
    ConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
