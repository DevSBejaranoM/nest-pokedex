import { IsInt, IsPositive, IsString, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsString({
    message: 'Name must be a string',
  })
  @MinLength(1, {
    message: 'Name must be at least 1 character',
  })
  name: string;
  @IsInt({
    message: 'No must be an integer',
  })
  @IsPositive({
    message: 'No must be a positive number',
  })
  no: number;
}
