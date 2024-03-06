import { Injectable } from '@nestjs/common';
import { Subscription } from './subscription.interface';
import { wait } from '../wait/wait';

@Injectable()
export class SubscriptionsService {
  private readonly subscriptions: Subscription[] = [
    {
      title: 'Kabanus',
      icon: '/ahegao-1.jpg',
      isNewVideo: false,
      isStream: false,
      id: '1',
    },
    {
      title: 'DimkaTv',
      icon: '/ahegao-2.jpg',
      isNewVideo: false,
      isStream: false,
      id: '2',
    },
    {
      title: 'ZVERI',
      icon: '/ahegao-3.jpg',
      isNewVideo: false,
      isStream: false,
      id: '3',
    },
    {
      title: 'Kabanus',
      icon: '/ahegao-1.jpg',
      isNewVideo: false,
      isStream: false,
      id: '4',
    },
    {
      title: 'DimkaTv',
      icon: '/ahegao-2.jpg',
      isNewVideo: false,
      isStream: false,
      id: '5',
    },
    {
      title: 'ZVERI',
      icon: '/ahegao-3.jpg',
      isNewVideo: false,
      isStream: false,
      id: '6',
    },
    {
      title: 'Kabanus',
      icon: '/ahegao-1.jpg',
      isNewVideo: false,
      isStream: false,
      id: '7',
    },
    {
      title: 'DimkaTv',
      icon: '/ahegao-2.jpg',
      isNewVideo: false,
      isStream: false,
      id: '8',
    },
    {
      title: 'ZVERI',
      icon: '/ahegao-3.jpg',
      isNewVideo: false,
      isStream: false,
      id: '9',
    },
    {
      title: 'ZVERI',
      icon: '/ahegao-3.jpg',
      isNewVideo: false,
      isStream: false,
      id: '10',
    },
    {
      title: 'ZVERI',
      icon: '/ahegao-3.jpg',
      isNewVideo: false,
      isStream: false,
      id: '11',
    },
    {
      title: 'ZVERI',
      icon: '/ahegao-3.jpg',
      isNewVideo: false,
      isStream: false,
      id: '12',
    },
  ];
  public async getUserSubscriptions(): Promise<Subscription[]> {
    await wait(100);
    return this.subscriptions;
  }
}
