import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Type } from "class-transformer";
import { IsArray, IsEnum, IsNumber, IsOptional, IsString, ValidateNested, isEnum } from "class-validator";
import { TopLevelCategory } from "../top-page.model/top-page.model";





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



export class CreateTopPageDto{
    
    
    // @ValidateNested()
    // @Type(()=>TopLevelCategory)
	@IsEnum(TopLevelCategory)
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








