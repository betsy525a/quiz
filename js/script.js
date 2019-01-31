/* global $ */

$(document).ready(function() {
    
    
    $("#endResult").hide();
    var williams = 0;
    var quinones = 0;
    var tancreto = 0;
    var lewis = 0;
    var mobley = 0;
    var betancourt = 0;
    var carmona = 0;
    var msRivera = 0;
    var echChaouy = 0;
    var hershinson = 0;
    var mrRivera = 0;
    var cohen = 0;
    var biggestNumber = 0;
    var teacherScore = "";    
    
    $("button").click(function() {
        var q1Result = $("input[name='question1']:checked").val();
        var q2Result = $("input[name='question2']:checked").val();
        var q3Result = $("input[name='question3']:checked").val();
        var q4Result = $("input[name='question4']:checked").val();
        var q5Result = $("input[name='question5']:checked").val();
        var q6Result = $("input[name='question6']:checked").val();
        var q7Result = $("input[name='question7']:checked").val();
        var q8Result = $("input[name='question8']:checked").val();
        var q9Result = $("input[name='question9']:checked").val();
        var q10Result = $("input[name='question10']:checked").val();
        var q11Result = $("input[name='question11']:checked").val();
        var q12Result = $("input[name='question12']:checked").val();
        var q13Result = $("input[name='question13']:checked").val();
        var q14Result = $("input[name='question14']:checked").val();
        var q15Result = $("input[name='question15']:checked").val();
        
        question1(q1Result);
        question2(q2Result);
        question3(q3Result);
        question4(q4Result);
        question5(q5Result);
        question6(q6Result);
        question7(q7Result);
        question8(q8Result);
        question9(q9Result);
        question10(q10Result);
        question11(q11Result);
        question12(q12Result);
        question13(q13Result);
        question14(q14Result);
        question15(q15Result);
        
        $("#test").append("<p>The score for Williams is " + williams + "</p>");
        $("#test").append("<p>The score for Quinones is " + quinones + "</p>");
        $("#test").append("<p>The score for Tancreto is " + tancreto + "</p>");
        $("#test").append("<p>The score for Lewis is " + lewis + "</p>");
        $("#test").append("<p>The score for Mobley is " + mobley + "</p>");
        $("#test").append("<p>The score for Betancourt is " + betancourt + "</p>");
        $("#test").append("<p>The score for Carmona is " + carmona + "</p>");
        $("#test").append("<p>The score for Ms. Rivera is " + msRivera + "</p>");
        $("#test").append("<p>The score for EchChaouy is " + echChaouy + "</p>");
        $("#test").append("<p>The score for Hershinson is " + hershinson + "</p>");
        $("#test").append("<p>The score for Mr. Rivera is " + mrRivera + "</p>");
        $("#test").append("<p>The score for Cohen is " + cohen + "</p>");
        
        var teacherArray = [williams, quinones, tancreto, lewis, betancourt, mobley, carmona, msRivera, echChaouy, hershinson, mrRivera, cohen];
        var teacherNames = ["Ms. Williams", "Mr. Quinones", "Mrs. Tancreto", "Mrs. Lewis-Lane", "Ms. Betancourt", "Ms. Mobley", "Ms. Carmona", "Ms. Rivera", "Mr. EchChaouy", "Mrs. Hershinson", "Mr. Rivera", "Ms. Cohen"];
        
        biggestNumber = biggestValue(teacherArray);
        
        teacherScore = whichTeacher(biggestNumber, teacherArray, teacherNames);
        
        $("#test").append("<p>You are most similar to " + teacherScore + " with a score of " + biggestNumber + ".</p>");
        
        $(".questions").hide();
        $(".result").hide();
        $("#endResult").show();
        
    });
    
    $("#again").click(function() {
        $("#test").text("");
        williams = 0;
        quinones = 0;
        tancreto = 0;
        lewis = 0;
        mobley = 0;
        betancourt = 0;
        carmona = 0;
        msRivera = 0;
        echChaouy = 0;
        hershinson = 0;
        mrRivera = 0;
        cohen = 0;
        biggestNumber = 0;
        teacherScore = "";
        
        $('input[name=question1]').attr('checked',false);
        $('input[name=question2]').attr('checked',false);
        $('input[name=question3]').attr('checked',false);
        $('input[name=question4]').attr('checked',false);
        $('input[name=question5]').attr('checked',false);
        $('input[name=question6]').attr('checked',false);
        $('input[name=question7]').attr('checked',false);
        $('input[name=question8]').attr('checked',false);
        $('input[name=question9]').attr('checked',false);
        $('input[name=question10]').attr('checked',false);
        $('input[name=question11]').attr('checked',false);
        $('input[name=question12]').attr('checked',false);
        $('input[name=question13]').attr('checked',false);
        $('input[name=question14]').attr('checked',false);
        $('input[name=question15]').attr('checked',false);
        
        $(".questions").show();
        $(".result").show();
        $("#endResult").hide();
    });
    
    function question1(userPick) {
        if(userPick === "QU & CA & MrR"){
            quinones = quinones + 1;
            carmona = carmona + 1;
            mrRivera = mrRivera + 1;
        }
        else if(userPick === "TA & BE & CO"){
            tancreto = tancreto + 1;
            betancourt = betancourt + 1;
            cohen = cohen + 1;
        }
        else {
            tallyUp1(userPick);
        }
    }
    
    function question2(userPick) {
        if(userPick === "MsR & EC & CO"){
            msRivera = msRivera + 1;
            echChaouy = echChaouy + 1;
            cohen = cohen + 1;
        }
        else {
            tallyUp1(userPick);
        }
    }
    
    function question3(userPick) {
        if(userPick === "WI & LE & MsR & CO"){
            williams = williams + 1;
            lewis = lewis + 1;
            msRivera = msRivera + 1;
            cohen = cohen + 1;
        }
        else if(userPick === "QU & TA & BE"){
            quinones = quinones + 1;
            tancreto = tancreto + 1;
            betancourt = betancourt + 1;
        }
        else{
            tallyUp1(userPick);
        }
    }
    
    function question4(userPick) {
        if(userPick === "QU & HE & LE"){
            quinones = quinones + 1;
            hershinson = hershinson + 2;
            lewis = lewis + 1;
        }
        else if(userPick === "LE & CA & MsR"){
            lewis = lewis + 1;
            carmona = carmona + 2;
            msRivera = msRivera + 1;
        }
        else if(userPick === "MO & BE"){
            mobley = mobley + 1;
            betancourt = betancourt + 1;
        }
        else if(userPick === "EC & CO"){
            echChaouy = echChaouy + 2;
            cohen = cohen + 2;
        }
        else {
            tallyUp2(userPick);
        }
    }
    
    function question5(userPick) {
        if(userPick === "WI & BE"){
            williams = williams + 1;
            betancourt = betancourt + 1;
        }
        else if(userPick === "LE & EC & MrR"){
            lewis = lewis + 1;
            echChaouy = echChaouy + 2;
            mrRivera = mrRivera + 1;
        }
        else if(userPick === "BE & CO"){
            cohen = cohen + 2;
            betancourt = betancourt + 1;
        }
        else if(userPick === "BE & HE & CO"){
            betancourt = betancourt + 1;
            hershinson = hershinson + 1;
            cohen = cohen + 1;
        }
        else if(userPick === "MrR & HE"){
            mrRivera = mrRivera + 1;
            hershinson = hershinson + 1;
        }
        else {
            tallyUp2(userPick);
        }
    }
    
    function question6(userPick) {
        if(userPick === "QU & MrR"){
            quinones = quinones + 1;
            mrRivera = mrRivera + 1;
        }
        else if(userPick === "CA & EC & HE"){
            carmona = carmona + 1;
            echChaouy = echChaouy + 1;
            hershinson = hershinson + 1;
        }
        else if(userPick === "WI & TA & MO & BE & MsR"){
            mobley = mobley + 1;
            betancourt = betancourt + 1;
            williams = williams + 1;
            tancreto = tancreto + 1;
            msRivera = msRivera + 1;
        }
        else {
            tallyUp1(userPick);
        }
    }
    
    function question7(userPick) {
        if(userPick === "MO & CA & CO"){
            mobley = mobley + 1;
            carmona = carmona + 1;
            cohen = cohen + 1;
        }
        else if(userPick === "TA & BE"){
            tancreto = tancreto + 1;
            betancourt = betancourt + 1;
        }
        else if(userPick === "WI & MsR & MrR"){
            williams = williams + 1;
            msRivera = msRivera + 1;
            mrRivera = mrRivera + 1;
        }
        else {
        tallyUp1(userPick);
        }
    }
    
    function question8(userPick) {
        if(userPick === "WI & BE"){
            williams = williams + 1;
            betancourt = betancourt + 1;
        }
        else if(userPick === "TA & MrR"){
            mrRivera = mrRivera + 1;
            tancreto = tancreto + 1;
        }
        else if(userPick === "EC & HE"){
            echChaouy = echChaouy + 1;
            hershinson = hershinson + 1;
        }
        else {
            tallyUp1(userPick);
        }
    }
    
    function question9(userPick) {
        if(userPick === "MsR & HE"){
            msRivera = msRivera + 1;
            hershinson = hershinson + 1;
        }
        else if(userPick === "MO & BE"){
            mobley = mobley + 1;
            betancourt = betancourt + 1;
        }
        else if(userPick === "CA & BE"){
            carmona = carmona + 1;
            betancourt = betancourt + 1;
        }
        else {
            tallyUp1(userPick);
        }
    }
    
    function question10(userPick) {
        tallyUp2(userPick);
    }
    
    function question11(userPick) {
        tallyUp2(userPick);
    }
    
    function question12(userPick) {
        if(userPick === "EC & CO"){
            echChaouy = echChaouy + 1;
            cohen = cohen + 1;
        }
        else {
            tallyUp1(userPick);
        }
    }
    
    function question13(userPick) {
        tallyUp2(userPick);
    }
    
    function question14(userPick) {
        if(userPick === "MO & CO"){
            mobley = mobley + 1;
            cohen = cohen + 1;
        }
        else if(userPick === "WI & BE"){
            williams = williams + 1;
            betancourt = betancourt + 1;
        }
        else if(userPick === "LE & BE & MsR"){
            lewis = lewis + 1;
            betancourt = betancourt + 1;
            msRivera = msRivera + 1;
        }
        else {
            tallyUp1(userPick);
        }
    }
    
    function question15(userPick) {
        if(userPick === "WI & HE"){
            williams = williams + 1;
            hershinson = hershinson + 1;
        }
        else if(userPick === "QU & CO"){
            quinones = quinones + 1;
            cohen = cohen + 1;
        }
        else {
            tallyUp1(userPick);
        }
    }
    
    
    function tallyUp1(userChoice) {
        if(userChoice === "WI") {
            williams = williams + 1;
        }
        else if(userChoice === "QU") {
            quinones = quinones + 1;
        }
        else if(userChoice === "TA") {
            tancreto = tancreto + 1;
        }
        else if(userChoice === "LE") {
            lewis = lewis + 1;
        }
        else if(userChoice === "BE") {
            betancourt = betancourt + 1;
        }
        else if(userChoice === "MO") {
            mobley = mobley + 1;
        }
        else if(userChoice === "CA") {
            carmona = carmona + 1;
        }
        else if(userChoice === "MsR") {
            msRivera = msRivera + 1;
        }
        else if(userChoice === "EC") {
            echChaouy = echChaouy + 1;
        }
        else if(userChoice === "HE") {
            hershinson = hershinson + 1;
        }
        else if(userChoice === "MrR") {
            mrRivera = mrRivera + 1;
        }
        else if(userChoice === "CO") {
            cohen = cohen + 1;
        }
    }
    
    function tallyUp2(userChoice) {
        if(userChoice === "WI") {
            williams = williams + 2;
        }
        else if(userChoice === "QU") {
            quinones = quinones + 2;
        }
        else if(userChoice === "TA") {
            tancreto = tancreto + 2;
        }
        else if(userChoice === "LE") {
            lewis = lewis + 2;
        }
        else if(userChoice === "BE") {
            betancourt = betancourt + 2;
        }
        else if(userChoice === "MO") {
            mobley = mobley + 2;
        }
        else if(userChoice === "CA") {
            carmona = carmona + 2;
        }
        else if(userChoice === "MsR") {
            msRivera = msRivera + 2;
        }
        else if(userChoice === "EC") {
            echChaouy = echChaouy + 2;
        }
        else if(userChoice === "HE") {
            hershinson = hershinson + 2;
        }
        else if(userChoice === "MrR") {
            mrRivera = mrRivera + 2;
        }
        else if(userChoice === "CO") {
            cohen = cohen + 2;
        }
    }
    
    function biggestValue(array) {
        var biggestNumber = -1;
        array.forEach(function(teacher) {
            if (teacher > biggestNumber) {
                biggestNumber = teacher;
            }
        });
        return biggestNumber;
    }
    
    function whichTeacher(biggestNumber, variables, teacherNamesArray) {
        var teacherResult = "";
        var count = 0;
        variables.forEach(function(name) {
            if (name === biggestNumber) {
                teacherResult = teacherResult + teacherNamesArray[count] + " ";
            }
            count++;
        });
        return teacherResult;
    }
});

