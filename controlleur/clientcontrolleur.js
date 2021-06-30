var client=require('../modele/clientmodele');

class Client{
    id;
    nom;
    prenom;
    adresse;
    telephone;
    email;
    motdepasse;

    constructor(data){
        this.id=data.id;
        this.nom=data.nom;
        this.prenom=data.prenom;
        this.adresse=data.adresse;
        this.telephone=data.telephone;
        this.email=data.email;   
        this.motdepasse=data.motdepasse;  
    }
}
exports.getall=(req, res)=> {
    client.getall().then(result=>{
        res.json(result);
    });
}

exports.getone=(req, res)=> {
    client.getone(req.params.id).then(result=>{
        res.json(result);
    });
}
