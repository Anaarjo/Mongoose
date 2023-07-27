const mongoose = require('mongoose');
// Importando a "classe" user
const User = require("./SchemaUser");
const SchemaUser = require('./SchemaUser');
// URL de conexão com o banco de dados (substitua 'seu_banco_de_dados' pelo nome do seu banco de dados)
const dbURL = 'mongodb://localhost:27017/school';

// Opções de configuração (opcional)
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

// Conectar ao banco de dados
mongoose.connect(dbURL, options)
    .then(() => console.log('Conexão bem-sucedida com o MongoDB!'))
    .catch((err) => console.error('Erro na conexão com o MongoDB:', err));


// 1º Forma

// Como adicionar um novo user
//const user = new User({ name: "Ana", age:20})

// Para realmente salvar no db vc precisa utlizar a função async
//user.save().then(() => console.log("User saved"))


// 2º Forma



// Outra forma de add um user criando uma função async

/*run()
async function run() {
    const user = await User.create({name: "Alice", age: 20})
    // Como atualizar o nome do user
  //  user.name ="Sally"
  //  await user.save()
    console.log(user)
} */

// 3º Forma 

/*run()
async function run() {
    const user = await User.create({
        name: "Ruan",
        age: 19,
        hobbies: ["Skating", "Watch animes", "Ride a bike",]
    })


    console.log(user)
} */


// 4º Forma
/*
run()
async function run() {
    try {
        const user = await User.create({
            name: "Igor",
            age: 23,
            email: "igor@gmail.com",
            hobbies: ["Skating", "Watch animes", "Ride a bike"]
        })
        console.log(user)
    } catch (e) {
        console.log(e.message)
    }
}
*/
// Encontrando um usuário por id
/*run()
async function run() {

    try {
        const user = await User.findById("64c13efabd93280494343405")
        console.log(user)
    } catch (e) {
        console.log(e.message)
    }
} */


// Query 

run()
async function run() {

    try {
        // Buscar por users que a idade é maior (greater ) que 12 
        const user = await SchemaUser.where("age")
            .gt(12)
              .where("name")
            .equals("Ana")
            .select("age")
            // Usando o populate, é como se fosse um join
           // .populate("bestFriend")
            .limit(1)
            // Usando a referência da Alice como bestfriend 
       // user[0].bestFriend = "64c1346e8a306f8e601a27fd"
        //salvando a inserção do bf
      //  await user[0].save()
        // Usado para imprimir os users 
        console.log(user)
       
    } catch (e) {
        console.log(e.message)
    }
} 