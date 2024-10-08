import { Injectable } from '@nestjs/common';
import { Playlist } from './playlist.interface';

@Injectable()
export class PlaylistsService {
  private readonly playlists: Playlist[] = [
    {
      title: 'The Talos Principle',
      href: 'https://www.youtube.com/playlist?list=PLvXNXbRfDbwWCLV_A_s1C8pPPM1iPIWZM',
    },
    {
      title: 'Eva Bed Videos',
      href: 'https://www.youtube.com/playlist?list=PLvXNXbRfDbwWCLV_A_s1C8pPPM1iPIWZM',
    },
  ];

  public async getPlaylists(): Promise<Playlist[]> {
    return this.playlists;
  }
}
