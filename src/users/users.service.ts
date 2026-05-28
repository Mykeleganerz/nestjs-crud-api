import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    //Mock DB
    private users = [
        {
            id: randomUUID(),
            name: 'Jonnel',
            age: 23,
            description: `BlahBlahBlah.`,
            role: 'ADMIN'
        },
        {
            id: randomUUID(),
            name: 'Owen',
            age: 22,
            description: `Practicing My Skills`,
            role: 'PROFESSOR'
        },
        {
            id: randomUUID(),
            name: 'Jeje',
            age: 26,
            description: `Gusto ko maging mayaman in the future.`,
            role: 'STUDENT'
        },
        {
            id: randomUUID(),
            name: 'Karl',
            age: 23,
            description: `Duty ako mamaya pre, kuha lang ako uniform.`,
            role: 'STUDENT'
        },
    ];


    //findAll function of GET
    async findAll(role?: 'STUDENT' | 'PROFESSOR' | 'ADMIN') {
        if (role) {
            const rolesArray = this.users.filter((user) => user.role === role);
            if (rolesArray.length === 0) {
                throw new NotFoundException('User role not found.');
            }
            return rolesArray;
        }
        return this.users;
    }

    //findOne function of GET
    async findOne(id: string) {
        const existingUser = this.users.find((user) => user.id === id);

        if (!existingUser) {
            throw new NotFoundException(`User with ID ${id} cannot be found.`)
        }
        return existingUser;
    }

    //create function of POST
    async create(createUser: CreateUserDto) {
        let constructedUser = {
            id: randomUUID(),
            ...createUser
        }

        this.users.push(constructedUser);
        return constructedUser;
    }

    //update function of PUT
    async update(id: string, updUserDto: UpdUserDto) {
        let existingUser = this.users.find((users) => users.id === id);

        if (!existingUser) {
            throw new NotFoundException(`User with ID ${id} cannot be found.`);
        } else {

            existingUser.name = updUserDto.name!,
                existingUser.description = updUserDto.description!,
                existingUser.role = updUserDto.role!

            return existingUser;
        }
    }

    //remove function of DELETE
    async remove(id: string) {
        let existingUser = this.users.findIndex((users) => users.id === id);

        if (existingUser > -1) {
            this.users.splice(existingUser, 1)
            return existingUser;
        } else {
            throw new NotFoundException(`User with ID ${id} cannot be found.`);
        }
    }

}
