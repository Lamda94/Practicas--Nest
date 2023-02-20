import { Injectable } from '@nestjs/common';
import { user } from '../entities/user.entity';

@Injectable()
export class UserService {
  private users: user[] = [
    {
      id: '1',
      name: 'Maria',
      lastname: 'Martines',
      rol: 1,
    },
    {
      id: '2',
      name: 'Andres',
      lastname: 'Tatis',
      rol: 1,
    },
    {
      id: '3',
      name: 'Yuris',
      lastname: 'Solar',
      rol: 1,
    },
  ];

  getAll() {
    return this.users;
  }

  getOne(id: string) {
    return this.users.find((item) => item.id == id);
  }
}
