var Likes = 5;

window.onload = function(){getLikes(),getPlayers()};

function getLikes()
{    
    document.getElementById("likenumber").innerHTML = Likes;
}

function addLike()
{
    Likes++;
    getLikes();
}
   
function getPlayers()
{
    let Players = [
        "Gioka",
        "Giaprakas",
        "Lomedil"
        ];
    
    for (let i=0;i<Players.length;i++)
    {
        let player = document.createElement("li");
        player.innerHTML = Players[i];
        document.getElementById("playerlist").appendChild(player);
    }
}