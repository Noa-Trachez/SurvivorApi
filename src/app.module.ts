import { Module } from '@nestjs/common';
import {ProfilModule} from "./profil/profil.module";
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [ProfilModule, EmployeeModule],
})
export class AppModule {}
