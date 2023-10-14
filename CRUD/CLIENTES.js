 use('Supermercado');


// // db.getCollection('Clientes').insertOne({
// //     'Nombre': 'Andres','Apellido': 'Mojica', 'Edad': 28,'Telefono': 302288990,
// //     'Direccion': 'calle 56 #32-22',
// //     'Productos_Comprados': [
// //         { 'Producto': 'arroz', 'Cantidad': 2 },
// //         { 'Producto': 'anichuela', 'Cantidad': 3 },
// //         { 'Producto': 'zanahoria', 'Cantidad': 5 },
// //     ]
// // })


// // 5 primeros sin Schemaless

// // db.getCollection('Clientes').insertMany([
// //     {
// //         'Nombre': 'María',
// //         'Apellido': 'García',
// //         'Edad': 35,
// //         'Telefono': 3015551234,
// //         'Direccion': 'Calle 24 #45-67',
// //         'Productos_Comprados': [
// //             { 'Producto': 'leche', 'Cantidad': 4 },
// //             { 'Producto': 'manzanas', 'Cantidad': 10 },
// //             { 'Producto': 'pan', 'Cantidad': 2 }
// //         ]
// //     },
// //     {
// //         'Nombre': 'Carlos',
// //         'Apellido': 'López',
// //         'Edad': 42,
// //         'Telefono': 3009876543,
// //         'Direccion': 'Avenida 8 #12-34',
// //         'Productos_Comprados': [
// //             { 'Producto': 'pollo', 'Cantidad': 1 },
// //             { 'Producto': 'papas', 'Cantidad': 4 },
// //             { 'Producto': 'lechuga', 'Cantidad': 2 }
// //         ]
// //     },
// //     {
// //         'Nombre': 'Luisa',
// //         'Apellido': 'Pérez',
// //         'Edad': 30,
// //         'Telefono': 3051112222,
// //         'Direccion': 'Carrera 18 #56-78',
// //         'Productos_Comprados': [
// //             { 'Producto': 'pasta', 'Cantidad': 3 },
// //             { 'Producto': 'cebolla', 'Cantidad': 6 },
// //             { 'Producto': 'pan', 'Cantidad': 4 }
// //         ]
// //     },
// //     {
// //         'Nombre': 'Eduardo',
// //         'Apellido': 'Gómez',
// //         'Edad': 50,
// //         'Telefono': 3043334444,
// //         'Direccion': 'Calle 5 #8-9',
// //         'Productos_Comprados': [
// //             { 'Producto': 'cerveza', 'Cantidad': 12 },
// //             { 'Producto': 'papas fritas', 'Cantidad': 3 },
// //             { 'Producto': 'carne', 'Cantidad': 2 }
// //         ]
// //     }
// // ]); 


// // db.createCollection("Clientes", {
// //     validator: {
// //        $jsonSchema: {
// //           bsonType: "object",
// //           title: "Cliente Object Validation",
// //           required: ["Nombre", "Apellido", "Edad", "Telefono", "Direccion", "Productos_Comprados"],
// //           properties: {
// //              Nombre: {
// //                 bsonType: "string",
// //                 description: "'Nombre' debe ser una cadena de caracteres y es obligatorio"
// //              },
// //              Apellido: {
// //                 bsonType: "string",
// //                 description: "'Apellido' debe ser una cadena de caracteres y es obligatorio"
// //              },
// //              Edad: {
// //                 bsonType: "int",
// //                 minimum: 1,
// //                 maximum: 100,
// //                 description: "'Edad' debe ser un entero entre 1 y 100 y es obligatorio"
// //              },
// //              Telefono: {
// //                 bsonType: "int",
// //                 description: "'Telefono' debe ser un entero y es obligatorio"
// //              },
// //              Direccion: {
// //                 bsonType: "string",
// //                 description: "'Direccion' debe ser una cadena de caracteres y es obligatorio"
// //              },
// //              Productos_Comprados: {
// //                 bsonType: "array",
// //                 description: "'Productos_Comprados' debe ser un arreglo y es obligatorio",
// //                 items: {
// //                    bsonType: "object",
// //                    required: ["Producto", "Cantidad"],
// //                    properties: {
// //                       Producto: {
// //                          bsonType: "string",
// //                          description: "'Producto' debe ser una cadena de caracteres y es obligatorio"
// //                       },
// //                       Cantidad: {
// //                          bsonType: "int",
// //                          minimum: 1,
// //                          description: "'Cantidad' debe ser un entero no negativo y es obligatorio"
// //                       }
// //                    }
// //                 }
// //              }
// //           }
// //        }
// //     }
// //  });
 
// //INSERMANY(500)
// db.getCollection('Clientes').insertMany([
//     {
//         'Nombre': 'Ana',
//         'Edad': 30,
//         'Telefono': 3012345678,
//         'Direccion': 'Calle 10 #20-30',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Pedro',
//         'Edad': 25,
//         'Telefono': 3009876543,
//         'Direccion': 'Avenida 15 #25-40',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'queso', 'Cantidad': 3 },
//             { 'Producto': 'manzanas', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Laura',
//         'Edad': 28,
//         'Telefono': 3022223333,
//         'Direccion': 'Carrera 5 #15-10',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'papas', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Diego',
//         'Edad': 32,
//         'Telefono': 3044445555,
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 3 },
//             { 'Producto': 'lechuga', 'Cantidad': 2 },
//             { 'Producto': 'zanahoria', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Isabella',
//         'Telefono': 3055556666,
//         'Direccion': 'Calle 8 #16-8',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 2 },
//             { 'Producto': 'manzanas', 'Cantidad': 10 },
//             { 'Producto': 'pan', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Manuel',
//         'Edad': 40,
//         'Telefono': 3066667777,
//         'Direccion': 'Avenida 12 #30-15',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'huevos', 'Cantidad': 12 },
//             { 'Producto': 'pan', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Edad': 35,
//         'Telefono': 3077778888,
//         'Direccion': 'Calle 25 #10-5',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 1 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'lechuga', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Telefono': 3088889999,
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 12 },
//             { 'Producto': 'papas fritas', 'Cantidad': 3 },
//             { 'Producto': 'carne', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Marcela',
//         'Edad': 30,
//         'Telefono': 3099990000,
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 2 },
//             { 'Producto': 'papas fritas', 'Cantidad': 4 },
//             { 'Producto': 'manzanas', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Javier',
//         'Edad': 28,
//         'Telefono': 3100001111,
//         'Direccion': 'Carrera 7 #18-12',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'queso', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Natalia',
//         'Edad': 29,
//         'Telefono': 3111112222,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'pollo', 'Cantidad': 1 },
//             { 'Producto': 'zanahoria', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Gustavo',
//         'Telefono': 3122223333,
//         'Productos_Comprados': [
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//             { 'Producto': 'arroz', 'Cantidad': 2 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Camila',
//         'Edad': 27,
//         'Telefono': 3133334444,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 2 },
//             { 'Producto': 'manzanas', 'Cantidad': 9 }
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Edad': 33,
//         'Telefono': 3144445555,
//         'Direccion': 'Calle 14 #22-8',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 5 },
//             { 'Producto': 'queso', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Patricia',
//         'Edad': 36,
//         'Telefono': 3155556666,
//         'Direccion': 'Avenida 6 #14-30',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'papas', 'Cantidad': 6 },
//             { 'Producto': 'pasta', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Ricardo',
//         'Edad': 29,
//         'Telefono': 3166667777,
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 },
//             { 'Producto': 'papas fritas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Paola',
//         'Edad': 28,
//         'Telefono': 3177778888,
//         'Direccion': 'Calle 12 #18-5',
//         'Productos_Comprados': [
//             { 'Producto': 'zanahoria', 'Cantidad': 7 },
//             { 'Producto': 'pasta', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Miguel',
//         'Edad': 31,
//         'Telefono': 3188889999,
//         'Direccion': 'Carrera 10 #24-15',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'lechuga', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Andrea',
//         'Edad': 34,
//         'Telefono': 3199990000,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },

//     {
//         'Nombre': 'Carmen',
//         'Edad': 29,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 7 },
//             { 'Producto': 'pan', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Juan',
//         'Apellido': 'Martínez',
//         'Direccion': 'Calle 10 #30-20',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'lechuga', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Isabella',
//         'Edad': 42,
//         'Telefono': 3055556666,
//     },
//     {
//         'Nombre': 'Roberto',
//         'Direccion': 'Avenida 7 #56-45',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Gabriela',
//         'Apellido': 'Hernández',
//         'Edad': 35,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 5 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Rosa',
//         'Telefono': 3017778888,
//         'Direccion': 'Carrera 18 #60-70',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Joaquín',
//         'Edad': 60,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Marta',
//         'Apellido': 'Santos',
//         'Direccion': 'Calle 15 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Raúl',
//         'Apellido': 'González',
//         'Telefono': 3028887777,
//         'Productos_Comprados': [
//             { 'Producto': 'papas', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Diana',
//         'Edad': 40,
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 12 },
//         ]
//     },
//     {
//         'Nombre': 'Juan Carlos',
//         'Direccion': 'Avenida 12 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Lorena',
//         'Edad': 27,
//         'Productos_Comprados': [
//             { 'Producto': 'cebolla', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Andrés',
//         'Apellido': 'Ortiz',
//         'Telefono': 3006665555,
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Patricia',
//         'Direccion': 'Calle 20 #10-25',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Fernando',
//         'Edad': 37,
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Julia',
//         'Telefono': 3059994444,
//         'Productos_Comprados': [
//             { 'Producto': 'huevos', 'Cantidad': 12 },
//         ]
//     },
//     {
//         'Nombre': 'Samuel',
//         'Direccion': 'Carrera 25 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'lechuga', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Marina',
//         'Edad': 31,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Hugo',
//         'Telefono': 3021118888,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//         ]
//     },
//     {
//         'Nombre': 'Cristina',
//         'Direccion': 'Avenida 6 #18-28',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//         ]
//     },

