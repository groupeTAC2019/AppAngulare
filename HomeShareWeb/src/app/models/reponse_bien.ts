import {Bien} from './Bien';

export class Reponse_bien{
    constructor(
        public bien : Bien,
        public biens : Bien[],
    ){}
}