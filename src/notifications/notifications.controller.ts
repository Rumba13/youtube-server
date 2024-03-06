import { Controller, Get } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notification } from './notification.interface';

@Controller()
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}

  @Get('/notifications-count')
  public findNotificationsCount(): Promise<number> {
    return this.notificationsService.getNotificationsCount();
  }

  @Get('/notifications')
  public async findNotifications(): Promise<Notification[]> {
    return await this.notificationsService.getNotifications();
  }
}
