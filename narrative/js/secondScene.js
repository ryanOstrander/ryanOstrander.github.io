var thirdChoice;
var fourthChoice;
var headToClass;
var coffeeText1;
var coffeeText2;

function startSecondScene(){
    computerImage1.hide();
    sleepImage.hide();
    firstChoiceText.hide();
    text1scene2();
}

function text1scene2(){
    s2text1 = createP("It is now " + clock.getTime());
    setTimeout(checkEnergy, 3000);
}

function classStarts(){
    if (hasSlept) s2text2 = createP("And class starts in 15 minutes.");
    if (!hasSlept) s2text2 = createP("And class starts in 2 hours.");
    setTimeout(scene2, 3000);
}

function checkEnergy(){
    if (myEnergy.energy >= 50) {
        s2text3 = createP("You feel well rested.");
        s2text3a = createP("But you didn't study.");
    }

    if (myEnergy.energy < 35) {
        s2text3 = createP("You are very tired.");
        s2text3a = createP("But at least you studied!");
    }

    setTimeout(classStarts, 3000);
}

function hideS2begin(){
    s2text1.hide();
    s2text2.hide();
    s2text3.hide();
    s2text3a.hide();
    choice.hide();
    thirdChoice.hide();
}

function hideCoffeeText(){
    coffeeText1.hide();
    coffeeText2.hide();
}

function coffee(){
    myEnergy.increaseEnergy(35);
    coffeeImage.show();
    coffeeImage.position(width/3, height/4);
    hideS2begin();
    fourthChoice.hide();

    coffeeText1 = createP("You decide to have coffee.");
    coffeeText2 = createP("For 1 hour.");

    setTimeout(takeTrain, 3500);
    clock.incHour(1);
}

function takeTrain(){
    coffeeImage.hide();
    hideS2begin();
    trainImage.show();

    if (coffeeText1) hideCoffeeText();
    if (fourthChoice) fourthChoice.hide();

    headToClass = createP("You start heading to class");
    trainImage.position(width/3 - 20, height/4);

    setTimeout(scene3begin, 5000);
}

function scene2(){
    
    choice = createP("What should you do?");

    thirdChoice = createA("#", "> Walk to the train and head to class");

    if (hasSlept == false) {
        fourthChoice = createA("#", "> Have a cup of coffee");
        fourthChoice.position(width/2 - 120, height * 1/2);
        fourthChoice.mousePressed(coffee);
    }

    thirdChoice.position(width/2 - 120, height * 1/2 - 25);
    thirdChoice.mousePressed(takeTrain);
}