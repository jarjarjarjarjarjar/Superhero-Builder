var canvas = new fabric.Canvas('Mycanvas');
var height = 1000;
var width = 1000;
var x = 100;
var y = 100;
var player = "";
var block = "";
function player_update() {
    fabric.Image.fromURL("player.png",
        function (Img) {
            player = Img;
            player.scaleToWidth(150);
            player.scaleToHeight(140);
            player.set({
                top: y,
                left: x
            });
            canvas.add(player);
        });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block = Img;

        block.scaleToWidth(width);
        block.scaleToHeight(height);
        block.set({
            top: y,
            left: x
        });
        canvas.add(block);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    if (e.shiftkey == true && keyPressed == '73') {
        height = height + 10
        width = width + 10
    }
    if (e.shiftkey == true && keyPressed == '68') {
        height = height - 10
        width = width - 10
    }
    if (keyPressed == '66' && keyPressed == '83') {
        new_image('spiderman_body.png')
        console.log('b and s')
    }
    if (keyPressed == '66' && keyPressed == '72') {
        new_image('hulk_body.png')
    }
    if (keyPressed == '66' && keyPressed == '73') {
        new_image('ironman_body.png')
    }
    if (keyPressed == '76' && keyPressed == '83') {
        new_image("spiderman_legs.png")
    }
    if (keyPressed == '76' && keyPressed == '72') {
        new_image("hulk_legs.png")
    }
    if (keyPressed == '76' && keyPressed == '73') {
        new_image("ironman_legs.png")
    }
    if (keyPressed == '70' && keyPressed == '83') {
        new_image("spiderman_face.png")
    }
    if (keyPressed == '70' && keyPressed == '72') {
        new_image("hulk_face.png")
    }
    if (keyPressed == '70' && keyPressed == '73') {
        new_image("ironman_face.png")
    }
    if (keyPressed == '70' && keyPressed == '84') {
        new_image("thor_face.png")
    }
    if (keyPressed == '90' && keyPressed == '83') {
        new_image("spiderman_left_hand.png")
    }
    if (keyPressed == '90' && keyPressed == '72') {
        new_image("hulk_left_hand.png")
    }
    if (keyPressed == '90' && keyPressed == '73') {
        new_image("ironman_left_hand.png")
    }
    if (keyPressed == '90' && keyPressed == '84') {
        new_image("thor_left_hand.png")
    }
    if (keyPressed == '89' && keyPressed == '83') {
        new_image("spiderman_right_hand.png")
    }
    if (keyPressed == '89' && keyPressed == '72') {
        new_image("hulk_right_hand.png")
    }
    if (keyPressed == '89' && keyPressed == '73') {
        new_image("ironman_right_hand.png")
    }
    if (keyPressed == '89' && keyPressed == '84') {
        new_image("thor_right_hand.png")
    }
}
function up() {
    if (y >= 0) {
        y = y - block
        canvas.remove(player);
        player_update();
    }
}
function down() {
    if (y <= 500) {
        y = y + height;
        canvas.remove(player); player_update();
    }
}
function left() 
{ 
    if (x > 0) { x = x - width;
        canvas.remove(player); player_update(); 
    } 
}
function right() 
{
     if (x <= 850) { x = x + width;
        canvas.remove(player); player_update(); 
    } 
}

