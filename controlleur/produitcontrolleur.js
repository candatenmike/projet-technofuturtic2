var produit=require('../modele/produitmodele');

class Produit{
    id;
    categorie;
    nom;
    prix;
    stock;
    image;

    constructor(data){
        this.id=data.id;
        this.categorie=data.categorie;
        this.nom=data.nom;
        this.prix=data.prix;
        this.stock=data.stock;
        this.image=data.image;    
    }
}
exports.getall=(req, res)=> {
    produit.getall().then(result=>{
        res.json(result);
    });
}

exports.getone=(req, res)=> {
    produit.getone(req.params.id).then(result=>{
        res.json(result);
    });
}
