const path = require("path");
const fs = require("fs");

const db = require("../database/models");

// Dependiendo el "nameDB" (nombre de la base de datos) que se coloque
// al ejecutar la función "rutaDB" va a retornar la ruta hasta esa base de datos.
// Esto nos sirve para utilizar distintas bases de datos sin necesidad
// de copiar el mismo controlador "serv.js".

function rutaDB(nameDB) {
    return path.join(__dirname, nameDB);
}

module.exports = {
    // Buscar la base de datos que queramos y pasarla a formato JavaScript
    findAll(nameDB) {
        // Lee el archivo que esta en la ruta generada con la función "rutaDB"
        let ruta = rutaDB(nameDB);
        let data = fs.readFileSync(ruta, "utf-8");
        // Devuelve el json convertido a js (el array)
        if (data == "") {
            data = [];
        } else {
            data = JSON.parse(data);
        }
        return data;
    },
    findById(nameDB, id) {
        // Busca en el array generado con "findAll" el objeto que tenga el mismo id.
        // Y lo devuelve
        return this.findAll(nameDB).find((p) => p.id == id);
    },
    uploadData(nameDB, data) {
        // Pide la base de datos y la transforma en array
        let productslist = this.findAll(nameDB);
        // Le agrega la data que carguemos en "data"
        productslist.push(data);
        // Sube el array modificado a la base de datos seleccionada en "nameDB"
        this.updateDB(nameDB, productslist);
    },
    updateDB(nameDB, newDB) {
        // Convierte el array enviado en "newDB" a formato json
        let dataJSON = JSON.stringify(newDB, null, 4);
        // Usa la ruta generada con "rutaDB" para modificar la base de datos que coloquemos
        // y escribe la nueva base de datos de "dataJSON"
        let ruta = rutaDB(nameDB);
        fs.writeFileSync(ruta, dataJSON, "utf-8");
    },
    delete(nameDB, id) {
        // Pide la base de datos y la transforma en array
        let data = this.findAll(nameDB);
        // Encuentra el index del objeto que queramos eliminar
        let indexDataDelete = data.findIndex((p) => p.id == id);
        // Con el metodo splice eliminamos el objeto del array
        data.splice(indexDataDelete, 1);
        // Guardamos en la base de datos seleccionada el nuevo array modificado
        this.updateDB(nameDB, data);
    },
    editData(nameDB, id, dataToEdit) {
        // Pide la base de datos y la transforma en array
        let data = this.findAll(nameDB);
        // Encuentra el index del objeto que queremos eliminar con el id que se pasa como parámetro
        let indexDataEdit = data.findIndex((p) => p.id == id);
        // Modifica el objeto que está en el index resultante.
        data[indexDataEdit] = {
            ...data[indexDataEdit],
            ...dataToEdit,
        };
        // Guarda la nueva base de datos con el objeto ya modificado
        this.updateDB(nameDB, data);
    },
    async findAllParse(dbTable, atributesToParse) {
        // Hace el pedido a la db, usando [dbTable], para poder utilizar distintas db con la misma función.
        const data = await db[dbTable].findAll();
        // hace un for con cada elemento que se guarde en "data"
        for (let element of data) {
            // A cada elemento, le vamos a cambiar los atributos que esten dentro del array de "atributesToParse"
            for (let atribute of atributesToParse) {
                // y le hace un "JSON.parse" para que pase de un json a formato JS.
                element[atribute] = JSON.parse(element[atribute]);
            }
        }
        return data;
    },
};
