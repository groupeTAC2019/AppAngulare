export class BienDetails
{
    constructor(
        //propriete bien
        public id_bien: number,
        public titre: string ,
        public desc_courte: string,
        public desc_longue: string,
        public date_ajout: Date,
        public nb_personne: number,
        public disponible: boolean,
        public date_desactivation: Date,
        public id_adresse: number,
        public id_membre: number,
        //propriete adresse
        public ville: string ,
        public cp: number,
        public rue: string ,
        public num: number,
        public boite: string ,
        public id_pays: number,
        //propriete membre
        public nom: string ,
        public prenom: string,
        public email: string,
        public tel: number,
        public admin: boolean,
        public mdp: string) {}
}