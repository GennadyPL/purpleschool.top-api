
import { Prop, index } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export enum TopLevelCategory{
	Courses,
	Services,
	Books,
	Products
}

export class TopPageAdventage{
	@Prop()
	titele: string;
	@Prop()
	description: string;
}

export class hhData{
	@Prop()
	count: number;
	@Prop()
	juniorSalary: number;
	@Prop()
	middleSalary: number;
	@Prop()
	seniorSalary: number;
}

export interface TopPageModel extends Base{};

@index({
	title:'text',
	tagsTitle:'text'
})
export class TopPageModel extends TimeStamps{

	@Prop({enum: TopLevelCategory})
	firstLevelCategory: TopLevelCategory;

	@Prop()
	secondCategory: string;

	@Prop({unique:true})
	alias:string;
	
	@Prop({text:true})
	title: string;
	@Prop()
	category: string;
	@Prop({type:()=>hhData})
	hh?:hhData;
	@Prop({type:()=>[TopPageAdventage]})
	adventages:TopPageAdventage[];

	@Prop()
	seoText: string;
	@Prop()
	tagsTitle: string;
	@Prop({type:()=>[String]})
	tags:string[]
}
