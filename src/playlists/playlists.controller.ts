import { Controller, Get } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { Playlist } from './playlist.interface';

@Controller()
export class PlaylistsController {
  constructor(private playlistsService: PlaylistsService) {}
  @Get('/playlists')
  async findAll(): Promise<Playlist[]> {
    return await this.playlistsService.getPlaylists();
  }
}
