function EnergyBar(energy, x, y, height){
    this.energy = energy;
    this.x = x;
    this.y = y;
    this.height = height;

    this.increaseEnergy = function(inc){
        this.energy += inc;
        this.update();
    }

    this.decreaseEnergy = function(dec){
        this.energy -= dec;
        this.update();
    }  

    this.drawEnergyBar = function(){
        stroke(255);
        fill(color("red"));
        textSize(32);
        text("Energy", x - 90, y - 15);
        fill(0);
        rect(x, y, -60, height);
    }

    this.update = function(){
        let barHeight = (height * (.01 * this.energy));

        if (this.energy <= 20) fill(color("red"));
        if (this.energy > 20 && this.energy <= 60) fill(color("yellow"));
        if (this.energy > 60) fill(color("green"));
        
        rect(x, y + height, -60, -1 * barHeight);
    }

}
