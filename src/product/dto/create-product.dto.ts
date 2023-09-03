import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Type } from "class-transformer";
import { IsAlpha, IsArray, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";



class productCharacteristicDto{

    @IsString()
	name: string;
	

    @IsString()
	value: string;
}

export interface CreateProductDto extends Base{};

export class CreateProductDto extends TimeStamps{
	

    @IsString()
	image: string;
	

    @IsString()
	title: string;
	
    @IsNumber()
	price: number;
	
    @IsOptional()
    @IsNumber()
	oldPrice?: number;
	

    @IsNumber()
	credit: number;
	
    @IsNumber()
	calculatedRating: number;
	

    @IsString()
	description: string;
	

    @IsString()
	abvantages: string;
	

    @IsString()
	disAbvantages: string;

    @IsArray()
    @IsString({ each:true})
	categories: string[];
	
    @IsArray()
    @IsString({ each:true})
	tags: string[];
	

    @IsArray()
    @ValidateNested()
    @Type(()=>productCharacteristicDto)
	characteristics: productCharacteristicDto[]
}