import { Controller, Get } from '@nestjs/common';

@Controller('apple')
export class AppleController {
    @Get()
    getFruits (){
        const make = [
            "Apple",
            "Grapes",
            "Watermelon"
        ]
        return make
    }
}
