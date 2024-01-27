import { Module } from '@nestjs/common';
import { ProfilService } from './profil.service';
import { ProfilController } from './profil.controller';

@Module({
  imports: [],
  providers: [ProfilService],
  controllers: [ProfilController]
})
export class ProfilModule {}
