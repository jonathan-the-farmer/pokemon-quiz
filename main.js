//pokemon quiz

document.getElementById("button").addEventListener("click", btnClicked);



function btnClicked() {

    let q1 = document.getElementById("q-1").value.toLowerCase();
    let q2 = document.getElementById("q-2").value.toLowerCase();
    let q3 = document.getElementById("q-3").value.toLowerCase();
    let q4 = document.getElementById("q-4").value.toLowerCase();
    let q5 = document.getElementById("q-5").value.toLowerCase();
    let q6 = document.getElementById("q-6").value.toLowerCase();
    let q7 = document.getElementById("q-7").value.toLowerCase();
    let q8 = document.getElementById("q-8").value.toLowerCase();
    let q9 = document.getElementById("q-9").value.toLowerCase();
    let score = 0

    if (q1 === "squirtle") {
        document.getElementById("correct-incorrect-1").style.color = "green";
        document.getElementById("q-1").style.borderBlockColor = "green";
        document.getElementById("correct-incorrect-1").innerHTML = `
        CORRECT!
        `;
        score++;
    } else {
        document.getElementById("correct-incorrect-1").style.color = "red";
        document.getElementById("q-1").style.borderBlockColor = "red";
        document.getElementById("correct-incorrect-1").innerHTML = `
        Incorrect
        `; 
        
    }

    if (q2 == "metapod") {
        document.getElementById("correct-incorrect-2").style.color = "green";
        document.getElementById("q-2").style.borderBlockColor = "green";
        document.getElementById("correct-incorrect-2").innerHTML = `
        CORRECT!
        `;
        score++;
    } else {
        document.getElementById("correct-incorrect-2").style.color = "red";
        document.getElementById("q-2").style.borderBlockColor = "red";
        document.getElementById("correct-incorrect-2").innerHTML = `
        Incorrect
        `; 
    }

    if (q3 == "wigglytuff") {
        document.getElementById("correct-incorrect-3").style.color = "green";
        document.getElementById("q-3").style.borderBlockColor = "green";
        document.getElementById("correct-incorrect-3").innerHTML = `
        CORRECT!
        `;
        score++;
    } else {
        document.getElementById("correct-incorrect-3").style.color = "red";
        document.getElementById("q-3").style.borderBlockColor = "red";
        document.getElementById("correct-incorrect-3").innerHTML = `
        Incorrect
        `; 
    }

    if (q4 == "rapidash") {
        document.getElementById("correct-incorrect-4").style.color = "green";
        document.getElementById("q-4").style.borderBlockColor = "green";
        document.getElementById("correct-incorrect-4").innerHTML = `
        CORRECT!
        `;
        score++;
     } else {
        document.getElementById("correct-incorrect-4").style.color = "red";
        document.getElementById("q-4").style.borderBlockColor = "red";
        document.getElementById("correct-incorrect-4").innerHTML = `
        Incorrect
        `; 
    }
    
    if (q5 == "weepinbell") {
        document.getElementById("correct-incorrect-5").style.color = "green";
        document.getElementById("q-5").style.borderBlockColor = "green";
        document.getElementById("correct-incorrect-5").innerHTML = `
        CORRECT!
        `;
        score++;
    } else {
        document.getElementById("correct-incorrect-5").style.color = "red";
        document.getElementById("q-5").style.borderBlockColor = "red";
        document.getElementById("correct-incorrect-5").innerHTML = `
        Incorrect
        `; 
    }

    if (q6 == "dewgong") {
        document.getElementById("correct-incorrect-6").style.color = "green";
        document.getElementById("q-6").style.borderBlockColor = "green";
        document.getElementById("correct-incorrect-6").innerHTML = `
        CORRECT!
        `;
        score++;
    } else {
        document.getElementById("correct-incorrect-6").style.color = "red";
        document.getElementById("q-6").style.borderBlockColor = "red";
        document.getElementById("correct-incorrect-6").innerHTML = `
        Incorrect
        `;
    }

    if (q7 == "kabutops") {
        document.getElementById("correct-incorrect-7").style.color = "green";
        document.getElementById("q-7").style.borderBlockColor = "green";
        document.getElementById("correct-incorrect-7").innerHTML = `
        CORRECT!
        `;
        score++;
    } else {
        document.getElementById("correct-incorrect-7").style.color = "red";
        document.getElementById("q-7").style.borderBlockColor = "red";
        document.getElementById("correct-incorrect-7").innerHTML = `
        Incorrect
        ` ;
    }

    if (q8 == "poliwhirl") {
        document.getElementById("correct-incorrect-8").style.color = "green";
        document.getElementById("q-8").style.borderBlockColor = "green";
        document.getElementById("correct-incorrect-8").innerHTML = `
        CORRECT!
        `;
        score++;
    } else {
        document.getElementById("correct-incorrect-8").style.color = "red";
        document.getElementById("q-8").style.borderBlockColor = "red";
        document.getElementById("correct-incorrect-8").innerHTML = `
        Incorrect
        `; 
    }

    if (q9 == "water" || q9 == "ice" || q9 == "grass") {
        document.getElementById("correct-incorrect-9").style.color = "green";
        document.getElementById("q-9").style.borderBlockColor = "green";
        document.getElementById("correct-incorrect-9").innerHTML = `
        CORRECT!
        `;
        score++;
    } else {
        document.getElementById("correct-incorrect-9").style.color = "red";
        document.getElementById("q-9").style.borderBlockColor = "red";
        document.getElementById("correct-incorrect-9").innerHTML = `
        Incorrect
        `; 
    }

    if (score == 0) {
        document.getElementById("results").innerHTML = `
        You haven't heard of Pokemon before, right? (0/9, 0%)
        `
    } else if (score == 1) {
         document.getElementById("results").innerHTML = `
        At least you got one! (1/9, 11%)
        `
    } else if (score == 2) {
        document.getElementById("results").innerHTML = `
       I think you can do better! (2/9, 22%)
       `
    } else if (score == 3) {
        document.getElementById("results").innerHTML = `
       Not bad. (3/9, 33%)
       `
    } else if (score == 4) {
        document.getElementById("results").innerHTML = `
       Pretty good. (4/9, 44%)
       `
    } else if (score == 5) {
        document.getElementById("results").innerHTML = `
       Nice! (5/9, 56%)
       `
    } else if (score == 6) {
        document.getElementById("results").innerHTML = `
       Hey! great job. (6/9, 67%)
       `
    } else if (score == 7) {
        document.getElementById("results").innerHTML = `
       Wow! (7/9, 78%)
       `
    } else if (score == 8) {
        document.getElementById("results").innerHTML = `
       So Close :( (8/9, 89%)
       `
    } else {
        document.getElementById("results").innerHTML = `
       Gen 1 master! (9/9, 100%)
       `
    }
}