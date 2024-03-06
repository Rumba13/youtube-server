import { Controller, Get } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { Subscription } from './subscription.interface';

@Controller()
export class SubscriptionsController {
  constructor(private subscriptionsService: SubscriptionsService) {}
  @Get('subscriptions')
  async findAll(): Promise<Subscription[]> {
    return await this.subscriptionsService.getUserSubscriptions();
  }
}
