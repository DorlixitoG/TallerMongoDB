//db.getCollection('Clientes').find({Edad:{$eq:30}})

//db.getCollection('Clientes').find({age:{$lt:25}});

//db.getCollection('Clientes').find({Edad:{$gt:30}});

//db.getCollection('Clientes').find({Edad:{$gte:30}});

//db.getCollection('Clientes').find({Edad:{$lte:30}});

//db.getCollection('Clientes').find({Nombre:{$ne:'Luisa'}});

//db.getCollection('Clientes').find({Nombre:{$in:['Luisa']}});

//db.getCollection('Clientes').find({Nombre:{$nin:['Luisa']}});

//db.getCollection('Clientes').find({$and:[{Nombre:'Luisa'},{Edad:30}]});

//db.getCollection('Clientes').find({$or:[{Nombre:'Pedro'},{Nombre:'Ana'}]});

//db.getCollection('Clientes').find({name:{$not:{$eq:'Pedro'}}});

//db.getCollection('Clientes').createIndex({Nombre:"text"});
//db.getCollection('Clientes').find({$text:{$search:'Ana'}});

//db.getCollection('Clientes').find({Direccion:{$regex:/Call/}});

// db.getCollection('Clientes').find({$where:function(){
//     return(hex_md5(this.Nombre)=="9aba45a7f1999a9c5fc96ef2a45810fb")
// }})

//db.getCollection('Clientes').find({Nombre:{$exists:true}});

//db.getCollection('Clientes').find({"Nombre":{$type:"string"}});

// db.getCollection('Clientes').find({
//     "Productos_Comprados": {
//         $all: [
//             { $elemMatch: { Producto: "arroz" } },
//             { $elemMatch: { Producto: "zanahoria" } }
//         ]
//     }
// })

// db.getCollection('Clientes').find({
//     "Productos_Comprados.Producto": {
//         $all: ["arroz", "anichuela", "zanahoria"]
//     }
// })

//db.getCollection('Clientes').find({Productos_Comprados: {$size:2}});

//db.getCollection('Clientes').find({},{Productos_Comprados: {$slice:2}});