import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReviewModel } from './review.model/review.model';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { REVIEW_NOT_FOUND } from './review.constans';
import { Validate } from 'class-validator';

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewServic:ReviewService ){}
	
	@UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto: CreateReviewDto){
		return this.reviewServic.create(dto);

	}

	@Delete(':id')
	async delete(@Param('id') id: string){
		const deletedDoc = await this.reviewServic.delete(id);
		if(!deletedDoc){
			throw new HttpException(REVIEW_NOT_FOUND,HttpStatus.NOT_FOUND)
		}
	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string){

		return this.reviewServic.findByProductId(productId);

	}
}
