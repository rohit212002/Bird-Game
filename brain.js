
let btn = document.getElementById("btn");

let instruction = document.getElementById("instruction");


let cntMoves = 0;

let flag = true;


btn.addEventListener("click", () => {




    let bird1 = document.getElementById("bird1");
    let dash1 = document.getElementById("dash1");

    let b1 = bird1.value;
    let d1 = dash1.value;


    b1 = (parseInt(b1));
    d1 = (parseInt(d1));


    if (checking1(b1)) {

        instruction.innerText = ("Your choosen bird is not at last position of its row ");

        return;
    }

    if (checking2(d1)) {

        instruction.innerText = ("Your choosen dash is'nt the last dash in that row ");

        return;
    }

    // console.log(b1, d1);


    if ((b1 + 1 == d1) && (b1 == 2 || b1 == 5 || b1 == 8 || b1 == 11)) {
        instruction.innerText = ("You cant't place bird after dash ");
        return;
    }
    if ((b1 + 2 == d1) && (b1 == 1 || b1 == 4 || b1 == 7 || b1 == 10)) {
        instruction.innerText = ("You cant't place bird after dash ");
        return;
    }

    // console.log(bird1.value)
    // console.log(dash1.value)

    if (b1 > 12 || d1 > 12 || b1 < 1 || d1 < 1) {
        instruction.innerText = ("Please choose correct indices ");
    }


    let to_swap_bird = document.getElementById(b1);
    let to_swap_dash = document.getElementById(d1);

    // console.log(to_swap_dash);

    // console.log(to_swap_dash.getAttribute("class"));


    if (to_swap_dash.getAttribute("class") != "dashes") {
        instruction.innerText = ("Your choosen destination is not a dash");
        return;
    }

    let class_swap_bird = to_swap_bird.getAttribute("class");
    let class_swap_dash = to_swap_dash.getAttribute("class");

    to_swap_bird.setAttribute("class", class_swap_dash);
    to_swap_dash.setAttribute("class", class_swap_bird);

    let temp = to_swap_bird.innerHTML;
    to_swap_bird.innerHTML = to_swap_dash.innerHTML;
    to_swap_dash.innerHTML = temp;



    cntMoves++;
    document.getElementById("moves_of_1").innerText = cntMoves;
    instruction.innerText = ("");

    flag = false;

    didWon();



})

let rewindBtn = document.getElementById("rewinding");
rewindBtn.addEventListener("click", () => {
    // console.log('rewind');

    if (flag == true) {
        return;
    }
    flag = true;
    let bird1 = document.getElementById("bird1");
    let dash1 = document.getElementById("dash1");

    let d1 = bird1.value;
    let b1 = dash1.value;


    let to_swap_bird = document.getElementById(b1);
    let to_swap_dash = document.getElementById(d1);

    let class_swap_bird = to_swap_bird.getAttribute("class");
    let class_swap_dash = to_swap_dash.getAttribute("class");

    to_swap_bird.setAttribute("class", class_swap_dash);
    to_swap_dash.setAttribute("class", class_swap_bird);

    let temp = to_swap_bird.innerHTML;
    to_swap_bird.innerHTML = to_swap_dash.innerHTML;
    to_swap_dash.innerHTML = temp;



    cntMoves--;
    console.log(cntMoves);

    document.getElementById("moves_of_1").innerText = cntMoves;

})

function checking1(b1) {


    // row 1
    let im1 = document.getElementById("1");
    let im2 = document.getElementById("2");
    let im3 = document.getElementById("3");

    // row 2
    let im4 = document.getElementById("4");
    let im5 = document.getElementById("5");
    let im6 = document.getElementById("6");

    // row3 
    let im7 = document.getElementById("7");
    let im8 = document.getElementById("8");
    let im9 = document.getElementById("9");

    // row 4
    let im10 = document.getElementById("10");
    let im11 = document.getElementById("11");
    let im12 = document.getElementById("12");


    // console.log(im2.getAttribute("class"));


    if (b1 == 1 && (im2.getAttribute("class") == "birds" || im3.getAttribute("class") == "birds")) {
        return true;
    }
    if (b1 == 2 && im3.getAttribute("class") == "birds") {
        return true;
    }

    if (b1 == 4 && (im5.getAttribute("class") == "birds" || im6.getAttribute("class") == "birds")) {
        return true;
    }
    if (b1 == 5 && im6.getAttribute("class") == "birds") {
        return true;
    }

    if (b1 == 7 && (im8.getAttribute("class") == "birds" || im9.getAttribute("class") == "birds")) {
        return true;
    }
    if (b1 == 8 && im9.getAttribute("class") == "birds") {
        return true;
    }

    if (b1 == 10 && (im11.getAttribute("class") == "birds" || im12.getAttribute("class") == "birds")) {
        return true;
    }
    if (b1 == 11 && im12.getAttribute("class") == "birds") {
        return true;
    }


}
function checking2(d1) {


    // row 1
    let im1 = document.getElementById("1");
    let im2 = document.getElementById("2");
    let im3 = document.getElementById("3");

    // row 2
    let im4 = document.getElementById("4");
    let im5 = document.getElementById("5");
    let im6 = document.getElementById("6");

    // row3 
    let im7 = document.getElementById("7");
    let im8 = document.getElementById("8");
    let im9 = document.getElementById("9");

    // row 4
    let im10 = document.getElementById("10");
    let im11 = document.getElementById("11");
    let im12 = document.getElementById("12");


    // console.log(im2.getAttribute("class"));


    if (d1 == 2 && im1.getAttribute("class") == "dashes") {
        return true;
    }
    if (d1 == 3 && im2.getAttribute("class") == "dashes") {
        return true;
    }

    if (d1 == 5 && im4.getAttribute("class") == "dashes") {
        return true;
    }
    if (d1 == 6 && im5.getAttribute("class") == "dashes") {
        return true;
    }

    if (d1 == 8 && im7.getAttribute("class") == "dashes") {
        return true;
    }
    if (d1 == 9 && im8.getAttribute("class") == "dashes") {
        return true;
    }

    if (d1 == 11 && im10.getAttribute("class") == "dashes") {
        return true;
    }
    if (d1 == 12 && im11.getAttribute("class") == "dashes") {
        return true;
    }


}













