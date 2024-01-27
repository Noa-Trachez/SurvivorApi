import {BadRequestException, Injectable} from '@nestjs/common';

@Injectable()
export class ProfilService {
    login(body: any) {
        if (body.email === 'oliver.lewis@masurao.jp' && body.password === 'password') {
            return {
                access_token: 'admin',
            }
        }
        throw new BadRequestException('Invalid credentials');
    }

    getMe(token: string) {
        if (token === 'admin') {
            return {
                "id": 49,
                "email": 'oliver.lewis@masurao.jp',
                "name": 'Oliver',
                "surname": 'Lewis',
                "birthDate": '1990-01-01',
                "gender": 'male',
                "work": 'Architect',
                "subordinates": [],
            }
        }
        throw new BadRequestException('Invalid access token');
    }
}
