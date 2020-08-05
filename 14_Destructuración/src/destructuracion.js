
const user1 = {
    name: 'Tania Forero',
    Phone: '310000000',
    City: 'Bogotá',
    Social: {
        Facebook: 'www.fc.com',
        Instagram: 'ww.ins.com'
    }
}

const saluda = ( user ) => {
    //Destructuración Normal
    //var { name, Phone } = user

    //Destructuración anidada
    var { name, Social: { Instagram: ins } } = user

    console.log(
        ` Hola Soy ${name}, mi instagram es ${ins} `
    )
}

saluda (user1)