export class Bien
{
    constructor(
    public Id_bien: number,
    public Titre: string ,
    public Desc_courte: string,
    public Desc_longue: string,
    public Date_ajout: Date,
    public Nb_personne: number,
    public Disponible: boolean,
    public Date_desactivation: Date,
    public Id_adresse: number,
    public Id_membre: number){}
      //propriete bien
      
}