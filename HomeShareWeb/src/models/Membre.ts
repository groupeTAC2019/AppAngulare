export class Membre
{
    constructor(
        public id_membre: number,
        public nom: string ,
        public prenom: string,
        public email: string,
        public tel: number,
        public admin: boolean,
        public mdp: string,
        public id_pays: number) {}
}