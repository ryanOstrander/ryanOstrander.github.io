function Clock(){
    var hour = 4;
    var amPm = "am";
    var clockText;

    this.displayTime = function(){
        stroke(255);
        fill(255);
        clockText = text(hour + ":" + "00" + amPm, width - 155, height - 25);
    }

    this.changeAmPm = function(){
        if (amPm == "am") amPm = "pm";
        else if (amPm == "pm") amPm = "am";
    }

    this.incHour = function(inc){
        hour += inc;

        if (hour > 12) hour = 1;
        if (hour == 12) this.changeAmPm();

        this.displayTime();
    }

    this.decHour = function(dec){
        hour -= dec;
    }

    this.getHour = function(){
        return hour;
    }

    this.getAmPm = function(){
        return amPm;
    }

    this.getTime = function(){
        return (hour + ":00" + amPm);
    }


}