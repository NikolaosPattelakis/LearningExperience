function getLikes()
{
    var Likes = addLikes();
    document.getElementById("likenumber").innerHTML = Likes++;
}

function addLikes()
{
    if (StorageEvent.clickcount) {
        StorageEvent.clickcount = Number(StorageEvent.clickcount)+1;
      } else {
        StorageEvent.clickcount = 1;
      }
    a = 4 + StorageEvent.clickcount;
    return a;
}
    
function getPlayers()
{
    var Players = [
        "Gioka",
        "Giaprakas",
        "Lomedil"
        ];
    
    document.getElementById("playername1").innerHTML = Players[0];
    document.getElementById("playername2").innerHTML = Players[1];
    document.getElementById("playername3").innerHTML = Players[2];
}
      