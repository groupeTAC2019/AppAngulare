export class Membre
{
    constructor(
        public Id_membre: number,
        public Nom: string ,
        public Prenom: string,
        public Email: string,
        public Tel: number,
        public Admin: boolean,
        public Mdp: string,
        public Id_pays: number) {}
}