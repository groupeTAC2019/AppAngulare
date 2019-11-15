export class Echange{
    constructor(
        public id_echange: number,
        public date_debut: Date,
        public date_fin: Date,
        public valide: boolean,
        public id_bien:number,
        public id_membre: number
    ){}
}