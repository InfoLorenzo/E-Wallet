//Moment.js

import * as moment from 'moment';

import 'moment/locale/pt-br';


 export var fecha = moment().format('DD/MM/YYYY');

console.log(fecha)

export class Transacciones{

    constructor(
        
        public concepto: string,
        public importe: number,
        public fecha: string,
        
        ){}
}