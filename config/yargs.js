const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        deault: 10
    }
}
const argv = require('yargs')
            .command('listar','Imprime en consola la tabla de multiplicar',opt)
            .command('Crear','Crea la tabla de multiplicar',opt)
            .help()
            .argv;

module.exports = {
    argv
}