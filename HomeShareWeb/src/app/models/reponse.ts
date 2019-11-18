import {Bien} from './Bien';

export class Reponse{
    constructor(
        public bien : Bien,
        public biens : Bien[],
        public message : string
    ){}
}