players = [];
function getChoosenPlayer(element) {
    const playersNumber = document.getElementById('total-players');
    // const playersNumberInner = playersNumber.innerText;
    playersNumber.innerText = players.length;
    const choosenPlayer = document.getElementById('choosePlayer');
    const ul = document.createElement('ol');
    ul.style.listStyle = 'none';
    if (players.length <= 5) {
        choosenPlayer.appendChild(ul);
        element.style.backgroundColor = 'white';
        element.style.color = 'black';
        element.disabled = true;
    } else {
        alert('You can not choosen more than five players');
    }
    for (let i = 0; i < players.length; i++) {
        ul.innerHTML = `
        <li> <span>${i + 1}</span> ${players[i].playerName}</li>
        `
    }
}
function addPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerList = {
        playerName: playerName
    }
    players.push(playerList);
    console.log(players);
    getChoosenPlayer(element);
}