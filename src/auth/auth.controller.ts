import { BadRequestException, Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { ALREAD_REGISTER_ERROR } from './auth.constant';

@Controller('auth')
export class AuthController {
	constructor(
		private readonly authServer: AuthService
	){}
	@HttpCode(201)
	@Post('register')
	async register(@Body() dto: AuthDto){
		const oldUser = await this.authServer.findUser(dto.login);
		if (!oldUser){
			throw new BadRequestException(ALREAD_REGISTER_ERROR);
		}
		return this.authServer.createUser(dto);
	}

	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto){

	}
}
