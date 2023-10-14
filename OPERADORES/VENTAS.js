//db.getCollection('Ventas').find({total_pagar:{$eq:85}});

//db.getCollection('Ventas').find({total_pagar:{$lt:85}});

//db.getCollection('Ventas').find({total_pagar:{$gt:85}});

//db.getCollection('Ventas').find({total_pagar:{$gte:85}});

//db.getCollection('Ventas').find({total_pagar:{$lte:85}});

//db.getCollection('Ventas').find({estado_venta:{$ne:'realizado'}});

//db.getCollection('Ventas').find({estado_venta:{$in:['realizado']}});

//db.getCollection('Ventas').find({estado_venta:{$nin:['realizado']}});

//db.getCollection('Ventas').find({$and:[{tipo_pago:'fisico'},{estado_venta:'realizado'}]});

//db.getCollection('Ventas').find({$or:[{tipo_pago:'transaccion'},{tipo_pago:'QR'}]});

//db.getCollection('Ventas').find({tipo_pago:{$not:{$eq:'fisico'}}});

// db.getCollection('Ventas').createIndex({tipo_pago:"text"});
// db.getCollection('Ventas').find({$text:{$search:'fisico'}});

//db.getCollection('Ventas').find({tipo_pago:{$regex:/tran/}});

// db.getCollection('Ventas').find({$where:function(){
//     return(hex_md5(this.tipo_pago)== "ddc6263876eb738d17b4649ce109baca")
//    }})

//db.getCollection('Ventas').find({detalle_venta:{$exists:true}});

//db.getCollection('Ventas').find({"tipo_pago":{$type:"string"}});

// db.getCollection('Ventas').find({
//     "fecha_hora": {
//         $all: [
//             { $elemMatch: { 
//                fecha:"2023-10-12", hora:"12:00:00" } },
//         ]
//     }
// })

// db.getCollection('Ventas').find({
//     "fecha_hora": {
//       $all: [
//         { "fecha": "2023-10-12", "hora": "16:30:00" },
//         { "fecha": "2023-10-13", "hora": "08:45:00" }
//       ]
//     }
//   });

//db.getCollection('Ventas').find({fecha_hora: {$size:2}});

//db.getCollection('Ventas').find({},{fecha_hora: {$slice:2}});