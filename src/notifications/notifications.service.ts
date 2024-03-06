import { Injectable } from '@nestjs/common';
import { Notification } from './notification.interface';
import { wait } from '../wait/wait';

@Injectable()
export class NotificationsService {
  private readonly notifications: Notification[] = [
    {
      id: '1',
      title:
        'На канале "Nostoro" идет трансляция "Просто хочу предупредить: в ромовой бабе есть немного рома, но нет бабы"',
      icon: '/user-profile-icon.jpg',
      previewImage: '/preview-image.jpg',
      releasedAgo: new Date(),
    },
    {
      id: '2',
      title:
        'На канале "Nostoro" идет трансляция "Просто хочу предупредить: в ромовой бабе есть немного рома, но нет бабы"',
      icon: '/user-profile-icon.jpg',
      previewImage: '/preview-image.jpg',
      releasedAgo: new Date(),
    },
    {
      id: '3',
      title:
        'На канале "GayBomj" идет трансляция "Просто хочу предупредить: в ромовой бабе есть немного рома, но нет бабы"',
      icon: '/user-profile-icon.jpg',
      previewImage: '/preview-image.jpg',
      releasedAgo: new Date(),
    },
  ];

  public async getNotifications(): Promise<Notification[]> {
    await wait(300);
    return this.notifications;
  }
  public async getNotificationsCount(): Promise<number> {
    return this.notifications.length;
  }
}
