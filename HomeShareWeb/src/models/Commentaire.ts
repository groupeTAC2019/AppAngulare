export class Commentaire
{
    constructor(
        public id_commentaire: number,
        public message: string ,
        public note: number,
        public valide: boolean,
        public id_membre: number,
        public id_bien: number) 
    {}
    
 
}