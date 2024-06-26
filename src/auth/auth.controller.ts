import { BadRequestException, Body, ClassSerializerInterceptor, Controller, Get, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { RegisterDTO } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { AuthInterceptor } from './auth.interceptor';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
    constructor(
        private authService: AuthService,
        private jwtService: JwtService
    ) { }

    @Post('register')
    async register(@Body() body: RegisterDTO) {

        if (body.password !== body.passwordConfirm)
            throw new BadRequestException(`Passwords doesn't match.`)

        body.password = await bcrypt.hash(body.password, 12)
        return this.authService.create(body);
    }

    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
        @Res({ passthrough: true }) response: Response
    ) {
            const user = await this.authService.findOneBy({email});

        if (!user) {
            throw new BadRequestException('Email does not exists!');
        }

        if (!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException('Invalid credentials');
        }

        const jwt = await this.jwtService.signAsync({ id: user.id });

        response.cookie('jwt', jwt, { httpOnly: true });

        return user;
    }

    @Get('user')
    @UseInterceptors(AuthInterceptor)
    async user(@Req() request: Request) {
        const cookie = request.cookies['jwt'];

        const data = await this.jwtService.verifyAsync(cookie);

        return await this.authService.findOneBy({ id: data['id'] });
    }

    @UseInterceptors(AuthInterceptor)
    @Post('logout')
    async logout(
        @Res({ passthrough: true }) response: Response
    ) {
        response.clearCookie('jwt');
        return {
            message: 'Success'
        }
    }
}
