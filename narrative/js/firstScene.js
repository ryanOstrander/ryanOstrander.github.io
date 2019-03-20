function writeIntroText(){
    intro4 = createP("Welcome, " + nameInput.value());
    intro5 = createP("It is currently " + clock.getTime());
}

function hideBeginning(){
    intro1.hide();
    intro2.hide();
    intro3.hide();
    intro4.hide();
    intro5.hide();
    firstChoice.hide();
    secondChoice.hide();
    computerImage1.hide();
}

function workOnPres(){
    hideBeginning();
    hasSlept = false;
    computerImage1.show();
    myEnergy.decreaseEnergy(15);
    createElement('br');
    createElement('br');
    createElement('br');
    createElement('br');
    firstChoiceText = createP("You chose to keep working");
    clock.incHour(4);
    setTimeout(startSecondScene, 4000);
}

function goToSleep(){
    hideBeginning();
    hasSlept = true;
    sleepImage.show();
    sleepImage.position(width/3, height/4);
    myEnergy.increaseEnergy(35);
    clock.incHour(6);
    createElement('br');
    createElement('br');
    createElement('br');
    createElement('br');
    firstChoiceText = createP("You chose to rest");
    setTimeout(startSecondScene, 4000);
}

function drawOverlapComputer(){
    computerImage2.hide();
    computerImage1.show();
    computerImage1.position(width/3, height/4);
    secondChoice = createA("#", "> Go to bed and rest up before class (+35 energy)");
    firstChoice = createA("#", "> Work on your presentation for tomorrow (-20 energy)");

    firstChoice.position(width/2 - 150, height * 6/8);
    secondChoice.position(width/2 - 150, height * 6/8 + 30);

    firstChoice.mousePressed(workOnPres);
    secondChoice.mousePressed(goToSleep);
}

function drawComputerScreenBackground(){
    computerImage2.show();
    computerImage2.position(width/3, height/4);
    intro3 = createP("Do you...");
}

function writeIntroText2(){
    intro1 = createP("You have successfully pulled another all-nighter");
    intro2 = createP("But there is still more work to be done");
}

function startStory(){
    greeting.hide();
    nameInput.hide();

    setTimeout(writeIntroText, 2000);
    setTimeout(writeIntroText2, 3000);
    setTimeout(drawUI, 3500);
}

function drawUI(){
    background(0);

    gameHasBegun = true;  
    drawComputerScreenBackground();
    myEnergy.drawEnergyBar();
    setTimeout(drawOverlapComputer, 4000); 
}