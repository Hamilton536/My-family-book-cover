var names = ["victor igunwe" , "iyobosa igunwe" , "ogoghosa igunwe" , "osahon igunwe"];
var images = ["https://icon2.cleanpng.com/20180201/yjw/kisspng-brian-griffin-peter-griffin-glenn-quagmire-family-family-guy-png-photos-5a72cdc5b303d1.8943806015174732217333.jpg" , "https://www.pngitem.com/pimgs/m/157-1576261_free-png-chef-mothers-day-transparent-mom-clip.png" , "https://library.kissclipart.com/20181212/fvw/kissclipart-daughter-dibujo-clipart-girl-drawing-daughter-c976a3512a142b3a.jpg" , "https://www.pinclipart.com/picdir/middle/563-5639230_png-clip-art-son-images-clip-art-transparent.png"];
var i=0;
function next_member(){
        document.getElementById("photo").src=images[i];
        document.getElementById("Name_Display").innerHTML=names[i];
        i++;
        if (i == 4){
            1 = 0;
        }