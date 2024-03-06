import { Injectable } from '@nestjs/common';
import { SearchHistory } from './search-history.interface';

@Injectable()
export class SearchService {
  private readonly searchHistory: SearchHistory[] = [
    { searchQuery: 'Гей порно Димка' },
    { searchQuery: 'найс играешь' },
    { searchQuery: 'влад бомжекрут' },
    { searchQuery: 'Ева песни до утра' },
    { searchQuery: 'дима с евой' },
    { searchQuery: 'Баллада о бомже-горохе' },
    { searchQuery: 'Гей порно Димка' },
    { searchQuery: '8800853535' },
    { searchQuery: 'Как же подружиться с человеком?' },
    { searchQuery: 'zxc cursed' },
    { searchQuery: '123' },
    { searchQuery: 'Ваш фонтан - ваш враг' },
    { searchQuery: 'Гей порно Димка' },
    { searchQuery: 'найс играешь' },
    { searchQuery: 'влад бомжекрут' },
    { searchQuery: 'Ева песни до утра' },
    { searchQuery: 'дима с евой' },
    { searchQuery: 'Баллада о бомже-горохе' },
    { searchQuery: 'Гей порно Димка' },
    { searchQuery: '8800853535' },
    { searchQuery: 'Как же подружиться с человеком?' },
    { searchQuery: 'zxc cursed' },
    { searchQuery: '123' },
    { searchQuery: 'Ваш фонтан - ваш враг' },
  ];

  public getRecentSearchHistory() {
    return this.searchHistory.slice(-10);
  }
}
