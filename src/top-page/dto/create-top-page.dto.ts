import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Type } from "class-transformer";
import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";


enum TopLevelCategory{
	Courses,
	Services,
	Books,
	Products
}

class hhData{
	
    @IsNumber()
	count: number;
	
    @IsNumber()
	juniorSalary: number;
	
    @IsNumber()
	middleSalary: number;
	
    @IsNumber()
	seniorSalary: number;
}

class TopPageAdventage{
	
	@IsString()
	titele: string;
	
	@IsString()
	description: string;
}

export interface CreateProductDto extends Base{}

export class CreateTopPageDto extends TimeStamps{
    
    
    // @ValidateNested()
    // @Type(()=>TopLevelCategory)
    firstLevelCategory: TopLevelCategory;

	@IsString()
	secondCategory: string;

	
	@IsString()
	alias:string;
	
	
	@IsString()
	title: string;
	
	@IsString()
	category: string;
	
    @IsOptional()
    @ValidateNested()
    @Type(()=>hhData)
	hh?:hhData;
	
    @IsArray()
    @ValidateNested()
    @Type(()=>TopPageAdventage)
	adventages:TopPageAdventage[];

	
	@IsString()
	seoText: string;
	
	@IsString()
	tagsTitle: string;

    @IsArray()
    @IsString({ each:true})
	tags:string[]
}








