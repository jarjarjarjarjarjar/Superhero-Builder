var canvas = new fabric.Canvas('MyCanvas');
Width=20;
Height=20;
player_x=30
player_y=30
var Player=""
var Block_image=""

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
        canvas.add(Player);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        Block_image = Img;

        Block_image.scaleToWidth(Width);
        Block_image.scaleToHeight(Height);
        Block_image.set({
            top: player_y,
            left: player_x
        });
        canvas.add(Block_image);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftkey == true && keyPressed == '90') {
        console.log("z and shift pressed together")
        Width = Width + 10;
        Height = Height + 10;
        document.getElementById("current_width").innerHTML = Width
        document.getElementById("current_height").innerHTML = Height
    }
    if (e.shiftkey && keyPressed == '77') {
        console.log("m and shift pressed together")
        Width = Width - 10;
        Height = Height - 10;
        document.getElementById("current_width").innerHTML = Width
        document.getElementById("current_height").innerHTML = Height
    }

    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    
    if(keyPressed=='70')
    {
        new_image('ironman_body.png');
        console.log("f");
    }
    if(keyPressed=='83')
    {
        new_image('spiderman_face.png');
        console.log("s");
    }
    if(keyPressed=='84')
    {
        new_image('thor_left_hand.png');
        console.log("t");
    }
    if(keyPressed=='76')
    {
        new_image('hulk_legs.png');
        console.log("l");
    }
    if(keyPressed=='72')
    {
        new_image('thor_right_hand.png');
        console.log("h");
    }
}
function up() {
    if (player_y >= 0) {
        player_y = player_y - Height; console.log("block image height = " + Height);
        console.log("When Up arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(Player);
        player_update();
    }
}
function down() {
    if (player_y <= 500) {
        player_y = player_y + Height;
        console.log("block image height = " + Height);
        console.log("When Down arrow key is pressed, X = " + player_x + " , Y = " + player_y);
        canvas.remove(Player); player_update();
    }
}
function left() { if (player_x > 0) { player_x = player_x - Width; console.log("block image width = " + Width); console.log("When Left arrow key is pressed, X = " + player_x + " , Y = " + player_y); canvas.remove(Player); player_update(); } }
function right() { if (player_x <= 850) { player_x = player_x + Width; console.log("block image width = " + Width); console.log("When Right arrow key is pressed, X = " + player_x + " , Y = " + player_y); canvas.remove(Player); player_update(); } }


