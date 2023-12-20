import server from "./app.js";


async function main (){
    try {
        server.listen(3000)
        console.log('app is listening on port ',3000)   
    } catch (error) {
        console.log(error)
    }
}

main();