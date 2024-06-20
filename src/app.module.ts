import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users/users.service';
import * as process from 'process';
import { AuthModule } from './auth/auth.module';
import { VideosModule } from './videos/videos.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { NotificationsModule } from './notifications/notifications.module';
import { SearchModule } from './search/search.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { AuthMiddleware } from './auth/auth-middleware.service';
import { VideosController } from './videos/videos.controller';

@Module({
 imports: [
  ConfigModule.forRoot(),
  JwtModule.register({
   secret: process.env.JWT_SECRET,
   global: true,
   signOptions: { expiresIn: '99999s' },
  }),
  ServeStaticModule.forRoot({
   rootPath: join(__dirname, '..', '/static'),

  }),
  AuthModule,
  VideosModule,
  NotificationsModule,
  SearchModule,
  SubscriptionsModule,
  PlaylistsModule,
 ],
 controllers: [AppController],
 providers: [AppService, UsersService],
})
export class AppModule implements NestModule {
 configure(consumer: MiddlewareConsumer): any {
  consumer.apply(AuthMiddleware).forRoutes(VideosController);
 }
}