//     {
//         'Nombre': 'Elena',
//         'Apellido': 'López',
//         'Edad': 28,
//         'Telefono': 3012345678,
//         'Direccion': 'Calle 22 #40-60',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Ricardo',
//         'Apellido': 'González',
//         'Edad': 33,
//         'Telefono': 3009876543,
//         'Direccion': 'Avenida 11 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Ana',
//         'Apellido': 'Martínez',
//         'Edad': 45,
//         'Telefono': 3053334444,
//         'Direccion': 'Carrera 15 #50-70',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'cebolla', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Javier',
//         'Apellido': 'Sánchez',
//         'Edad': 55,
//         'Telefono': 3041112222,
//         'Direccion': 'Calle 8 #18-28',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 12 },
//             { 'Producto': 'papas fritas', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Luis',
//         'Apellido': 'Rodríguez',
//         'Edad': 31,
//         'Telefono': 3016667777,
//         'Direccion': 'Calle 25 #45-55',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 2 },
//             { 'Producto': 'papas', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'María',
//         'Apellido': 'Fernández',
//         'Edad': 39,
//         'Telefono': 3022223333,
//         'Direccion': 'Avenida 9 #15-25',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 4 },
//             { 'Producto': 'pan', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Carlos',
//         'Apellido': 'Martínez',
//         'Edad': 47,
//         'Telefono': 3005556666,
//         'Direccion': 'Carrera 12 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//             { 'Producto': 'huevos', 'Cantidad': 10 },
//         ]
//     },
//     {
//         'Nombre': 'Laura',
//         'Apellido': 'Gómez',
//         'Edad': 35,
//         'Telefono': 3054445555,
//         'Direccion': 'Calle 18 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Apellido': 'Pérez',
//         'Edad': 30,
//         'Telefono': 3017778888,
//         'Direccion': 'Avenida 7 #12-22',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'pan', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Apellido': 'Lara',
//         'Edad': 29,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Manuel',
//         'Apellido': 'Soto',
//         'Edad': 36,
//         'Telefono': 3041113333,
//         'Direccion': 'Avenida 11 #22-32',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Mariana',
//         'Apellido': 'Díaz',
//         'Edad': 28,
//         'Telefono': 3009996666,
//         'Direccion': 'Calle 20 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Antonio',
//         'Apellido': 'Ramírez',
//         'Edad': 42,
//         'Telefono': 3018885555,
//         'Direccion': 'Carrera 25 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Adriana',
//         'Apellido': 'Torres',
//         'Edad': 40,
//         'Telefono': 3055557777,
//         'Direccion': 'Avenida 8 #16-26',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 6 },
//             { 'Producto': 'cebolla', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Federico',
//         'Apellido': 'Vargas',
//         'Edad': 38,
//         'Telefono': 3022224444,
//         'Direccion': 'Calle 22 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Natalia',
//         'Apellido': 'Castillo',
//         'Edad': 33,
//         'Telefono': 3015558888,
//         'Direccion': 'Avenida 10 #20-30',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Apellido': 'Santos',
//         'Edad': 37,
//         'Telefono': 3006667777,
//         'Direccion': 'Carrera 20 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'carne', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Carolina',
//         'Apellido': 'Gómez',
//         'Edad': 39,
//         'Telefono': 3048889999,
//         'Direccion': 'Calle 12 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Esteban',
//         'Apellido': 'Hernández',
//         'Edad': 30,
//         'Telefono': 3019994444,
//         'Direccion': 'Avenida 9 #18-28',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Patricia',
//         'Apellido': 'López',
//         'Edad': 32,
//         'Telefono': 3053334444,
//         'Direccion': 'Carrera 18 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'cerveza', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Víctor',
//         'Apellido': 'Ramírez',
//         'Edad': 41,
//         'Telefono': 3022223333,
//         'Direccion': 'Calle 14 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 2 },
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Daniela',
//         'Apellido': 'González',
//         'Edad': 43,
//         'Telefono': 3017778888,
//         'Direccion': 'Avenida 7 #12-22',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'lechuga', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Pablo',
//         'Apellido': 'Soto',
//         'Edad': 35,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 3 },
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Sara',
//         'Apellido': 'Torres',
//         'Edad': 38,
//         'Telefono': 3015556666,
//         'Direccion': 'Avenida 10 #20-30',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'pan', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Apellido': 'Ramírez',
//         'Edad': 30,
//         'Telefono': 3041113333,
//         'Direccion': 'Carrera 25 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'cebolla', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Apellido': 'Sánchez',
//         'Edad': 43,
//         'Telefono': 3018885555,
//         'Direccion': 'Calle 22 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'lechuga', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Miguel',
//         'Apellido': 'Martínez',
//         'Edad': 45,
//         'Telefono': 3025556666,
//         'Direccion': 'Avenida 11 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'huevos', 'Cantidad': 10 },
//         ]
//     },
//     {
//         'Nombre': 'Elena',
//         'Apellido': 'Gómez',
//         'Edad': 39,
//         'Telefono': 3054445555,
//         'Direccion': 'Calle 18 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Luis',
//         'Apellido': 'Rodríguez',
//         'Edad': 31,
//         'Telefono': 3017778888,
//         'Direccion': 'Carrera 18 #60-70',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'cebolla', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'María',
//         'Apellido': 'Fernández',
//         'Edad': 29,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Carlos',
//         'Apellido': 'Martínez',
//         'Edad': 47,
//         'Telefono': 3005556666,
//         'Direccion': 'Carrera 12 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Laura',
//         'Apellido': 'Gómez',
//         'Edad': 35,
//         'Telefono': 3054445555,
//         'Direccion': 'Calle 18 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Apellido': 'Pérez',
//         'Edad': 30,
//         'Telefono': 3017778888,
//         'Direccion': 'Avenida 7 #12-22',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'pan', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Apellido': 'Lara',
//         'Edad': 29,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Manuel',
//         'Apellido': 'Soto',
//         'Edad': 36,
//         'Telefono': 3041113333,
//         'Direccion': 'Avenida 11 #22-32',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Mariana',
//         'Apellido': 'Díaz',
//         'Edad': 28,
//         'Telefono': 3009996666,
//         'Direccion': 'Calle 20 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Antonio',
//         'Apellido': 'Ramírez',
//         'Edad': 42,
//         'Telefono': 3018885555,
//         'Direccion': 'Carrera 25 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Adriana',
//         'Apellido': 'Torres',
//         'Edad': 40,
//         'Telefono': 3055557777,
//         'Direccion': 'Avenida 8 #16-26',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 6 },
//             { 'Producto': 'cebolla', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Federico',
//         'Apellido': 'Vargas',
//         'Edad': 38,
//         'Telefono': 3022224444,
//         'Direccion': 'Calle 22 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Natalia',
//         'Apellido': 'Castillo',
//         'Edad': 33,
//         'Telefono': 3015558888,
//         'Direccion': 'Avenida 10 #20-30',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Apellido': 'Santos',
//         'Edad': 37,
//         'Telefono': 3006667777,
//         'Direccion': 'Carrera 20 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'carne', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Carolina',
//         'Apellido': 'Gómez',
//         'Edad': 39,
//         'Telefono': 3048889999,
//         'Direccion': 'Calle 12 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Esteban',
//         'Apellido': 'Hernández',
//         'Edad': 30,
//         'Telefono': 3019994444,
//         'Direccion': 'Avenida 9 #18-28',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Patricia',
//         'Apellido': 'López',
//         'Edad': 32,
//         'Telefono': 3053334444,
//         'Direccion': 'Carrera 18 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'cerveza', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Víctor',
//         'Apellido': 'Ramírez',
//         'Edad': 41,
//         'Telefono': 3022223333,
//         'Direccion': 'Calle 14 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 2 },
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Daniela',
//         'Apellido': 'González',
//         'Edad': 43,
//         'Telefono': 3017778888,
//         'Direccion': 'Avenida 7 #12-22',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'lechuga', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Pablo',
//         'Apellido': 'Soto',
//         'Edad': 35,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 3 },
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Sara',
//         'Apellido': 'Torres',
//         'Edad': 38,
//         'Telefono': 3015556666,
//         'Direccion': 'Avenida 10 #20-30',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'pan', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Apellido': 'Ramírez',
//         'Edad': 30,
//         'Telefono': 3041113333,
//         'Direccion': 'Carrera 25 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'cebolla', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Apellido': 'Sánchez',
//         'Edad': 43,
//         'Telefono': 3018885555,
//         'Direccion': 'Calle 22 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'lechuga', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Miguel',
//         'Apellido': 'Martínez',
//         'Edad': 45,
//         'Telefono': 3025556666,
//         'Direccion': 'Avenida 11 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'huevos', 'Cantidad': 10 },
//         ]
//     },
//     {
//         'Nombre': 'Elena',
//         'Apellido': 'Gómez',
//         'Edad': 39,
//         'Telefono': 3054445555,
//         'Direccion': 'Calle 18 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Luis',
//         'Apellido': 'Rodríguez',
//         'Edad': 31,
//         'Telefono': 3017778888,
//         'Direccion': 'Carrera 18 #60-70',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'cebolla', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'María',
//         'Apellido': 'Fernández',
//         'Edad': 29,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Carlos',
//         'Apellido': 'Martínez',
//         'Edad': 47,
//         'Telefono': 3005556666,
//         'Direccion': 'Carrera 12 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Laura',
//         'Apellido': 'Gómez',
//         'Edad': 35,
//         'Telefono': 3054445555,
//         'Direccion': 'Calle 18 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Apellido': 'Pérez',
//         'Edad': 30,
//         'Telefono': 3017778888,
//         'Direccion': 'Avenida 7 #12-22',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'pan', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Apellido': 'Lara',
//         'Edad': 29,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Manuel',
//         'Apellido': 'Soto',
//         'Edad': 36,
//         'Telefono': 3041113333,
//         'Direccion': 'Avenida 11 #22-32',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Mariana',
//         'Apellido': 'Díaz',
//         'Edad': 28,
//         'Telefono': 3009996666,
//         'Direccion': 'Calle 20 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Antonio',
//         'Apellido': 'Ramírez',
//         'Edad': 42,
//         'Telefono': 3018885555,
//         'Direccion': 'Carrera 25 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Adriana',
//         'Apellido': 'Torres',
//         'Edad': 40,
//         'Telefono': 3055557777,
//         'Direccion': 'Avenida 8 #16-26',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 6 },
//             { 'Producto': 'cebolla', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Federico',
//         'Apellido': 'Vargas',
//         'Edad': 38,
//         'Telefono': 3022224444,
//         'Direccion': 'Calle 22 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Natalia',
//         'Apellido': 'Castillo',
//         'Edad': 33,
//         'Telefono': 3015558888,
//         'Direccion': 'Avenida 10 #20-30',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Apellido': 'Santos',
//         'Edad': 37,
//         'Telefono': 3006667777,
//         'Direccion': 'Carrera 20 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'carne', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Carolina',
//         'Apellido': 'Gómez',
//         'Edad': 39,
//         'Telefono': 3048889999,
//         'Direccion': 'Calle 12 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Esteban',
//         'Apellido': 'Hernández',
//         'Edad': 30,
//         'Telefono': 3019994444,
//         'Direccion': 'Avenida 9 #18-28',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Isabel',
//         'Apellido': 'Torres',
//         'Edad': 36,
//         'Telefono': 3022224444,
//         'Direccion': 'Calle 22 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Pedro',
//         'Apellido': 'Sánchez',
//         'Edad': 45,
//         'Telefono': 3025556666,
//         'Direccion': 'Avenida 11 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'huevos', 'Cantidad': 10 },
//         ]
//     },
//     {
//         'Nombre': 'Carla',
//         'Apellido': 'Gómez',
//         'Edad': 29,
//         'Telefono': 3054445555,
//         'Direccion': 'Calle 18 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Jorge',
//         'Apellido': 'Martínez',
//         'Edad': 31,
//         'Telefono': 3017778888,
//         'Direccion': 'Carrera 18 #60-70',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'cebolla', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Camila',
//         'Apellido': 'Fernández',
//         'Edad': 27,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Juan',
//         'Apellido': 'Martínez',
//         'Edad': 44,
//         'Telefono': 3005556666,
//         'Direccion': 'Carrera 12 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Laura',
//         'Apellido': 'Gómez',
//         'Edad': 35,
//         'Telefono': 3054445555,
//         'Direccion': 'Calle 18 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Apellido': 'Pérez',
//         'Edad': 30,
//         'Telefono': 3017778888,
//         'Direccion': 'Avenida 7 #12-22',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'pan', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Apellido': 'Lara',
//         'Edad': 29,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Manuel',
//         'Apellido': 'Soto',
//         'Edad': 36,
//         'Telefono': 3041113333,
//         'Direccion': 'Avenida 11 #22-32',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Mariana',
//         'Apellido': 'Díaz',
//         'Edad': 28,
//         'Telefono': 3009996666,
//         'Direccion': 'Calle 20 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Antonio',
//         'Apellido': 'Ramírez',
//         'Edad': 42,
//         'Telefono': 3018885555,
//         'Direccion': 'Carrera 25 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Adriana',
//         'Apellido': 'Torres',
//         'Edad': 40,
//         'Telefono': 3055557777,
//         'Direccion': 'Avenida 8 #16-26',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 6 },
//             { 'Producto': 'cebolla', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Federico',
//         'Apellido': 'Vargas',
//         'Edad': 38,
//         'Telefono': 3022224444,
//         'Direccion': 'Calle 22 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Natalia',
//         'Apellido': 'Castillo',
//         'Edad': 33,
//         'Telefono': 3015558888,
//         'Direccion': 'Avenida 10 #20-30',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Apellido': 'Santos',
//         'Edad': 37,
//         'Telefono': 3006667777,
//         'Direccion': 'Carrera 20 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'carne', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Carolina',
//         'Apellido': 'Gómez',
//         'Edad': 39,
//         'Telefono': 3048889999,
//         'Direccion': 'Calle 12 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Esteban',
//         'Apellido': 'Hernández',
//         'Edad': 30,
//         'Telefono': 3019994444,
//         'Direccion': 'Avenida 9 #18-28',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Patricia',
//         'Apellido': 'López',
//         'Edad': 32,
//         'Telefono': 3053334444,
//         'Direccion': 'Carrera 18 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'cerveza', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Víctor',
//         'Apellido': 'Ramírez',
//         'Edad': 41,
//         'Telefono': 3022223333,
//         'Direccion': 'Calle 14 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 2 },
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Daniela',
//         'Apellido': 'González',
//         'Edad': 43,
//         'Telefono': 3017778888,
//         'Direccion': 'Avenida 7 #12-22',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'lechuga', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Pablo',
//         'Apellido': 'Soto',
//         'Edad': 35,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 3 },
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Sara',
//         'Apellido': 'Torres',
//         'Edad': 38,
//         'Telefono': 3015556666,
//         'Direccion': 'Avenida 10 #20-30',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'pan', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Apellido': 'Ramírez',
//         'Edad': 30,
//         'Telefono': 3041113333,
//         'Direccion': 'Carrera 25 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'cebolla', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Apellido': 'Sánchez',
//         'Edad': 43,
//         'Telefono': 3018885555,
//         'Direccion': 'Calle 22 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'lechuga', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Miguel',
//         'Apellido': 'Martínez',
//         'Edad': 45,
//         'Telefono': 3025556666,
//         'Direccion': 'Avenida 11 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'huevos', 'Cantidad': 10 },
//         ]
//     },
//     {
//         'Nombre': 'Elena',
//         'Apellido': 'Gómez',
//         'Edad': 39,
//         'Telefono': 3054445555,
//         'Direccion': 'Calle 18 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Luis',
//         'Apellido': 'Rodríguez',
//         'Edad': 31,
//         'Telefono': 3017778888,
//         'Direccion': 'Carrera 18 #60-70',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'cebolla', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'María',
//         'Apellido': 'Fernández',
//         'Edad': 29,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Carlos',
//         'Apellido': 'Martínez',
//         'Edad': 47,
//         'Telefono': 3005556666,
//         'Direccion': 'Carrera 12 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Laura',
//         'Apellido': 'Gómez',
//         'Edad': 35,
//         'Telefono': 3054445555,
//         'Direccion': 'Calle 18 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Apellido': 'Pérez',
//         'Edad': 30,
//         'Telefono': 3017778888,
//         'Direccion': 'Avenida 7 #12-22',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'pan', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Apellido': 'Lara',
//         'Edad': 29,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Manuel',
//         'Apellido': 'Soto',
//         'Edad': 36,
//         'Telefono': 3041113333,
//         'Direccion': 'Avenida 11 #22-32',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Mariana',
//         'Apellido': 'Díaz',
//         'Edad': 28,
//         'Telefono': 3009996666,
//         'Direccion': 'Calle 20 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Antonio',
//         'Apellido': 'Ramírez',
//         'Edad': 42,
//         'Telefono': 3018885555,
//         'Direccion': 'Carrera 25 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Adriana',
//         'Apellido': 'Torres',
//         'Edad': 40,
//         'Telefono': 3055557777,
//         'Direccion': 'Avenida 8 #16-26',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 6 },
//             { 'Producto': 'cebolla', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Federico',
//         'Apellido': 'Vargas',
//         'Edad': 38,
//         'Telefono': 3022224444,
//         'Direccion': 'Calle 22 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Natalia',
//         'Apellido': 'Castillo',
//         'Edad': 33,
//         'Telefono': 3015558888,
//         'Direccion': 'Avenida 10 #20-30',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Apellido': 'Santos',
//         'Edad': 37,
//         'Telefono': 3006667777,
//         'Direccion': 'Carrera 20 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'carne', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Carolina',
//         'Apellido': 'Gómez',
//         'Edad': 39,
//         'Telefono': 3048889999,
//         'Direccion': 'Calle 12 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Esteban',
//         'Apellido': 'Hernández',
//         'Edad': 30,
//         'Telefono': 3019994444,
//         'Direccion': 'Avenida 9 #18-28',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Patricia',
//         'Apellido': 'López',
//         'Edad': 32,
//         'Telefono': 3053334444,
//         'Direccion': 'Carrera 18 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'cerveza', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Víctor',
//         'Apellido': 'Ramírez',
//         'Edad': 41,
//         'Telefono': 3022223333,
//         'Direccion': 'Calle 14 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 2 },
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Daniela',
//         'Apellido': 'González',
//         'Edad': 43,
//         'Telefono': 3017778888,
//         'Direccion': 'Avenida 7 #12-22',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'lechuga', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Pablo',
//         'Apellido': 'Soto',
//         'Edad': 35,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 3 },
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Eduardo',
//         'Apellido': 'Gómez',
//         'Edad': 50,
//         'Telefono': 3043334444,
//         'Direccion': 'Calle 5 #8-9',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 12 },
//             { 'Producto': 'papas fritas', 'Cantidad': 3 },
//             { 'Producto': 'carne', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Rosa',
//         'Apellido': 'Ramírez',
//         'Edad': 46,
//         'Telefono': 3056667777,
//         'Direccion': 'Carrera 15 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Lorenzo',
//         'Apellido': 'Pérez',
//         'Edad': 38,
//         'Telefono': 3019993333,
//         'Direccion': 'Avenida 6 #10-20',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Marcela',
//         'Apellido': 'Sánchez',
//         'Edad': 41,
//         'Telefono': 3007778888,
//         'Direccion': 'Calle 20 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'carne', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Andrés',
//         'Apellido': 'Fernández',
//         'Edad': 39,
//         'Telefono': 3025556666,
//         'Direccion': 'Carrera 11 #22-32',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Natalia',
//         'Apellido': 'Gómez',
//         'Edad': 37,
//         'Telefono': 3058889999,
//         'Direccion': 'Avenida 14 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Juan',
//         'Apellido': 'Martínez',
//         'Edad': 42,
//         'Telefono': 3033334444,
//         'Direccion': 'Calle 16 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Sandra',
//         'Apellido': 'Hernández',
//         'Edad': 36,
//         'Telefono': 3011114444,
//         'Direccion': 'Carrera 19 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Daniel',
//         'Apellido': 'Lara',
//         'Edad': 34,
//         'Telefono': 3025556666,
//         'Direccion': 'Avenida 12 #16-26',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'pan', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Carolina',
//         'Apellido': 'Ramírez',
//         'Edad': 40,
//         'Telefono': 3057778888,
//         'Direccion': 'Calle 21 #32-42',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Alejandro',
//         'Apellido': 'Soto',
//         'Edad': 37,
//         'Telefono': 3018885555,
//         'Direccion': 'Carrera 20 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'huevos', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Valentina',
//         'Apellido': 'Martínez',
//         'Edad': 33,
//         'Telefono': 3023334444,
//         'Direccion': 'Avenida 9 #18-28',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'arroz', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Javier',
//         'Apellido': 'Gómez',
//         'Edad': 29,
//         'Telefono': 3035556666,
//         'Direccion': 'Calle 17 #26-36',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Ana',
//         'Apellido': 'Pérez',
//         'Edad': 35,
//         'Telefono': 3019993333,
//         'Direccion': 'Carrera 10 #20-30',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Apellido': 'Lara',
//         'Edad': 41,
//         'Telefono': 3057778888,
//         'Direccion': 'Avenida 15 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'papas', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Apellido': 'Fernández',
//         'Edad': 30,
//         'Telefono': 3015558888,
//         'Direccion': 'Calle 12 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Isabel',
//         'Apellido': 'Torres',
//         'Edad': 36,
//         'Telefono': 3022224444,
//         'Direccion': 'Calle 22 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Pedro',
//         'Apellido': 'Sánchez',
//         'Edad': 45,
//         'Telefono': 3025556666,
//         'Direccion': 'Avenida 11 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'huevos', 'Cantidad': 10 },
//         ]
//     },
//     {
//         'Nombre': 'Carla',
//         'Apellido': 'Gómez',
//         'Edad': 29,
//         'Telefono': 3054445555,
//         'Direccion': 'Calle 18 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Jorge',
//         'Apellido': 'Martínez',
//         'Edad': 31,
//         'Telefono': 3017778888,
//         'Direccion': 'Carrera 18 #60-70',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'cebolla', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Camila',
//         'Apellido': 'Fernández',
//         'Edad': 27,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Juan',
//         'Apellido': 'Martínez',
//         'Edad': 44,
//         'Telefono': 3005556666,
//         'Direccion': 'Carrera 12 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Laura',
//         'Apellido': 'Gómez',
//         'Edad': 35,
//         'Telefono': 3054445555,
//         'Direccion': 'Calle 18 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Apellido': 'Pérez',
//         'Edad': 30,
//         'Telefono': 3017778888,
//         'Direccion': 'Avenida 7 #12-22',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'pan', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Apellido': 'Lara',
//         'Edad': 29,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Manuel',
//         'Apellido': 'Soto',
//         'Edad': 36,
//         'Telefono': 3041113333,
//         'Direccion': 'Avenida 11 #22-32',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Mariana',
//         'Apellido': 'Díaz',
//         'Edad': 28,
//         'Telefono': 3009996666,
//         'Direccion': 'Calle 20 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Antonio',
//         'Apellido': 'Ramírez',
//         'Edad': 42,
//         'Telefono': 3018885555,
//         'Direccion': 'Carrera 25 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Adriana',
//         'Apellido': 'Torres',
//         'Edad': 40,
//         'Telefono': 3055557777,
//         'Direccion': 'Avenida 8 #16-26',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 6 },
//             { 'Producto': 'cebolla', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Federico',
//         'Apellido': 'Vargas',
//         'Edad': 38,
//         'Telefono': 3022224444,
//         'Direccion': 'Calle 22 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Natalia',
//         'Apellido': 'Castillo',
//         'Edad': 33,
//         'Telefono': 3015558888,
//         'Direccion': 'Avenida 10 #20-30',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Apellido': 'Santos',
//         'Edad': 37,
//         'Telefono': 3006667777,
//         'Direccion': 'Carrera 20 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'carne', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Carolina',
//         'Apellido': 'Gómez',
//         'Edad': 39,
//         'Telefono': 3048889999,
//         'Direccion': 'Calle 12 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Esteban',
//         'Apellido': 'Hernández',
//         'Edad': 30,
//         'Telefono': 3019994444,
//         'Direccion': 'Avenida 9 #18-28',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Patricia',
//         'Apellido': 'López',
//         'Edad': 32,
//         'Telefono': 3053334444,
//         'Direccion': 'Carrera 18 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'cerveza', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Víctor',
//         'Apellido': 'Ramírez',
//         'Edad': 41,
//         'Telefono': 3022223333,
//         'Direccion': 'Calle 14 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 2 },
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Daniela',
//         'Apellido': 'González',
//         'Edad': 43,
//         'Telefono': 3017778888,
//         'Direccion': 'Avenida 7 #12-22',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'lechuga', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Pablo',
//         'Apellido': 'Soto',
//         'Edad': 35,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 3 },
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Sara',
//         'Apellido': 'Torres',
//         'Edad': 38,
//         'Telefono': 3015556666,
//         'Direccion': 'Avenida 10 #20-30',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'pan', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Apellido': 'Ramírez',
//         'Edad': 30,
//         'Telefono': 3041113333,
//         'Direccion': 'Carrera 25 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'cebolla', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Apellido': 'Sánchez',
//         'Edad': 43,
//         'Telefono': 3018885555,
//         'Direccion': 'Calle 22 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'lechuga', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Miguel',
//         'Apellido': 'Martínez',
//         'Edad': 45,
//         'Telefono': 3025556666,
//         'Direccion': 'Avenida 11 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'huevos', 'Cantidad': 10 },
//         ]
//     },
//     {
//         'Nombre': 'Elena',
//         'Apellido': 'Gómez',
//         'Edad': 39,
//         'Telefono': 3054445555,
//         'Direccion': 'Calle 18 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Luis',
//         'Apellido': 'Rodríguez',
//         'Edad': 31,
//         'Telefono': 3017778888,
//         'Direccion': 'Carrera 18 #60-70',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'cebolla', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'María',
//         'Apellido': 'Fernández',
//         'Edad': 29,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Carlos',
//         'Apellido': 'Martínez',
//         'Edad': 47,
//         'Telefono': 3005556666,
//         'Direccion': 'Carrera 12 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Laura',
//         'Apellido': 'Gómez',
//         'Edad': 35,
//         'Telefono': 3054445555,
//         'Direccion': 'Calle 18 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Apellido': 'Pérez',
//         'Edad': 30,
//         'Telefono': 3017778888,
//         'Direccion': 'Avenida 7 #12-22',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'pan', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Apellido': 'Lara',
//         'Edad': 29,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Manuel',
//         'Apellido': 'Soto',
//         'Edad': 36,
//         'Telefono': 3041113333,
//         'Direccion': 'Avenida 11 #22-32',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Mariana',
//         'Apellido': 'Díaz',
//         'Edad': 28,
//         'Telefono': 3009996666,
//         'Direccion': 'Calle 20 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Antonio',
//         'Apellido': 'Ramírez',
//         'Edad': 42,
//         'Telefono': 3018885555,
//         'Direccion': 'Carrera 25 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Adriana',
//         'Apellido': 'Torres',
//         'Edad': 40,
//         'Telefono': 3055557777,
//         'Direccion': 'Avenida 8 #16-26',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 6 },
//             { 'Producto': 'cebolla', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Federico',
//         'Apellido': 'Vargas',
//         'Edad': 38,
//         'Telefono': 3022224444,
//         'Direccion': 'Calle 22 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Natalia',
//         'Apellido': 'Castillo',
//         'Edad': 33,
//         'Telefono': 3015558888,
//         'Direccion': 'Avenida 10 #20-30',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Apellido': 'Santos',
//         'Edad': 37,
//         'Telefono': 3006667777,
//         'Direccion': 'Carrera 20 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'carne', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Carolina',
//         'Apellido': 'Gómez',
//         'Edad': 39,
//         'Telefono': 3048889999,
//         'Direccion': 'Calle 12 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Esteban',
//         'Apellido': 'Hernández',
//         'Edad': 30,
//         'Telefono': 3019994444,
//         'Direccion': 'Avenida 9 #18-28',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Patricia',
//         'Apellido': 'López',
//         'Edad': 32,
//         'Telefono': 3053334444,
//         'Direccion': 'Carrera 18 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'cerveza', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Víctor',
//         'Apellido': 'Ramírez',
//         'Edad': 41,
//         'Telefono': 3022223333,
//         'Direccion': 'Calle 14 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 2 },
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Daniela',
//         'Apellido': 'González',
//         'Edad': 43,
//         'Telefono': 3017778888,
//         'Direccion': 'Avenida 7 #12-22',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'lechuga', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Pablo',
//         'Apellido': 'Soto',
//         'Edad': 35,
//         'Telefono': 3028889999,
//         'Direccion': 'Calle 16 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 3 },
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Eduardo',
//         'Apellido': 'Gómez',
//         'Edad': 50,
//         'Telefono': 3043334444,
//         'Direccion': 'Calle 5 #8-9',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 12 },
//             { 'Producto': 'papas fritas', 'Cantidad': 3 },
//             { 'Producto': 'carne', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Rosa',
//         'Apellido': 'Ramírez',
//         'Edad': 46,
//         'Telefono': 3056667777,
//         'Direccion': 'Carrera 15 #35-45',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Lorenzo',
//         'Apellido': 'Pérez',
//         'Edad': 38,
//         'Telefono': 3019993333,
//         'Direccion': 'Avenida 6 #10-20',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Marcela',
//         'Apellido': 'Sánchez',
//         'Edad': 41,
//         'Telefono': 3007778888,
//         'Direccion': 'Calle 20 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'carne', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Andrés',
//         'Apellido': 'Fernández',
//         'Edad': 39,
//         'Telefono': 3025556666,
//         'Direccion': 'Carrera 11 #22-32',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Natalia',
//         'Apellido': 'Gómez',
//         'Edad': 37,
//         'Telefono': 3058889999,
//         'Direccion': 'Avenida 14 #30-40',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Juan',
//         'Apellido': 'Martínez',
//         'Edad': 42,
//         'Telefono': 3033334444,
//         'Direccion': 'Calle 16 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Sandra',
//         'Apellido': 'Hernández',
//         'Edad': 36,
//         'Telefono': 3011114444,
//         'Direccion': 'Carrera 19 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'azúcar', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Daniel',
//         'Apellido': 'Lara',
//         'Edad': 34,
//         'Telefono': 3025556666,
//         'Direccion': 'Avenida 12 #16-26',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'pan', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Carolina',
//         'Apellido': 'Ramírez',
//         'Edad': 40,
//         'Telefono': 3057778888,
//         'Direccion': 'Calle 21 #32-42',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Alejandro',
//         'Apellido': 'Soto',
//         'Edad': 37,
//         'Telefono': 3018885555,
//         'Direccion': 'Carrera 20 #40-50',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'huevos', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Valentina',
//         'Apellido': 'Martínez',
//         'Edad': 33,
//         'Telefono': 3023334444,
//         'Direccion': 'Avenida 9 #18-28',
//         'Productos_Comprados': [
//             { 'Producto': 'papas fritas', 'Cantidad': 5 },
//             { 'Producto': 'arroz', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Javier',
//         'Apellido': 'Gómez',
//         'Edad': 29,
//         'Telefono': 3035556666,
//         'Direccion': 'Calle 17 #26-36',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Ana',
//         'Apellido': 'Pérez',
//         'Edad': 35,
//         'Telefono': 3019993333,
//         'Direccion': 'Carrera 10 #20-30',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Apellido': 'Lara',
//         'Edad': 41,
//         'Telefono': 3057778888,
//         'Direccion': 'Avenida 15 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'papas', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Apellido': 'Fernández',
//         'Edad': 30,
//         'Telefono': 3015558888,
//         'Direccion': 'Calle 12 #28-38',
//         'Productos_Comprados': [
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Marina',
//         'Edad': 30,
//         'Direccion': 'Carrera 5 #10-20',
//         'Compras_Recientes': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Andrés',
//         'Telefono': 3044445555,
//         'Ultimas_Compras': [
//             { 'Producto': 'papas', 'Cantidad': 5 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 },
//         ]
//     },
//     {
//         'Nombre': 'Laura',
//         'Apellido': 'Soto',
//         'Direccion': 'Calle 15 #28-38',
//         'Compras_Recientes': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Gabriel',
//         'Edad': 28,
//         'Telefono': 3019993333,
//         'Ultimas_Compras': [
//             { 'Producto': 'pasta', 'Cantidad': 5 },
//             { 'Producto': 'arroz', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Elena',
//         'Direccion': 'Avenida 11 #22-32',
//         'Ultimas_Compras': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'papas fritas', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'José',
//         'Edad': 35,
//         'Direccion': 'Carrera 19 #30-40',
//         'Compras_Recientes': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Mónica',
//         'Telefono': 3055557777,
//         'Compras_Recientes': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//         ]
//     },
//     {
//         'Nombre': 'Héctor',
//         'Edad': 40,
//         'Telefono': 3041113333,
//         'Ultimas_Compras': [
//             { 'Producto': 'azúcar', 'Cantidad': 6 },
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//         ]
//     },
//     {
//         'Nombre': 'Lorena',
//         'Direccion': 'Calle 14 #25-35',
//         'Compras_Recientes': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'papas fritas', 'Cantidad': 2 },
//         ]
//     },
//     {
//         'Nombre': 'Pedro',
//         'Telefono': 3009996666,
//         'Ultimas_Compras': [
//             { 'Producto': 'carne', 'Cantidad': 4 },
//             { 'Producto': 'lechuga', 'Cantidad': 3 },
//         ]
//     },
//     {
//         'Nombre': 'Ana',
//         'Apellido': 'Martínez',
//         'Edad': 28,
//         'Telefono': 3001234567,
//         'Direccion': 'Carrera 12 #34-56',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//             { 'Producto': 'frijoles', 'Cantidad': 3 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Carlos',
//         'Edad': 45,
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'pan', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Elena',
//         'Telefono': 3112345678,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'tomates', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Juan',
//         'Edad': 32,
//         'Direccion': 'Calle 7 #45-23',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Luisa',
//         'Apellido': 'Gómez',
//         'Edad': 55,
//         'Telefono': 3223456789,
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Maria',
//         'Edad': 40,
//         'Direccion': 'Avenida 5 #20-10',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'arroz', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Pedro',
//         'Telefono': 3334567890,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Laura',
//         'Edad': 30,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Andrés',
//         'Apellido': 'López',
//         'Telefono': 3445678901,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Isabel',
//         'Edad': 35,
//         'Direccion': 'Calle 3 #12-45',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'tomates', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Alejandro',
//         'Telefono': 3556789012,
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 6 },
//             { 'Producto': 'frijoles', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Marta',
//         'Edad': 42,
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 5 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Javier',
//         'Direccion': 'Avenida 8 #17-32',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Lorena',
//         'Telefono': 3667890123,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Edad': 33,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'tomates', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Paola',
//         'Direccion': 'Calle 10 #30-15',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Fernando',
//         'Apellido': 'Pérez',
//         'Edad': 38,
//         'Telefono': 3778901234,
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Silvia',
//         'Telefono': 3889012345,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'arroz', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Gustavo',
//         'Edad': 29,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Camila',
//         'Telefono': 3990123456,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Renato',
//         'Edad': 27,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Daniela',
//         'Telefono': 4001234567,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'tomates', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Edad': 31,
//         'Direccion': 'Calle 5 #19-28',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 6 },
//             { 'Producto': 'frijoles', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Telefono': 4112345678,
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 5 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Diego',
//         'Edad': 34,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'María',
//         'Apellido': 'García',
//         'Telefono': 4223456789,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Andrés',
//         'Edad': 35,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'tomates', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Alejandra',
//         'Telefono': 4334567890,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Ricardo',
//         'Edad': 32,
//         'Direccion': 'Avenida 7 #25-19',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Carolina',
//         'Telefono': 4445678901,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'arroz', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Jorge',
//         'Edad': 29,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Marcela',
//         'Telefono': 4556789012,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Rodrigo',
//         'Edad': 36,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Claudia',
//         'Telefono': 4667890123,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'tomates', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Luis',
//         'Edad': 43,
//         'Direccion': 'Calle 9 #15-26',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 6 },
//             { 'Producto': 'frijoles', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Isabella',
//         'Telefono': 4778901234,
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 5 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Samuel',
//         'Edad': 30,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Lucía',
//         'Telefono': 4889012345,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Juan',
//         'Edad': 31,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'tomates', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Valentina',
//         'Telefono': 4990123456,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Pablo',
//         'Edad': 38,
//         'Direccion': 'Carrera 15 #8-12',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Natalia',
//         'Telefono': 5001234567,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'arroz', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Edad': 29,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Daniela',
//         'Telefono': 5112345678,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Javier',
//         'Edad': 32,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Alejandra',
//         'Telefono': 5223456789,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'tomates', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Juan',
//         'Edad': 35,
//         'Direccion': 'Avenida 12 #29-18',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 6 },
//             { 'Producto': 'frijoles', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'María',
//         'Apellido': 'Gómez',
//         'Telefono': 5334567890,
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 5 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Andrés',
//         'Edad': 28,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Lorena',
//         'Telefono': 5445678901,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Edad': 36,
//         'Direccion': 'Calle 6 #16-27',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'tomates', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Paola',
//         'Telefono': 5556789012,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Fernando',
//         'Apellido': 'García',
//         'Edad': 40,
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Silvia',
//         'Telefono': 5667890123,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'arroz', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Gustavo',
//         'Edad': 33,
//         'Direccion': 'Carrera 10 #20-11',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Camila',
//         'Telefono': 5778901234,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Renato',
//         'Edad': 37,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Daniela',
//         'Telefono': 5889012345,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'tomates', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Edad': 38,
//         'Direccion': 'Calle 11 #27-14',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 6 },
//             { 'Producto': 'frijoles', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Telefono': 5990123456,
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 5 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Diego',
//         'Edad': 34,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'María',
//         'Apellido': 'Rodríguez',
//         'Telefono': 6001234567,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Andrés',
//         'Edad': 40,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'tomates', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Alejandra',
//         'Telefono': 6112345678,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Ricardo',
//         'Edad': 30,
//         'Direccion': 'Carrera 8 #14-19',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Carolina',
//         'Telefono': 6223456789,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'arroz', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Jorge',
//         'Edad': 35,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Marcela',
//         'Telefono': 6334567890,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Rodrigo',
//         'Edad': 32,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Claudia',
//         'Telefono': 6445678901,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'tomates', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Luis',
//         'Edad': 29,
//         'Direccion': 'Calle 4 #22-17',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 6 },
//             { 'Producto': 'frijoles', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Isabella',
//         'Telefono': 6556789012,
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 5 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Samuel',
//         'Edad': 28,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Lucía',
//         'Apellido': 'López',
//         'Telefono': 6667890123,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Juan',
//         'Edad': 34,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'tomates', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Valentina',
//         'Telefono': 6778901234,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Pablo',
//         'Edad': 31,
//         'Direccion': 'Avenida 9 #18-29',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Natalia',
//         'Telefono': 6889012345,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'arroz', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Edad': 32,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Daniela',
//         'Telefono': 6990123456,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 4 }
//         ]
//     },
// {
//         'Nombre': 'Patricia',
//         'Apellido': 'Sánchez',
//         'Edad': 27,
//         'Telefono': 7001234567,
//         'Direccion': 'Calle 3 #15-10',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Edad': 42,
//         'Direccion': 'Avenida 6 #28-17',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Carmen',
//         'Telefono': 7112345678,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'arroz', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Javier',
//         'Edad': 36,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'María',
//         'Apellido': 'Pérez',
//         'Telefono': 7223456789,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Luis',
//         'Edad': 39,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Gabriela',
//         'Telefono': 7334567890,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'tomates', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Antonio',
//         'Edad': 29,
//         'Direccion': 'Carrera 11 #24-15',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 6 },
//             { 'Producto': 'frijoles', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Martha',
//         'Telefono': 7445678901,
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 5 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Miguel',
//         'Edad': 33,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Susana',
//         'Apellido': 'Gómez',
//         'Telefono': 7556789012,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Daniel',
//         'Edad': 37,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'tomates', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Valeria',
//         'Telefono': 7667890123,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Pedro',
//         'Edad': 35,
//         'Direccion': 'Avenida 10 #22-18',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Laura',
//         'Telefono': 7778901234,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'arroz', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Eduardo',
//         'Edad': 28,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Carolina',
//         'Telefono': 7889012345,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Rafael',
//         'Edad': 30,
//         'Direccion': 'Calle 7 #19-27',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Isabel',
//         'Telefono': 7990123456,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'tomates', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Edad': 33,
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 6 },
//             { 'Producto': 'frijoles', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Julia',
//         'Telefono': 8001234567,
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 5 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Sergio',
//         'Edad': 31,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Lorena',
//         'Apellido': 'Martínez',
//         'Telefono': 8112345678,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Joaquín',
//         'Edad': 38,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'tomates', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Mariana',
//         'Telefono': 8223456789,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Alejandro',
//         'Edad': 40,
//         'Direccion': 'Carrera 13 #30-21',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Paula',
//         'Telefono': 8334567890,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'arroz', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Diego',
//         'Edad': 29,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Carla',
//         'Telefono': 8445678901,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Andrés',
//         'Edad': 34,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Natalia',
//         'Apellido': 'López',
//         'Telefono': 8556789012,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'tomates', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Javier',
//         'Edad': 35,
//         'Direccion': 'Avenida 14 #27-19',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 6 },
//             { 'Producto': 'frijoles', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'María',
//         'Telefono': 8667890123,
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 5 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Andrés',
//         'Edad': 36,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Luis',
//         'Apellido': 'Martínez',
//         'Telefono': 8778901234,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Daniela',
//         'Edad': 37,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'tomates', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Valentina',
//         'Telefono': 8889012345,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Pablo',
//         'Edad': 37,
//         'Direccion': 'Calle 12 #25-16',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Carolina',
//         'Telefono': 8990123456,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'arroz', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Jorge',
//         'Edad': 38,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Marcela',
//         'Apellido': 'Pérez',
//         'Telefono': 9001234567,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Carlos',
//         'Edad': 39,
//         'Telefono': 9112345678,
//         'Direccion': 'Calle 2 #11-14',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Mónica',
//         'Edad': 30,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'arroz', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Andrea',
//         'Telefono': 9223456789,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Ricardo',
//         'Edad': 32,
//         'Direccion': 'Avenida 7 #17-21',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Gloria',
//         'Telefono': 9334567890,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Héctor',
//         'Edad': 34,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'tomates', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Claudia',
//         'Telefono': 9445678901,
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 6 },
//             { 'Producto': 'frijoles', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Miguel',
//         'Edad': 28,
//         'Direccion': 'Carrera 14 #29-18',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 5 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Sandra',
//         'Telefono': 9556789012,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Fernando',
//         'Edad': 31,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Valentina',
//         'Telefono': 9667890123,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'tomates', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Mauricio',
//         'Edad': 32,
//         'Direccion': 'Calle 9 #20-14',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Laura',
//         'Telefono': 9778901234,
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Luis',
//         'Edad': 33,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'arroz', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Isabella',
//         'Telefono': 9889012345,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Carlos',
//         'Edad': 35,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Mariana',
//         'Telefono': 9990123456,
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 5 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Joaquín',
//         'Edad': 36,
//         'Direccion': 'Avenida 15 #26-23',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Paula',
//         'Telefono': 1001234567,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Santiago',
//         'Edad': 34,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'tomates', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Elena',
//         'Telefono': 1012345678,
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 6 },
//             { 'Producto': 'frijoles', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Juan',
//         'Edad': 29,
//         'Direccion': 'Calle 10 #21-15',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 5 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Lorena',
//         'Telefono': 1023456789,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 4 },
//             { 'Producto': 'arroz', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Javier',
//         'Edad': 30,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'María',
//         'Telefono': 1034567890,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'papas', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Miguel',
//         'Edad': 35,
//         'Direccion': 'Avenida 16 #28-25',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Gloria',
//         'Telefono': 1045678901,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'arroz', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Héctor',
//         'Edad': 31,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 3 },
//             { 'Producto': 'leche', 'Cantidad': 5 },
//             { 'Producto': 'huevos', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Claudia',
//         'Telefono': 1056789012,
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Andrés',
//         'Edad': 36,
//         'Direccion': 'Calle 11 #22-17',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 12 }
//         ]
//     },
//     {
//         'Nombre': 'Valeria',
//         'Telefono': 1067890123,
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'arroz', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Pedro',
//         'Edad': 32,
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'azúcar', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Laura',
//         'Telefono': 1078901234,
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 4 },
//             { 'Producto': 'tomates', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Luis',
//         'Edad': 33,
//         'Direccion': 'Avenida 17 #26-19',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 5 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cerveza', 'Cantidad': 6 }
//         ]
//     },
//     {
//         'Nombre': 'Juan',
//         'Apellido': 'López',
//         'Edad': 28,
//         'Telefono': 3024445678,
//         'Direccion': 'Avenida 12 #34-56',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//             { 'Producto': 'pollo', 'Cantidad': 2 },
//             { 'Producto': 'verduras', 'Cantidad': 8 }
//         ]
//     },
//     {
//         'Nombre': 'Ana',
//         'Apellido': 'Martínez',
//         'Edad': 42,
//         'Telefono': 3056667890,
//         'Direccion': 'Carrera 5 #10-15',
//         'Productos_Comprados': [
//             { 'Producto': 'pasta', 'Cantidad': 3 },
//             { 'Producto': 'salsa', 'Cantidad': 2 },
//             { 'Producto': 'queso', 'Cantidad': 1 }
//         ]
//     },
//     {
//         'Nombre': 'Carlos',
//         'Apellido': 'González',
//         'Edad': 31,
//         'Telefono': 3007774567,
//         'Direccion': 'Calle 8 #20-40',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 6 },
//             { 'Producto': 'peras', 'Cantidad': 4 },
//             { 'Producto': 'uvas', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Luisa',
//         'Apellido': 'Pérez',
//         'Edad': 55,
//         'Telefono': 3011234567,
//         'Direccion': 'Carrera 15 #30-25',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 5 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Elena',
//         'Apellido': 'Ramírez',
//         'Edad': 29,
//         'Telefono': 3045556789,
//         'Direccion': 'Avenida 10 #22-15',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'cereal', 'Cantidad': 1 },
//             { 'Producto': 'yogur', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Miguel',
//         'Apellido': 'Díaz',
//         'Edad': 38,
//         'Telefono': 3037778899,
//         'Direccion': 'Calle 18 #37-48',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'huevos', 'Cantidad': 12 },
//             { 'Producto': 'tocino', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Isabel',
//         'Apellido': 'Hernández',
//         'Edad': 45,
//         'Telefono': 3068881234,
//         'Direccion': 'Carrera 7 #14-30',
//         'Productos_Comprados': [
//             { 'Producto': 'soda', 'Cantidad': 6 },
//             { 'Producto': 'chips', 'Cantidad': 3 },
//             { 'Producto': 'galletas', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Pedro',
//         'Apellido': 'Torres',
//         'Edad': 33,
//         'Telefono': 3029995678,
//         'Direccion': 'Avenida 5 #16-21',
//         'Productos_Comprados': [
//             { 'Producto': 'cereales', 'Cantidad': 2 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan integral', 'Cantidad': 1 }
//         ]
//     },
//     {
//         'Nombre': 'Lorena',
//         'Apellido': 'Sánchez',
//         'Edad': 30,
//         'Telefono': 3011112222,
//         'Direccion': 'Calle 30 #50-10',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'peras', 'Cantidad': 6 },
//             { 'Producto': 'uvas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Apellido': 'Fernández',
//         'Edad': 37,
//         'Telefono': 3033334444,
//         'Direccion': 'Carrera 12 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Laura',
//         'Apellido': 'Soto',
//         'Edad': 26,
//         'Telefono': 3051234567,
//         'Direccion': 'Calle 7 #15-29',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Daniel',
//         'Apellido': 'Gómez',
//         'Edad': 34,
//         'Telefono': 3015557890,
//         'Direccion': 'Avenida 3 #12-20',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'verduras', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Sara',
//         'Apellido': 'Rodríguez',
//         'Edad': 29,
//         'Telefono': 3046665678,
//         'Direccion': 'Carrera 9 #22-45',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 4 },
//             { 'Producto': 'peras', 'Cantidad': 3 },
//             { 'Producto': 'uvas', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Javier',
//         'Apellido': 'Herrera',
//         'Edad': 40,
//         'Telefono': 3028881234,
//         'Direccion': 'Calle 5 #10-30',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 6 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Marcela',
//         'Apellido': 'Vargas',
//         'Edad': 32,
//         'Telefono': 3031112345,
//         'Direccion': 'Avenida 14 #28-18',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'cereal', 'Cantidad': 1 },
//             { 'Producto': 'yogur', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Antonio',
//         'Apellido': 'Fernández',
//         'Edad': 45,
//         'Telefono': 3057777890,
//         'Direccion': 'Carrera 4 #16-32',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'huevos', 'Cantidad': 12 },
//             { 'Producto': 'tocino', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Eva',
//         'Apellido': 'López',
//         'Edad': 36,
//         'Telefono': 3044445678,
//         'Direccion': 'Calle 6 #18-25',
//         'Productos_Comprados': [
//             { 'Producto': 'soda', 'Cantidad': 6 },
//             { 'Producto': 'chips', 'Cantidad': 3 },
//             { 'Producto': 'galletas', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Alejandro',
//         'Apellido': 'Sánchez',
//         'Edad': 31,
//         'Telefono': 3016666789,
//         'Direccion': 'Avenida 11 #24-15',
//         'Productos_Comprados': [
//             { 'Producto': 'cereales', 'Cantidad': 2 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan integral', 'Cantidad': 1 }
//         ]
//     },
//     {
//         'Nombre': 'Lucia',
//         'Apellido': 'González',
//         'Edad': 29,
//         'Telefono': 3027774567,
//         'Direccion': 'Carrera 8 #20-40',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'peras', 'Cantidad': 6 },
//             { 'Producto': 'uvas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Hugo',
//         'Apellido': 'Martínez',
//         'Edad': 39,
//         'Telefono': 3005551234,
//         'Direccion': 'Calle 10 #22-17',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Alicia',
//         'Apellido': 'Ortega',
//         'Edad': 27,
//         'Telefono': 3043332345,
//         'Direccion': 'Avenida 9 #23-12',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'pan', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Ricardo',
//         'Apellido': 'Ramírez',
//         'Edad': 43,
//         'Telefono': 3059995678,
//         'Direccion': 'Carrera 6 #15-29',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'verduras', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Carmen',
//         'Apellido': 'Díaz',
//         'Edad': 37,
//         'Telefono': 3012223456,
//         'Direccion': 'Calle 4 #11-22',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 4 },
//             { 'Producto': 'peras', 'Cantidad': 3 },
//             { 'Producto': 'uvas', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Andrés',
//         'Apellido': 'Hernández',
//         'Edad': 41,
//         'Telefono': 3025556789,
//         'Direccion': 'Avenida 8 #20-40',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 6 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Isidro',
//         'Apellido': 'Vega',
//         'Edad': 30,
//         'Telefono': 3037774567,
//         'Direccion': 'Carrera 10 #22-45',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'cereal', 'Cantidad': 1 },
//             { 'Producto': 'yogur', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Marina',
//         'Apellido': 'Torres',
//         'Edad': 35,
//         'Telefono': 3061234567,
//         'Direccion': 'Calle 5 #10-30',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'huevos', 'Cantidad': 12 },
//             { 'Producto': 'tocino', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Jorge',
//         'Apellido': 'Pérez',
//         'Edad': 38,
//         'Telefono': 3004445678,
//         'Direccion': 'Avenida 7 #15-29',
//         'Productos_Comprados': [
//             { 'Producto': 'soda', 'Cantidad': 6 },
//             { 'Producto': 'chips', 'Cantidad': 3 },
//             { 'Producto': 'galletas', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Rosa',
//         'Apellido': 'Molina',
//         'Edad': 29,
//         'Telefono': 3058881234,
//         'Direccion': 'Carrera 8 #16-32',
//         'Productos_Comprados': [
//             { 'Producto': 'cereales', 'Cantidad': 2 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan integral', 'Cantidad': 1 }
//         ]
//     },
//     {
//         'Nombre': 'Raúl',
//         'Apellido': 'Guerrero',
//         'Edad': 36,
//         'Telefono': 3036666789,
//         'Direccion': 'Calle 6 #18-25',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'peras', 'Cantidad': 6 },
//             { 'Producto': 'uvas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Luis',
//         'Apellido': 'Cruz',
//         'Edad': 47,
//         'Telefono': 3014445678,
//         'Direccion': 'Avenida 10 #22-17',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Silvia',
//         'Apellido': 'Moreno',
//         'Edad': 33,
//         'Telefono': 3067777890,
//         'Direccion': 'Calle 12 #24-28',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'pan', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Enrique',
//         'Apellido': 'Castro',
//         'Edad': 42,
//         'Telefono': 3001112345,
//         'Direccion': 'Carrera 5 #14-30',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'verduras', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Teresa',
//         'Apellido': 'Fuentes',
//         'Edad': 28,
//         'Telefono': 3045556789,
//         'Direccion': 'Avenida 11 #23-12',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 4 },
//             { 'Producto': 'peras', 'Cantidad': 3 },
//             { 'Producto': 'uvas', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Gustavo',
//         'Apellido': 'Mendoza',
//         'Edad': 39,
//         'Telefono': 3023332345,
//         'Direccion': 'Calle 14 #28-18',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 6 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Liliana',
//         'Apellido': 'Cabrera',
//         'Edad': 31,
//         'Telefono': 3031112222,
//         'Direccion': 'Carrera 7 #20-40',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'cereal', 'Cantidad': 1 },
//             { 'Producto': 'yogur', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Mario',
//         'Apellido': 'Mendez',
//         'Edad': 35,
//         'Telefono': 3057774567,
//         'Direccion': 'Calle 9 #22-45',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'huevos', 'Cantidad': 12 },
//             { 'Producto': 'tocino', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Pilar',
//         'Apellido': 'Cruz',
//         'Edad': 27,
//         'Telefono': 3019995678,
//         'Direccion': 'Avenida 12 #25-35',
//         'Productos_Comprados': [
//             { 'Producto': 'soda', 'Cantidad': 6 },
//             { 'Producto': 'chips', 'Cantidad': 3 },
//             { 'Producto': 'galletas', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Pedro',
//         'Apellido': 'Lara',
//         'Edad': 29,
//         'Telefono': 3044445678,
//         'Direccion': 'Calle 8 #16-32',
//         'Productos_Comprados': [
//             { 'Producto': 'cereales', 'Cantidad': 2 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan integral', 'Cantidad': 1 }
//         ]
//     },
//     {
//         'Nombre': 'Olga',
//         'Apellido': 'Sanchez',
//         'Edad': 44,
//         'Telefono': 3066666789,
//         'Direccion': 'Carrera 10 #22-45',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'peras', 'Cantidad': 6 },
//             { 'Producto': 'uvas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Apellido': 'Fernández',
//         'Edad': 37,
//         'Telefono': 3015551234,
//         'Direccion': 'Avenida 14 #30-25',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Patricia',
//         'Apellido': 'Ruiz',
//         'Edad': 38,
//         'Telefono': 3033334444,
//         'Direccion': 'Calle 7 #17-22',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Juan',
//         'Apellido': 'Santos',
//         'Edad': 42,
//         'Telefono': 3054445678,
//         'Direccion': 'Avenida 15 #33-40',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'verduras', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Marta',
//         'Apellido': 'Gutierrez',
//         'Edad': 31,
//         'Telefono': 3006666789,
//         'Direccion': 'Carrera 12 #28-15',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 4 },
//             { 'Producto': 'peras', 'Cantidad': 3 },
//             { 'Producto': 'uvas', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Raul',
//         'Apellido': 'Alvarez',
//         'Edad': 34,
//         'Telefono': 3027777890,
//         'Direccion': 'Calle 14 #30-21',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 6 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Lorena',
//         'Apellido': 'Vargas',
//         'Edad': 29,
//         'Telefono': 3031112345,
//         'Direccion': 'Avenida 11 #22-18',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'cereal', 'Cantidad': 1 },
//             { 'Producto': 'yogur', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Gabriel',
//         'Apellido': 'Jiménez',
//         'Edad': 27,
//         'Telefono': 3017774567,
//         'Direccion': 'Carrera 5 #19-30',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'huevos', 'Cantidad': 12 },
//             { 'Producto': 'tocino', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Natalia',
//         'Apellido': 'Herrera',
//         'Edad': 40,
//         'Telefono': 3048881234,
//         'Direccion': 'Calle 8 #20-30',
//         'Productos_Comprados': [
//             { 'Producto': 'soda', 'Cantidad': 6 },
//             { 'Producto': 'chips', 'Cantidad': 3 },
//             { 'Producto': 'galletas', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Apellido': 'López',
//         'Edad': 35,
//         'Telefono': 3053332345,
//         'Direccion': 'Avenida 7 #17-21',
//         'Productos_Comprados': [
//             { 'Producto': 'cereales', 'Cantidad': 2 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan integral', 'Cantidad': 1 }
//         ]
//     },
//     {
//         'Nombre': 'María',
//         'Apellido': 'García',
//         'Edad': 36,
//         'Telefono': 3025556789,
//         'Direccion': 'Carrera 6 #16-32',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'peras', 'Cantidad': 6 },
//             { 'Producto': 'uvas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Arturo',
//         'Apellido': 'Ortega',
//         'Edad': 38,
//         'Telefono': 3014445678,
//         'Direccion': 'Calle 10 #18-25',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Nancy',
//         'Apellido': 'Mendoza',
//         'Edad': 33,
//         'Telefono': 3039995678,
//         'Direccion': 'Avenida 12 #26-35',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'pan', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Héctor',
//         'Apellido': 'Torres',
//         'Edad': 29,
//         'Telefono': 3046666789,
//         'Direccion': 'Calle 15 #32-40',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'verduras', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Tatiana',
//         'Apellido': 'Gómez',
//         'Edad': 30,
//         'Telefono': 3001112345,
//         'Direccion': 'Carrera 10 #22-15',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 4 },
//             { 'Producto': 'peras', 'Cantidad': 3 },
//             { 'Producto': 'uvas', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Rafael',
//         'Apellido': 'Molina',
//         'Edad': 37,
//         'Telefono': 3027777890,
//         'Direccion': 'Avenida 9 #23-12',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 6 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Eduardo',
//         'Apellido': 'Alvarez',
//         'Edad': 29,
//         'Telefono': 3035551234,
//         'Direccion': 'Calle 7 #20-40',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'cereal', 'Cantidad': 1 },
//             { 'Producto': 'yogur', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Diana',
//         'Apellido': 'Cabrera',
//         'Edad': 32,
//         'Telefono': 3016665678,
//         'Direccion': 'Carrera 14 #30-25',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'huevos', 'Cantidad': 12 },
//             { 'Producto': 'tocino', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Manuel',
//         'Apellido': 'Ruiz',
//         'Edad': 45,
//         'Telefono': 3051112222,
//         'Direccion': 'Avenida 10 #24-32',
//         'Productos_Comprados': [
//             { 'Producto': 'soda', 'Cantidad': 6 },
//             { 'Producto': 'chips', 'Cantidad': 3 },
//             { 'Producto': 'galletas', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Marisol',
//         'Apellido': 'Jiménez',
//         'Edad': 28,
//         'Telefono': 3023332345,
//         'Direccion': 'Calle 12 #26-38',
//         'Productos_Comprados': [
//             { 'Producto': 'cereales', 'Cantidad': 2 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan integral', 'Cantidad': 1 }
//         ]
//     },
//     {
//         'Nombre': 'Humberto',
//         'Apellido': 'Gutierrez',
//         'Edad': 41,
//         'Telefono': 3067777890,
//         'Direccion': 'Carrera 8 #18-29',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'peras', 'Cantidad': 6 },
//             { 'Producto': 'uvas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Cecilia',
//         'Apellido': 'Vega',
//         'Edad': 30,
//         'Telefono': 3018881234,
//         'Direccion': 'Avenida 5 #13-25',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Ignacio',
//         'Apellido': 'Castro',
//         'Edad': 37,
//         'Telefono': 3037774567,
//         'Direccion': 'Calle 10 #22-15',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'pan', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Dolores',
//         'Apellido': 'Guerrero',
//         'Edad': 29,
//         'Telefono': 3049995678,
//         'Direccion': 'Carrera 12 #26-35',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'verduras', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Mónica',
//         'Apellido': 'López',
//         'Edad': 27,
//         'Telefono': 3025556789,
//         'Direccion': 'Avenida 17 #35-42',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Eduardo',
//         'Apellido': 'Gómez',
//         'Edad': 36,
//         'Telefono': 3014445678,
//         'Direccion': 'Calle 13 #29-40',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'verduras', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Valentina',
//         'Apellido': 'Rodríguez',
//         'Edad': 29,
//         'Telefono': 3047777890,
//         'Direccion': 'Carrera 10 #26-15',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 4 },
//             { 'Producto': 'peras', 'Cantidad': 3 },
//             { 'Producto': 'uvas', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Luis',
//         'Apellido': 'Herrera',
//         'Edad': 41,
//         'Telefono': 3023332345,
//         'Direccion': 'Calle 14 #30-25',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 6 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Carolina',
//         'Apellido': 'Vargas',
//         'Edad': 30,
//         'Telefono': 3031112345,
//         'Direccion': 'Avenida 12 #24-18',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'cereal', 'Cantidad': 1 },
//             { 'Producto': 'yogur', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Ricardo',
//         'Apellido': 'Fernández',
//         'Edad': 45,
//         'Telefono': 3056665678,
//         'Direccion': 'Carrera 8 #22-40',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'huevos', 'Cantidad': 12 },
//             { 'Producto': 'tocino', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Gabriela',
//         'Apellido': 'Lara',
//         'Edad': 33,
//         'Telefono': 3018881234,
//         'Direccion': 'Calle 11 #20-35',
//         'Productos_Comprados': [
//             { 'Producto': 'soda', 'Cantidad': 6 },
//             { 'Producto': 'chips', 'Cantidad': 3 },
//             { 'Producto': 'galletas', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Roberto',
//         'Apellido': 'Sánchez',
//         'Edad': 31,
//         'Telefono': 3045556789,
//         'Direccion': 'Avenida 9 #21-12',
//         'Productos_Comprados': [
//             { 'Producto': 'cereales', 'Cantidad': 2 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan integral', 'Cantidad': 1 }
//         ]
//     },
//     {
//         'Nombre': 'Andrea',
//         'Apellido': 'Ramírez',
//         'Edad': 29,
//         'Telefono': 3027774567,
//         'Direccion': 'Carrera 5 #19-30',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'peras', 'Cantidad': 6 },
//             { 'Producto': 'uvas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Joaquín',
//         'Apellido': 'Hernández',
//         'Edad': 38,
//         'Telefono': 3011112345,
//         'Direccion': 'Calle 16 #32-45',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Mariana',
//         'Apellido': 'Ortega',
//         'Edad': 27,
//         'Telefono': 3036666789,
//         'Direccion': 'Avenida 7 #17-29',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'pan', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Martín',
//         'Apellido': 'González',
//         'Edad': 40,
//         'Telefono': 3054445678,
//         'Direccion': 'Carrera 12 #26-35',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'verduras', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Isabella',
//         'Apellido': 'Molina',
//         'Edad': 29,
//         'Telefono': 3029995678,
//         'Direccion': 'Calle 13 #29-41',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 4 },
//             { 'Producto': 'peras', 'Cantidad': 3 },
//             { 'Producto': 'uvas', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Fernando',
//         'Apellido': 'Vega',
//         'Edad': 33,
//         'Telefono': 3015551234,
//         'Direccion': 'Avenida 16 #34-29',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 6 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Apellido': 'Soto',
//         'Edad': 28,
//         'Telefono': 3043332345,
//         'Direccion': 'Calle 15 #31-20',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'cereal', 'Cantidad': 1 },
//             { 'Producto': 'yogur', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Gonzalo',
//         'Apellido': 'Cruz',
//         'Edad': 35,
//         'Telefono': 3037777890,
//         'Direccion': 'Carrera 11 #23-17',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'huevos', 'Cantidad': 12 },
//             { 'Producto': 'tocino', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Clara',
//         'Apellido': 'Guerrero',
//         'Edad': 30,
//         'Telefono': 3051112345,
//         'Direccion': 'Avenida 13 #27-35',
//         'Productos_Comprados': [
//             { 'Producto': 'soda', 'Cantidad': 6 },
//             { 'Producto': 'chips', 'Cantidad': 3 },
//             { 'Producto': 'galletas', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Diego',
//         'Apellido': 'Fernández',
//         'Edad': 36,
//         'Telefono': 3014445678,
//         'Direccion': 'Calle 17 #33-40',
//         'Productos_Comprados': [
//             { 'Producto': 'cereales', 'Cantidad': 2 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan integral', 'Cantidad': 1 }
//         ]
//     },
//     {
//         'Nombre': 'Catalina',
//         'Apellido': 'Lara',
//         'Edad': 31,
//         'Telefono': 3039995678,
//         'Direccion': 'Carrera 13 #25-38',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 8 },
//             { 'Producto': 'peras', 'Cantidad': 6 },
//             { 'Producto': 'uvas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Alejandro',
//         'Apellido': 'Vargas',
//         'Edad': 28,
//         'Telefono': 3016666789,
//         'Direccion': 'Avenida 14 #29-12',
//         'Productos_Comprados': [
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 4 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Ana',
//         'Apellido': 'Gómez',
//         'Edad': 39,
//         'Telefono': 3027774567,
//         'Direccion': 'Calle 16 #31-42',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 4 },
//             { 'Producto': 'pan', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Miguel',
//         'Apellido': 'Martínez',
//         'Edad': 32,
//         'Telefono': 3041112345,
//         'Direccion': 'Carrera 14 #30-22',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'verduras', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Sara',
//         'Apellido': 'Ortega',
//         'Edad': 29,
//         'Telefono': 3066665678,
//         'Direccion': 'Avenida 12 #26-19',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 4 },
//             { 'Producto': 'peras', 'Cantidad': 3 },
//             { 'Producto': 'uvas', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Mauricio',
//         'Apellido': 'García',
//         'Edad': 37,
//         'Telefono': 3025556789,
//         'Direccion': 'Calle 15 #29-32',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 6 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Valeria',
//         'Apellido': 'Santos',
//         'Edad': 28,
//         'Telefono': 3018881234,
//         'Direccion': 'Carrera 13 #27-25',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'cereal', 'Cantidad': 1 },
//             { 'Producto': 'yogur', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Javier',
//         'Apellido': 'Molina',
//         'Edad': 34,
//         'Telefono': 3035551234,
//         'Direccion': 'Avenida 10 #24-35',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'huevos', 'Cantidad': 12 },
//             { 'Producto': 'tocino', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Mariano',
//         'Apellido': 'Gómez',
//         'Edad': 42,
//         'Telefono': 3053332345,
//         'Direccion': 'Calle 14 #28-40',
//         'Productos_Comprados': [
//             { 'Producto': 'soda', 'Cantidad': 6 },
//             { 'Producto': 'chips', 'Cantidad': 3 },
//             { 'Producto': 'galletas', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Lucía',
//         'Apellido': 'Soto',
//         'Edad': 29,
//         'Telefono': 3027777890,
//         'Direccion': 'Carrera 12 #26-37',
//         'Productos_Comprados': [
//             { 'Producto': 'cereales', 'Cantidad': 2 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan integral', 'Cantidad': 1 }
//         ]
//     },
//     {
//         'Nombre': 'Felipe',
//         'Apellido': 'García',
//         'Edad': 35,
//         'Telefono': 3031112345,
//         'Direccion': 'Avenida 9 #23-29',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 4 },
//             { 'Producto': 'peras', 'Cantidad': 3 },
//             { 'Producto': 'uvas', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Adriana',
//         'Apellido': 'Sánchez',
//         'Edad': 40,
//         'Telefono': 3016666789,
//         'Direccion': 'Calle 16 #31-38',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'cereal', 'Cantidad': 1 },
//             { 'Producto': 'yogur', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Manuel',
//         'Apellido': 'Herrera',
//         'Edad': 33,
//         'Telefono': 3049995678,
//         'Direccion': 'Carrera 11 #25-29',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'verduras', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Camila',
//         'Apellido': 'Gómez',
//         'Edad': 27,
//         'Telefono': 3066665678,
//         'Direccion': 'Avenida 8 #22-30',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 4 },
//             { 'Producto': 'peras', 'Cantidad': 3 },
//             { 'Producto': 'uvas', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Emilio',
//         'Apellido': 'Ortega',
//         'Edad': 31,
//         'Telefono': 3023332345,
//         'Direccion': 'Calle 18 #34-42',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 6 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Valentina',
//         'Apellido': 'Cabrera',
//         'Edad': 29,
//         'Telefono': 3039995678,
//         'Direccion': 'Carrera 15 #29-25',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'cereal', 'Cantidad': 1 },
//             { 'Producto': 'yogur', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Nicolás',
//         'Apellido': 'Molina',
//         'Edad': 34,
//         'Telefono': 3014445678,
//         'Direccion': 'Avenida 11 #23-28',
//         'Productos_Comprados': [
//             { 'Producto': 'pan', 'Cantidad': 4 },
//             { 'Producto': 'huevos', 'Cantidad': 12 },
//             { 'Producto': 'tocino', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Sofía',
//         'Apellido': 'Herrera',
//         'Edad': 30,
//         'Telefono': 3047777890,
//         'Direccion': 'Calle 19 #35-38',
//         'Productos_Comprados': [
//             { 'Producto': 'soda', 'Cantidad': 6 },
//             { 'Producto': 'chips', 'Cantidad': 3 },
//             { 'Producto': 'galletas', 'Cantidad': 5 }
//         ]
//     },
//     {
//         'Nombre': 'Alejandro',
//         'Apellido': 'Gómez',
//         'Edad': 27,
//         'Telefono': 3035551234,
//         'Direccion': 'Carrera 17 #33-29',
//         'Productos_Comprados': [
//             { 'Producto': 'cereales', 'Cantidad': 2 },
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan integral', 'Cantidad': 1 }
//         ]
//     },
//     {
//         'Nombre': 'Luisa',
//         'Apellido': 'Torres',
//         'Edad': 32,
//         'Telefono': 3015551234,
//         'Direccion': 'Calle 22 #39-55',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Andrés',
//         'Apellido': 'Hernández',
//         'Edad': 39,
//         'Telefono': 3025556789,
//         'Direccion': 'Avenida 19 #37-44',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'verduras', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Lorenzo',
//         'Apellido': 'García',
//         'Edad': 28,
//         'Telefono': 3034445678,
//         'Direccion': 'Carrera 20 #42-61',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 4 },
//             { 'Producto': 'peras', 'Cantidad': 3 },
//             { 'Producto': 'uvas', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Valeria',
//         'Apellido': 'Soto',
//         'Edad': 36,
//         'Telefono': 3047777890,
//         'Direccion': 'Calle 24 #45-70',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 6 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Camilo',
//         'Apellido': 'Molina',
//         'Edad': 31,
//         'Telefono': 3058881234,
//         'Direccion': 'Avenida 20 #38-49',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'cereal', 'Cantidad': 1 },
//             { 'Producto': 'yogur', 'Cantidad': 4 }
//         ]
//     },
//     {
//         'Nombre': 'Luisa',
//         'Apellido': 'Torres',
//         'Edad': 32,
//         'Telefono': 3015551234,
//         'Direccion': 'Calle 22 #39-55',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 3 },
//             { 'Producto': 'pan', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Andrés',
//         'Apellido': 'Hernández',
//         'Edad': 39,
//         'Telefono': 3025556789,
//         'Direccion': 'Avenida 19 #37-44',
//         'Productos_Comprados': [
//             { 'Producto': 'arroz', 'Cantidad': 5 },
//             { 'Producto': 'pollo', 'Cantidad': 3 },
//             { 'Producto': 'verduras', 'Cantidad': 7 }
//         ]
//     },
//     {
//         'Nombre': 'Lorenzo',
//         'Apellido': 'García',
//         'Edad': 28,
//         'Telefono': 3034445678,
//         'Direccion': 'Carrera 20 #42-61',
//         'Productos_Comprados': [
//             { 'Producto': 'manzanas', 'Cantidad': 4 },
//             { 'Producto': 'peras', 'Cantidad': 3 },
//             { 'Producto': 'uvas', 'Cantidad': 2 }
//         ]
//     },
//     {
//         'Nombre': 'Valeria',
//         'Apellido': 'Soto',
//         'Edad': 36,
//         'Telefono': 3047777890,
//         'Direccion': 'Calle 24 #45-70',
//         'Productos_Comprados': [
//             { 'Producto': 'carne', 'Cantidad': 3 },
//             { 'Producto': 'papas', 'Cantidad': 6 },
//             { 'Producto': 'cebollas', 'Cantidad': 3 }
//         ]
//     },
//     {
//         'Nombre': 'Camilo',
//         'Apellido': 'Molina',
//         'Edad': 31,
//         'Telefono': 3058881234,
//         'Direccion': 'Avenida 20 #38-49',
//         'Productos_Comprados': [
//             { 'Producto': 'leche', 'Cantidad': 2 },
//             { 'Producto': 'cereal', 'Cantidad': 1 },
//             { 'Producto': 'yogur', 'Cantidad': 4 }
//         ]
//     }
// ]);


// db.getCollection('Clientes').find();

//db.getCollection('Clientes').findOne();

//db.getCollection('Clientes').updateMany({Nombre: 'Andres'},{$set:{Edad:37}});

//db.getCollection('Clientes').deleteOne({Nombre: 'Carlos'});

//db.getCollection('Clientes').deleteMany({Nombre: 'Eduardo'});

//db.getCollection('Clientes').drop({});

//db.dropdatabase()


