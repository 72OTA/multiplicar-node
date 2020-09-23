const fs = require('fs');
const colors = require('colors');

let crearTabla =  (n,hasta) => {

    return new Promise( (resolve,reject) => {

        if( !Number(n) || !Number(hasta)) {
            reject(`El valor introducido "${n}" hasta "${hasta}" tiene problemas de sintaxis`.red);
            return;
        }

        let tabla = '';
        for (let index = 0; index <= hasta; index++) {
            tabla += `${index} * ${n} = ${index*n}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${n}-hasta-${hasta}.txt`, tabla, (err) => {
        
            if (err)
                reject(err);
            else
                resolve(`tablas-${n}-hasta-${hasta}.txt`)
        });
    })

}

let listarTabla =  (n,hasta) => {

    return new Promise( (resolve,reject) => {

        if( !Number(n) || !Number(hasta)) {
            reject(`El valor introducido "${n}" hasta "${hasta}" tiene problemas de sintaxis`.red);
            return;
        }else{
            let tabla = '';
            console.log(`==============================`.green)
            console.log(`Tabla del ${n} hasta ${hasta}`.green)
            console.log(`==============================`.green)
            for (let index = 0; index <= hasta; index++) {
                tabla += `${index} * ${n} = ${index*n}\n`;
            }
            resolve(console.log(tabla));
        }

    });

}

module.exports = {
    crearTabla,
    listarTabla
}