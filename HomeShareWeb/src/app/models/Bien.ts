export class Bien
{
    constructor(
    public id_bien: number,
    public titre: string ,
    public desc_courte: string,
    public desc_longue: string,
    public date_ajout: Date,
    public nb_personne: number,
    public disponible: boolean,
    public date_desactivation: Date,
    public id_adresse: number,
    public id_membre: number){}
      //propriete bien
      
}