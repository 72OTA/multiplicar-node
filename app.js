const argv = require('./config/yargs').argv;
const colors = require('colors');
const {crearTabla,listarTabla} = require('./functions/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite)
        .then()
        .catch(e => console.log(e));
    break;
    case 'crear':
        crearTabla(argv.base,argv.limite)
        .then( archivo => console.log(`El archivo fue creado: ${ archivo }`.green))
        .catch(e => console.log(e));
    break;
    default:
        console.log('Comando no reconocido'.red);
    break;
}

// console.log(process.argv);

// console.log(argv.base);
// console.log(argv.limite);
// let parametro = argv[2];
// let n = parametro.split('=')[1];

