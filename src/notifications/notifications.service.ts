import { Injectable } from '@nestjs/common';
import { Notification } from './notification.interface';

@Injectable()
export class NotificationsService {
  private readonly notifications: Notification[] = [
    {
      id: '1',
      title:
        'На канале "Nostoro" идет трансляция "Просто хочу предупредить: в ромовой бабе есть немного рома, но нет бабы"',
      icon: `${process.env.APP_URL}/user-profile-icon.jpg`,
      previewImage: `${process.env.APP_URL}/preview-image.jpg`,
      releasedAgo: new Date(),
    },
    {
      id: '2',
      title:
        'На канале "Nostoro" идет трансляция "Просто хочу предупредить: в ромовой бабе есть немного рома, но нет бабы"',
      icon: `${process.env.APP_URL}/user-profile-icon.jpg`,
      previewImage: `${process.env.APP_URL}/preview-image.jpg`,
      releasedAgo: new Date(),
    },
    {
      id: '3',
      title:
        'На канале "GayBomj" идет трансляция "Просто хочу предупредить: в ромовой бабе есть немного рома, но нет бабы"',
      icon: `${process.env.APP_URL}/user-profile-icon.jpg`,
      previewImage: `${process.env.APP_URL}/preview-image.jpg`,
      releasedAgo: new Date(),
    },
  ];

  public async getNotifications(): Promise<Notification[]> {
    return this.notifications;
  }
  public async getNotificationsCount(): Promise<number> {
    return this.notifications.length;
  }
}
