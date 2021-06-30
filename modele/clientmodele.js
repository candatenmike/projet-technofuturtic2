var laboanimal = require('../connection/laboanimal');

exports.getall=()=>{
    return laboanimal.then(conn=>{
        return conn.query('SELECT * FROM client');
    });
}

exports.getone=(id)=>{
    return laboanimal.then(conn=>{
        return conn.query('SELECT * FROM client WHERE clientID=?', id);
    });
}