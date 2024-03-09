import { Injectable } from '@nestjs/common';
import { Video } from './video.interface';
import { VideoTag } from './video-tag.interface';
import * as process from 'process';
import { User } from '../users/user.interface';

@Injectable()
export class VideosService {
  private readonly videos: Video[] = [
    {
      id: '1',
      channelId: '@Eva',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-1.jpeg`,
      releaseDate: new Date('Jan 30, 2024 16:54:00'),
      title: 'Вич доктор перекурил НОВУЮ мету. DOTA 2',
      views: 6500,
    },
    {
      id: '2',
      channelId: '@Dima',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-2.jpg`,
      releaseDate: new Date('Nov 17, 2021 03:24:00'),
      title: 'Вич-Доктор разносит кабины, +800 к аналу тотема',
      views: 100000,
    },
    {
      id: '3',
      channelId: '@ZVERI',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-3.jpg`,
      releaseDate: new Date('Jan 30, 2023 03:24:00'),
      title: 'Ауф братва мы богаты, го на гелике в МАСКВУ, Разябём усё',
      views: 1500000,
    },
    {
      id: '4',
      channelId: '@Eva',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-4.jpg`,
      releaseDate: new Date('Jan 30, 2024 03:24:00'),
      title: 'Жалкий свин презренно существует',
      views: 2,
    },
    {
      id: '5',
      channelId: '@Kabanus',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-5.jpg`,
      releaseDate: new Date('Sep 30, 2023 03:24:00'),
      title: 'Замотевский-Алкаш смеет посягать на бутылку водки бомжей-филаматов',
      views: 58000000,
    },
    {
      id: '6',
      channelId: '@Eva',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-6.jpg`,
      releaseDate: new Date('Dec 30, 2023 03:24:00'),
      title: 'Димку приговорили к расстрелу, и царь лично очистил мир от вони',
      views: 154000,
    },
    {
      id: '7',
      channelId: '@Eva',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-7.jpg`,
      releaseDate: new Date('Dec 30, 2023 10:24:00'),
      title: 'ЦАРЯ ДОЛЖНЫ УВАЖАТЬ. Молитвы в честь царя-кирилла',
      views: 18000,
    },
    {
      id: '8',
      channelId: '@Kabanus',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-1.jpeg`,
      releaseDate: new Date('Jan 30, 2024 16:54:00'),
      title: 'Вич доктор перекурил НОВУЮ мету. DOTA 2',
      views: 6500,
    },
    {
      id: '9',
      channelId: '@Eva',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-2.jpg`,
      releaseDate: new Date('Nov 17, 2021 03:24:00'),
      title: 'Вич-Доктор разносит кабины, +800 к аналу тотема',
      views: 100000,
    },
    {
      id: '10',
      channelId: '@Eva',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-3.jpg`,
      releaseDate: new Date('Jan 30, 2023 03:24:00'),
      title: 'Ауф братва мы богаты, го на гелике в МАСКВУ, Разябём усё',
      views: 1500000,
    },
    {
      id: '11',
      channelId: '@Eva',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-4.jpg`,
      releaseDate: new Date('Jan 30, 2024 03:24:00'),
      title: 'Жалкий свин презренно существует',
      views: 2,
    },
    {
      id: '12',
      channelId: '@Eva',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-5.jpg`,
      releaseDate: new Date('Sep 30, 2023 03:24:00'),
      title: 'Замотевский-Алкаш смеет посягать на бутылку водки бомжей-филаматов',
      views: 58000000,
    },
    {
      id: '13',
      channelId: '@Kabanus',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-6.jpg`,
      releaseDate: new Date('Dec 30, 2023 03:24:00'),
      title: 'Димку приговорили к расстрелу, и царь лично очистил мир от вони',
      views: 154000,
    },
    {
      id: '14',
      channelId: '@Eva',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-7.jpg`,
      releaseDate: new Date('Dec 30, 2023 10:24:00'),
      title: 'ЦАРЯ ДОЛЖНЫ УВАЖАТЬ. Молитвы в честь царя-кирилла',
      views: 18000,
    },
    {
      id: '15',
      channelId: '@Kabanus',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-1.jpeg`,
      releaseDate: new Date('Jan 30, 2024 16:54:00'),
      title: 'Вич доктор перекурил НОВУЮ мету. DOTA 2',
      views: 6500,
    },
    {
      id: '16',
      channelId: '@Eva',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-2.jpg`,
      releaseDate: new Date('Nov 17, 2021 03:24:00'),
      title: 'Вич-Доктор разносит кабины, +800 к аналу тотема',
      views: 100000,
    },
    {
      id: '17',
      channelId: '@Eva',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-3.jpg`,
      releaseDate: new Date('Jan 30, 2023 03:24:00'),
      title: 'Ауф братва мы богаты, го на гелике в МАСКВУ, Разябём усё',
      views: 1500000,
    },
    {
      id: '18',
      channelId: '@Kabanus',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-4.jpg`,
      releaseDate: new Date('Jan 30, 2024 03:24:00'),
      title: 'Жалкий свин презренно существует',
      views: 2,
    },
    {
      id: '19',
      channelId: '@ZVERIg',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-5.jpg`,
      releaseDate: new Date('Sep 30, 2023 03:24:00'),
      title: 'Замотевский-Алкаш смеет посягать на бутылку водки бомжей-филаматов',
      views: 58000000,
    },
    {
      id: '20',
      channelId: '@Eva',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-6.jpg`,
      releaseDate: new Date('Dec 30, 2023 03:24:00'),
      title: 'Димку приговорили к расстрелу, и царь лично очистил мир от вони',
      views: 154000,
    },
    {
      id: '21',
      channelId: '@Kabanus',
      duration: 123,
      preview: `${process.env.APP_URL}/video-preview-7.jpg`,
      releaseDate: new Date('Dec 30, 2023 10:24:00'),
      title: 'ЦАРЯ ДОЛЖНЫ УВАЖАТЬ. Молитвы в честь царя-кирилла',
      views: 18000,
    },
  ];
  public async loadRecommendedVideos(user: User | null) {
    if (user === null) {
      return this.videos;
    } else {
      return [
        {
          id: '20',
          channelId: '@Eva',
          duration: 300,
          preview: `https://kartinkis.cdnbro.com/posts/53880182-fon-tiurma-12.jpg`,
          releaseDate: new Date('Dec 30, 1979 03:24:00'),
          title: 'Еву свергли и заточили в вонючем подвале. Только для своих.',
          views: 1,
        },
      ];
    }
  }
  public async loadVideoTags(): Promise<VideoTag[]> {
    return [
      { title: 'Видеоигры', id: '1' },
      { title: 'Джемы', id: '2' },
      { title: 'Музыка', id: '3' },
      { title: 'Димка с евой', id: '4' },
      { title: 'Экшен и приключение', id: '5' },
      { title: 'Дима + Ева', id: '6' },
      { title: 'Димкины фотки', id: '7' },
      { title: 'Арсен бомж', id: '8' },
    ];
  }
}
