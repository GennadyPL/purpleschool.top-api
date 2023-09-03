import { BadRequestException, Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { ALREAD_REGISTER_ERROR } from './auth.constant';
import { Validate } from 'class-validator';

@Controller('auth')
export class AuthController {
	constructor(
		private readonly authServer: AuthService
	){}

	@UsePipes(new ValidationPipe())
	@HttpCode(201)
	@Post('register')
	async register(@Body() dto: AuthDto){
		const oldUser = await this.authServer.findUser(dto.login);
		if (!oldUser){
			throw new BadRequestException(ALREAD_REGISTER_ERROR);
		}
		return this.authServer.createUser(dto);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	async login(@Body() {login,password} : AuthDto){
		const {email} = await this.authServer.validateUser(login,password);
		return this.authServer.login(email)

	}


	
}
