import {Controller, Get, Param, Res, StreamableFile} from '@nestjs/common';
import {EmployeeService} from "./employee.service";
import type { Response } from 'express';
import * as fs from "fs";


@Controller('')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Get()
    getAll() {
        return this.employeeService.getAll();
    }

    @Get('/leaders')
    getLeaders() {
        return this.employeeService.getLeaders();
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.employeeService.getById(id);
    }

    @Get(':id/image')
    getFile(@Res() res: Response, @Param('id') id: number): any {
        const imagePath = `./images/${id}.jpg`;

        if (!fs.existsSync(imagePath)) {
            return res.status(404).send('Image not found');
        }

        res.setHeader('Content-Type', 'image/jpeg');

        return fs.createReadStream(imagePath).pipe(res);
    }
}
