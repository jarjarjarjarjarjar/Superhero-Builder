const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
Width=0;
Height=0;
player_x=30
player_y=30
Player=""
Block_image=""

function player_update(){
    fabric.Image.fromURL("player.png",
    function (Img) {
        Player = Img;
        Player.scaleToWidth(150);
        Player.scaleToHeight(140);
        Player.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        Block_image = Img;

        Block_image.scaleToWidth(width);
        Block_image.scaleToHeight(height);
        Block_image.set({
            top: player_y,
            left: player_x
        });
        canvas.add(Block_image);
    });
}

