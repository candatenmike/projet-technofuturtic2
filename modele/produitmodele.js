var laboanimal = require('../connection/laboanimal');

exports.getall=()=>{
    return laboanimal.then(conn=>{
        return conn.query('SELECT * FROM produit');
    });
}

exports.getone=(id)=>{
    return laboanimal.then(conn=>{
        return conn.query('SELECT * FROM produit WHERE produitID=?', id);
    });
}