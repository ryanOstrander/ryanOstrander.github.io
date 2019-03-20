function startSecondScene(){
    computerImage1.hide();
    sleepImage.hide();
    firstChoiceText.hide();
    text1scene2();
}

function text1scene2(){
    s2text1 = createP("It is now " + clock.getTime());
    setTimeout(checkEnergy, 2000);
    setTimeout(scene2, 8000);
}

function classStarts(){
    if (hasSlept) s2text2 = createP("And class starts in 15 minutes.");
    if (!hasSlept) s2text2 = createP("And class starts in 2 hours.");
}

function chooseFood(){
    
}

function checkEnergy(){
    if (myEnergy.energy >= 50) s2text3 = createP("You feel well rested");
    if (myEnergy.energy < 35) s2text3 = createP("You are very tired.");
    setTimeout(classStarts, 2000);
}

function hideS2begin(){
    s2text1.hide();
    s2text2.hide();
    s2text3.hide();
}

function scene2(){
    createP("What should you do?");
}