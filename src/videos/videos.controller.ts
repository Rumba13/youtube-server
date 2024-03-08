import { Controller, Get, Header } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller()
export class VideosController {
  constructor(private videosService: VideosService) {}

  @Get('/recommended-videos')
  async findRecommendedVideos() {
    return await this.videosService.loadRecommendedVideos();
  }

  @Get('/video-tags')
  async findVideoTags() {
    return await this.videosService.loadVideoTags();
  }
}
