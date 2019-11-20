export class BienDetails
{
    constructor(
        //propriete bien
        public Id_bien: number,
        public Titre: string ,
        public Desc_courte: string,
        public Desc_longue: string,
        public Date_ajout: Date,
        public Nb_personne: number,
        public Disponible: boolean,
        public Date_desactivation: Date,
        public Id_adresse: number,
        public Id_membre: number,
        //propriete adresse
        public Ville: string ,
        public Cp: number,
        public Rue: string ,
        public Num: number,
        public Boite: string ,
        public Id_pays: number,
        //propriete membre
        public Nom: string ,
        public Prenom: string,
        public Email: string,
        public Tel: number,
        public Admin: boolean,
        public Mdp: string) {}
}