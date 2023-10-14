// use('Supermercado');
// db.getCollection('Ventas').insertMany([
//     {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-10-12", "hora": "10:00:00"},
//               {"fecha": "2023-10-13", "hora": "09:30:00"}
//             ],
//             "total_pagar": 150.25,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-10-12", "hora": "12:00:00"},
//               {"fecha": "2023-10-14", "hora": "14:00:00"}
//             ],
//             "total_pagar": 80.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-10-12", "hora": "16:30:00"},
//               {"fecha": "2023-10-13", "hora": "08:45:00"}
//             ],
//             "total_pagar": 50.80,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-10-12", "hora": "14:00:00"},
//               {"fecha": "2023-10-15", "hora": "11:00:00"}
//             ],
//             "total_pagar": 300.50,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-10-13", "hora": "17:00:00"},
//               {"fecha": "2023-10-14", "hora": "13:30:00"}
//             ],
//             "total_pagar": 120.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//     {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-10-12", "hora": "15:30:00"},
//               {"fecha": "2023-10-13", "hora": "10:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-10-14", "hora": "09:00:00"},
//               {"fecha": "2023-10-15", "hora": "11:30:00"}
//             ],
//             "total_pagar": 180.50,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-10-15", "hora": "08:30:00"},
//               {"fecha": "2023-10-16", "hora": "12:00:00"}
//             ],
//             "total_pagar": 60.20,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-10-16", "hora": "14:00:00"},
//               {"fecha": "2023-10-17", "hora": "09:30:00"}
//             ],
//             "total_pagar": 120.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-10-18", "hora": "16:00:00"},
//               {"fecha": "2023-10-19", "hora": "08:45:00"}
//             ],
//             "total_pagar": 85.80,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-10-19", "hora": "11:30:00"},
//               {"fecha": "2023-10-20", "hora": "13:00:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-10-20", "hora": "15:00:00"},
//               {"fecha": "2023-10-21", "hora": "10:00:00"}
//             ],
//             "total_pagar": 190.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-10-21", "hora": "13:45:00"},
//               {"fecha": "2023-10-22", "hora": "11:15:00"}
//             ],
//             "total_pagar": 65.70,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-10-22", "hora": "16:30:00"},
//               {"fecha": "2023-10-23", "hora": "08:00:00"}
//             ],
//             "total_pagar": 75.90,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-10-23", "hora": "09:30:00"},
//               {"fecha": "2023-10-24", "hora": "10:45:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-10-24", "hora": "12:00:00"},
//               {"fecha": "2023-10-25", "hora": "16:30:00"}
//             ],
//             "total_pagar": 55.80,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-10-25", "hora": "10:00:00"},
//               {"fecha": "2023-10-26", "hora": "14:00:00"}
//             ],
//             "total_pagar": 130.50,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-10-26", "hora": "08:30:00"},
//               {"fecha": "2023-10-27", "hora": "11:00:00"}
//             ],
//             "total_pagar": 90.20,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-10-27", "hora": "16:00:00"},
//               {"fecha": "2023-10-28", "hora": "09:45:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-10-28", "hora": "13:30:00"},
//               {"fecha": "2023-10-29", "hora": "14:00:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-10-29", "hora": "10:30:00"},
//               {"fecha": "2023-10-30", "hora": "08:45:00"}
//             ],
//             "total_pagar": 70.60,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-10-30", "hora": "12:00:00"},
//               {"fecha": "2023-10-31", "hora": "09:15:00"}
//             ],
//             "total_pagar": 160.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-10-31", "hora": "14:30:00"},
//               {"fecha": "2023-11-01", "hora": "10:00:00"}
//             ],
//             "total_pagar": 40.80,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-01", "hora": "12:00:00"},
//               {"fecha": "2023-11-02", "hora": "15:30:00"}
//             ],
//             "total_pagar": 140.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-02", "hora": "10:00:00"},
//               {"fecha": "2023-11-03", "hora": "16:00:00"}
//             ],
//             "total_pagar": 80.90,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-11-03", "hora": "11:45:00"},
//               {"fecha": "2023-11-04", "hora": "10:15:00"}
//             ],
//             "total_pagar": 95.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-11-04", "hora": "09:00:00"},
//               {"fecha": "2023-11-05", "hora": "13:00:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-11-05", "hora": "16:30:00"},
//               {"fecha": "2023-11-06", "hora": "08:45:00"}
//             ],
//             "total_pagar": 85.60,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-11-06", "hora": "10:00:00"},
//               {"fecha": "2023-11-07", "hora": "15:30:00"}
//             ],
//             "total_pagar": 200.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-11-07", "hora": "12:00:00"},
//               {"fecha": "2023-11-08", "hora": "09:45:00"}
//             ],
//             "total_pagar": 60.80,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-08", "hora": "16:00:00"},
//               {"fecha": "2023-11-09", "hora": "10:30:00"}
//             ],
//             "total_pagar": 130.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-09", "hora": "11:15:00"},
//               {"fecha": "2023-11-10", "hora": "08:00:00"}
//             ],
//             "total_pagar": 90.20,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-11-10", "hora": "13:30:00"},
//               {"fecha": "2023-11-11", "hora": "16:00:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-11-11", "hora": "10:00:00"},
//               {"fecha": "2023-11-12", "hora": "12:45:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-11-12", "hora": "14:00:00"},
//               {"fecha": "2023-11-13", "hora": "09:30:00"}
//             ],
//             "total_pagar": 75.60,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-11-13", "hora": "11:00:00"},
//               {"fecha": "2023-11-14", "hora": "17:00:00"}
//             ],
//             "total_pagar": 230.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-11-14", "hora": "13:30:00"},
//               {"fecha": "2023-11-15", "hora": "09:00:00"}
//             ],
//             "total_pagar": 65.80,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-15", "hora": "16:00:00"},
//               {"fecha": "2023-11-16", "hora": "12:30:00"}
//             ],
//             "total_pagar": 120.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-16", "hora": "09:45:00"},
//               {"fecha": "2023-11-17", "hora": "14:00:00"}
//             ],
//             "total_pagar": 85.90,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-11-17", "hora": "10:30:00"},
//               {"fecha": "2023-11-18", "hora": "13:45:00"}
//             ],
//             "total_pagar": 95.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-11-18", "hora": "11:00:00"},
//               {"fecha": "2023-11-19", "hora": "10:15:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-11-19", "hora": "14:30:00"},
//               {"fecha": "2023-11-20", "hora": "16:00:00"}
//             ],
//             "total_pagar": 70.60,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-11-20", "hora": "12:00:00"},
//               {"fecha": "2023-11-21", "hora": "10:30:00"}
//             ],
//             "total_pagar": 210.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-11-21", "hora": "13:00:00"},
//               {"fecha": "2023-11-22", "hora": "08:45:00"}
//             ],
//             "total_pagar": 45.80,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-22", "hora": "11:30:00"},
//               {"fecha": "2023-11-23", "hora": "15:00:00"}
//             ],
//             "total_pagar": 140.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-23", "hora": "10:00:00"},
//               {"fecha": "2023-11-24", "hora": "16:30:00"}
//             ],
//             "total_pagar": 75.90,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-11-24", "hora": "09:45:00"},
//               {"fecha": "2023-11-25", "hora": "11:00:00"}
//             ],
//             "total_pagar": 105.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-11-25", "hora": "14:00:00"},
//               {"fecha": "2023-11-26", "hora": "10:45:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-11-26", "hora": "11:30:00"},
//               {"fecha": "2023-11-27", "hora": "09:00:00"}
//             ],
//             "total_pagar": 80.60,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-11-27", "hora": "14:00:00"},
//               {"fecha": "2023-11-28", "hora": "15:30:00"}
//             ],
//             "total_pagar": 240.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-11-28", "hora": "10:30:00"},
//               {"fecha": "2023-11-29", "hora": "08:45:00"}
//             ],
//             "total_pagar": 55.80,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-29", "hora": "13:00:00"},
//               {"fecha": "2023-11-30", "hora": "16:30:00"}
//             ],
//             "total_pagar": 120.25,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-30", "hora": "09:00:00"},
//               {"fecha": "2023-12-01", "hora": "10:15:00"}
//             ],
//             "total_pagar": 95.90,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-01", "hora": "13:30:00"},
//               {"fecha": "2023-12-02", "hora": "14:00:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-02", "hora": "10:00:00"},
//               {"fecha": "2023-12-03", "hora": "08:45:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-03", "hora": "11:30:00"},
//               {"fecha": "2023-12-04", "hora": "16:00:00"}
//             ],
//             "total_pagar": 75.60,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-12-04", "hora": "09:45:00"},
//               {"fecha": "2023-12-05", "hora": "12:00:00"}
//             ],
//             "total_pagar": 220.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-12-05", "hora": "14:30:00"},
//               {"fecha": "2023-12-06", "hora": "09:15:00"}
//             ],
//             "total_pagar": 60.80,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-06", "hora": "10:00:00"},
//               {"fecha": "2023-12-07", "hora": "16:30:00"}
//             ],
//             "total_pagar": 130.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-07", "hora": "11:45:00"},
//               {"fecha": "2023-12-08", "hora": "10:00:00"}
//             ],
//             "total_pagar": 90.20,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-08", "hora": "13:30:00"},
//               {"fecha": "2023-12-09", "hora": "16:00:00"}
//             ],
//             "total_pagar": 105.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-09", "hora": "09:30:00"},
//               {"fecha": "2023-12-10", "hora": "11:00:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-10", "hora": "14:00:00"},
//               {"fecha": "2023-12-11", "hora": "08:45:00"}
//             ],
//             "total_pagar": 70.60,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-12-11", "hora": "11:30:00"},
//               {"fecha": "2023-12-12", "hora": "16:00:00"}
//             ],
//             "total_pagar": 250.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-12-12", "hora": "09:00:00"},
//               {"fecha": "2023-12-13", "hora": "11:45:00"}
//             ],
//             "total_pagar": 55.80,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-13", "hora": "14:30:00"},
//               {"fecha": "2023-12-14", "hora": "09:15:00"}
//             ],
//             "total_pagar": 120.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-14", "hora": "10:00:00"},
//               {"fecha": "2023-12-15", "hora": "16:30:00"}
//             ],
//             "total_pagar": 80.90,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-15", "hora": "11:45:00"},
//               {"fecha": "2023-12-16", "hora": "10:00:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-16", "hora": "13:30:00"},
//               {"fecha": "2023-12-17", "hora": "16:00:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-17", "hora": "09:30:00"},
//               {"fecha": "2023-12-18", "hora": "11:00:00"}
//             ],
//             "total_pagar": 70.60,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-12-18", "hora": "14:00:00"},
//               {"fecha": "2023-12-19", "hora": "08:45:00"}
//             ],
//             "total_pagar": 240.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-12-19", "hora": "11:30:00"},
//               {"fecha": "2023-12-20", "hora": "16:00:00"}
//             ],
//             "total_pagar": 45.80,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-20", "hora": "10:00:00"},
//               {"fecha": "2023-12-21", "hora": "09:15:00"}
//             ],
//             "total_pagar": 130.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-21", "hora": "14:30:00"},
//               {"fecha": "2023-12-22", "hora": "12:00:00"}
//             ],
//             "total_pagar": 85.90,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-22", "hora": "10:00:00"},
//               {"fecha": "2023-12-23", "hora": "15:30:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-23", "hora": "13:00:00"},
//               {"fecha": "2023-12-24", "hora": "09:45:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-24", "hora": "11:30:00"},
//               {"fecha": "2023-12-25", "hora": "16:00:00"}
//             ],
//             "total_pagar": 75.60,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-12-25", "hora": "10:00:00"},
//               {"fecha": "2023-12-26", "hora": "09:15:00"}
//             ],
//             "total_pagar": 230.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-12-26", "hora": "13:00:00"},
//               {"fecha": "2023-12-27", "hora": "12:30:00"}
//             ],
//             "total_pagar": 55.80,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-27", "hora": "14:30:00"},
//               {"fecha": "2023-12-28", "hora": "08:45:00"}
//             ],
//             "total_pagar": 120.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-28", "hora": "11:30:00"},
//               {"fecha": "2023-12-29", "hora": "16:00:00"}
//             ],
//             "total_pagar": 90.20,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-29", "hora": "09:00:00"},
//               {"fecha": "2023-12-30", "hora": "09:45:00"}
//             ],
//             "total_pagar": 105.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-30", "hora": "13:30:00"},
//               {"fecha": "2023-12-31", "hora": "16:00:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-31", "hora": "10:00:00"},
//               {"fecha": "2024-01-01", "hora": "08:45:00"}
//             ],
//             "total_pagar": 70.60,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2024-01-01", "hora": "14:00:00"},
//               {"fecha": "2024-01-02", "hora": "10:30:00"}
//             ],
//             "total_pagar": 260.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2024-01-02", "hora": "12:00:00"},
//               {"fecha": "2024-01-03", "hora": "09:15:00"}
//             ],
//             "total_pagar": 50.80,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2024-01-03", "hora": "16:30:00"},
//               {"fecha": "2024-01-04", "hora": "08:45:00"}
//             ],
//             "total_pagar": 130.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-01-04", "hora": "10:00:00"},
//               {"fecha": "2024-01-05", "hora": "15:00:00"}
//             ],
//             "total_pagar": 85.90,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2024-01-05", "hora": "11:45:00"},
//               {"fecha": "2024-01-06", "hora": "09:00:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2024-01-06", "hora": "13:30:00"},
//               {"fecha": "2024-01-07", "hora": "14:00:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2024-01-07", "hora": "10:30:00"},
//               {"fecha": "2024-01-08", "hora": "08:45:00"}
//             ],
//             "total_pagar": 70.60,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2024-01-08", "hora": "14:00:00"},
//               {"fecha": "2024-01-09", "hora": "12:30:00"}
//             ],
//             "total_pagar": 240.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//     {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-10-12", "hora": "09:00:00"},
//               {"fecha": "2023-10-13", "hora": "14:30:00"}
//             ],
//             "total_pagar": 95.50,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-10-14", "hora": "12:00:00"},
//               {"fecha": "2023-10-15", "hora": "10:30:00"}
//             ],
//             "total_pagar": 180.25,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-10-16", "hora": "08:15:00"},
//               {"fecha": "2023-10-17", "hora": "09:45:00"}
//             ],
//             "total_pagar": 130.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-10-18", "hora": "15:30:00"},
//               {"fecha": "2023-10-19", "hora": "11:20:00"}
//             ],
//             "total_pagar": 70.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-10-20", "hora": "10:00:00"},
//               {"fecha": "2023-10-21", "hora": "16:45:00"}
//             ],
//             "total_pagar": 150.10,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-10-22", "hora": "12:30:00"},
//               {"fecha": "2023-10-23", "hora": "09:15:00"}
//             ],
//             "total_pagar": 90.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-10-24", "hora": "14:00:00"},
//               {"fecha": "2023-10-25", "hora": "13:20:00"}
//             ],
//             "total_pagar": 120.60,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-10-26", "hora": "16:45:00"},
//               {"fecha": "2023-10-27", "hora": "10:30:00"}
//             ],
//             "total_pagar": 210.30,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-10-28", "hora": "09:00:00"},
//               {"fecha": "2023-10-29", "hora": "14:45:00"}
//             ],
//             "total_pagar": 80.90,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-10-30", "hora": "12:15:00"},
//               {"fecha": "2023-10-31", "hora": "11:30:00"}
//             ],
//             "total_pagar": 100.25,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-01", "hora": "08:30:00"},
//               {"fecha": "2023-11-02", "hora": "10:15:00"}
//             ],
//             "total_pagar": 150.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-11-03", "hora": "15:00:00"},
//               {"fecha": "2023-11-04", "hora": "12:30:00"}
//             ],
//             "total_pagar": 75.40,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-11-05", "hora": "09:45:00"},
//               {"fecha": "2023-11-06", "hora": "16:00:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-11-07", "hora": "13:30:00"},
//               {"fecha": "2023-11-08", "hora": "11:00:00"}
//             ],
//             "total_pagar": 95.80,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-11-09", "hora": "14:45:00"},
//               {"fecha": "2023-11-10", "hora": "10:45:00"}
//             ],
//             "total_pagar": 130.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-11-11", "hora": "17:00:00"},
//               {"fecha": "2023-11-12", "hora": "14:00:00"}
//             ],
//             "total_pagar": 250.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-11-13", "hora": "08:30:00"},
//               {"fecha": "2023-11-14", "hora": "10:45:00"}
//             ],
//             "total_pagar": 80.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-15", "hora": "11:15:00"},
//               {"fecha": "2023-11-16", "hora": "12:00:00"}
//             ],
//             "total_pagar": 120.90,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-17", "hora": "09:00:00"},
//               {"fecha": "2023-11-18", "hora": "13:45:00"}
//             ],
//             "total_pagar": 160.50,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-11-19", "hora": "15:30:00"},
//               {"fecha": "2023-11-20", "hora": "10:15:00"}
//             ],
//             "total_pagar": 70.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-11-21", "hora": "11:00:00"},
//               {"fecha": "2023-11-22", "hora": "16:45:00"}
//             ],
//             "total_pagar": 130.25,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-11-23", "hora": "14:30:00"},
//               {"fecha": "2023-11-24", "hora": "09:45:00"}
//             ],
//             "total_pagar": 85.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-11-25", "hora": "13:00:00"},
//               {"fecha": "2023-11-26", "hora": "10:30:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-11-27", "hora": "17:30:00"},
//               {"fecha": "2023-11-28", "hora": "14:15:00"}
//             ],
//             "total_pagar": 280.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-11-29", "hora": "09:15:00"},
//               {"fecha": "2023-11-30", "hora": "12:00:00"}
//             ],
//             "total_pagar": 85.50,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-01", "hora": "10:30:00"},
//               {"fecha": "2023-12-02", "hora": "14:45:00"}
//             ],
//             "total_pagar": 105.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-03", "hora": "08:00:00"},
//               {"fecha": "2023-12-04", "hora": "09:30:00"}
//             ],
//             "total_pagar": 140.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-12-05", "hora": "14:00:00"},
//               {"fecha": "2023-12-06", "hora": "16:30:00"}
//             ],
//             "total_pagar": 60.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-07", "hora": "11:45:00"},
//               {"fecha": "2023-12-08", "hora": "13:15:00"}
//             ],
//             "total_pagar": 95.75,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-12-09", "hora": "09:30:00"},
//               {"fecha": "2023-12-10", "hora": "10:45:00"}
//             ],
//             "total_pagar": 80.20,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-11", "hora": "12:00:00"},
//               {"fecha": "2023-12-12", "hora": "14:30:00"}
//             ],
//             "total_pagar": 115.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-12-13", "hora": "16:00:00"},
//               {"fecha": "2023-12-14", "hora": "11:30:00"}
//             ],
//             "total_pagar": 200.50,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-15", "hora": "10:00:00"},
//               {"fecha": "2023-12-16", "hora": "12:45:00"}
//             ],
//             "total_pagar": 70.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-17", "hora": "13:15:00"},
//               {"fecha": "2023-12-18", "hora": "09:00:00"}
//             ],
//             "total_pagar": 130.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-19", "hora": "14:30:00"},
//               {"fecha": "2023-12-20", "hora": "11:15:00"}
//             ],
//             "total_pagar": 170.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-12-21", "hora": "09:45:00"},
//               {"fecha": "2023-12-22", "hora": "12:00:00"}
//             ],
//             "total_pagar": 65.40,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-23", "hora": "16:00:00"},
//               {"fecha": "2023-12-24", "hora": "10:30:00"}
//             ],
//             "total_pagar": 120.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-12-25", "hora": "11:30:00"},
//               {"fecha": "2023-12-26", "hora": "14:45:00"}
//             ],
//             "total_pagar": 90.80,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-27", "hora": "09:00:00"},
//               {"fecha": "2023-12-28", "hora": "12:30:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-12-29", "hora": "17:15:00"},
//               {"fecha": "2023-12-30", "hora": "13:00:00"}
//             ],
//             "total_pagar": 220.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-31", "hora": "09:45:00"},
//               {"fecha": "2024-01-01", "hora": "12:30:00"}
//             ],
//             "total_pagar": 85.50,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-01-02", "hora": "10:30:00"},
//               {"fecha": "2024-01-03", "hora": "14:15:00"}
//             ],
//             "total_pagar": 140.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2024-01-04", "hora": "08:15:00"},
//               {"fecha": "2024-01-05", "hora": "09:45:00"}
//             ],
//             "total_pagar": 160.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2024-01-06", "hora": "14:30:00"},
//               {"fecha": "2024-01-07", "hora": "11:00:00"}
//             ],
//             "total_pagar": 70.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2024-01-08", "hora": "11:45:00"},
//               {"fecha": "2024-01-09", "hora": "13:15:00"}
//             ],
//             "total_pagar": 95.75,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2024-01-10", "hora": "09:30:00"},
//               {"fecha": "2024-01-11", "hora": "10:45:00"}
//             ],
//             "total_pagar": 80.20,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2024-01-12", "hora": "12:00:00"},
//               {"fecha": "2024-01-13", "hora": "14:30:00"}
//             ],
//             "total_pagar": 115.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2024-01-14", "hora": "16:00:00"},
//               {"fecha": "2024-01-15", "hora": "11:30:00"}
//             ],
//             "total_pagar": 210.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//     {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-10-14", "hora": "16:30:00"},
//               {"fecha": "2023-10-15", "hora": "12:15:00"}
//             ],
//             "total_pagar": 90.50,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-10-16", "hora": "14:00:00"},
//               {"fecha": "2023-10-17", "hora": "10:45:00"}
//             ],
//             "total_pagar": 180.25,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-10-18", "hora": "09:30:00"},
//               {"fecha": "2023-10-19", "hora": "14:15:00"}
//             ],
//             "total_pagar": 130.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-10-20", "hora": "12:00:00"},
//               {"fecha": "2023-10-21", "hora": "15:45:00"}
//             ],
//             "total_pagar": 70.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-10-22", "hora": "10:00:00"},
//               {"fecha": "2023-10-23", "hora": "17:30:00"}
//             ],
//             "total_pagar": 150.10,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-10-24", "hora": "13:30:00"},
//               {"fecha": "2023-10-25", "hora": "10:00:00"}
//             ],
//             "total_pagar": 90.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-10-26", "hora": "15:00:00"},
//               {"fecha": "2023-10-27", "hora": "16:20:00"}
//             ],
//             "total_pagar": 120.60,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-10-28", "hora": "14:45:00"},
//               {"fecha": "2023-10-29", "hora": "11:30:00"}
//             ],
//             "total_pagar": 210.30,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-10-30", "hora": "09:00:00"},
//               {"fecha": "2023-10-31", "hora": "16:15:00"}
//             ],
//             "total_pagar": 80.90,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-01", "hora": "11:30:00"},
//               {"fecha": "2023-11-02", "hora": "14:45:00"}
//             ],
//             "total_pagar": 100.25,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-03", "hora": "08:00:00"},
//               {"fecha": "2023-11-04", "hora": "12:30:00"}
//             ],
//             "total_pagar": 150.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-11-05", "hora": "15:30:00"},
//               {"fecha": "2023-11-06", "hora": "09:15:00"}
//             ],
//             "total_pagar": 75.40,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-11-07", "hora": "14:45:00"},
//               {"fecha": "2023-11-08", "hora": "11:30:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-11-09", "hora": "12:00:00"},
//               {"fecha": "2023-11-10", "hora": "10:45:00"}
//             ],
//             "total_pagar": 95.80,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-11-11", "hora": "09:15:00"},
//               {"fecha": "2023-11-12", "hora": "17:30:00"}
//             ],
//             "total_pagar": 130.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-11-13", "hora": "14:00:00"},
//               {"fecha": "2023-11-14", "hora": "10:30:00"}
//             ],
//             "total_pagar": 250.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-11-15", "hora": "11:00:00"},
//               {"fecha": "2023-11-16", "hora": "15:45:00"}
//             ],
//             "total_pagar": 80.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-17", "hora": "09:30:00"},
//               {"fecha": "2023-11-18", "hora": "13:00:00"}
//             ],
//             "total_pagar": 120.90,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-19", "hora": "16:00:00"},
//               {"fecha": "2023-11-20", "hora": "10:15:00"}
//             ],
//             "total_pagar": 75.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-11-21", "hora": "13:45:00"},
//               {"fecha": "2023-11-22", "hora": "08:30:00"}
//             ],
//             "total_pagar": 65.25,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-11-23", "hora": "11:15:00"},
//               {"fecha": "2023-11-24", "hora": "16:45:00"}
//             ],
//             "total_pagar": 120.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-11-25", "hora": "09:45:00"},
//               {"fecha": "2023-11-26", "hora": "14:30:00"}
//             ],
//             "total_pagar": 85.50,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-11-27", "hora": "12:00:00"},
//               {"fecha": "2023-11-28", "hora": "16:45:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-11-29", "hora": "10:30:00"},
//               {"fecha": "2023-11-30", "hora": "15:00:00"}
//             ],
//             "total_pagar": 180.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-01", "hora": "12:15:00"},
//               {"fecha": "2023-12-02", "hora": "09:30:00"}
//             ],
//             "total_pagar": 80.50,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-03", "hora": "14:00:00"},
//               {"fecha": "2023-12-04", "hora": "16:45:00"}
//             ],
//             "total_pagar": 100.25,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-05", "hora": "09:45:00"},
//               {"fecha": "2023-12-06", "hora": "12:30:00"}
//             ],
//             "total_pagar": 140.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-12-07", "hora": "14:15:00"},
//               {"fecha": "2023-12-08", "hora": "11:00:00"}
//             ],
//             "total_pagar": 60.25,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-09", "hora": "10:00:00"},
//               {"fecha": "2023-12-10", "hora": "16:30:00"}
//             ],
//             "total_pagar": 130.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-12-11", "hora": "12:45:00"},
//               {"fecha": "2023-12-12", "hora": "08:15:00"}
//             ],
//             "total_pagar": 95.20,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-13", "hora": "10:30:00"},
//               {"fecha": "2023-12-14", "hora": "14:00:00"}
//             ],
//             "total_pagar": 110.50,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-12-15", "hora": "11:45:00"},
//               {"fecha": "2023-12-16", "hora": "15:30:00"}
//             ],
//             "total_pagar": 190.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-17", "hora": "13:00:00"},
//               {"fecha": "2023-12-18", "hora": "09:45:00"}
//             ],
//             "total_pagar": 75.50,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-19", "hora": "10:30:00"},
//               {"fecha": "2023-12-20", "hora": "14:15:00"}
//             ],
//             "total_pagar": 110.25,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-21", "hora": "15:00:00"},
//               {"fecha": "2023-12-22", "hora": "11:30:00"}
//             ],
//             "total_pagar": 160.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-12-23", "hora": "14:45:00"},
//               {"fecha": "2023-12-24", "hora": "10:00:00"}
//             ],
//             "total_pagar": 70.25,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-25", "hora": "11:15:00"},
//               {"fecha": "2023-12-26", "hora": "16:45:00"}
//             ],
//             "total_pagar": 120.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-12-27", "hora": "12:00:00"},
//               {"fecha": "2023-12-28", "hora": "14:30:00"}
//             ],
//             "total_pagar": 85.90,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-29", "hora": "09:45:00"},
//               {"fecha": "2023-12-30", "hora": "11:30:00"}
//             ],
//             "total_pagar": 100.10,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2024-01-01", "hora": "14:00:00"},
//               {"fecha": "2024-01-02", "hora": "10:30:00"}
//             ],
//             "total_pagar": 220.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2024-01-03", "hora": "09:00:00"},
//               {"fecha": "2024-01-04", "hora": "16:45:00"}
//             ],
//             "total_pagar": 75.80,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-01-05", "hora": "10:30:00"},
//               {"fecha": "2024-01-06", "hora": "14:15:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2024-01-07", "hora": "15:00:00"},
//               {"fecha": "2024-01-08", "hora": "12:30:00"}
//             ],
//             "total_pagar": 160.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2024-01-09", "hora": "14:45:00"},
//               {"fecha": "2024-01-10", "hora": "10:00:00"}
//             ],
//             "total_pagar": 70.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2024-01-11", "hora": "11:15:00"},
//               {"fecha": "2024-01-12", "hora": "16:45:00"}
//             ],
//             "total_pagar": 120.10,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2024-01-13", "hora": "12:00:00"},
//               {"fecha": "2024-01-14", "hora": "14:30:00"}
//             ],
//             "total_pagar": 85.90,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2024-01-15", "hora": "09:45:00"},
//               {"fecha": "2024-01-16", "hora": "11:30:00"}
//             ],
//             "total_pagar": 100.50,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2024-01-17", "hora": "14:00:00"},
//               {"fecha": "2024-01-18", "hora": "10:30:00"}
//             ],
//             "total_pagar": 220.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2024-01-19", "hora": "09:00:00"},
//               {"fecha": "2024-01-20", "hora": "16:45:00"}
//             ],
//             "total_pagar": 75.80,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-01-21", "hora": "10:30:00"},
//               {"fecha": "2024-01-22", "hora": "14:15:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2024-01-23", "hora": "15:00:00"},
//               {"fecha": "2024-01-24", "hora": "12:30:00"}
//             ],
//             "total_pagar": 160.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2024-01-25", "hora": "14:45:00"},
//               {"fecha": "2024-01-26", "hora": "10:00:00"}
//             ],
//             "total_pagar": 70.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2024-01-27", "hora": "11:15:00"},
//               {"fecha": "2024-01-28", "hora": "16:45:00"}
//             ],
//             "total_pagar": 120.10,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2024-01-29", "hora": "12:00:00"},
//               {"fecha": "2024-01-30", "hora": "14:30:00"}
//             ],
//             "total_pagar": 85.90,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2024-01-31", "hora": "09:45:00"},
//               {"fecha": "2024-02-01", "hora": "11:30:00"}
//             ],
//             "total_pagar": 100.50,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2024-02-02", "hora": "14:00:00"},
//               {"fecha": "2024-02-03", "hora": "10:30:00"}
//             ],
//             "total_pagar": 220.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//     {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-10-12", "hora": "15:30:00"},
//               {"fecha": "2023-10-13", "hora": "10:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-10-15", "hora": "12:00:00"},
//               {"fecha": "2023-10-16", "hora": "09:30:00"}
//             ],
//             "total_pagar": 120.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2023-10-17", "hora": "14:30:00"},
//               {"fecha": "2023-10-18", "hora": "11:15:00"}
//             ],
//             "total_pagar": 180.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-10-19", "hora": "13:00:00"},
//               {"fecha": "2023-10-20", "hora": "16:45:00"}
//             ],
//             "total_pagar": 220.50,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-10-21", "hora": "10:30:00"},
//               {"fecha": "2023-10-22", "hora": "14:15:00"}
//             ],
//             "total_pagar": 90.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-10-23", "hora": "12:45:00"},
//               {"fecha": "2023-10-24", "hora": "10:00:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2023-10-25", "hora": "11:00:00"},
//               {"fecha": "2023-10-26", "hora": "15:45:00"}
//             ],
//             "total_pagar": 200.30,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-10-27", "hora": "14:00:00"},
//               {"fecha": "2023-10-28", "hora": "16:30:00"}
//             ],
//             "total_pagar": 150.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-10-29", "hora": "09:30:00"},
//               {"fecha": "2023-10-30", "hora": "12:15:00"}
//             ],
//             "total_pagar": 80.80,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-10-31", "hora": "13:45:00"},
//               {"fecha": "2023-11-01", "hora": "09:00:00"}
//             ],
//             "total_pagar": 130.25,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2023-11-02", "hora": "14:30:00"},
//               {"fecha": "2023-11-03", "hora": "10:45:00"}
//             ],
//             "total_pagar": 180.10,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-11-04", "hora": "11:00:00"},
//               {"fecha": "2023-11-05", "hora": "17:15:00"}
//             ],
//             "total_pagar": 250.50,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-06", "hora": "10:15:00"},
//               {"fecha": "2023-11-07", "hora": "14:45:00"}
//             ],
//             "total_pagar": 90.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-11-08", "hora": "13:00:00"},
//               {"fecha": "2023-11-09", "hora": "09:45:00"}
//             ],
//             "total_pagar": 115.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2023-11-10", "hora": "14:30:00"},
//               {"fecha": "2023-11-11", "hora": "10:45:00"}
//             ],
//             "total_pagar": 210.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-11-12", "hora": "16:00:00"},
//               {"fecha": "2023-11-13", "hora": "12:30:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-14", "hora": "10:30:00"},
//               {"fecha": "2023-11-15", "hora": "15:00:00"}
//             ],
//             "total_pagar": 85.60,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-16", "hora": "14:45:00"},
//               {"fecha": "2023-11-17", "hora": "09:00:00"}
//             ],
//             "total_pagar": 120.25,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2023-11-18", "hora": "12:15:00"},
//               {"fecha": "2023-11-19", "hora": "16:30:00"}
//             ],
//             "total_pagar": 200.50,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-11-20", "hora": "11:30:00"},
//               {"fecha": "2023-11-21", "hora": "13:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-22", "hora": "09:00:00"},
//               {"fecha": "2023-11-23", "hora": "14:15:00"}
//             ],
//             "total_pagar": 100.20,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-11-24", "hora": "15:00:00"},
//               {"fecha": "2023-11-25", "hora": "09:45:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2023-11-26", "hora": "11:30:00"},
//               {"fecha": "2023-11-27", "hora": "16:45:00"}
//             ],
//             "total_pagar": 180.10,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-11-28", "hora": "14:00:00"},
//               {"fecha": "2023-11-29", "hora": "11:15:00"}
//             ],
//             "total_pagar": 250.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-30", "hora": "12:30:00"},
//               {"fecha": "2023-12-01", "hora": "09:00:00"}
//             ],
//             "total_pagar": 95.90,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-02", "hora": "10:45:00"},
//               {"fecha": "2023-12-03", "hora": "15:30:00"}
//             ],
//             "total_pagar": 140.50,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2023-12-04", "hora": "11:00:00"},
//               {"fecha": "2023-12-05", "hora": "17:45:00"}
//             ],
//             "total_pagar": 190.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-12-06", "hora": "15:30:00"},
//               {"fecha": "2023-12-07", "hora": "10:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-08", "hora": "14:15:00"},
//               {"fecha": "2023-12-09", "hora": "09:30:00"}
//             ],
//             "total_pagar": 80.90,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-12-10", "hora": "12:45:00"},
//               {"fecha": "2023-12-11", "hora": "10:00:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2023-12-12", "hora": "13:30:00"},
//               {"fecha": "2023-12-13", "hora": "16:15:00"}
//             ],
//             "total_pagar": 220.60,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-12-14", "hora": "11:00:00"},
//               {"fecha": "2023-12-15", "hora": "15:45:00"}
//             ],
//             "total_pagar": 250.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-16", "hora": "14:30:00"},
//               {"fecha": "2023-12-17", "hora": "09:00:00"}
//             ],
//             "total_pagar": 85.80,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-18", "hora": "11:45:00"},
//               {"fecha": "2023-12-19", "hora": "16:30:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2023-12-20", "hora": "13:00:00"},
//               {"fecha": "2023-12-21", "hora": "10:15:00"}
//             ],
//             "total_pagar": 190.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-12-22", "hora": "15:00:00"},
//               {"fecha": "2023-12-23", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-24", "hora": "10:30:00"},
//               {"fecha": "2023-12-25", "hora": "14:15:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-12-26", "hora": "12:00:00"},
//               {"fecha": "2023-12-27", "hora": "09:45:00"}
//             ],
//             "total_pagar": 115.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2023-12-28", "hora": "11:30:00"},
//               {"fecha": "2023-12-29", "hora": "16:45:00"}
//             ],
//             "total_pagar": 180.10,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-12-30", "hora": "11:00:00"},
//               {"fecha": "2023-12-31", "hora": "15:30:00"}
//             ],
//             "total_pagar": 250.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-01-01", "hora": "12:30:00"},
//               {"fecha": "2024-01-02", "hora": "09:00:00"}
//             ],
//             "total_pagar": 85.90,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2024-01-03", "hora": "11:45:00"},
//               {"fecha": "2024-01-04", "hora": "16:30:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2024-01-05", "hora": "14:00:00"},
//               {"fecha": "2024-01-06", "hora": "10:15:00"}
//             ],
//             "total_pagar": 190.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2024-01-07", "hora": "15:00:00"},
//               {"fecha": "2024-01-08", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-01-09", "hora": "10:30:00"},
//               {"fecha": "2024-01-10", "hora": "14:15:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2024-01-11", "hora": "12:00:00"},
//               {"fecha": "2024-01-12", "hora": "09:45:00"}
//             ],
//             "total_pagar": 115.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2024-01-13", "hora": "11:30:00"},
//               {"fecha": "2024-01-14", "hora": "16:45:00"}
//             ],
//             "total_pagar": 180.10,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2024-01-15", "hora": "11:00:00"},
//               {"fecha": "2024-01-16", "hora": "15:30:00"}
//             ],
//             "total_pagar": 250.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-01-17", "hora": "14:30:00"},
//               {"fecha": "2024-01-18", "hora": "10:45:00"}
//             ],
//             "total_pagar": 85.90,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2024-01-19", "hora": "11:45:00"},
//               {"fecha": "2024-01-20", "hora": "16:30:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2024-01-21", "hora": "13:00:00"},
//               {"fecha": "2024-01-22", "hora": "09:15:00"}
//             ],
//             "total_pagar": 190.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2024-01-23", "hora": "15:30:00"},
//               {"fecha": "2024-01-24", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-01-25", "hora": "14:15:00"},
//               {"fecha": "2024-01-26", "hora": "09:30:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2024-01-27", "hora": "12:00:00"},
//               {"fecha": "2024-01-28", "hora": "17:45:00"}
//             ],
//             "total_pagar": 115.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2024-01-29", "hora": "11:30:00"},
//               {"fecha": "2024-01-30", "hora": "16:45:00"}
//             ],
//             "total_pagar": 180.10,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2024-01-31", "hora": "11:00:00"},
//               {"fecha": "2024-02-01", "hora": "15:30:00"}
//             ],
//             "total_pagar": 250.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-02-02", "hora": "14:30:00"},
//               {"fecha": "2024-02-03", "hora": "10:45:00"}
//             ],
//             "total_pagar": 85.90,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2024-02-04", "hora": "12:45:00"},
//               {"fecha": "2024-02-05", "hora": "09:00:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2024-02-06", "hora": "13:00:00"},
//               {"fecha": "2024-02-07", "hora": "16:15:00"}
//             ],
//             "total_pagar": 190.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2024-02-08", "hora": "15:30:00"},
//               {"fecha": "2024-02-09", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-02-10", "hora": "14:15:00"},
//               {"fecha": "2024-02-11", "hora": "09:30:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2024-02-12", "hora": "12:00:00"},
//               {"fecha": "2024-02-13", "hora": "17:45:00"}
//             ],
//             "total_pagar": 115.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2024-02-14", "hora": "11:30:00"},
//               {"fecha": "2024-02-15", "hora": "16:45:00"}
//             ],
//             "total_pagar": 180.10,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//     {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-10-12", "hora": "15:30:00"},
//               {"fecha": "2023-10-13", "hora": "10:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-10-14", "hora": "12:00:00"},
//               {"fecha": "2023-10-15", "hora": "16:30:00"}
//             ],
//             "total_pagar": 120.50,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-10-16", "hora": "14:15:00"},
//               {"fecha": "2023-10-17", "hora": "09:30:00"}
//             ],
//             "total_pagar": 80.90,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de carne",
//             "fecha_hora": [
//               {"fecha": "2023-10-18", "hora": "11:30:00"},
//               {"fecha": "2023-10-19", "hora": "16:45:00"}
//             ],
//             "total_pagar": 190.25,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-10-20", "hora": "15:00:00"},
//               {"fecha": "2023-10-21", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-10-22", "hora": "14:30:00"},
//               {"fecha": "2023-10-23", "hora": "10:45:00"}
//             ],
//             "total_pagar": 95.90,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-10-24", "hora": "11:45:00"},
//               {"fecha": "2023-10-25", "hora": "16:30:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de carne",
//             "fecha_hora": [
//               {"fecha": "2023-10-26", "hora": "13:00:00"},
//               {"fecha": "2023-10-27", "hora": "09:15:00"}
//             ],
//             "total_pagar": 180.10,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-10-28", "hora": "15:30:00"},
//               {"fecha": "2023-10-29", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-10-30", "hora": "14:15:00"},
//               {"fecha": "2023-10-31", "hora": "09:30:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-01", "hora": "12:45:00"},
//               {"fecha": "2023-11-02", "hora": "09:00:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne",
//             "fecha_hora": [
//               {"fecha": "2023-11-03", "hora": "13:00:00"},
//               {"fecha": "2023-11-04", "hora": "16:15:00"}
//             ],
//             "total_pagar": 190.25,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-11-05", "hora": "15:30:00"},
//               {"fecha": "2023-11-06", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-07", "hora": "14:30:00"},
//               {"fecha": "2023-11-08", "hora": "10:45:00"}
//             ],
//             "total_pagar": 95.90,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-09", "hora": "11:45:00"},
//               {"fecha": "2023-11-10", "hora": "16:30:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de carne",
//             "fecha_hora": [
//               {"fecha": "2023-11-11", "hora": "13:00:00"},
//               {"fecha": "2023-11-12", "hora": "09:15:00"}
//             ],
//             "total_pagar": 180.10,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-11-13", "hora": "15:30:00"},
//               {"fecha": "2023-11-14", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-15", "hora": "14:15:00"},
//               {"fecha": "2023-11-16", "hora": "09:30:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-17", "hora": "12:45:00"},
//               {"fecha": "2023-11-18", "hora": "09:00:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne",
//             "fecha_hora": [
//               {"fecha": "2023-11-19", "hora": "13:00:00"},
//               {"fecha": "2023-11-20", "hora": "16:15:00"}
//             ],
//             "total_pagar": 190.25,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-11-21", "hora": "15:30:00"},
//               {"fecha": "2023-11-22", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-23", "hora": "14:30:00"},
//               {"fecha": "2023-11-24", "hora": "10:45:00"}
//             ],
//             "total_pagar": 95.90,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-25", "hora": "11:45:00"},
//               {"fecha": "2023-11-26", "hora": "16:30:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de carne",
//             "fecha_hora": [
//               {"fecha": "2023-11-27", "hora": "13:00:00"},
//               {"fecha": "2023-11-28", "hora": "09:15:00"}
//             ],
//             "total_pagar": 180.10,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-11-29", "hora": "15:30:00"},
//               {"fecha": "2023-11-30", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-01", "hora": "14:15:00"},
//               {"fecha": "2023-12-02", "hora": "09:30:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-03", "hora": "12:45:00"},
//               {"fecha": "2023-12-04", "hora": "09:00:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne",
//             "fecha_hora": [
//               {"fecha": "2023-12-05", "hora": "13:00:00"},
//               {"fecha": "2023-12-06", "hora": "16:15:00"}
//             ],
//             "total_pagar": 190.25,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-12-07", "hora": "15:30:00"},
//               {"fecha": "2023-12-08", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-09", "hora": "14:30:00"},
//               {"fecha": "2023-12-10", "hora": "10:45:00"}
//             ],
//             "total_pagar": 95.90,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-11", "hora": "11:45:00"},
//               {"fecha": "2023-12-12", "hora": "16:30:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de carne",
//             "fecha_hora": [
//               {"fecha": "2023-12-13", "hora": "13:00:00"},
//               {"fecha": "2023-12-14", "hora": "09:15:00"}
//             ],
//             "total_pagar": 180.10,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-12-15", "hora": "15:30:00"},
//               {"fecha": "2023-12-16", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-17", "hora": "14:15:00"},
//               {"fecha": "2023-12-18", "hora": "09:30:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-19", "hora": "12:45:00"},
//               {"fecha": "2023-12-20", "hora": "09:00:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne",
//             "fecha_hora": [
//               {"fecha": "2023-12-21", "hora": "13:00:00"},
//               {"fecha": "2023-12-22", "hora": "16:15:00"}
//             ],
//             "total_pagar": 190.25,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-12-23", "hora": "15:30:00"},
//               {"fecha": "2023-12-24", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-25", "hora": "14:30:00"},
//               {"fecha": "2023-12-26", "hora": "10:45:00"}
//             ],
//             "total_pagar": 95.90,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-27", "hora": "11:45:00"},
//               {"fecha": "2023-12-28", "hora": "16:30:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de carne",
//             "fecha_hora": [
//               {"fecha": "2023-12-29", "hora": "13:00:00"},
//               {"fecha": "2023-12-30", "hora": "09:15:00"}
//             ],
//             "total_pagar": 180.10,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-12-31", "hora": "15:30:00"},
//               {"fecha": "2024-01-01", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-01-02", "hora": "14:15:00"},
//               {"fecha": "2024-01-03", "hora": "09:30:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2024-01-04", "hora": "12:45:00"},
//               {"fecha": "2024-01-05", "hora": "09:00:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne",
//             "fecha_hora": [
//               {"fecha": "2024-01-06", "hora": "13:00:00"},
//               {"fecha": "2024-01-07", "hora": "16:15:00"}
//             ],
//             "total_pagar": 190.25,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2024-01-08", "hora": "15:30:00"},
//               {"fecha": "2024-01-09", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-01-10", "hora": "14:30:00"},
//               {"fecha": "2024-01-11", "hora": "10:45:00"}
//             ],
//             "total_pagar": 95.90,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2024-01-12", "hora": "11:45:00"},
//               {"fecha": "2024-01-13", "hora": "16:30:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de carne",
//             "fecha_hora": [
//               {"fecha": "2024-01-14", "hora": "13:00:00"},
//               {"fecha": "2024-01-15", "hora": "09:15:00"}
//             ],
//             "total_pagar": 180.10,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2024-01-16", "hora": "15:30:00"},
//               {"fecha": "2024-01-17", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-01-18", "hora": "14:15:00"},
//               {"fecha": "2024-01-19", "hora": "09:30:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2024-01-20", "hora": "12:45:00"},
//               {"fecha": "2024-01-21", "hora": "09:00:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne",
//             "fecha_hora": [
//               {"fecha": "2024-01-22", "hora": "13:00:00"},
//               {"fecha": "2024-01-23", "hora": "16:15:00"}
//             ],
//             "total_pagar": 190.25,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2024-01-24", "hora": "15:30:00"},
//               {"fecha": "2024-01-25", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-01-26", "hora": "14:30:00"},
//               {"fecha": "2024-01-27", "hora": "10:45:00"}
//             ],
//             "total_pagar": 95.90,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2024-01-28", "hora": "11:45:00"},
//               {"fecha": "2024-01-29", "hora": "16:30:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de carne",
//             "fecha_hora": [
//               {"fecha": "2024-01-30", "hora": "13:00:00"},
//               {"fecha": "2024-01-31", "hora": "09:15:00"}
//             ],
//             "total_pagar": 180.10,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2024-02-01", "hora": "15:30:00"},
//               {"fecha": "2024-02-02", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-02-03", "hora": "14:15:00"},
//               {"fecha": "2024-02-04", "hora": "09:30:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2024-02-05", "hora": "12:45:00"},
//               {"fecha": "2024-02-06", "hora": "09:00:00"}
//             ],
//             "total_pagar": 120.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne",
//             "fecha_hora": [
//               {"fecha": "2024-02-07", "hora": "13:00:00"},
//               {"fecha": "2024-02-08", "hora": "16:15:00"}
//             ],
//             "total_pagar": 190.25,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2024-02-09", "hora": "15:30:00"},
//               {"fecha": "2024-02-10", "hora": "11:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-02-11", "hora": "14:30:00"},
//               {"fecha": "2024-02-12", "hora": "10:45:00"}
//             ],
//             "total_pagar": 95.90,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//         },
//     {
//             "detalle_venta": "Venta de productos lacteos",
//             "fecha_hora": [
//               {"fecha": "2023-10-12", "hora": "15:30:00"},
//               {"fecha": "2023-10-13", "hora": "10:45:00"}
//             ],
//             "total_pagar": 250.75,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-10-14", "hora": "09:00:00"},
//               {"fecha": "2023-10-15", "hora": "11:30:00"}
//             ],
//             "total_pagar": 180.50,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-10-15", "hora": "08:30:00"},
//               {"fecha": "2023-10-16", "hora": "12:00:00"}
//             ],
//             "total_pagar": 60.20,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-10-16", "hora": "14:00:00"},
//               {"fecha": "2023-10-17", "hora": "09:30:00"}
//             ],
//             "total_pagar": 120.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-10-18", "hora": "16:00:00"},
//               {"fecha": "2023-10-19", "hora": "08:45:00"}
//             ],
//             "total_pagar": 85.80,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-10-19", "hora": "11:30:00"},
//               {"fecha": "2023-10-20", "hora": "13:00:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-10-20", "hora": "15:00:00"},
//               {"fecha": "2023-10-21", "hora": "10:00:00"}
//             ],
//             "total_pagar": 190.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-10-21", "hora": "13:45:00"},
//               {"fecha": "2023-10-22", "hora": "11:15:00"}
//             ],
//             "total_pagar": 65.70,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-10-22", "hora": "16:30:00"},
//               {"fecha": "2023-10-23", "hora": "08:00:00"}
//             ],
//             "total_pagar": 75.90,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-10-23", "hora": "09:30:00"},
//               {"fecha": "2023-10-24", "hora": "10:45:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-10-24", "hora": "12:00:00"},
//               {"fecha": "2023-10-25", "hora": "16:30:00"}
//             ],
//             "total_pagar": 55.80,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-10-25", "hora": "10:00:00"},
//               {"fecha": "2023-10-26", "hora": "14:00:00"}
//             ],
//             "total_pagar": 130.50,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-10-26", "hora": "08:30:00"},
//               {"fecha": "2023-10-27", "hora": "11:00:00"}
//             ],
//             "total_pagar": 90.20,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-10-27", "hora": "16:00:00"},
//               {"fecha": "2023-10-28", "hora": "09:45:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-10-28", "hora": "13:30:00"},
//               {"fecha": "2023-10-29", "hora": "14:00:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-10-29", "hora": "10:30:00"},
//               {"fecha": "2023-10-30", "hora": "08:45:00"}
//             ],
//             "total_pagar": 70.60,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-10-30", "hora": "12:00:00"},
//               {"fecha": "2023-10-31", "hora": "09:15:00"}
//             ],
//             "total_pagar": 160.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-10-31", "hora": "14:30:00"},
//               {"fecha": "2023-11-01", "hora": "10:00:00"}
//             ],
//             "total_pagar": 40.80,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-01", "hora": "12:00:00"},
//               {"fecha": "2023-11-02", "hora": "15:30:00"}
//             ],
//             "total_pagar": 140.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-02", "hora": "10:00:00"},
//               {"fecha": "2023-11-03", "hora": "16:00:00"}
//             ],
//             "total_pagar": 80.90,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-11-03", "hora": "11:45:00"},
//               {"fecha": "2023-11-04", "hora": "10:15:00"}
//             ],
//             "total_pagar": 95.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-11-04", "hora": "09:00:00"},
//               {"fecha": "2023-11-05", "hora": "13:00:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-11-05", "hora": "16:30:00"},
//               {"fecha": "2023-11-06", "hora": "08:45:00"}
//             ],
//             "total_pagar": 85.60,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-11-06", "hora": "10:00:00"},
//               {"fecha": "2023-11-07", "hora": "15:30:00"}
//             ],
//             "total_pagar": 200.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-11-07", "hora": "12:00:00"},
//               {"fecha": "2023-11-08", "hora": "09:45:00"}
//             ],
//             "total_pagar": 60.80,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-08", "hora": "16:00:00"},
//               {"fecha": "2023-11-09", "hora": "10:30:00"}
//             ],
//             "total_pagar": 130.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-09", "hora": "11:15:00"},
//               {"fecha": "2023-11-10", "hora": "08:00:00"}
//             ],
//             "total_pagar": 90.20,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-11-10", "hora": "13:30:00"},
//               {"fecha": "2023-11-11", "hora": "16:00:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-11-11", "hora": "10:00:00"},
//               {"fecha": "2023-11-12", "hora": "12:45:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-11-12", "hora": "14:00:00"},
//               {"fecha": "2023-11-13", "hora": "09:30:00"}
//             ],
//             "total_pagar": 75.60,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-11-13", "hora": "11:00:00"},
//               {"fecha": "2023-11-14", "hora": "17:00:00"}
//             ],
//             "total_pagar": 230.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-11-14", "hora": "13:30:00"},
//               {"fecha": "2023-11-15", "hora": "09:00:00"}
//             ],
//             "total_pagar": 65.80,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-15", "hora": "16:00:00"},
//               {"fecha": "2023-11-16", "hora": "12:30:00"}
//             ],
//             "total_pagar": 120.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-16", "hora": "09:45:00"},
//               {"fecha": "2023-11-17", "hora": "14:00:00"}
//             ],
//             "total_pagar": 85.90,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-11-17", "hora": "10:30:00"},
//               {"fecha": "2023-11-18", "hora": "13:45:00"}
//             ],
//             "total_pagar": 95.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-11-18", "hora": "11:00:00"},
//               {"fecha": "2023-11-19", "hora": "10:15:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-11-19", "hora": "14:30:00"},
//               {"fecha": "2023-11-20", "hora": "16:00:00"}
//             ],
//             "total_pagar": 70.60,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-11-20", "hora": "12:00:00"},
//               {"fecha": "2023-11-21", "hora": "10:30:00"}
//             ],
//             "total_pagar": 210.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-11-21", "hora": "13:00:00"},
//               {"fecha": "2023-11-22", "hora": "08:45:00"}
//             ],
//             "total_pagar": 45.80,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-22", "hora": "11:30:00"},
//               {"fecha": "2023-11-23", "hora": "15:00:00"}
//             ],
//             "total_pagar": 140.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-23", "hora": "10:00:00"},
//               {"fecha": "2023-11-24", "hora": "16:30:00"}
//             ],
//             "total_pagar": 75.90,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-11-24", "hora": "09:45:00"},
//               {"fecha": "2023-11-25", "hora": "11:00:00"}
//             ],
//             "total_pagar": 105.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-11-25", "hora": "14:00:00"},
//               {"fecha": "2023-11-26", "hora": "10:45:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-11-26", "hora": "11:30:00"},
//               {"fecha": "2023-11-27", "hora": "09:00:00"}
//             ],
//             "total_pagar": 80.60,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-11-27", "hora": "14:00:00"},
//               {"fecha": "2023-11-28", "hora": "15:30:00"}
//             ],
//             "total_pagar": 240.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-11-28", "hora": "10:30:00"},
//               {"fecha": "2023-11-29", "hora": "08:45:00"}
//             ],
//             "total_pagar": 55.80,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-29", "hora": "13:00:00"},
//               {"fecha": "2023-11-30", "hora": "16:30:00"}
//             ],
//             "total_pagar": 120.25,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-30", "hora": "09:00:00"},
//               {"fecha": "2023-12-01", "hora": "10:15:00"}
//             ],
//             "total_pagar": 95.90,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-01", "hora": "13:30:00"},
//               {"fecha": "2023-12-02", "hora": "14:00:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-02", "hora": "10:00:00"},
//               {"fecha": "2023-12-03", "hora": "08:45:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-03", "hora": "11:30:00"},
//               {"fecha": "2023-12-04", "hora": "16:00:00"}
//             ],
//             "total_pagar": 75.60,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-12-04", "hora": "09:45:00"},
//               {"fecha": "2023-12-05", "hora": "12:00:00"}
//             ],
//             "total_pagar": 220.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-12-05", "hora": "14:30:00"},
//               {"fecha": "2023-12-06", "hora": "09:15:00"}
//             ],
//             "total_pagar": 60.80,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-06", "hora": "10:00:00"},
//               {"fecha": "2023-12-07", "hora": "16:30:00"}
//             ],
//             "total_pagar": 130.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-07", "hora": "11:45:00"},
//               {"fecha": "2023-12-08", "hora": "10:00:00"}
//             ],
//             "total_pagar": 90.20,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-08", "hora": "13:30:00"},
//               {"fecha": "2023-12-09", "hora": "16:00:00"}
//             ],
//             "total_pagar": 105.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-09", "hora": "09:30:00"},
//               {"fecha": "2023-12-10", "hora": "11:00:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-10", "hora": "14:00:00"},
//               {"fecha": "2023-12-11", "hora": "08:45:00"}
//             ],
//             "total_pagar": 70.60,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-12-11", "hora": "11:30:00"},
//               {"fecha": "2023-12-12", "hora": "16:00:00"}
//             ],
//             "total_pagar": 250.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-12-12", "hora": "09:00:00"},
//               {"fecha": "2023-12-13", "hora": "11:45:00"}
//             ],
//             "total_pagar": 55.80,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-13", "hora": "14:30:00"},
//               {"fecha": "2023-12-14", "hora": "09:15:00"}
//             ],
//             "total_pagar": 120.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-14", "hora": "10:00:00"},
//               {"fecha": "2023-12-15", "hora": "16:30:00"}
//             ],
//             "total_pagar": 80.90,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-15", "hora": "11:45:00"},
//               {"fecha": "2023-12-16", "hora": "10:00:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-16", "hora": "13:30:00"},
//               {"fecha": "2023-12-17", "hora": "16:00:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-17", "hora": "09:30:00"},
//               {"fecha": "2023-12-18", "hora": "11:00:00"}
//             ],
//             "total_pagar": 70.60,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-12-18", "hora": "14:00:00"},
//               {"fecha": "2023-12-19", "hora": "08:45:00"}
//             ],
//             "total_pagar": 240.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-12-19", "hora": "11:30:00"},
//               {"fecha": "2023-12-20", "hora": "16:00:00"}
//             ],
//             "total_pagar": 45.80,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-20", "hora": "10:00:00"},
//               {"fecha": "2023-12-21", "hora": "09:15:00"}
//             ],
//             "total_pagar": 130.75,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-21", "hora": "14:30:00"},
//               {"fecha": "2023-12-22", "hora": "12:00:00"}
//             ],
//             "total_pagar": 85.90,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-22", "hora": "10:00:00"},
//               {"fecha": "2023-12-23", "hora": "15:30:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-23", "hora": "13:00:00"},
//               {"fecha": "2023-12-24", "hora": "09:45:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-24", "hora": "11:30:00"},
//               {"fecha": "2023-12-25", "hora": "16:00:00"}
//             ],
//             "total_pagar": 75.60,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2023-12-25", "hora": "10:00:00"},
//               {"fecha": "2023-12-26", "hora": "09:15:00"}
//             ],
//             "total_pagar": 230.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2023-12-26", "hora": "13:00:00"},
//               {"fecha": "2023-12-27", "hora": "12:30:00"}
//             ],
//             "total_pagar": 55.80,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-27", "hora": "14:30:00"},
//               {"fecha": "2023-12-28", "hora": "08:45:00"}
//             ],
//             "total_pagar": 120.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-28", "hora": "11:30:00"},
//               {"fecha": "2023-12-29", "hora": "16:00:00"}
//             ],
//             "total_pagar": 90.20,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-29", "hora": "09:00:00"},
//               {"fecha": "2023-12-30", "hora": "09:45:00"}
//             ],
//             "total_pagar": 105.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-30", "hora": "13:30:00"},
//               {"fecha": "2023-12-31", "hora": "16:00:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-31", "hora": "10:00:00"},
//               {"fecha": "2024-01-01", "hora": "08:45:00"}
//             ],
//             "total_pagar": 70.60,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2024-01-01", "hora": "14:00:00"},
//               {"fecha": "2024-01-02", "hora": "10:30:00"}
//             ],
//             "total_pagar": 260.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de pan y pastelería",
//             "fecha_hora": [
//               {"fecha": "2024-01-02", "hora": "12:00:00"},
//               {"fecha": "2024-01-03", "hora": "09:15:00"}
//             ],
//             "total_pagar": 50.80,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2024-01-03", "hora": "16:30:00"},
//               {"fecha": "2024-01-04", "hora": "08:45:00"}
//             ],
//             "total_pagar": 130.25,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-01-04", "hora": "10:00:00"},
//               {"fecha": "2024-01-05", "hora": "15:00:00"}
//             ],
//             "total_pagar": 85.90,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de alimentos enlatados",
//             "fecha_hora": [
//               {"fecha": "2024-01-05", "hora": "11:45:00"},
//               {"fecha": "2024-01-06", "hora": "09:00:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2024-01-06", "hora": "13:30:00"},
//               {"fecha": "2024-01-07", "hora": "14:00:00"}
//             ],
//             "total_pagar": 180.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Venta de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2024-01-07", "hora": "10:30:00"},
//               {"fecha": "2024-01-08", "hora": "08:45:00"}
//             ],
//             "total_pagar": 70.60,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Venta de carne y embutidos",
//             "fecha_hora": [
//               {"fecha": "2024-01-08", "hora": "14:00:00"},
//               {"fecha": "2024-01-09", "hora": "12:30:00"}
//             ],
//             "total_pagar": 240.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//     {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-10-12", "hora": "09:00:00"},
//               {"fecha": "2023-10-13", "hora": "14:30:00"}
//             ],
//             "total_pagar": 95.50,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-10-14", "hora": "12:00:00"},
//               {"fecha": "2023-10-15", "hora": "10:30:00"}
//             ],
//             "total_pagar": 180.25,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-10-16", "hora": "08:15:00"},
//               {"fecha": "2023-10-17", "hora": "09:45:00"}
//             ],
//             "total_pagar": 130.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-10-18", "hora": "15:30:00"},
//               {"fecha": "2023-10-19", "hora": "11:20:00"}
//             ],
//             "total_pagar": 70.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-10-20", "hora": "10:00:00"},
//               {"fecha": "2023-10-21", "hora": "16:45:00"}
//             ],
//             "total_pagar": 150.10,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-10-22", "hora": "12:30:00"},
//               {"fecha": "2023-10-23", "hora": "09:15:00"}
//             ],
//             "total_pagar": 90.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-10-24", "hora": "14:00:00"},
//               {"fecha": "2023-10-25", "hora": "13:20:00"}
//             ],
//             "total_pagar": 120.60,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-10-26", "hora": "16:45:00"},
//               {"fecha": "2023-10-27", "hora": "10:30:00"}
//             ],
//             "total_pagar": 210.30,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-10-28", "hora": "09:00:00"},
//               {"fecha": "2023-10-29", "hora": "14:45:00"}
//             ],
//             "total_pagar": 80.90,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-10-30", "hora": "12:15:00"},
//               {"fecha": "2023-10-31", "hora": "11:30:00"}
//             ],
//             "total_pagar": 100.25,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-01", "hora": "08:30:00"},
//               {"fecha": "2023-11-02", "hora": "10:15:00"}
//             ],
//             "total_pagar": 150.75,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-11-03", "hora": "15:00:00"},
//               {"fecha": "2023-11-04", "hora": "12:30:00"}
//             ],
//             "total_pagar": 75.40,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-11-05", "hora": "09:45:00"},
//               {"fecha": "2023-11-06", "hora": "16:00:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-11-07", "hora": "13:30:00"},
//               {"fecha": "2023-11-08", "hora": "11:00:00"}
//             ],
//             "total_pagar": 95.80,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-11-09", "hora": "14:45:00"},
//               {"fecha": "2023-11-10", "hora": "10:45:00"}
//             ],
//             "total_pagar": 130.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-11-11", "hora": "17:00:00"},
//               {"fecha": "2023-11-12", "hora": "14:00:00"}
//             ],
//             "total_pagar": 250.00,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-11-13", "hora": "08:30:00"},
//               {"fecha": "2023-11-14", "hora": "10:45:00"}
//             ],
//             "total_pagar": 80.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-11-15", "hora": "11:15:00"},
//               {"fecha": "2023-11-16", "hora": "12:00:00"}
//             ],
//             "total_pagar": 120.90,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-11-17", "hora": "09:00:00"},
//               {"fecha": "2023-11-18", "hora": "13:45:00"}
//             ],
//             "total_pagar": 160.50,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-11-19", "hora": "15:30:00"},
//               {"fecha": "2023-11-20", "hora": "10:15:00"}
//             ],
//             "total_pagar": 70.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-11-21", "hora": "11:00:00"},
//               {"fecha": "2023-11-22", "hora": "16:45:00"}
//             ],
//             "total_pagar": 130.25,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-11-23", "hora": "14:30:00"},
//               {"fecha": "2023-11-24", "hora": "09:45:00"}
//             ],
//             "total_pagar": 85.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-11-25", "hora": "13:00:00"},
//               {"fecha": "2023-11-26", "hora": "10:30:00"}
//             ],
//             "total_pagar": 110.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-11-27", "hora": "17:30:00"},
//               {"fecha": "2023-11-28", "hora": "14:15:00"}
//             ],
//             "total_pagar": 280.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-11-29", "hora": "09:15:00"},
//               {"fecha": "2023-11-30", "hora": "12:00:00"}
//             ],
//             "total_pagar": 85.50,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-01", "hora": "10:30:00"},
//               {"fecha": "2023-12-02", "hora": "14:45:00"}
//             ],
//             "total_pagar": 105.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-03", "hora": "08:00:00"},
//               {"fecha": "2023-12-04", "hora": "09:30:00"}
//             ],
//             "total_pagar": 140.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-12-05", "hora": "14:00:00"},
//               {"fecha": "2023-12-06", "hora": "16:30:00"}
//             ],
//             "total_pagar": 60.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-07", "hora": "11:45:00"},
//               {"fecha": "2023-12-08", "hora": "13:15:00"}
//             ],
//             "total_pagar": 95.75,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-12-09", "hora": "09:30:00"},
//               {"fecha": "2023-12-10", "hora": "10:45:00"}
//             ],
//             "total_pagar": 80.20,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-11", "hora": "12:00:00"},
//               {"fecha": "2023-12-12", "hora": "14:30:00"}
//             ],
//             "total_pagar": 115.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-12-13", "hora": "16:00:00"},
//               {"fecha": "2023-12-14", "hora": "11:30:00"}
//             ],
//             "total_pagar": 200.50,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-15", "hora": "10:00:00"},
//               {"fecha": "2023-12-16", "hora": "12:45:00"}
//             ],
//             "total_pagar": 70.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2023-12-17", "hora": "13:15:00"},
//               {"fecha": "2023-12-18", "hora": "09:00:00"}
//             ],
//             "total_pagar": 130.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2023-12-19", "hora": "14:30:00"},
//               {"fecha": "2023-12-20", "hora": "11:15:00"}
//             ],
//             "total_pagar": 170.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2023-12-21", "hora": "09:45:00"},
//               {"fecha": "2023-12-22", "hora": "12:00:00"}
//             ],
//             "total_pagar": 65.40,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2023-12-23", "hora": "16:00:00"},
//               {"fecha": "2023-12-24", "hora": "10:30:00"}
//             ],
//             "total_pagar": 120.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2023-12-25", "hora": "11:30:00"},
//               {"fecha": "2023-12-26", "hora": "14:45:00"}
//             ],
//             "total_pagar": 90.80,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2023-12-27", "hora": "09:00:00"},
//               {"fecha": "2023-12-28", "hora": "12:30:00"}
//             ],
//             "total_pagar": 100.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2023-12-29", "hora": "17:15:00"},
//               {"fecha": "2023-12-30", "hora": "13:00:00"}
//             ],
//             "total_pagar": 220.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de bebidas y refrescos",
//             "fecha_hora": [
//               {"fecha": "2023-12-31", "hora": "09:45:00"},
//               {"fecha": "2024-01-01", "hora": "12:30:00"}
//             ],
//             "total_pagar": 85.50,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de limpieza",
//             "fecha_hora": [
//               {"fecha": "2024-01-02", "hora": "10:30:00"},
//               {"fecha": "2024-01-03", "hora": "14:15:00"}
//             ],
//             "total_pagar": 140.00,
//             "tipo_pago": "transaccion",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de frutas y verduras",
//             "fecha_hora": [
//               {"fecha": "2024-01-04", "hora": "08:15:00"},
//               {"fecha": "2024-01-05", "hora": "09:45:00"}
//             ],
//             "total_pagar": 160.25,
//             "tipo_pago": "fisico",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de productos de panadería",
//             "fecha_hora": [
//               {"fecha": "2024-01-06", "hora": "14:30:00"},
//               {"fecha": "2024-01-07", "hora": "11:00:00"}
//             ],
//             "total_pagar": 70.00,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos enlatados",
//             "fecha_hora": [
//               {"fecha": "2024-01-08", "hora": "11:45:00"},
//               {"fecha": "2024-01-09", "hora": "13:15:00"}
//             ],
//             "total_pagar": 95.75,
//             "tipo_pago": "QR",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de productos de cuidado personal",
//             "fecha_hora": [
//               {"fecha": "2024-01-10", "hora": "09:30:00"},
//               {"fecha": "2024-01-11", "hora": "10:45:00"}
//             ],
//             "total_pagar": 80.20,
//             "tipo_pago": "transaccion",
//             "estado_venta": "pendiente"
//           },
//           {
//             "detalle_venta": "Compra de lácteos y huevos",
//             "fecha_hora": [
//               {"fecha": "2024-01-12", "hora": "12:00:00"},
//               {"fecha": "2024-01-13", "hora": "14:30:00"}
//             ],
//             "total_pagar": 115.00,
//             "tipo_pago": "fisico",
//             "estado_venta": "realizado"
//           },
//           {
//             "detalle_venta": "Compra de carne y pescado",
//             "fecha_hora": [
//               {"fecha": "2024-01-14", "hora": "16:00:00"},
//               {"fecha": "2024-01-15", "hora": "11:30:00"}
//             ],
//             "total_pagar": 210.75,
//             "tipo_pago": "QR",
//             "estado_venta": "pendiente"
//           },
//     {
//         "detalle_venta": "Compra de productos de limpieza",
//         "fecha_hora": [
//           {"fecha": "2023-10-14", "hora": "16:30:00"},
//           {"fecha": "2023-10-15", "hora": "12:15:00"}
//         ],
//         "total_pagar": 90.50,
//         "tipo_pago": "transaccion",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de carne y pescado",
//         "fecha_hora": [
//           {"fecha": "2023-10-16", "hora": "14:00:00"},
//           {"fecha": "2023-10-17", "hora": "10:45:00"}
//         ],
//         "total_pagar": 180.25,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de frutas y verduras",
//         "fecha_hora": [
//           {"fecha": "2023-10-18", "hora": "09:30:00"},
//           {"fecha": "2023-10-19", "hora": "14:15:00"}
//         ],
//         "total_pagar": 130.00,
//         "tipo_pago": "fisico",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos de panadería",
//         "fecha_hora": [
//           {"fecha": "2023-10-20", "hora": "12:00:00"},
//           {"fecha": "2023-10-21", "hora": "15:45:00"}
//         ],
//         "total_pagar": 70.75,
//         "tipo_pago": "QR",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de productos enlatados",
//         "fecha_hora": [
//           {"fecha": "2023-10-22", "hora": "10:00:00"},
//           {"fecha": "2023-10-23", "hora": "17:30:00"}
//         ],
//         "total_pagar": 150.10,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos de cuidado personal",
//         "fecha_hora": [
//           {"fecha": "2023-10-24", "hora": "13:30:00"},
//           {"fecha": "2023-10-25", "hora": "10:00:00"}
//         ],
//         "total_pagar": 90.00,
//         "tipo_pago": "transaccion",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de lácteos y huevos",
//         "fecha_hora": [
//           {"fecha": "2023-10-26", "hora": "15:00:00"},
//           {"fecha": "2023-10-27", "hora": "16:20:00"}
//         ],
//         "total_pagar": 120.60,
//         "tipo_pago": "fisico",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de carne y pescado",
//         "fecha_hora": [
//           {"fecha": "2023-10-28", "hora": "14:45:00"},
//           {"fecha": "2023-10-29", "hora": "11:30:00"}
//         ],
//         "total_pagar": 210.30,
//         "tipo_pago": "QR",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de bebidas y refrescos",
//         "fecha_hora": [
//           {"fecha": "2023-10-30", "hora": "09:00:00"},
//           {"fecha": "2023-10-31", "hora": "16:15:00"}
//         ],
//         "total_pagar": 80.90,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos de limpieza",
//         "fecha_hora": [
//           {"fecha": "2023-11-01", "hora": "11:30:00"},
//           {"fecha": "2023-11-02", "hora": "14:45:00"}
//         ],
//         "total_pagar": 100.25,
//         "tipo_pago": "transaccion",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de frutas y verduras",
//         "fecha_hora": [
//           {"fecha": "2023-11-03", "hora": "08:00:00"},
//           {"fecha": "2023-11-04", "hora": "12:30:00"}
//         ],
//         "total_pagar": 150.75,
//         "tipo_pago": "fisico",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de productos de panadería",
//         "fecha_hora": [
//           {"fecha": "2023-11-05", "hora": "15:30:00"},
//           {"fecha": "2023-11-06", "hora": "09:15:00"}
//         ],
//         "total_pagar": 75.40,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos enlatados",
//         "fecha_hora": [
//           {"fecha": "2023-11-07", "hora": "14:45:00"},
//           {"fecha": "2023-11-08", "hora": "11:30:00"}
//         ],
//         "total_pagar": 110.00,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos de cuidado personal",
//         "fecha_hora": [
//           {"fecha": "2023-11-09", "hora": "12:00:00"},
//           {"fecha": "2023-11-10", "hora": "10:45:00"}
//         ],
//         "total_pagar": 95.80,
//         "tipo_pago": "transaccion",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de lácteos y huevos",
//         "fecha_hora": [
//           {"fecha": "2023-11-11", "hora": "09:15:00"},
//           {"fecha": "2023-11-12", "hora": "17:30:00"}
//         ],
//         "total_pagar": 130.25,
//         "tipo_pago": "fisico",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de carne y pescado",
//         "fecha_hora": [
//           {"fecha": "2023-11-13", "hora": "14:00:00"},
//           {"fecha": "2023-11-14", "hora": "10:30:00"}
//         ],
//         "total_pagar": 250.00,
//         "tipo_pago": "QR",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de bebidas y refrescos",
//         "fecha_hora": [
//           {"fecha": "2023-11-15", "hora": "11:00:00"},
//           {"fecha": "2023-11-16", "hora": "15:45:00"}
//         ],
//         "total_pagar": 80.00,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos de limpieza",
//         "fecha_hora": [
//           {"fecha": "2023-11-17", "hora": "09:30:00"},
//           {"fecha": "2023-11-18", "hora": "13:00:00"}
//         ],
//         "total_pagar": 120.90,
//         "tipo_pago": "transaccion",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de frutas y verduras",
//         "fecha_hora": [
//           {"fecha": "2023-11-19", "hora": "16:00:00"},
//           {"fecha": "2023-11-20", "hora": "10:15:00"}
//         ],
//         "total_pagar": 75.00,
//         "tipo_pago": "fisico",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de productos de panadería",
//         "fecha_hora": [
//           {"fecha": "2023-11-21", "hora": "13:45:00"},
//           {"fecha": "2023-11-22", "hora": "08:30:00"}
//         ],
//         "total_pagar": 65.25,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos enlatados",
//         "fecha_hora": [
//           {"fecha": "2023-11-23", "hora": "11:15:00"},
//           {"fecha": "2023-11-24", "hora": "16:45:00"}
//         ],
//         "total_pagar": 120.00,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos de cuidado personal",
//         "fecha_hora": [
//           {"fecha": "2023-11-25", "hora": "09:45:00"},
//           {"fecha": "2023-11-26", "hora": "14:30:00"}
//         ],
//         "total_pagar": 85.50,
//         "tipo_pago": "transaccion",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de lácteos y huevos",
//         "fecha_hora": [
//           {"fecha": "2023-11-27", "hora": "12:00:00"},
//           {"fecha": "2023-11-28", "hora": "16:45:00"}
//         ],
//         "total_pagar": 100.00,
//         "tipo_pago": "fisico",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de carne y pescado",
//         "fecha_hora": [
//           {"fecha": "2023-11-29", "hora": "10:30:00"},
//           {"fecha": "2023-11-30", "hora": "15:00:00"}
//         ],
//         "total_pagar": 180.75,
//         "tipo_pago": "QR",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de bebidas y refrescos",
//         "fecha_hora": [
//           {"fecha": "2023-12-01", "hora": "12:15:00"},
//           {"fecha": "2023-12-02", "hora": "09:30:00"}
//         ],
//         "total_pagar": 80.50,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos de limpieza",
//         "fecha_hora": [
//           {"fecha": "2023-12-03", "hora": "14:00:00"},
//           {"fecha": "2023-12-04", "hora": "16:45:00"}
//         ],
//         "total_pagar": 100.25,
//         "tipo_pago": "transaccion",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de frutas y verduras",
//         "fecha_hora": [
//           {"fecha": "2023-12-05", "hora": "09:45:00"},
//           {"fecha": "2023-12-06", "hora": "12:30:00"}
//         ],
//         "total_pagar": 140.75,
//         "tipo_pago": "fisico",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de productos de panadería",
//         "fecha_hora": [
//           {"fecha": "2023-12-07", "hora": "14:15:00"},
//           {"fecha": "2023-12-08", "hora": "11:00:00"}
//         ],
//         "total_pagar": 60.25,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos enlatados",
//         "fecha_hora": [
//           {"fecha": "2023-12-09", "hora": "10:00:00"},
//           {"fecha": "2023-12-10", "hora": "16:30:00"}
//         ],
//         "total_pagar": 130.00,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos de cuidado personal",
//         "fecha_hora": [
//           {"fecha": "2023-12-11", "hora": "12:45:00"},
//           {"fecha": "2023-12-12", "hora": "08:15:00"}
//         ],
//         "total_pagar": 95.20,
//         "tipo_pago": "transaccion",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de lácteos y huevos",
//         "fecha_hora": [
//           {"fecha": "2023-12-13", "hora": "10:30:00"},
//           {"fecha": "2023-12-14", "hora": "14:00:00"}
//         ],
//         "total_pagar": 110.50,
//         "tipo_pago": "fisico",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de carne y pescado",
//         "fecha_hora": [
//           {"fecha": "2023-12-15", "hora": "11:45:00"},
//           {"fecha": "2023-12-16", "hora": "15:30:00"}
//         ],
//         "total_pagar": 190.75,
//         "tipo_pago": "QR",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de bebidas y refrescos",
//         "fecha_hora": [
//           {"fecha": "2023-12-17", "hora": "13:00:00"},
//           {"fecha": "2023-12-18", "hora": "09:45:00"}
//         ],
//         "total_pagar": 75.50,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos de limpieza",
//         "fecha_hora": [
//           {"fecha": "2023-12-19", "hora": "10:30:00"},
//           {"fecha": "2023-12-20", "hora": "14:15:00"}
//         ],
//         "total_pagar": 110.25,
//         "tipo_pago": "transaccion",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de frutas y verduras",
//         "fecha_hora": [
//           {"fecha": "2023-12-21", "hora": "15:00:00"},
//           {"fecha": "2023-12-22", "hora": "11:30:00"}
//         ],
//         "total_pagar": 160.00,
//         "tipo_pago": "fisico",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de productos de panadería",
//         "fecha_hora": [
//           {"fecha": "2023-12-23", "hora": "14:45:00"},
//           {"fecha": "2023-12-24", "hora": "10:00:00"}
//         ],
//         "total_pagar": 70.25,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos enlatados",
//         "fecha_hora": [
//           {"fecha": "2023-12-25", "hora": "11:15:00"},
//           {"fecha": "2023-12-26", "hora": "16:45:00"}
//         ],
//         "total_pagar": 120.00,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos de cuidado personal",
//         "fecha_hora": [
//           {"fecha": "2023-12-27", "hora": "12:00:00"},
//           {"fecha": "2023-12-28", "hora": "14:30:00"}
//         ],
//         "total_pagar": 85.90,
//         "tipo_pago": "transaccion",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de lácteos y huevos",
//         "fecha_hora": [
//           {"fecha": "2023-12-29", "hora": "09:45:00"},
//           {"fecha": "2023-12-30", "hora": "11:30:00"}
//         ],
//         "total_pagar": 100.10,
//         "tipo_pago": "fisico",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de carne y pescado",
//         "fecha_hora": [
//           {"fecha": "2024-01-01", "hora": "14:00:00"},
//           {"fecha": "2024-01-02", "hora": "10:30:00"}
//         ],
//         "total_pagar": 220.25,
//         "tipo_pago": "QR",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de bebidas y refrescos",
//         "fecha_hora": [
//           {"fecha": "2024-01-03", "hora": "09:00:00"},
//           {"fecha": "2024-01-04", "hora": "16:45:00"}
//         ],
//         "total_pagar": 75.80,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos de limpieza",
//         "fecha_hora": [
//           {"fecha": "2024-01-05", "hora": "10:30:00"},
//           {"fecha": "2024-01-06", "hora": "14:15:00"}
//         ],
//         "total_pagar": 110.00,
//         "tipo_pago": "transaccion",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de frutas y verduras",
//         "fecha_hora": [
//           {"fecha": "2024-01-07", "hora": "15:00:00"},
//           {"fecha": "2024-01-08", "hora": "12:30:00"}
//         ],
//         "total_pagar": 160.75,
//         "tipo_pago": "fisico",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de productos de panadería",
//         "fecha_hora": [
//           {"fecha": "2024-01-09", "hora": "14:45:00"},
//           {"fecha": "2024-01-10", "hora": "10:00:00"}
//         ],
//         "total_pagar": 70.00,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos enlatados",
//         "fecha_hora": [
//           {"fecha": "2024-01-11", "hora": "11:15:00"},
//           {"fecha": "2024-01-12", "hora": "16:45:00"}
//         ],
//         "total_pagar": 120.10,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos de cuidado personal",
//         "fecha_hora": [
//           {"fecha": "2024-01-13", "hora": "12:00:00"},
//           {"fecha": "2024-01-14", "hora": "14:30:00"}
//         ],
//         "total_pagar": 85.90,
//         "tipo_pago": "transaccion",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de lácteos y huevos",
//         "fecha_hora": [
//           {"fecha": "2024-01-15", "hora": "09:45:00"},
//           {"fecha": "2024-01-16", "hora": "11:30:00"}
//         ],
//         "total_pagar": 100.50,
//         "tipo_pago": "fisico",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de carne y pescado",
//         "fecha_hora": [
//           {"fecha": "2024-01-17", "hora": "14:00:00"},
//           {"fecha": "2024-01-18", "hora": "10:30:00"}
//         ],
//         "total_pagar": 220.75,
//         "tipo_pago": "QR",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de bebidas y refrescos",
//         "fecha_hora": [
//           {"fecha": "2024-01-19", "hora": "09:00:00"},
//           {"fecha": "2024-01-20", "hora": "16:45:00"}
//         ],
//         "total_pagar": 75.80,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos de limpieza",
//         "fecha_hora": [
//           {"fecha": "2024-01-21", "hora": "10:30:00"},
//           {"fecha": "2024-01-22", "hora": "14:15:00"}
//         ],
//         "total_pagar": 110.00,
//         "tipo_pago": "transaccion",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de frutas y verduras",
//         "fecha_hora": [
//           {"fecha": "2024-01-23", "hora": "15:00:00"},
//           {"fecha": "2024-01-24", "hora": "12:30:00"}
//         ],
//         "total_pagar": 160.75,
//         "tipo_pago": "fisico",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de productos de panadería",
//         "fecha_hora": [
//           {"fecha": "2024-01-25", "hora": "14:45:00"},
//           {"fecha": "2024-01-26", "hora": "10:00:00"}
//         ],
//         "total_pagar": 70.00,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos enlatados",
//         "fecha_hora": [
//           {"fecha": "2024-01-27", "hora": "11:15:00"},
//           {"fecha": "2024-01-28", "hora": "16:45:00"}
//         ],
//         "total_pagar": 120.10,
//         "tipo_pago": "QR",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de productos de cuidado personal",
//         "fecha_hora": [
//           {"fecha": "2024-01-29", "hora": "12:00:00"},
//           {"fecha": "2024-01-30", "hora": "14:30:00"}
//         ],
//         "total_pagar": 85.90,
//         "tipo_pago": "transaccion",
//         "estado_venta": "pendiente"
//       },
//       {
//         "detalle_venta": "Compra de lácteos y huevos",
//         "fecha_hora": [
//           {"fecha": "2024-01-31", "hora": "09:45:00"},
//           {"fecha": "2024-02-01", "hora": "11:30:00"}
//         ],
//         "total_pagar": 100.50,
//         "tipo_pago": "fisico",
//         "estado_venta": "realizado"
//       },
//       {
//         "detalle_venta": "Compra de carne y pescado",
//         "fecha_hora": [
//           {"fecha": "2024-02-02", "hora": "14:00:00"},
//           {"fecha": "2024-02-03", "hora": "10:30:00"}
//         ],
//         "total_pagar": 220.75,
//         "tipo_pago": "QR",
//         "estado_venta": "pendiente"
//       }
//     ]);

// db.getCollection('Ventas').find();

//db.getCollection('Ventas').findOne();

//db.getCollection('Ventas').updateOne({detalle_venta: 'Compra de frutas y verduras'},
//{$set:{tipo_pago:"transaccion"}});

//db.getCollection('Ventas').updateMany({detalle_venta: 'Compra de frutas y verduras'},
//{$set:{total_pagar:160.99}});

// db.getCollection('Ventas').deleteOne({
//     detalle_venta: 'Compra de frutas y verduras'});

//db.getCollection('Ventas').deleteMany({
//    detalle_venta:" Compra de frutas y verduras"})

//db.getCollection('Ventas').drop({})

//db.dropdatabase()