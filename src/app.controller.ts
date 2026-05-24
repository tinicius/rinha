import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

import type { FraudScoreRequest, FraudScoreResponse } from './entities';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ready')
  getReady(): void {
    return;
  }

  @Post('fraud-score')
  @HttpCode(200)
  getFraudScore(
    @Body() request: FraudScoreRequest,
  ): Promise<FraudScoreResponse> {
    console.log(request);

    return Promise.resolve({ approved: true, fraud_score: 42 });
  }
}
