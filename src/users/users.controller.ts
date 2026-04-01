import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    //GET /users or /users?role=value
    @Get()
    findAll(@Query('role') role?: 'ADMIN' | 'STUDENT' | 'PROFESSOR') {
        return this.usersService.findAll(role);
    }

    //GET /users/:randomId
    @Get(':randomId')
    findOne(@Param('randomId') randomId: string) {
        return this.usersService.findOne(randomId);
    }

    //POST /users
    @Post()
    create(@Body(ValidationPipe) createUser: CreateUserDto) {
        return this.usersService.create(createUser);
    }

    //PUT /users/:randomId
    @Put(':randomId')
    update(@Param('randomId') randomId: string, @Body(ValidationPipe) updUserDto: UpdUserDto) {
        return this.usersService.update(randomId, updUserDto);
    }

    //DELETE /users/:randomId
    @Delete(':randomId')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('randomId') randomId: string) {
        return this.usersService.remove(randomId);
    }
}
