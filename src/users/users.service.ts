import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { UserAlreadyExists } from './user-already-exists.error';

@Injectable()
export class UsersService {
  private noUserIcon =
    'https://avatars.mds.yandex.net/i?id=37ba676865d689fbcf54b2d178490da59703f203-11459613-images-thumbs&n=13';
  private users: User[] = [
    {
      userId: '1',
      name: 'Dima',
      icon: 'https://avatars.steamstatic.com/c14c34568913b6f5582af5d8422ec4335c8932c8_full.jpg',
      password: '$argon2i$v=19$m=65536,t=3,p=4$OB7tvHolkMFGncJXLipjMA$zIPdP9GA6s997WwRIvjkc6yeX3oHulACG+lExAHwQhg',
      //123
    },
    {
      userId: '2',
      name: 'Lera',
      icon: 'https://www.lucky-print42.ru/image/cache/data/na-avto/30869_vinil-650x489.jpg',
      password: '$argon2i$v=19$m=65536,t=3,p=4$sifmW/G/EqrlzL2qsyi45Q$WyesyVHtYh/3Vice8lb930vKQRfnUveshi+fxt+ylYg',
      //88
    },
  ];

  private generateUserId() {
    return this.users[this.users.length - 1].userId + 1;
  }
  public findOne(userName: string): User | null {
    return this.users.find((user) => user.name === userName) || null;
  }
  public create(userName: string, hashedPassword: string) {
    if (this.findOne(userName)) {
      throw new UserAlreadyExists();
    }

    const newUser: User = {
      userId: this.generateUserId(),
      name: userName,
      password: hashedPassword,
      icon: this.noUserIcon,
    };

    this.users.push(newUser);

    return newUser;
  }
}
