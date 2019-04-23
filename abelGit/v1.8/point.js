//Point Object
function Point(x, y, q){

    this.x = x;
    this.y = y;
    this.q = q;
    this.pixelX;
    this.pixelY;

    var size = 18;

    //log coordinates and quadrant
    this.displayCoords = function() {
        print("Coordinates:");
        print("(" + this.x + ", " + this.y + ")");
        print("Quadrant: " + this.q);
    }

    //updates the position 
    this.update = function(endX, endY){
        if (this.x < endX) {
            this.x += step;
        }
        if (this.y < endY) {
            this.y += step;
        }
        if (this.x > endX) {
            this.x -= step;
        }
        if (this.y > endY) {
            this.y -= step;
        }

        this.pointToPixel();
    }

    /*translates the x and y to pixel coordinates
    to display on the canvas*/
    this.pointToPixel = function() {
        var lineNum;

        if (this.q == 1) lineNum = topRightScale;
        if (this.q == 2) lineNum = topLeftScale;
        if (this.q == 3) lineNum = bottomLeftScale;
        if (this.q == 4) lineNum = bottomRightScale;

        var startX;
        var startY;
        var scaleX = (498/2)/lineNum;
        var scaleY = (372/2)/lineNum;

        //translates quadrant into correct quadrant of pixels to be plotted
        if (this.q == 1) {
            startX = (498*3)/2 + (this.x * scaleX);
            startY = 372/2 - (this.y * scaleY);
        } else if (this.q == 2) {
            startX = 498/2 + (this.x * scaleX);
            startY = 372/2 - (this.y * scaleY);
        } else if (this.q == 3) {
            startX = 498/2 + (this.x * scaleX);
            startY = (372/2)*3 - (this.y * scaleY);
        } else if (this.q == 4) {
            startX = (498*3)/2 + (this.x * scaleX);
            startY = (372/2)*3 - (this.y * scaleY);
        } 

        this.pixelX = startX;
        this.pixelY = startY;
        
        return;
    }

    //translates the points to pixel coordinates and plots point
    this.pointToPixel();

    //calls pointToPixel (function wrapper)
    this.plotPoint = function(varText){

        if (fits(this.q, this.pixelX, this.pixelY)) {
            //create a circle on the graph
            stroke(255);
            fill(color("purple"));
            ellipse(this.pixelX, this.pixelY, size, size);
            noStroke();
            fill(255);
            text(varText, this.pixelX + 15, this.pixelY - 15);
        }

    }

    this.plotOriginal = function(varText){
        if (fits(this.q, this.pixelX, this.pixelY)) {
            //create a circle on the graph
            stroke(255);
            fill(0, 3);
            ellipse(this.pixelX, this.pixelY, size + 2, size + 2);
            text(varText, this.pixelX + 15, this.pixelY - 15);
        }
    }

    this.pixelToPoint = function(){
        var newX;
        var newY;
        var lineNum;
        var startX = this.pixelX;
        var startY = this.pixelY;

        if (this.q == 1) lineNum = topRightScale;
        if (this.q == 2) lineNum = topLeftScale;
        if (this.q == 3) lineNum = bottomLeftScale;
        if (this.q == 4) lineNum = bottomRightScale;

        var scaleX = (498/2)/lineNum;
        var scaleY = (372/2)/lineNum;
        
        if (this.q == 1) {
            newX = (startX - ((498*3)/2))/scaleX;
            newY = (startY - (372/2))/scaleY * -1;
        } else if (this.q == 2) {
            newX = (startX - (498/2))/scaleX;
            newY = (startY - (372/2))/scaleY * -1;
        } else if (this.q == 3) {
            newX = (startX - (498/2))/scaleX;
            newY = (startY - (372/2) * 3)/scaleY * -1;
        } else if (this.q == 4) {
            newX = (startX - (498/2) * 3)/scaleX;
            newY = (startY - (372/2) * 3)/scaleY * -1;
        }
        
        this.x = newX;
        this.y = newY;

        return;
    }

    function fits(q, pixelX, pixelY){
        var screen = q;
        var x1Bound;
        var y1Bound;
        var x2Bound;
        var y2Bound;
    
        if (screen == 1) {
            x1Bound = 500;
            y1Bound = 0;
            x2Bound = 1000;
            y2Bound = 375; 
        }
    
        if (screen == 2) {
            x1Bound = 0;
            y1Bound = 0;
            x2Bound = 500;
            y2Bound = 375; 
        }
    
        if (screen == 3) {
            x1Bound = 0;
            y1Bound = 375;
            x2Bound = 500;
            y2Bound = 750; 
        }
    
        if (screen == 4) {
            x1Bound = 500;
            y1Bound = 375;
            x2Bound = 1000;
            y2Bound = 750;  
        }

        if (pixelX < x2Bound && pixelX > x1Bound && pixelY < y2Bound && pixelY > y1Bound) {
            return true;
        } else {
            return false;
        }
    }

}