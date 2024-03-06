import { Controller, Get } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller()
export class VideosController {
  constructor(private videosService: VideosService) {}
  @Get('/recommended-videos')
  async findRecommendedVideos() {
    return await this.videosService.loadRecommendedVideos();
  }

  @Get('/search-tags')
  async findSearchTags() {
    return await this.videosService.loadSearchTags();
  }
}
