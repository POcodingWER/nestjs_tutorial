import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto {
    @IsString()
    readonly title: string;
    @IsNumber()
    readonly year: number;
    @IsOptional()   //값이 없어도 확인해줌
    @IsString({ each: true })
    readonly genres: string[];
}