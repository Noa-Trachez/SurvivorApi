import {BadRequestException, Injectable} from '@nestjs/common';
import * as BDD from '../data/bdd.json';

@Injectable()
export class EmployeeService {
    employees: any = [...BDD.value]


    getAll() {
        return this.employees.map(employee => {
            const newEmployee = {...employee};
            delete newEmployee.birth_date
            delete newEmployee.gender
            delete newEmployee.work
            delete newEmployee.subordinates
            return newEmployee;
        });
    }

    getLeaders() {
        return [this.employees[0]];
    }

    getById(id: number) {
        const employee = this.employees.find(employee => employee.id == id);
        if (!employee) {
            throw new BadRequestException('Employee not found');
        }
        return {...employee, subordinates: []};
    }
}
