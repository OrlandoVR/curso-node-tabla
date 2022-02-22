
const {crearArchivo} = require("./helpers/multiplicar");
const argv = require("./config/yargs");

require("colors");

console.clear();


//Esto se puede hacer pero es feo , por eso se usa yargs
//Aqui abajo

    // const [ arg1, arg2, arg3 = "base=5"] = process.argv;
    // const [ , base]=arg3.split("=");

    // console.log("---------");
    // console.log(arg1);
    // console.log(arg2);
    // console.log(arg3);
    // console.log("---------");

//Aqui arriba

crearArchivo(argv.b, argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,"creado"))
    .catch(err => console.log(err));
