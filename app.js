//Para extraer unicamente el argv, se coloca al final .argv
const argv = require('./config/yargs').argv;

const colors = require('colors/safe');

//siempre despues de que la palabra const hay llaves es una destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Lista:\n${archivo}`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            //Si no existe una prioridad con este nombre, se puede dejar asi
            //.then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            //Pero si existe es mejor asi, por lo que se tambien el colors/safe
            .then(archivo => console.log(`Archivo creado:`, colors.green(`${archivo}`)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

//console.log(process.argv);
//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]
//console.log('limite', argv.limite);