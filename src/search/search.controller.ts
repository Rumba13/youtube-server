import { Controller, Get } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller()
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get('/recent-search-history')
  findRecentSearchHistory() {
    return this.searchService.getRecentSearchHistory();
  }
}
