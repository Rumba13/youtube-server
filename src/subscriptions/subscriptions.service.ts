import { Injectable } from '@nestjs/common';
import { Subscription } from './subscription.interface';

@Injectable()
export class SubscriptionsService {
  //TODO rename Subscriptions to channels
  private readonly subscriptions: Subscription[] = [
    {
      title: 'Kabanus',
      icon: `${process.env.APP_URL}/ahegao-1.jpg`,
      isNewVideo: false,
      isStream: false,
      id: '@Eva',
    },
    {
      title: 'DimkaTv',
      icon: `${process.env.APP_URL}/ahegao-2.jpg`,
      isNewVideo: false,
      isStream: false,
      id: '@Dima',
    },
    {
      title: 'ZVERI',
      icon: `${process.env.APP_URL}/ahegao-3.jpg`,
      isNewVideo: false,
      isStream: false,
      id: '@ZVERI',
    },
    {
      title: 'Kabanus',
      icon: `${process.env.APP_URL}/ahegao-1.jpg`,
      isNewVideo: false,
      isStream: false,
      id: '@Kabanus',
    },
    {
      title: 'DimkaTv',
      icon: `${process.env.APP_URL}/ahegao-2.jpg`,
      isNewVideo: false,
      isStream: false,
      id: '@Dimka',
    },
    {
      title: '@ZVERI',
      icon: `${process.env.APP_URL}/ahegao-3.jpg`,
      isNewVideo: false,
      isStream: false,
      id: '@ZVERI',
    },
    {
      title: 'Kabanus',
      icon: `${process.env.APP_URL}/ahegao-1.jpg`,
      isNewVideo: false,
      isStream: false,
      id: '@Kabanus',
    },
    {
      title: 'DimkaTv',
      icon: `${process.env.APP_URL}/ahegao-2.jpg`,
      isNewVideo: false,
      isStream: false,
      id: '@Dima',
    },
    {
      title: 'ZVERI',
      icon: `${process.env.APP_URL}/ahegao-3.jpg`,
      isNewVideo: false,
      isStream: false,
      id: '@ZVERI',
    },
    {
      title: 'ZVERI',
      icon: `${process.env.APP_URL}/ahegao-3.jpg`,
      isNewVideo: false,
      isStream: false,
      id: '@ZVERI',
    },
    {
      title: 'ZVERI',
      icon: `${process.env.APP_URL}/ahegao-3.jpg`,
      isNewVideo: false,
      isStream: false,
      id: '@ZVERI',
    },
    {
      title: 'ZVERI',
      icon: `${process.env.APP_URL}/ahegao-3.jpg`,
      isNewVideo: false,
      isStream: false,
      id: '@ZVERI',
    },
  ];
  public async getUserSubscriptions(): Promise<Subscription[]> {
    return this.subscriptions;
  }
  public async findOne(channelId: string) {
    return this.subscriptions.find((channel) => channel.id === channelId);
  }
}
