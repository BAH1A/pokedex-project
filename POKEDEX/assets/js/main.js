


const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
    .then(function(response){
        return response.json()
    }) /*.then((response) => response.json()) */
    .then(function(jsonBody){
        console.log(jsonBody)
    }) /*.then((jsonBody) => console.log(jsonBody)) */
    .catch(function(error){
        console.log(error)
    })/*.catch((error) => console.error(error)) */
    .finally(function(){
        console.log(`Requisição feita com sucesso`)
    })