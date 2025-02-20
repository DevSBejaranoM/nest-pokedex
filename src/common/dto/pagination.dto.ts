import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    limit?: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Min(0)
    offset?: number;
}