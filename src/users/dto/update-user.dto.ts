import { IsString, IsEnum, IsNotEmpty, IsNumber } from "class-validator";

export class UpdUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    age: number;

    @IsString()
    description: string;

    @IsEnum(["STUDENT", "PROFESSOR", "ADMIN"], {
        message: 'Valid role required'
    })
    role: "STUDENT" | "PROFESSOR" | "ADMIN";
};