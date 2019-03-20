function startScene4(){
    clock.incHour(1);

    s4text1 = createP("You make it to lecture.");

    if (clock.getHour() > 10) {
        s4text2 = createP("The Test has already begun.");
    }
    if (clock.getHour() <= 10) {
        s4text2 = createP("You arrive right on time.");
    }

    s4text3 = createA("#", "Start Test");
    s4text3.mousePressed(hideStartText);
}

function hideStartText(){
    s4text1.hide();
    s4text2.hide();
    s4text3.hide();
    clock.incHour(1);
    askQuestionOne();
}

function hideQ1(){
    que1texta.hide();
    que1text1.hide();
    que1text2.hide();
    clock.incHour(1);
    askQuestionTwo();
}

function hideQ2(){
    que1textb.hide();
    que1text3.hide();
    que1text4.hide();
    clock.incHour(1);
    askQuestionThree();
}

function hideQ3(){
    que1textc.hide();
    que1text5.hide();
    que1text6.hide();
    endTest();
}

function question1delay(){
    que1texta = createP("True or False?");
}

function question1delay2(){
    que1text1 = createA("#", " True   /");
    que1text2 = createA("#", "   False ");

    que1text1.mousePressed(hideQ1);
    que1text2.mousePressed(hideQ1);
}

function askQuestionOne(){
    setTimeout(question1delay, 2000);
    setTimeout(question1delay2, 4000);
}

function question2delay(){
    que1textb = createP("Yes or No?");
}

function question2delay2(){
    que1text3 = createA("#", " Yes   /");
    que1text4 = createA("#", "   No ");

    que1text3.mousePressed(hideQ2);
    que1text4.mousePressed(hideQ2);
}

function askQuestionTwo(){
    setTimeout(question2delay, 2000);
    setTimeout(question2delay2, 4000);
}

function question3delay(){
    que1textc = createP("Does this matter?");
}

function question3delay2(){
    que1text5 = createA("#", " It does   /");
    que1text6 = createA("#", "   It doesn't ");

    que1text5.mousePressed(hideQ3);
    que1text6.mousePressed(hideQ3);
}

function askQuestionThree(){
    setTimeout(question3delay, 2000);
    setTimeout(question3delay2, 4000);
}

function endTest(){
    if (myEnergy.energy > 40 && didStudy) endText1 = createP("You did Well.");
    if (myEnergy.energy <= 40 && didStudy) endText1 = createP("You did Okay.");
    if (myEnergy.energy >= 60 && !didStudy) endText1 = createP("You did Alright.");
    if (myEnergy.energy < 60 && !didStudy) endText1 = createP("You Failed.");
    endText2 = createP("Now you get to go home and do this all again.");
    endText3 = createP("Wouldn't you like to?");
    endText4 = createA("#", "Yes   /");
    endText5 = createA("#", "    No");

    endText4.mousePressed(endYes);
    endText5.mousePressed(endNo);
}

function endYes(){
    hideEnd();
    setup();
}

function endNo(){
    hideEnd();
    createP("Error.");
}

function hideEnd(){
    endText1.hide();
    endText2.hide();
    endText3.hide();
    endText4.hide();
    endText5.hide();
}