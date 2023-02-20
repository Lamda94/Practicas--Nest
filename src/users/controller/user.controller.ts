import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private _UserService: UserService) {}
  @Get()
  getProducts() {
    return this._UserService.getAll();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    const user = this._UserService.getOne(id);
    if (!user) {
      throw new NotFoundException(`Usuario con id: ${id} no registrado.`);
    }
    return user;
  }
}
