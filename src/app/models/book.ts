// On va exporter une interface qui represente la structure de données recu depuis l'api
export interface Book{
    id: number,
    image: string,
    titre: string,
    auteur: string,
    date: string
}