import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductModel } from './product.model/product.model';
import { FindProductDto } from './dto/find-product.dto';
import { ProductService } from './product.service';
import { PRODUCT_NOT_FOUNT_ERROR } from './product.constant';
import { CreateProductDto } from './dto/create-product.dto';
import { Validate, ValidatePromise } from 'class-validator';
import { IdValidationPipe } from 'src/pipe/add-validation.pipe';

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService){}

	@Post('create')
	async create(dto: CreateProductDto){
		return this.productService.create(dto);

	}

	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string){
		const product = await this.productService.findById(id);
		if(!product){
			throw new NotFoundException(PRODUCT_NOT_FOUNT_ERROR)
		}
		return product;

	}

	@Delete(':id')
	async delecte(@Param('id',IdValidationPipe) id: string){
		const deleteproduct = await this.productService.deleteById(id);
		if(!deleteproduct){
			throw new NotFoundException(PRODUCT_NOT_FOUNT_ERROR)
		}
		return deleteproduct;
	}

	@Patch(':id')
	async patch(@Param('id',IdValidationPipe) id: string, @Body() dto: ProductModel){
		const updateProduct = await this.productService.updateById(id,dto);
		if(!updateProduct){
			throw new NotFoundException(PRODUCT_NOT_FOUNT_ERROR)
		}
		return updateProduct;
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindProductDto){
		return this.productService.findWithReview(dto);
	}
}
