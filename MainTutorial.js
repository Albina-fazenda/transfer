var PageCounter =1;
var VideoContainer = document.getElementById("video-info");
var btn = document.getElementById("btn");
var i = 0;
btn.addEventListener("click", function(){
   
    var OurRequest = new XMLHttpRequest();
    OurRequest.open('GET', 'https://raw.githubusercontent.com/Albina-fazenda/repo2/master/link-' + PageCounter +'.json');
    OurRequest.onload = function() {
    var OurData = JSON.parse(OurRequest.responseText);
    renderHTML(OurData);
    };
    OurRequest.send();
    PageCounter++;

 
});



function renderHTML(data) {

var htmlString = '<a href="' + data[i].video +'"> <img src="' + data[i].tumb + '" style="width:640px;height:360px;border:0;"></a>';



//var htmlString = '<h1>' + data[0].video +'</h1>';  


VideoContainer.insertAdjacentHTML('beforeend', htmlString);


console.log(htmlString);
}
