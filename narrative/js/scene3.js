function scene3begin(){
    headToClass.hide();
    trainImage.hide();

    if (myEnergy.energy >= 50) s3text1 = createP("You feel very alert.");
    if (myEnergy.energy < 50) s3text1 = createP("You feel very tired.");
    s3text3 = createP("Suddenly a homeless man walks up to you and asks you for change.");

    s3choice1 = createA("#", "> Give him some change.");
    s3choice2 = createA("#", "> Refuse.");

    s3choice1.position(width/2 - 150, height * 1/2);
    s3choice2.position(width/2 - 150, height * 1/2 + 30);

    s3choice1.mousePressed(goToSchool);
    s3choice2.mousePressed(robbery);
}

function lifeAndDeath(){
    hides3rtext();

    if (myEnergy.energy >= 45) {
        life1 = createP("You tried.");
        life2 = createP("And you survived.");
        myEnergy.decreaseEnergy(20);
        setTimeout(timeForClass, 1000);
        setTimeout(hideLifeText, 5000);
        setTimeout(startScene4, 6000);
    } else if (myEnergy.energy < 45) {
        die1 = createP("You tried.");
        die2 = createP("And you died.");
        die3 = createA("#" , "Start Again?");

        die3.mousePressed(restart);
    }

}

function restart(){
    hideDeathText();
    setup();
}

function hideDeathText(){
    die1.hide();
    die2.hide();
    die3.hide();
}

function hideLifeText(){
    life1.hide();
    life2.hide();
    life4.hide();
}

function leaveTrain(){
    hides3rtext();
    train1 = createP("You give the man your wallet.");
    train2 = createP("He runs away.");
    train3 = createP("The train slows down.");
    train4 = createP("It's your stop.");
    train5 = createP("You walk to lecture.");
    setTimeout(hideLeaveTrain, 4500);
    setTimeout(startScene4, 5000);
}

function hideLeaveTrain(){
    train1.hide();
    train2.hide();
    train3.hide();
    train4.hide();
    train5.hide();
}

function robbery(){
    hides3text();
    s3rtext4 = createP("It turns out he really wants some change.");
    s3rtext5 = createP("He decides to rob you.");
    s3rtext6 = createP("What do you do?");

    s3rchoice1 = createA("#", "> Fight Back.");
    s3rchoice2 = createA("#", "> Give Wallet.");

    s3rchoice1.position(width/2 - 150, height * 1/2);
    s3rchoice2.position(width/2 - 150, height * 1/2 + 30);

    s3rchoice1.mousePressed(lifeAndDeath);
    s3rchoice2.mousePressed(leaveTrain);    
}

function timeForClass(){
    life4 = createP("But there's no time to waste.");
    life5 = createP("It's time for class.");
    life6 = createP("You leave the train and walk to lecture");
    setTimeout(hideTimeForClass, 3000);
}

function hideTimeForClass(){
    life4.hide();
    life5.hide();
    life6.hide();
}

function goToSchool(){
    hides3text();
    leave1 = createP("The man smiles and thanks you.");
    leave2 = createP("He walks away.");
    leave3 = createP("It's your stop.");
    setTimeout(hideLeaveText, 3000);
    setTimeout(startScene4, 3000);
}

function hideLeaveText(){
    leave1.hide();
    leave2.hide();
    leave3.hide();
}

function hides3text(){
    s3text1.hide();
    s3text3.hide();
    s3choice1.hide();
    s3choice2.hide();
}

function hides3rtext(){
    s3rtext4.hide();
    s3rtext5.hide();
    s3rtext6.hide();
    s3rchoice1.hide();
    s3rchoice2.hide();
} 