export class Commentaire
{
    constructor(
        public Id_commentaire: number,
        public Message: string ,
        public Note: number,
        public Valide: boolean,
        public Id_membre: number,
        public Id_bien: number) 
    {}
    
 
}