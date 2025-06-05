let addGameVAR = {name: 'Fortnite', genere: 'Battle Royale', online: true, price: 0, platform: ['PC', 'Console']}
let removeGameVAR = {name: 'Fortnite'}
let searchGameByNameVAR = {name: 'rainbow six'}
let filterByPriceVAR = 100
let filterByPlataformVAR = 'console '
let filterByGenereVAR = 'FPS'
let filterOnlineGamesVAR = true

const completeList = [
    {name: 'Rainbow Six', genere: 'FPS', online: true, price: 100, platform: ['PC', 'Console']},
    {name: 'Warzone', genere: 'Battle Royle', online: true, price: 0, platform: ['PC', 'Console']},
    {name: 'God of War', genere: 'History', online: false, price: 250, platform: ['PS4']}
]
function displayCompleteList(completeList){
    completeList.forEach(function(completeList) {
        console.log(`    ${completeList.name.toUpperCase()}
        Genere: ${completeList.genere}
        Online: ${completeList.online ? true : false}
        Price: ${completeList.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' })}
        Platform: ${completeList.platform.join(', ')}`)
    })
}

function displayGames(completeList){
    completeList.forEach(function(completeList, i) {
        console.log(`${i + 1}. ${completeList.name}`)
    })
}

function addGame(completeList, addGameVAR){
    const index = completeList.findIndex(game => game.name.toLowerCase().trim() === addGameVAR.name.toLowerCase().trim())
    if(index === -1){
        completeList.push(addGameVAR)
    console.log(`The game ${addGameVAR.name} was successfully added to your list.`)
    } else{
        console.log(`The game ${addGameVAR.name} is already in your list.`)
    }
}

function removeGame(completeList,removeGameVAR){
    const index = completeList.findIndex(game => game.name.toLowerCase().trim() === removeGameVAR.name.toLowerCase().trim())
    if(index === -1) {
        console.log(`It was not possible to find the game ${removeGameVAR.name} in your list`)
    } else{
        const removed = completeList[index]
        completeList.splice(index, 1)
        console.log(`The game ${removeGameVAR.name} was successfully removed from your list.`)
    }
}

function searchGameByName(completeList, searchGameByNameVAR){
const game = completeList.find(game => game.name.toLowerCase().trim() === searchGameByNameVAR.name.toLowerCase().trim())
if (game){
    displayCompleteList([game])
} else{
    console.log(`It was not possible to find the game ${searchGameByNameVAR.name}`)
}
}

function filterByPrice(completeList, filterByPriceVAR){
    const filteredGames = completeList.filter(games => games.price <= filterByPriceVAR).map(games => games.name)
    return filteredGames;
}

function filterByPlatform(completeList, filterByPlataformVAR){
    const filteredGames = completeList.filter(games => games.platform.some(g => g.toLowerCase().trim() === filterByPlataformVAR.toLowerCase().trim())).map(games => games.name)
    return filteredGames;
}

function filterByGenere(completeList, filterByGenereVAR){
    const filteredGames = completeList.filter(games => games.genere.toLowerCase().trim() === filterByGenereVAR.toLowerCase().trim()).map(games => games.name)
    return filteredGames;
}

function filterOnlineGames(completeList, filterOnlineGamesVAR){
    const filteredGames = completeList.filter(games => games.online === filterOnlineGamesVAR).map(games => games.name)
    return filteredGames;
}