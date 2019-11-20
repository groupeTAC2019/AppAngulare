export class Echange{
    constructor(
        public Id_echange: number,
        public Date_debut: Date,
        public Date_fin: Date,
        public Valide: boolean,
        public Id_bien:number,
        public Id_membre: number
    ){}
}