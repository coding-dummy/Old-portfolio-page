class Frogger {
    constructor(froggerX, froggerY, froggerWidth, froggerHeight, speedX, speedY){
        this.x = froggerX;
        this.y = froggerY;
        this.width = froggerWidth;
        this.height = froggerHeight;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    moveUp(){
        this.y = this.y - this.speedY;
    }
    moveDown(){
        this.y = this.y + this.speedY;
    }
    moveLeft(){
        this.x = this.x - this.speedX;
    }
    moveRight(){
        this.x = this.x + this.speedX;
    }
    update(){

    }
    draw(){
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height, 50, 50);
        context.fillStyle = "green";
        context.fill();
    }
}

class car {
    constructor(carX, carY, carWidth, carHeight, carSpeed) {
        this.x = carX;
        this.y = carY;
        this.width = carWidth;
        this.height = carHeight;
        this.speed = carSpeed;
    }
    draw(){
        context.fillStyle = "purple";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    update(){
        this.x += this.speed * gameSpeed;
        if(this.speed > 0){
            if(this.x > canvas.width + this.width){
            this.x = 0 - this.width;
            }
        }
        else{
            if(this.x < 0 - this.width){
                this.x = canvas.width + this.width;
            }
        }
    }
}



class turtle {
    constructor(turtleX, turtleY, turtleWidth, turtleHeight, turtleSpeed) {
        this.x = turtleX;
        this.y = turtleY;
        this.width = turtleWidth;
        this.height = turtleHeight;
        this.speed = turtleSpeed;
    }
    draw(){
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    update(){
        this.x += this.speed * gameSpeed;
        if(this.speed > 0){
            if(this.x > canvas.width + this.width){
            this.x = 0 - this.width;
            }
        }
        else{
            if(this.x < 0 - this.width){
                this.x = canvas.width + this.width;
            }
        }
    }
}

class log {
    constructor(logX, logY, logWidth, logHeight, logSpeed) {
        this.x = logX;
        this.y = logY;
        this.width = logWidth;
        this.height = logHeight;
        this.speed = logSpeed;
    }
    draw(){
        context.fillStyle = "brown";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    update(){
        this.x += this.speed * gameSpeed;
        if(this.speed > 0){
            if(this.x > canvas.width + this.width){
            this.x = 0 - this.width;
            }
        }
        else{
            if(this.x < 0 - this.width){
                this.x = canvas.width + this.width;
            }
        }
    }
}

function entityRows(){
    //2nd row 
    for (let i = 0; i < 3; i++){
        let entityState = i * 200
        entityArray.push(new car(entityState, canvas.height - 49*2, 50*1, 40, -1)); 
    }

    //3rd row
    for (let i = 0; i < 1; i++){
        let entityState = i * 400
        entityArray.push(new car(entityState, canvas.height - 49*3, 50*4, 40, 2));  
    }

    //4th row
    for (let i = 0; i < 2; i++){
        let entityState = i * 400
        entityArray.push(new car(entityState, canvas.height - 49*4, 50*3, 40, -2));  
    }

    //5th row 
    for (let i = 0; i < 1; i++){
        let entityState = i * 300
        entityArray.push(new car(entityState, canvas.height - 49*5, 50*1, 40, 2));
    }

    //6th row 
    for (let i = 0; i < 1; i++){
        let entityState = i * 200
        entityArray.push(new car(entityState, canvas.height - 49*6, 50*3, 40, -3.5));
    }

    //8th row
    for (let i = 0; i < 3; i++){
        let entityState = i * 60
        entityArray.push(new turtle(entityState, canvas.height - 50*8, 50*1, 50, -3));
    }

    //9th row 
    for (let i = 0; i < 2; i++){
        let entityState = i * 400
        entityArray.push(new log(entityState, canvas.height - 50*9, 150*1, 50, 1));
    }

    //10th row 
    for (let i = 0; i < 2; i++){
        let entityState = i * 400
        entityArray.push(new log(entityState, canvas.height - 50*10, 200*1, 50, 2.1));
    }

    //11th row 
    for (let i = 0; i < 2; i++){
        let entityState = i * 60
        entityArray.push(new turtle(entityState, canvas.height - 50*11, 50*1, 50, -2.5));
    }

    //12th row
    for (let i = 0; i < 3; i++){
        let entityState = i * 300
        entityArray.push(new log(entityState, canvas.height - 50*12, 180*1, 50, 1.8));
    }
}

entityRows();

function entitySetup() {
    for (let i = 0; i < entityArray.length; i++) {
        entityArray[i].update();
        entityArray[i].draw();
    }
}

const frogger = new Frogger(300, 600, 50, 50, 50, 50)

function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    frogger.update();
    frogger.draw();
    entitySetup();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);

//Movement with wasd keys
window.addEventListener('keydown', function(event){
    switch(event.keyCode){
        case 87:
            frogger.moveUp();
            break;
        case 65: 
            frogger.moveLeft();
            break;
        case 83: 
            frogger.moveDown();
            break;
        case 68:
            frogger.moveRight();
            break;
    }
});

//Movement with arrow keys
window.addEventListener('keydown', function(event){
    switch(event.keyCode){
        case 38:
            frogger.moveUp();
            break;
        case 37: 
            frogger.moveLeft();
            break;
        case 40: 
            frogger.moveDown();
            break;
        case 39:
            frogger.moveRight();
            break;
    }
});