/*
Answers

Williams: WI
Pink
No workouts
Math
Threaten Them
Go get lunch, move car
4th floor bathroom
6 hours
4pm
Italian
whatever on the radio
Willy Wonka and the chocolate factory
Kara Danvers aka Supergirl
My bed
Teleport
A house

Q: QU
Blue
No workouts but gym membership
English
Fail them
Deal with seniors
Basement Bathroom
3 hours of sleep
3:34 but try to leave as soon as possible
Eggplant Parmigiana
90's Rap or 90's alternative rock
Pulp fiction
Seth Rogen
A boat
Control Metal
Put half a million towards his kids education

Tancreto: TA
Purple
When I'm not pregnant
English
Laugh or talk to them in a not so nice way to make them aware
I don't have any
4th floor
6-7 hours
5pm
Chicken Wings

Lewis: LE
Hot pink
no workout *Laughs histerically*
Math
Yell and call home and fail
Listen to music and plan for class
2nd floor and lock the door behind me
Not enough - 5 to 6 hours on weekdays
2:30 or 4:35 - 5pm depending on the day
Mom's cooking
Christian classical, reg, hip
Brown Sugar
Beyonce, Michelle Obama
A phone to call my husband so he can get me out of there
Invisibility
Plane tickets

Mobley: MO
No color
often
Chemistry
Help them during office hours // no extra credit
deal with other people's problems
4th bathroom
5 hours of sleep
6:30pm
Seafood
Rap
300
Taraji P. Henson
A male and female cow
Flying
Buy mom a house

Betancourt: BE
Purple
Workout 6 days a week
ELA
No extra credit / get upset
Grade, workout, eat, go to the store
4th floor
not enough 6-7
Usually 3:30-4pm
hispanic food, seafood, sushi, avocado
upbeat music
Remember the Titans, Good Will Hunting, Friday Night Lights, Freedom Writers, Armageddon, Zero Dark Thirty, Clueless, A league of their own, My best friend's wedding
Elektra Natchios, Jessica Jones, Lorelei Gilmore, Lyla Garrity, Julia Roberts, Rachel McAdams, Maggie Gyllenhaal, Emmanuel Chriqui, Ashley Tisdale, Jennifer Lopez, Jennifer Anniston
Cellphone with service, My dog
Teleportation, Invisibility
Student Loans, book a really fun trip around the world

Carmona: CA
Blue
3 times a week
Spanish
Call home
Look up more assignments and projects for students
3rd floor
5 hours
6pm
spanish food
spanish/cheerful/groovy
scarface
cookie from empire
phone
to be able to change people's way of thinking or mind control
Give 10% to church and then buy a huge house for orphans

Rivera: MsR
Red 
Every day
Math
Talk to students first and then call home
Work
4th floor
6 hours
4:30
Pizza
Top 40 pop
Dead poet society
Daffy Duck
Matches
Invisibility
Invest money into a retirement plan

EchChaouy: EC
Green
Everyday
Global
Try to help them
Prepare
3rd floor
7 hours
2:35pm
Couscous
Moroccan
Casablanca
Nobody
Fishing rod
See the future
Give it away to charity

Hershinson: HE
Turquoise
Not that often - 1 time a week
History
Fail them
Grade things and deal with students
3rd floor bathroom
6.5 hours
2:35pm
Pizza
EDM
Hackers
Young Jessica Biel
A satellite phone
Time travel
A house

Rivera: MrR
Blue
Try to
Science
Find out why they fail and fix it
Prepare for class and meet with students
Basement
6 hours
Average 5pm
Rice, beans, and chicken
Alternative rock
The Godfather
Brad Pitt
iPad with cellular data
Superman's powers
Down payment on a house

Cohen: CO
Purple
Everday
Math
Try to help them pass
Workout or grade papers
RiseBoro side
5 hours
6:15pm
Thai food
Everything except for country music
The Shawshank Redemption
Nobody
Toothbrush
Flying
Kids College
*/