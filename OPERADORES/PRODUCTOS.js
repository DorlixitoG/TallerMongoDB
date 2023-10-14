use('Supermercado');

// db.getCollection('Productos').find({Categoria:{$eq:"Lácteos"}})

// db.getCollection("Productos").find({Precio:{$gt:3.99}})

// db.getCollection("Productos").find({Precio:{$gte:3.99}})

// db.getCollection('Productos').find({Nombre: {$in:['Papas']}});


// db. getCollection('Productos').find({Precio: {$lt:3.99}})


// db.getCollection('Productos').find({Precio: {$lte:1.49}})


// db.getCollection('Productos').find({Nombre:{$ne:'Carne'}})

// db. getCollection('Productos'). find({Categoria: {$nin:['Frutas']}});


// db.getCollection('Productos').find({$and: [{Categoria: 'Frutas'},{Precio:3.49}]})


// db. getCollection('Productos').find({$or:[{Categoria:'Frutas'},{Categoria:'Panaderia'}]})

// db.getCollection('Productos').find({Categoria: { $not: {$eq:'Verduras'}}});


// db.getCollection('Productos').find( {Nombre:{$exists:true}})



// db.getCollection('Productos').createIndex({Nombre:"text"})
// db.getCollection('Productos').find({$text:{$search:'Pan'}})


// db.getCollection('Productos').find({Categoria:{$type:'string'}});

// db.getCollection('Productos'). find({Categoria:{$regex: /Pan/ }});

// db.getCollection('Productos').find({$where: function(){
//     return(hex_md5(this.Nombre)=="551503f90042aa76e1ccfcbe59bc8de5")
// }})



// db.getCollection('Productos').find({
//     "CodificacionProducto": {
//         $all: [
//             { $elemMatch: { Lote: "A321", Vencimiento: "2023-11-05" } }
//         ]
//     }
// })

// db.getCollection('Productos').find({
//     "Categoria": {
//         $all: ["Granos"]
//     }
// })

// db.getCollection('Productos').find({CodificacionProducto: {$size:2}});


// db.getCollection('Productos').find({},{CodificacionProducto: {$slice:2}});

