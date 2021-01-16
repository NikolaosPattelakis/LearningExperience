var Likes = 5;

var images = ["image1.jpg", "image2.jpg","image3.jpg","image4.jpg","image5.jpg", ];

//window.onload = function(){getLikes(),getPlayers(),showP()};

window.setInterval(rotateImages, 5000);

function rotateImages()
{
    images.unshift(images.pop());
    
    for(let i=0; i<5; i++){
        document.getElementsByClassName("image")[i].src = images[i];
        console.log(document.getElementsByClassName("image")[i].src);
    }
}

function getLikes()
{    
    document.getElementById("likenumber").innerHTML = Likes;
}

function addLike(obj)
{
    obj.style.backgroundColor = "#1ec5e5";
    Likes++;
    getLikes();
}

function mOut(obj)
{
    obj.style.backgroundColor = "brown";
    obj.style.font = "Lucida Sans";
    obj.style.fontsize = 20;
    obj.style.color = "cornsilk";
 }
   
function getPlayers()
{
    let players = [
        "Gioka",
        "Giaprakas",
        "Lomedil"
        ];
    
    for (let i=0;i<players.length;i++)
    {
        let player = document.createElement("li");
        player.innerHTML = players[i];
        document.getElementById("playerlist").appendChild(player);
    }
}

function stylechange()
{
    var myCollection = document.getElementsByTagName("p");
    for (let i=0;i<myCollection.length;i++)
    {
        myCollection[i].style.color = "red";
        myCollection[i].style.fontSize = 30;
    }
}

function changeimage()
{
    document.getElementById("image").src = "bridge.png";
}

function myMove()
{
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame()
    {
        if (pos == 350)
        {
            clearInterval(id);
        }
        else
        {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

function titleChange(obj)
{
    document.getElementById("changetitle").innerHTML = obj.value;
}

function newP()
{
    let para = document.createElement("p");
    let node = document.createTextNode("New!");
    para.appendChild(node);

    let element = document.getElementById("textplace");
    element.appendChild(para);
    showP();
}

function removeP()
{
    let element = document.getElementById("textplace");
    element.remove();
    showP();
}

function showP()
{
    var myNodelist = document.querySelectorAll("p");
    document.getElementById("showparagraphs").innerHTML = `This document contains ${myNodelist.length - 5} paragraphs.`;
}

function zoomIn(imgs)
{
    let imgsh = imgs.clientHeight;
    let imgsw = imgs.clientWidth;
    imgs.style.height = (imgsh + 200) + "px";
    imgs.style.width = (imgsw + 200 ) + "px";
}

function zoomOut(imgs)
{
    let imgsh = imgs.clientHeight;
    let imgsw = imgs.clientWidth;
    imgs.style.height = (imgsh - 200) + "px";
    imgs.style.width = (imgsw - 200 ) + "px";
}