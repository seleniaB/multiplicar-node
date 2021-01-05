//Al inicio siempre van los requireds
//Hay tres tipos de querimientos
//El de un proyecto propio de Node, es decir nada mas se difine para usarla
const fs = require('fs');
const colors = require('colors');
const { lightcoral } = require('color-name');
//Las que no vienen propias e node, si no las que se instalan, es decir, no son nativas
//const fs = require('express');
//Y las que uno hace en el proyecto, es decir las que hace uno
//const fs = require('./fs');

//Otra forma de pasar los datos al modulo es
//module.exports.crearArchivo = (base) => {

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });

}

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        } else {

            let data = '';

            console.log('============='.green);
            console.log(`Tabla del ${base}`.green);
            console.log('============='.green);
            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base*i }\n`;
            }
            resolve(data);

        }

    });

}


//Una opcion es la siguiente, donde este crear objeto toma lo que le pase, 
//pero es mejor asi, ya que si hay muchas funciones nadamas se agregan
//Para exportar funciones
module.exports = {

    crearArchivo,
    listarTabla

}