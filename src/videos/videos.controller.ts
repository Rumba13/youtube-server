import { Controller, Get, Header, Req } from '@nestjs/common';
import { VideosService } from './videos.service';
import { Request } from 'express';

@Controller()
export class VideosController {
  constructor(private videosService: VideosService) {}

  @Get('/recommended-videos')
  async findRecommendedVideos(@Req() request: Request) {
    return await this.videosService.loadRecommendedVideos(request['user']);
  }

  @Get('/video-tags')
  async findVideoTags() {
    return await this.videosService.loadVideoTags();
  }
}
