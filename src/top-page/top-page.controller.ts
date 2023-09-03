import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TopPageModel } from './top-page.model/top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { ConfigService } from '@nestjs/config';
import { TopPageService } from './top-page.service';
import { CreateTopPageDto } from './dto/create-top-page.dto';

@Controller('top-page')
export class TopPageController {
	constructor(private readonly topPageService: TopPageService){}
	
	@Post('create')
	async create(@Body() dto: CreateTopPageDto){
		this.topPageService.create(dto)

	}

	@Get(':id')
	async get(@Param('id') id: string){
		return this.topPageService.findById(id);
	}

	@Delete(':id')
	async delecte(@Param('id') id: string){
		return this.topPageService.deleteById(id);
	}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: TopPageModel){
		return this.topPageService.updateById(id,dto)
	}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindTopPageDto){

	}
}
