import {Body, Controller, Get, Post, Request} from '@nestjs/common';
import {ProfilService} from "./profil.service";

@Controller()
export class ProfilController {
    constructor(private readonly profilService: ProfilService) {}

    @Post('/login')
    login(@Body() body: any) {
        return this.profilService.login(body);
    }

    @Get('/me')
    getMe(@Request() req: any) {
        const token = req.headers.authorization.split(' ')[1];
        return this.profilService.getMe(token);
    }
}
